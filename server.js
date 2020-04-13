require("./config/connectDB");

const express = require("express");
const path = require("path");
const logger = require("morgan");
const documentRouter = require("./routes/documents");

const server = express();

server.use(logger("dev"));
server.use(express.json());
server.use("/documents", documentRouter);

const port = 3001;
server.listen(port);
