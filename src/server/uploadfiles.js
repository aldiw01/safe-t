const express = require('express');
var app = express();
var upload = require('express-fileupload');
var db = require('./database.js');

app.use(upload());

module.exports = {

    sendFile:function(req,res,docPath,username,id){
      if(req){
        var file = req,
          name = "["+username+"] "+file.name,
          type = file.mimetype;
        var uploadpath = __dirname + '/uploads/'+docPath+'/'+ name;
        file.mv(uploadpath,function(err){
          if(err){
            console.log("File Upload Failed",name,err);
            console.log(uploadpath);
            //res.send("Error Occured!")
          }
          else {
            console.log("File Uploaded",name);
            console.log(uploadpath);
            //res.send('Done! Uploading files')
          }
        });
        db.dirFileAlihkelola(username,docPath,name,id);
      }
      else {
        //res.send("No File selected !");
       // res.end();
      };


    }
    

}