const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB is Connected: ${conn.connection.host}`.white.bgRed);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
