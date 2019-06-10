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

	cekLoginAdmin: function (email, pass, callback) {
		console.log("loginAdmin");
		var req = [email, pass];
		c.query("SELECT * FROM data_admin WHERE email = ? AND password = ?", req, { metadata: true, useArray: true }, function (err, rows) {
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
	cekLoginUser: function (email, pass, callback) {
		console.log("loginUser");
		var req = [email, pass];
		c.query("SELECT * FROM data_user WHERE email = ? AND password = ?", req, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			if (rows.info.numRows !== '0') {
				rows.forEach(function (items) {
					data.push({
						id: items[0],
						password: items[1],
						name: items[2],
						email: items[3],
						phone: items[4],
						citizen_id: items[5],
						gender: items[6],
						address: items[7],
						created: items[8],
						updated: items[9]
					});
				});
			}
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
					password: items[1],
					name: items[2],
					email: items[3],
					phone: items[4],
					citizen_id: items[5],
					gender: items[6],
					address: items[7],
					status: items[8],
					created: items[9],
					updated: items[10]
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
		c.query("SELECT * FROM `data_user` WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					password: items[1],
					name: items[2],
					email: items[3],
					phone: items[4],
					citizen_id: items[5],
					gender: items[6],
					address: items[7],
					status: items[8],
					created: items[9],
					updated: items[10]
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
		c.query("DELETE FROM data_user WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
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
		c.query("UPDATE data_user  SET nik='" + req.nik + "',name='" + req.username + "',email='" + req.email + "',phone='" + req.phone + "',loker='" + req.loker + "',logintype='" + req.logintype + "',privilege_id='" + req.privilege_id + "' WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
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
		console.log("req.body");
		console.log(req);
		var request = [req.name, password, req.email, req.citizen_id, req.captured_id]
		c.query("INSERT INTO `data_admin` (`name`, `password`, `email`, `citizen_id`, `captured_id`) VALUES (?, ?, ?, ?, ?)", request, { metadata: true, useArray: true }, function (err, rows) {
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
	},
	getVehicleAll: function (req, res) {
		c.query('SELECT * FROM `data_kendaraan` ORDER BY id', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					owner: items[1],
					vehicle_id: items[2],
					brand: items[3],
					type: items[4],
					build_year: items[5],
					color: items[6],
					created: items[7],
					updated: items[8]
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
	getVehicle: function (req, res) {
		c.query("SELECT * FROM `data_kendaraan` WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					owner: items[1],
					vehicle_id: items[2],
					brand: items[3],
					type: items[4],
					build_year: items[5],
					color: items[6],
					created: items[7],
					updated: items[8]
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
	newVehicle: function (req, res) {
		var request = [req.body.owner, req.body.vehicle_id, req.body.brand, req.body.type, req.body.build_year, req.body.color]
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send('Bad Request: Parameters cannot empty.');
		}
		c.query("INSERT INTO `data_kendaraan` (`owner`, `vehicle_id`, `brand`, `type`, `build_year`, `color`) VALUES (?, ?, ?, ?, ?, ?)", request, { metadata: true, useArray: true }, function (err, rows) {
			if (err) {
				res.json(err);
				throw err;
			}

			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	updateVehicle: function (req, res) {
		var request = [req.body.owner, req.body.vehicle_id, req.body.brand, req.body.type, req.body.build_year, req.body.color, req.params.id]
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send('Bad Request: Parameters cannot empty.');
			return
		}
		c.query("UPDATE `data_kendaraan` SET owner=?, vehicle_id=?, brand=?, type=?, build_year=?, color=? WHERE id=?", request, { metadata: true, useArray: true }, function (err, rows) {
			if (err) {
				res.json(err);
				throw err;
			}

			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	deleteVehicle: function (req, res) {
		c.query("DELETE FROM `data_kendaraan` WHERE id=?", [req.params.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err) {
				res.json(err);
				throw err;
			}

			res.json({
				success: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	getViolationsAll: function (req, res) {
		// c.query("SELECT t1.id,t2.name AS reporter,t3.owner AS violator,t3.vehicle_id,t4.type AS violation_type,t1.detail,t1.incident_date,t1.incident_date,t1.status,t1.created,t1.updated FROM data_pelanggaran t1 LEFT JOIN (data_user t2, data_kendaraan t3, violation_list t4) ON (t2.id=t1.reporter_id AND t3.id=t1.violator_id AND t4.id=t1.violation_type)", null, { metadata: true, useArray: true }, function (err, rows) {
		c.query('SELECT * FROM `data_pelanggaran` ORDER BY id', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					reporter_id: items[1],
					violator_id: items[2],
					vehicle_id: items[3],
					violation_type: items[4],
					detail: items[5],
					incident_date: items[6],
					documentation: items[7],
					status: items[8],
					created: items[9],
					updated: items[10]
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
	getViolations: function (req, res) {
		// c.query("SELECT t1.id,t2.name AS reporter,t3.owner AS violator,t3.vehicle_id,t4.type AS violation_type,t1.detail,t1.incident_date,t1.incident_date,t1.status,t1.created,t1.updated FROM data_pelanggaran t1 LEFT JOIN (data_user t2, data_kendaraan t3, violation_list t4) ON (t2.id=t1.reporter_id AND t3.id=t1.violator_id AND t4.id=t1.violation_type) WHERE t1.id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
		c.query("SELECT * FROM `data_pelanggaran` WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					reporter_id: items[1],
					violator_id: items[2],
					vehicle_id: items[3],
					violation_type: items[4],
					detail: items[5],
					incident_date: items[6],
					documentation: items[7],
					status: items[8],
					created: items[9],
					updated: items[10]
				});
			});
			if (data.length < 1) {
				res.status(404).send('Data not found.');
			} else {
				res.json(data);
			}
		});
		c.end();
	}

}
