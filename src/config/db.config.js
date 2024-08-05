// require("dotenv").config();
const mongoose = require("mongoose");

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DB_HOST,
  MONGODB_LOCAL_PORT,
  MONGODB_DATABASE,
} = process.env;

const mongoConnection = async () => {

  // let url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_DB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}?authSource=admin`;

  // const connection1 = await mongoose.connect(url, {
  //   useNewUrlParser: true,
  // });

  // mongoose.connection.on('error', err => {
  //   console.log('error', err)
  // });

  // return connection1;

};

module.exports = mongoConnection;