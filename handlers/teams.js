const teamModel = require("../model/teams");

const getTeam = (req, res) => {
  const id = req.params.id;
  teamModel
    .getTeam(id)
    .then((results) => {
      if (!results) {
        res.send({ status: "getTeamNotExists" });
      } else {
        const data = JSON.parse(results);
        res.status(200).send(data);
      }
    })
    .catch((error) => {
      res.send({ status: "getTeamFail", message: error.message });
    });
};

const updateTeam = (req, res) => {
  const data = req.body;
  console.log("data.team : " + data.team);
  teamModel
    .updateTeam(data.id, data.team)
    .then(() => res.status(200).send({ status: "updateTeamSuccess" }))
    .catch((error) => {
      res.send({ status: "updateTeamFail", message: error.message });
    });
};

module.exports = {
  getTeam,
  updateTeam,
};
