/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alumni",
});

// Middleware
app.use(cors());
app.use(express.json());

// Register Post API
app.post("/register", (req, res) => {
  const { first_name, last_name, email, password, batch, status } = req.body;
  const userData = { first_name, last_name, email, password, batch, status };

  connection.query(
    "INSERT INTO users SET ?",
    userData,
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "Failed to register user" });
      } else {
        res.status(201).json({
          message: "User registered successfully",
          userId: results.insertId,
        });
      }
    }
  );
});

// Get API for all the Users
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
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

  connection.query(
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
  const {
    job_title,
    company_name,
    location,
    job_type,
    salary,
    job_description,
  } = req.body;
  const jobData = {
    job_title,
    company_name,
    location,
    job_type,
    salary,
    job_description,
  };

  connection.query("INSERT INTO jobs SET ?", jobData, (error, results) => {
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

// GET API to fetch all jobs
app.get("/jobs", (req, res) => {
  connection.query("SELECT * FROM jobs", (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    } else {
      res.status(200).json(results);
    }
  });
});

// GET API for a single job by ID
app.get("/jobs/:id", (req, res) => {
  const jobId = req.params.id;

  connection.query(
    "SELECT * FROM jobs WHERE job_id = ?",
    [jobId],
    (error, results) => {
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
    }
  );
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/cv");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("cv"), (req, res) => {
  const cv = req.file.filename;
  const sql = "INSERT INTO uploadscv (cv) VALUES (?)";

  connection.query(sql, [cv], (err) => {
    if (err) {
      console.error("Error inserting upload:", err);
      return res.status(500).json({ message: "Error inserting upload" });
    }
    return res.json({ status: "Success" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Databse for Users

// CREATE TABLE users (
//   user_id INT AUTO_INCREMENT PRIMARY KEY,
//   first_name VARCHAR(255) NOT NULL,
//   last_name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   batch VARCHAR(255),
//   status VARCHAR(255)
// );

// Database for Jobs

// CREATE TABLE jobs (
//   job_id INT AUTO_INCREMENT PRIMARY KEY,
//   job_title VARCHAR(255) NOT NULL,
//   company_name VARCHAR(255) NOT NULL,
//   location VARCHAR(255),
//   job_type VARCHAR(255),
//   salary DECIMAL(10, 2),
//   job_description TEXT
// );

// Database for CV

// CREATE TABLE uploadscv (
//   cv_id INT AUTO_INCREMENT PRIMARY KEY,
//   cv VARCHAR(255) NOT NULL
// );


