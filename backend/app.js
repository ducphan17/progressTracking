const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://dp17:admin@cluster0.ec2bzjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((e) => {
    console.log(e);
  });
require("./UserDetails");

// it will fetch all the details available inside this UserInfo collection in our MongoDB
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

app.post(`/register)`, async (req, res) => {
  const { name, email, mobile, password } = req.body;
  // email:email left email refers to the schema while right refers to the request body
  // User.findOne will find that user in our User collection with email
  const oldUser = await User.findOne({ email: email });

  if (oldUser) {
    return res.send({ data: "User already exists!" });
  }

  // create user
  try {
    await User.create({
      name: name,
      email: email,
      mobile,

      password,
    });
    // send response after user is created
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    // otherwise
    res.send({ status: "error", data: error });
  }
});

app.listen(5001, () => {
  console.log("Node js server started.");
});
