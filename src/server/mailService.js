"use strict";
const nodemailer = require("nodemailer");
const user = "safet.imv@gmail.com";
const pass = "safe-t_dijalan";

// async..await is not allowed in global scope, must use a wrapper
module.exports = {
  sendVerification: function (target, username, token) {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true, // use TLS
      auth: {
        user: user,
        pass: pass
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let message = {
      from: '"Safe-t" <safet.imv@gmail.com>', // sender address
      to: target, // list of receivers
      subject: "Safe-t User Verification", // Subject line
      html: "Hello <strong>" + username + "</strong><br/>Anda telah mendaftarkan email <strong>" + target + "</strong> untuk akun Safe-t. Silahkan klik tautan berikut untuk memverifikasi akun anda.<br/>http://localhost:3000/login/" + token + "<br/><br/>Sincerely,<br/>Safe-t team" // html body
    };

    // send mail with defined transport object
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return process.exit(1);
      }

      console.log('Message sent successfully!');
    });

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  },
  sendResetPassword: function (target, username, token, res) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true, // use TLS
      auth: {
        user: user,
        pass: pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let message = {
      from: '"Safe-t" <safet.imv@gmail.com>', // sender address
      to: target, // list of receivers
      subject: "Safe-t User Verification", // Subject line
      html: "Hello <strong>" + username + "</strong><br/>Anda telah mengirimkan permintaan reset password untuk akun Safe-t (<strong>" + target + "</strong>). Silahkan klik tautan berikut untuk mereset password akun anda.<br/>http://localhost:3000/forgotpassword/" + token + "<br/><br/>Tautan diatas dapat digunakan selama 3 jam, untuk mendapatkan tautan lainnya silahkan kunjungi http://localhost:3000/login/<br/><br/>Sincerely,<br/>Safe-t team"
    };

    // send mail with defined transport object
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log('Error occurred');
        console.log(error.message);
        res.send({
          message: error.message,
          success: false
        });
        return process.exit(1);
      }
      console.log('Message sent successfully!');
      res.send({
        message: "Message sent successfully!",
        success: false
      });
    });
  }
}
