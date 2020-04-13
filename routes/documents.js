var express = require("express");
var router = express.Router();
var Document = require("../models/document");

// Display all the documents
router.get("/", async function (req, res) {
  var query = req.query;
  try {
    let documents = await Document.find(query, "-__v").sort({
      createTime: -1,
      documentNumber: -1,
    });
    res.send({ documents });
  } catch (err) {
    res.send({
      msg: "failed to get documents",
      err: err,
    });
  }
});

// Display all the documents
router.delete("/", async function (req, res) {
  let documentsToDelete = req.body;
  try {
    let idsToDelete = documentsToDelete.map(doc => doc._id);
    let documents = await Document.deleteMany({
      _id: { $in: idsToDelete}
    });
    res.send({ documents });
  } catch (err) {
    res.send({
      msg: "failed to delete documents",
      err: err,
    });
  }
});

// Persist Documents
// parameters: documentType, userName, count
router.post("/", async function (req, res) {
  let { count, userName, documentType } = req.body;
  let lastDocument;

  try {
    lastDocument = await Document.findOne({ documentType: documentType })
      .sort({ documentNumber: -1 })
      .exec();
  } catch (err) {
    res.send({
      msg: "failed to get document count",
      err: err,
    });
    return;
  }

  let newDocuments = [];
  let existingCount = lastDocument ? lastDocument.documentNumber : 0;
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
        err: err,
      });
    });
});

module.exports = router;
