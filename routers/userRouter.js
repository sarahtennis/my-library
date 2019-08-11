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

// GET /api/users/:id
// returns user with given id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db("users")
    .where({ id })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(501).json(err);
    });
});

// POST /api/users
// create new user in users table
router.post("/", (req, res) => {
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

// PUT /api/users/:id
// updates user information
router.put("/:id", (req, res) => {
  const user = req.body;
  const id = req.params.id;

  db("users")
    .where({ id })
    .update(user)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE /api/users/:id
// deletes user with given id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db("users")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
