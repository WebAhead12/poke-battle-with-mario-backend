const db = require("../database/connection");

const getTeam = (id) => {
  return db.query("SELECT * FROM team WHERE userid = $1", [id]).then((rows) => {
    return JSON.stringify(rows.rows[0]);
  });
};

const createTeam = (id, team) => {
  return db.query("INSERT INTO team (userid,team) VALUES ($1,$2)", [
    id,
    JSON.stringify(team),
  ]);
};

const updateTeam = (id, team) => {
  return db.query("UPDATE team SET team=$1 WHERE userid=$2", [
    JSON.stringify(team),
    id,
  ]);
};

module.exports = {
  getTeam,
  createTeam,
  updateTeam,
};
