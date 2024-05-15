/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

connection.connect((err) => {
  if (err);
  console.log("Connected to MySQL database");
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Register Post API

app.post("/register", (req, res) => {
  const { first_name, last_name, email, password, batch, status } = req.body;
  const userData = { first_name, last_name, email, password, batch, status };

  connection.query("INSERT INTO users SET ?", userData, (error, results) => {
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
