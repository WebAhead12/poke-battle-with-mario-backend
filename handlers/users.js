const model = require("../model/users");

const getAllUsers = (req, res) => {
  model.getAllUsers().then((data) => res.send(data));
};

const createUser = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

module.exports = { getAllUsers, createUser };
