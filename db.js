const mongoose = require("mongoose");
const { mongoDBURL } = require("./settings.js");

const connect = async () => {
  try {
    await mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connect };
