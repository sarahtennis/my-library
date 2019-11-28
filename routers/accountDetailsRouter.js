const express = require("express");
const db = require("../db/config.js");
const router = express.Router();

//-------------ACCOUNT DETAILS ENDPOINTS-------------------
// GET /api/accountDetails/:id
// returns account details for user with given id
router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  db("account_details")
    .where({ user_id })
    .then(details => {
      res.status(200).json(details);
    })
    .catch(err => {
      res.status(501).json(err);
    });
});

// POST /api/accountDetails
// create new account details
router.post("/", (req, res) => {
  const details = req.body;

  db("account_details")
    .insert(details)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Error inserting account details", err });
    });
});

// PUT /api/accountDetails/:id
// updates user account details
router.put("/:id", (req, res) => {
  const details = req.body;
  const user_id = req.params.id;

  db("account_details")
    .where({ user_id })
    .update(details)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
s