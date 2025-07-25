const jwt = require("jsonwebtoken");
const User = require("../model/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies; // extract the token from cookie
    if (!token) {
      throw new Error("Token is not valid !!!");
    }
    //Validate the token
    const decodedData = await jwt.verify(token, "DevTinder@123");

    const { _id } = decodedData;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found !");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
};

module.exports = { userAuth };
