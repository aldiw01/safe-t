const express = require('express');
var app = express();
var db = require('./database.js');
const multer = require('multer');

const storageVehicle = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads/vehicle/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname);
  }
})

const storageTicket = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads/ticket/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname);
  }
})

function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb({ message: 'Only for image (jpg/jpeg/png).' }, false);
  }
};

module.exports = {
  sendFile: function (req, res) {
    var upload = multer({
      storage: storageVehicle,
      limits: {
        fileSize: 1024 * 1024
      },
      fileFilter: fileFilter
    }).single('fileImage');
    console.log("HERE");
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.send(err);
        console.log("HERE2");
        return
      } else if (err) {
        // An unknown error occurred when uploading.
        res.send(err);
        console.log("HERE2");
        return
      } else if (req.file == undefined) {
        res.send('index', { message: 'No file selected!' })
        console.log("HERE2");
        return
      }
      // Everything went fine.
      console.log('Upload success.');
    })
  }
}