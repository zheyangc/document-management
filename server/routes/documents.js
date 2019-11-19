var express = require('express');
var router = express.Router();
var Document = require('../models/document');

// Display all the documents
router.get('/', function (req, res) {
  res.send('get documents');
});


// Display all the documents
router.get('/user/:userName', function (req, res) {
  Document.find({ userName: req.params.userName }, "-_id -__v")
    .catch((err) => {
      res.send({
        msg: "failed to get documents",
        err: err
      });
    })
    .then((documents) => {
      res.send({ documents });
    });
});

// Get all the documents given type 
router.get('/type/:documentType', function (req, res) {
  Document.find({ documentType: req.params.documentType }, "-_id -__v")
    .catch((err) => {
      res.send({
        msg: "failed to create document number",
        err: err
      });
    })
    .then((documents) => {
      res.send({ documents });
    });
});

// Get document type count 
router.get('/type/:documentType/count', function (req, res) {
  var documentType = req.params.documentType;
  Document.count({ documentType: documentType })
    .catch((err) => {
      res.send({
        msg: "failed to create document number",
        err: err
      });
    })
    .then((count) => {
      res.send({count: count});
    });
});

// Persist Documents
// parameters: documentType, userName, [documentNumbers], count
router.post('/', function (req, res) {

  var { count, documentNumbers, userName, documentType } = req.body;

  // verify documentNumbers are consecutive and non-duplicated
  
  

  var newDocuments = [];
  console.log("count", documentTypeCount);
  for (documentNumber in documentNumbers) {
    newDocuments.push({
      documentType: documentType,
      documentNumber: documentNumber,
      userName: userName,
    })
  }

  Document.insertMany(newDocuments)
    .then((documents) => res.send(documents))
    .catch((err) => {
      res.send({
        msg: "failed to create document number",
        err: err
      });
    });

});

module.exports = router;
