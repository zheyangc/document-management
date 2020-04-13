var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/document-db", {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on("error", function (error) {  
  console.log("failed to connect to database" + error); 
}); 

db.once("open", function () {  
  console.log("successful connected to database");
});