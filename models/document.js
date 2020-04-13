var mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  documentType: String, 
  documentNumber: Number,
  userName: String,
  createTime: { type: Date, default: Date.now }
});

const documentModel = mongoose.model('Document', documentSchema);
module.exports = documentModel;