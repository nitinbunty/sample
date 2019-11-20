const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+"/front.html"));
    app.use("/ff.css", express.static(__dirname + "/ff.css"));
    app.use("/bg.jpg", express.static(__dirname + "/bg.jpg"));

});

app.listen(3000, function() {
  console.log(`Server running at localserver/${port}/`);
});


