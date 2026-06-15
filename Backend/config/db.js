const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Error Full:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;