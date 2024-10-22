// module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   return (
//     mongoose
//       .connect(
//         "mongodb+srv://yashwanth2601:4DlS6TSCFHENwJcn@contact.dfi5h.mongodb.net/?retryWrites=true&w=majority&appName=contact"
//       )
//       // .connect(process.env.MONGODB_URI)
//       .then(() => console.log(`connection to database established...`))
//       .catch((err) => console.log(err))
//   );
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB}`;

  return mongoose
    .connect(MONGO_URI)
    .then(() => console.log(`Connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
