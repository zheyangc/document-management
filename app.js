require('./config/connectDB');

const express = require('express');
const path = require('path');

const documentRouter = require('./routes/documents');

const app = express();
const port = 3001;

app.use('/documents', documentRouter);

app.listen(port)
