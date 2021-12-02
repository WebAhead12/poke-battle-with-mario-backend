const verifyToken = (req, res, next) => {
  const bearerHead = req.headers["authorization"];
  if (bearerHead) {
    req.token = bearerHead.split(" ")[1];
    next();
  } else {
    //   Fordidden response since no token
    res.status(403).send({ error: "no token, no access" });
  }
};

module.exports = { verifyToken };
