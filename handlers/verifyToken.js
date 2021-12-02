const verifyToken = (req, res, next) => {
  const bearer = req.headers["authorization"];
  if (bearer) {
    req.token = bearer.split(" ")[1];
    next();
  } else {
    //   Fordidden response since no token
    res.status(403).send({ error: "No access" });
  }
};

module.exports = { verifyToken };
