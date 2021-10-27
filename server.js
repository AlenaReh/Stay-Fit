const express = require("express");
const mongoose = require("mongoose");
// require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
const routes = require('./controllers');
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stayFitDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});