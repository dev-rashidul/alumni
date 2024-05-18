/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3000;

// MySQL Connections
const usersConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

const jobsConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jobs",
});

// Connect to users database
usersConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to users database:', err.stack);
    return;
  }
  console.log('Connected to "users" database');
});

// Connect to jobs database
jobsConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to jobs database:', err.stack);
    return;
  }
  console.log('Connected to "jobs" database');
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Register Post API
app.post("/register", (req, res) => {
  const { first_name, last_name, email, password, batch, status } = req.body;
  const userData = { first_name, last_name, email, password, batch, status };

  usersConnection.query("INSERT INTO users SET ?", userData, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to register user" });
    } else {
      res.status(201).json({
        message: "User registered successfully",
        userId: results.insertId,
      });
    }
  });
});

// Get API for all the Users
app.get("/users", (req, res) => {
  usersConnection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Login Post API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  usersConnection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "Failed to login" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ message: "User not found" });
        } else {
          const user = results[0];
          if (user.password === password) {
            res.status(200).json({ message: "Login successful", user });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        }
      }
    }
  );
});

// POST API for job post
app.post("/jobs", (req, res) => {
  const { job_title, company_name, location, job_type, salary, job_description } = req.body;
  const jobData = { job_title, company_name, location, job_type, salary, job_description };

  jobsConnection.query("INSERT INTO jobs SET ?", jobData, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to post job" });
    } else {
      res.status(201).json({
        message: "Job posted successfully",
        jobId: results.insertId,
      });
    }
  });
});


// Get API for a single job by ID
app.get("/jobs/:id", (req, res) => {
  const jobId = req.params.id;

  jobsConnection.query("SELECT * FROM jobs WHERE id = ?", [jobId], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to fetch job" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: "Job not found" });
      } else {
        const job = results[0];
        res.status(200).json(job);
      }
    }
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
