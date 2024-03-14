require("./configs/logger.config");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const Database = require("./database/dbConnection");
const ErrorMiddleware = require("./middlewares/error.middleware");
const {
  NODE_COOKIE_SIGNED_KEY,
  NODE_API_VERSION,
} = require("./configs/server.config");
const { TestRouter, UserRouter } = require("./routes/index.routes");

// EXPRESS SERVER APP INTITIALIZATION
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(NODE_COOKIE_SIGNED_KEY));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// INITIALIZING DATABASE CONNECTION
const database = new Database();
database.connectDB();

// INITIALIZING ROUTES
app.use(`/api/${NODE_API_VERSION}`, TestRouter);
app.use(`/api/${NODE_API_VERSION}/user`, UserRouter);

// INITIALIZING ERROR MIDDLEWARE
const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.errorMiddleware);

module.exports = app;
