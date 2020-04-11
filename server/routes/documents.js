var express = require('express');
var router = express.Router();
var Document = require('../models/document');

// Display all the documents
router.get('/', function(req, res){
  var query = req.query;
  Document.find(query, "-_id -__v")
    .sort({createTime: -1})
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
