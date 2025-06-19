const isAuth = (req, res, next) => {
  console.log("Handling admin data");
  const token = "xyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("Unauthorised admin");
  } else {
    next();
  }
};

const isUser = (req, res, next) => {
  console.log("Handling admin data");
  const token = "qyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("Unauthorised User");
  } else {
    next();
  }
};

module.exports = { isAuth, isUser };
