const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

exports.connectDB = () => {
  mongoose
    .connect(DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('DATABASE CONNECTED 🔥'))
    .catch(err => console.log(err));
};
