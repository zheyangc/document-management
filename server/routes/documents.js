var express = require('express');
var router = express.Router();
var Document = require('../models/document');

// Display all the documents
router.get('/', function(req, res){
  var query = req.query;
  Document.find(query, "-_id -__v")
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
      res.send({ count: count });
    });
});

// Persist Documents
// parameters: documentType, userName, count
router.post('/', function (req, res) {
  var { count, userName, documentType } = req.body;
  var newDocuments = [];

  Document.count({ documentType: documentType })
    .catch((err) => {
      res.send({
        msg: "failed to get document count",
        err: err
      });
    })
    .then((existingCount) => {
      for (var c = 1; c <= count; c++) {
        newDocuments.push({
          documentType: documentType,
          documentNumber: existingCount + c,
          userName: userName,
        });
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
});

module.exports = router;
