const express = require("express");
const mongoose = require("mongoose");
// require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
const routes = require('./controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stayFitDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});