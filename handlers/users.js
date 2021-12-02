const usersModel = require("../model/users");
const teamModel = require("../model/teams");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const SECRET = process.env.SECRET;

const createUser = (req, res) => {
  const user = req.body;
  usersModel
    .getUser(user)
    .then((result) => {
      if (result) {
        res.send({ status: "createUserTaken" });
      } else {
        bcrypt
          .genSalt(10)
          .then((salt) => bcrypt.hash(user.password, salt))
          .then((hash) => {
            usersModel
              .createUser({ ...user, password: hash })
              .then(() => {
                usersModel.getUserId(user).then((id) => {
                  teamModel.createTeam(JSON.parse(id).id, {});
                });
                res.send({ status: "createUserSuccess" });
              })
              .catch((error) => {
                res.send({ status: "createUserFail", message: error.message });
              });
          });
      }
    })
    .catch((error) => {
      res.send({ status: "getUserFail", message: error.message });
    });
};

const checkUser = (req, res) => {
  const user = req.body;
  const password = user.password;

  usersModel
    .getUser(user)
    .then((result) => {
      if (!result) {
        res.send({ status: "checkUserNotExist" });
      } else {
        const account = JSON.parse(result);
        bcrypt.compare(password, account.password).then((match) => {
          if (!match) {
            res.send({ status: "checkUserIncorrect" });
          } else {
            const token = jwt.sign({ user: account.id }, SECRET, {
              expiresIn: "1h",
            });
            res.status(200).send({ access_token: token });
          }
        });
      }
    })
    .catch((error) => {
      res.send({
        status: "checkUserFail",
        message: error.message,
      });
    });
};

const userInfo = (req, res) => {
  const token = req.token;
  const id = jwt.verify(token, SECRET).user;
  usersModel
    .getUserById(id)
    .then((data) => {
      if (!data) {
        res.send({ status: "userInfoNotExist" });
      } else {
        res.send(data);
      }
    })
    .catch((error) =>
      res.status(404).send({ status: "userInfo404", message: error.message })
    );
};

module.exports = { checkUser, createUser, userInfo };
