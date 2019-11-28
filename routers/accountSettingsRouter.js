const express = require("express");
const db = require("../db/config.js");
const router = express.Router();

//-------------ACCOUNT SETTINGS ENDPOINTS-------------------
// GET /api/accountSettings/:id
// returns account settings for user with given id
router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  db("account_settings")
    .where({ user_id })
    .then(settings => {
      res.status(200).json(settings);
    })
    .catch(err => {
      res.status(501).json(err);
    });
});

// POST /api/accountSettings
// create new account settings in account_settings table
router.post("/", (req, res) => {
  const settings = req.body;

  db("account_settings")
    .insert(settings)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Error inserting account settings", err });
    });
});

// PUT /api/accountSettings/:id
// updates user account settings
router.put("/:id", (req, res) => {
  const settings = req.body;
  const user_id = req.params.id;

  db("account_settings")
    .where({ user_id })
    .update(settings)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
