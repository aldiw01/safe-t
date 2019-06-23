const express = require('express');
const bodyParser = require('body-parser');
var mailService = require('./mailService.js');
const Client = require('mariasql');
const c = new Client({
	host: 'localhost',
	user: 'root',
	password: '',
	db: 'safe_t'
});

module.exports = {

	cekLoginAdmin: function (email, pass, callback) {
		var req = [email, pass];
		c.query("SELECT * FROM data_admin WHERE email=? AND password=?", req, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			if (rows.info.numRows !== '0') {
				rows.forEach(function (items) {
					data.push({
						id: items[0],
						name: items[1],
						email: items[3],
						citizen_id: items[4],
						captured_id: items[5],
						previledge_id: items[6]
					});
				});
			}
			callback(err, data);
		});
		c.end();
	},
	cekLoginUser: function (email, pass, callback) {
		var req = [email, pass];
		c.query("SELECT * FROM data_user WHERE email=? AND password=?", req, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			if (rows.info.numRows !== '0') {
				rows.forEach(function (items) {
					data.push({
						id: items[0],
						name: items[2],
						email: items[3],
						phone: items[4],
						citizen_id: items[5],
						captured_id: items[6],
						gender: items[7],
						address: items[8],
						status: items[9]
					});
				});
			}
			callback(err, data);
		});
		c.end();
	},
	verifyToken: function (req, res) {
		c.query("SELECT `email` FROM `verification_token` WHERE `token`=? AND `status`=0", [req.token], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			if (rows.info.numRows !== '0') {
				rows.forEach(function (items) {
					c.query("UPDATE `verification_token` SET status='1' WHERE `email`=?", [items[0]], { metadata: true, useArray: true }, function (err, rows) {
						if (err)
							throw err;
					});
					c.query("UPDATE `data_user` SET status='1' WHERE email=?", [items[0]], { metadata: true, useArray: true }, function (err, rows) {
						if (err)
							throw err;

						res.json({
							success: true,
							err: null,
							message: "Thank you for verifying your email. Your account has been activated"
						});
					});
				});
			} else {
				res.json({
					success: false,
					err: null,
					message: "Invalid token!"
				});
			}
		});
		c.end();
	},
	verifyUser: function (req, res) {
		c.query("UPDATE `data_user` SET status='1' WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
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
	checkVerified: function (req, res) {
		c.query("SELECT `status` FROM `data_user` WHERE `id`=? AND `status`=1", [req.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			if (rows.info.numRows !== '0') {
				res.json({
					success: true,
					err: null,
					message: "User already verified"
				});
			} else {
				res.json({
					success: false,
					err: null,
					message: "User is not verified"
				});
			}
		});
		c.end();
	},
	forgotPass(req, res, rand) {
		c.query("INSERT INTO tbl_forgot (email,token) VALUES ('" + req.email + "','" + rand + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			var subject = "Forgot Password";
			var page = "reset";
			mailService.sendMail(req.email, rand, subject, page);
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
	checkAdminRegistered: function (req, res) {
		c.query("SELECT * FROM data_admin WHERE email=?", [req.email], { metadata: true, useArray: true }, function (err, rows) {
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
	checkUserRegistered: function (req, res) {
		c.query("SELECT * FROM data_user WHERE email=?", [req.email], { metadata: true, useArray: true }, function (err, rows) {
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
	getUserAll: function (req, res) {
		c.query('SELECT * FROM `data_user` ORDER BY id', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					name: items[2],
					email: items[3],
					phone: items[4],
					citizen_id: items[5],
					captured_id: items[6],
					gender: items[7],
					address: items[8],
					status: items[9],
					created: items[10],
					updated: items[11]
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
		c.query("SELECT * FROM `data_user` WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					name: items[2],
					email: items[3],
					phone: items[4],
					citizen_id: items[5],
					captured_id: items[6],
					gender: items[7],
					address: items[8],
					status: items[9],
					created: items[10],
					updated: items[11]
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
		var request = [password, req.name, req.email, req.phone, req.citizen_id, req.captured_id, req.gender, req.address];
		c.query("INSERT INTO `verification_token`(`email`, `token`, `status`) VALUES (?, ?, '0')", [req.email, req.token], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			mailService.sendVerification(req.email, req.name, req.token);
		});
		c.query("INSERT INTO `data_user`(`password`, `name`, `email`, `phone`, `citizen_id`, `captured_id`, `gender`, `address`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '0')", request, { metadata: true, useArray: true }, function (err, rows) {
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
	updateUser: function (req, password, res) {
		var request = [password, req.name, req.email, req.phone, req.citizen_id, req.captured_id, req.gender, req.address, req.id];
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send({ message: 'Bad Request: Parameters cannot empty.' });
		}
		c.query("UPDATE `data_user` SET `password`=?,`name`=?,`email`=?,`phone`=?,`citizen_id`=?,`captured_id`=?,`gender`=?,`address`=? WHERE id=?", request, { metadata: true, useArray: true }, function (err, rows) {
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
	deleteUser: function (req, res) {
		var request = [req.id];
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send('Bad Request: Parameters cannot empty.');
		}
		c.query("DELETE FROM data_user WHERE id=?", request, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			if (rows.info.affectedRows < 1) {
				res.status(404).send({ message: 'Data not found.' });
			} else {
				res.json({
					success: true,
					err: null,
					affectedRows: rows.info.affectedRows
				});
			}
		});
		c.end();
	},
	newAdmin: function (req, password, res) {
		var request = [req.name, password, req.email, req.citizen_id, req.captured_id]
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send('Bad Request: Parameters cannot empty.');
		}
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
	getAdmin: function (req, res) {
		c.query("SELECT * FROM `data_admin` WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					name: items[1],
					email: items[3],
					citizen_id: items[4],
					captured_id: items[5],
					previledge_id: items[6],
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
		var request = [req.id];
		if (request.includes(undefined) || request.includes("")) {
			res.status(400).send('Bad Request: Parameters cannot empty.');
		}
		c.query("SELECT * FROM `data_kendaraan` WHERE id=?", request, { metadata: true, useArray: true }, function (err, rows) {
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
	getTicketAll: function (req, res) {
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
	getTicket: function (req, res) {
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
	},
	getUserTicket: function (req, res) {
		c.query("SELECT * FROM `data_pelanggaran` WHERE reporter_id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
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
