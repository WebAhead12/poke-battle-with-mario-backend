const db = require("../database/connection");

const getUser = (user) => {
  return db
    .query("SELECT * FROM users WHERE username=$1", [user.username])
    .then((rows) => {
      return JSON.stringify(rows.rows[0]);
    });
};

const getUserId = (user) => {
  return db
    .query("SELECT id FROM users WHERE username=$1", [user.username])
    .then((rows) => {
      return JSON.stringify(rows.rows[0]);
    });
};

const createUser = (user) => {
  return db.query("INSERT INTO users (username,password) VALUES($1,$2)", [
    user.username,
    user.password,
  ]);
};

const getUserById = (id) => {
  return db.query("SELECT * FROM users WHERE id=$1", [id]).then((rows) => {
    return rows.rows;
  });
};

module.exports = {
  getUser,
  getUserId,
  createUser,
  getUserById,
};
