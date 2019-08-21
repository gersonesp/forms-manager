const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

// import routes
const userRoutes = require("./routes/users");

// initilization
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use("/api/users", userRoutes);

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
