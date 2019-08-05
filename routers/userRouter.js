const express = require("express");

const db = require("../db/config.js");

const router = express.Router();

//-------------USER ENDPOINTS-------------------
// GET /api/users
// returns all users in users table
router.get("/", (req, res) => {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(501).json(err);
    });
});

// POST /api/users
// create new user in users table
router.post("/new", (req, res) => {
  const user = req.body;

  db("users")
    .insert(user)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Error inserting user", err });
    });
});

module.exports = router;
