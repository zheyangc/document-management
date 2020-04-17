require("./config/connectDB");

const express = require("express");
const path = require("path");
const logger = require("morgan");
const documentRouter = require("./routes/documents");

const server = express();

server.use(logger("dev"));
server.use(express.json({limit: '50mb'}));
server.use("/documents", documentRouter);

server.use(express.static(path.join(__dirname, "./client/build")));
server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

const port = 5000;
server.listen(port);
