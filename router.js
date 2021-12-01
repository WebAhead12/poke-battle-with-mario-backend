const express = require("express");
const router = express.Router();
const userHandler = require("./handlers/users.js");

router.post("/createUser", userHandler.createUser);

module.exports = router;
