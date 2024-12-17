const mongoose = require('mongoose');
require('dotenv').config();
const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUri);

    if (connection) {
      console.log('Connected to database');
    }
  } catch (error) {
    console.log(error);
  }
};

// const initializeDatabase = async () => {
//     await mongoose
//       .connect(mongoUri)
//       .then(() => console.log("Connected to database."))
//       .catch((error) => console.log("Error connecting to database.", error));
//   };

module.exports = { initializeDatabase };
