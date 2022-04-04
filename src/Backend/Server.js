//const { authToken } = require("../Backend/authToken");
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const authToken = require("./authToken");

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//config to send files to browser
app.use(express.static(path.join(__dirname, "../../build")));
app.use("/static", express.static(path.join(__dirname, "build//static")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connecting application with mongodb
const myConnectionString =
  "mongodb+srv://admin:Yassine12@cluster0.fj0zk.mongodb.net/crypto?retryWrites=true&w=majority";

//connectin with mongoose
mongoose.connect(myConnectionString);

//create a new database schema
const Schema = mongoose.Schema;

//generated schema
var cryptoSchema = new Schema({
  title: String,
  quantity: String,
  poster: String,
  email: String,
});

//generated schema
var loginRegSchema = new Schema({
  firstName: String,
  surname: String,
  email: String,
  password: String,
});

//use the schema to create a new "crypto" and LoginRegister database model.
var CryptoModel = mongoose.model("Crypto", cryptoSchema);
var LoginRegModel = mongoose.model("users", loginRegSchema);

//route point
app.get("/api/crypto", (req, res) => {
  //callback function
  CryptoModel.find((err, data) => {
    res.json(data);
  });
});

//listens for put request to edit cryptos
app.put("/api/crypto/:id", (req, res) => {
  console.log("Updating Crypto: " + req.params.id);

  //interact with database find and update field
  CryptoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});

//method to delete data// listens for http delete method
app.delete("/api/crypto/:id", (req, res) => {
  console.log("Delete Crypto: " + req.params.id);

  CryptoModel.findByIdAndDelete(req.params.id, (err, data) => {
    res.send(data);
  });
});

//listen for get request
app.get("/api/crypto/:id", (req, res) => {
  //function passes id
  console.log(req.params.id);

  //use id to find in database
  CryptoModel.findById(req.params.id, (err, data) => {
    //send data back
    res.json(data);
  });
});

//listen for post request
app.post("/api/crypto", (req, res) => {
  //log console
  console.log("Crypto Recieved!");
  console.log(req.body.title);
  console.log(req.body.quantity);
  console.log(req.body.poster);
  console.log(req.body.email);

  CryptoModel.create({
    title: req.body.title,
    quantity: req.body.quantity,
    poster: req.body.poster,
    email: req.body.email,
  });

  //stop duplicaiton
  res.send("Item Already Added");
});

// post request to register new user
app.post("/register", (req, res) => {
  //checking the database
  LoginRegModel.findOne({ email: req.body.email }, (err, data) => {
    // If email is already in the database then the user already exists
    if (data) {
      res.send("User exists");
      console.log("User exists");
    } else {
      // If no similar email exists in database allow new user creation
      LoginRegModel.create({
        firstName: req.body.firstName,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
      });

      // prevents duplicate creation
      res.send("User Added");
      console.log("User Created successful");
    }
  });
});

// post request to login existing user
app.post("/login", (req, res) => {
  // Find the email in the database
  LoginRegModel.findOne({ email: req.body.loginEmail }, (err, data) => {
    // If email is found in the database
    if (data) {
      // If passwords match then:
      if (req.body.loginPassword === data.password) {
        // Generate token - send to the user
        res.json({
          firstName: loginRegSchema.firstName,
          token: authToken(loginRegSchema.email),
        });
        console.log("Successfully LoggedIn");
      } else {
        // Otherwise the user is not logged in
        res.send({ message: "Wrong credentials try again" });
        console.log("Unsucessful login");
      }
    } else {
      // If the email is not found in the database then the user is not registered
      res.send("Not registered");
      console.log("Unregistered");
    }
  });
});

//joins paths when file sends// sends front end
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
