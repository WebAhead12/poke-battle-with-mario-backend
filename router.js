const express = require("express");
const router = express.Router();
const userHandler = require("./handlers/users.js");
const teamsHandler = require("./handlers/teams.js");
const verifyToken = require("./handlers/verifyToken.js");

router.post("/createUser", userHandler.createUser);
router.post("/checkUser", userHandler.checkUser);

router.get("/team/:id", teamsHandler.getTeam);
router.post("/team/update", teamsHandler.updateTeam);

router.get("/user", verifyToken.verifyToken, userHandler.userInfo);

module.exports = router;
