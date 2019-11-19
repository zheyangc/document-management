var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", function (error) {  
  console.log("failed to connect to database" + error); 
}); 

db.once("open", function () {  
  console.log("successful connected to database");
});