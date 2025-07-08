const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://himanshu:gujjar07@namastenode.yhp2ikw.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
