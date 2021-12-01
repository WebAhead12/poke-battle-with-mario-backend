const db = require("../database/connection");

const getAllUsers = () => {
  return db.query("SELECT * FROM users").then((rows) => {
    if (!rows.rows.length) throw new Error("Couldnt get users");
    return rows.rows[0];
  });
};

const createUser = (user) => {
  return db
    .query("INSERT INTO users (username,password,team) VALUES($1,$2,$3)", [
      user.username,
      user.password,
      user.team,
    ])
    .then((rows) => {
      if (!rows.rows.length) throw new Error("Couldnt create user");
      return rows.rows[0];
    });
};

module.exports = {
  getAllUsers,
};
