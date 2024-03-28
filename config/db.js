const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_DB_URI = process.env.MONGO_DB_URI

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
