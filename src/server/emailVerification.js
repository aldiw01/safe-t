"use strict";
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// async..await is not allowed in global scope, must use a wrapper
module.exports = {
  sendMail:function(target,token,subject,page){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true, // use TLS
    auth: {
      user: "portaldsa@gmail.com",
      pass: "telkomdac123"
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Telkom DSA" <portaldsa@gmail.com>', // sender address
    to: target, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
    html: "Hello, Please Click Link Below to Verify your Email <br/>http://localhost:3000/"+page+"="+token // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions)
  // var rand;
  //  rand = crypto.randomBytes(20).toString('hex');
  // console.log(rand);
 // console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
},
sendApproval:function(target,username,namaproduk){

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true, // use TLS
    auth: {
      user: "portaldsa@gmail.com",
      pass: "telkomdac123"
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  
  
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Telkom DSA" <portaldsa@gmail.com>', // sender address
    to: target, // list of receivers
    subject: "Request to Approve", // Subject line
    text: "Hello world?", // plain text body
    html: "You have new Product to review:<br/> <b>from Username: </b>"+username+"<br/><b>Product Name: </b>"+namaproduk+
    "<br/> Please Login to Review Product"
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions)
  
}
}
