const mongoose = require("mongoose");
const User = require("./models/User");
const fs = require("fs");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const insertUsers = async () => {
  try {
    const users = JSON.parse(fs.readFileSync("UsersData.json", "utf-8"));
    await User.insertMany(users);
    console.log("Users inserted successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
};

insertUsers();
