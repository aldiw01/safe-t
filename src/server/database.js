const express = require('express');
const bodyParser = require('body-parser');
var sendEmail = require('./emailVerification.js');
const Client = require('mariasql');
const c = new Client({
	host: 'localhost',
	user: 'root',
	password: '',
	db: 'safe_t'
});

module.exports = {

	cekLogin: function (email, pass, callback) {
		console.log("login");
		console.log(email + " " + pass)
		c.query("SELECT * FROM data_admin WHERE email='" + email + "' AND password='" + pass + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			if (rows.info.numRows !== '0') {
				rows.forEach(function (items) {
					data.push({
						id: items[0],
						username: items[1],
						password: items[2],
						email: items[3],
					});
				});
			}
			console.log(data)
			callback(err, data);
		});
		c.end();
	},
	getUserAll: function (req, res) {
		c.query('SELECT * FROM `data_user` ORDER BY id', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					username: items[1],
					password: items[2],
					nama: items[3],
					email: items[4],
					kontak: items[5],
					no_ktp: items[6],
					kelamin: items[7],
					alamat: items[8],
					log: items[9]
				});
			});
			if (data.length < 1) {
				res.status(404).send('Data not found.');
			} else {
				res.json(data);
			}
		});
		c.end();
	},
	getUser: function (req, res) {
		c.query("SELECT * FROM `data_user`WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					username: items[1],
					password: items[2],
					nama: items[3],
					email: items[4],
					kontak: items[5],
					no_ktp: items[6],
					kelamin: items[7],
					alamat: items[8],
					log: items[9]
				});
			});
			if (data.length < 1) {
				res.status(404).send('Data not found.');
			} else {
				res.json(data);
			}
		});
		c.end();
	},
	newUser: function (req, password, res) {
		c.query("INSERT INTO data_user (username, password, nama, email, kontak, no_ktp, kelamin, alamat) VALUES ('" + req.username + "','" + password + "','" + req.email + "','" + req.kontak + "','" + req.no_ktp + "','" + req.kelamin + "','" + req.alamat + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	delUser: function (req, res) {
		//console.log(req.id)
		c.query("DELETE FROM tbl_pengguna WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	updateUser: function (req, res) {
		c.query("UPDATE tbl_pengguna  SET nik='" + req.nik + "',name='" + req.username + "',email='" + req.email + "',phone='" + req.phone + "',loker='" + req.loker + "',logintype='" + req.logintype + "',privilege_id='" + req.privilege_id + "' WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//console.log(rows);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	newAdmin: function (req, password, res) {
		c.query("INSERT INTO data_admin (username, password, email) VALUES ('" + req.username + "','" + password + "','" + req.email + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	regist: function (req, res) {
		c.query("INSERT INTO tbl_pengguna (name,email,pass,phone,nik,privilege_id,loker) VALUES ('" + req.username + "','" + req.email + "',PASSWORD('" + req.password + "'),'" + req.phone + "','" + req.nik + "',6,'')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			console.log("hahaha");
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	verif: function (req, res, rand) {
		c.query("INSERT INTO tbl_verif (email,token) VALUES ('" + req.email + "','" + rand + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			var subject = "Verify Your Email";
			var page = "verf";
			sendEmail.sendMail(req.email, rand, subject, page);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	isToken: function (req, res) {
		if (req.page == "") {

		}
		c.query("SELECT email FROM " + req.table + " WHERE token ='" + req.token + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//dbCallback(null,rows);
			var isEmpty = false;
			var data = [];
			rows.forEach(function (items) {
				isEmpty = true;
				data.push({
					email: items[0],
					emil: items[0]
				});
			});
			if (isEmpty) {
				res.json({ data: data[0].email });
			} else {
				//let data = {data:rows};
				res.json({ data: "data is empty" });
			}
		});
		c.end();
	},
	isVerified: function (req, res) {
		c.query("UPDATE tbl_verif  SET token='closed' WHERE email='" + req.email + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//console.log(rows);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	forgotPass(req, res, rand) {
		c.query("INSERT INTO tbl_forgot (email,token) VALUES ('" + req.email + "','" + rand + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			var subject = "Forgot Password";
			var page = "reset";
			sendEmail.sendMail(req.email, rand, subject, page);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();

	},
	resetPassword: function (req, res) {
		c.query("UPDATE tbl_pengguna  SET pass= PASSWORD('" + req.password + "') WHERE email='" + req.email + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.query("DELETE FROM tbl_forgot WHERE email='" + req.email + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
		});

		c.end();
	},
	cekRegistered: function (req, res) {
		c.query("SELECT * FROM data_admin WHERE email='" + req.email + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			if (rows.info.numRows !== '0') {
				res.json({
					success: true,
					err: null,
					message: "email already registered"
				});
			} else {
				res.json({
					success: false,
					err: null,
					message: "email not registered"
				});
			}
		});
		c.end();
	}

}
