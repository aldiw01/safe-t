const express = require('express');
const bodyParser = require('body-parser');
var sendEmail = require('./emailVerification.js');
const Client = require('mariasql');
const c = new Client({
	host: 'localhost',
	user: 'root',
	password: '',
	db: 'portal_dac'
});

function dbCallback(err, resp) {
	return (resp);
}

function getAkunTodaySchedule(items, callback) {
	d = new Date();
	date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
	//console.log("SELECT name,starttime FROM v_work_shift WHERE tgl='"+date+"' AND user_id='"+userid+"'");
	var usid = "";
	if (items[7] === '1' || items[7] === '4' || items[7] === '5') {
		usid = "AND user_id='" + items[0] + "'";
	}
	c.query("SELECT name,starttime,endtime FROM v_work_shift WHERE tgl='" + date + "' " + usid + "", null, { metadata: true, useArray: true }, function (err, rows) {
		if (err)
			throw err;

		var data = [];
		rows.forEach(function (items) {
			data.push({ name: items[0], starttime: items[1], endtime: items[2] });
		});
		callback(null, data);
	});
	c.end();
}

module.exports = {

	cekLogin: function (user, pass, callback) {
		console.log("hahaha");
		c.query("SELECT tbl_pengguna.id,tbl_pengguna.nik,tbl_pengguna.name,tbl_pengguna.email,tbl_pengguna.phone,tbl_pengguna.loker,tbl_pengguna.logintype,tbl_pengguna.privilege_id FROM tbl_pengguna, tbl_verif WHERE tbl_pengguna.name='" + user + "' AND tbl_pengguna.pass=PASSWORD('" + pass + "') AND tbl_verif.token='closed' GROUP BY tbl_pengguna.name", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];
			if (rows.info.numRows !== '0') {

				rows.forEach(function (items) {
					var shift = '';

					getAkunTodaySchedule(items, function (err, dat) {
						//console.log(dat);
						data.push({ id: items[0], nik: items[1], name: items[2], email: items[3], phone: items[4], loker: items[5], logintype: items[6], privilege_id: items[7], starttime: items[8], endtime: items[9], shiftname: items[10] });
						callback(null, data);
					});

				});
			} else {
				callback(null, data);
			}







			//callback(data)
			//console.log(data.length);
			//let data = {data:rows};
			//res.json(data);
		});
		c.end();
	},

	getUser: function (res) {
		c.query('SELECT id,nik,name,email,phone,loker,logintype,privilege_id FROM tbl_pengguna ORDER BY name', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//dbCallback(null,rows);
			var data = [];
			rows.forEach(function (items) {
				data.push({ id: items[0], nik: items[1], name: items[2], email: items[3], phone: items[4], loker: items[5], logintype: items[6], privilege_id: items[7] });
			});
			//console.log(data);
			//let data = {data:rows};
			res.json(data);
		});
		c.end();
	},
	newUser: function (req, res) {
		c.query("INSERT INTO tbl_pengguna (nik,name,email,phone,loker,logintype,privilege_id,pass) VALUES ('" + req.nik + "','" + req.username + "','" + req.email + "','" + req.phone + "','" + req.loker + "','" + req.logintype + "','" + req.privilege_id + "',PASSWORD('telkomdac'))", null, { metadata: true, useArray: true }, function (err, rows) {
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
	newCuti: function (req, res) {
		c.query("INSERT INTO tbl_cuti (userid,tgl_awal,tgl_akhir,keterangan) VALUES ('" + req.id + "','" + req.awalcuti + "','" + req.akhircuti + "','" + req.keterangan + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//console.log(rows);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				sucess: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	newPindah: function (req, res) {
		c.query("INSERT INTO tbl_pindah_jadwal (userid,tgl_asal,tgl_pengganti,shift_asal,shift_pengganti,user_pengganti,keterangan) VALUES ('" + req.id + "','" + req.tgl_asal + "','" + req.tgl_pengganti + "','" + req.shift_asal + "','" + req.shift_pengganti + "','" + req.user_pengganti + "','" + req.alasan + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			res.json({
				sucess: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
		});
		c.end();
	},
	getPengajuan: function (req, res) {
		var where = " WHERE userid='" + req.user_id + "'";
		if (req.privilege_id === '2' || req.privilege_id === '3') {
			where = '';
		}
		c.query("SELECT id,userid,'cuti' as tipe, tgl_pengajuan,approved,tgl_awal,tgl_akhir,'' as shift_asal,'' as shift_pengganti,'' as user_pengganti FROM tbl_cuti " + where + " UNION SELECT id,userid,'pindah' as tipe, tgl_pengajuan,approved,tgl_asal as tgl_awal,tgl_pengganti as tgl_akhir,shift_asal,shift_pengganti,user_pengganti  FROM tbl_pindah_jadwal " + where + "", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//dbCallback(null,rows);
			var data = [];
			rows.forEach(function (items) {
				data.push({ id: items[0], userid: items[1], tipe: items[2], tgl_pengajuan: items[3], approved: items[4], tgl_awal: items[5], tgl_akhir: items[6], shift_asal: items[7], shift_pengganti: items[8], user_pengganti: items[9] });
			});
			//console.log(data);
			//let data = {data:rows};
			res.json(data);
		});
		c.end();
	},
	getSchedule: function (req, res) {
		var where = "WHERE user_id='" + req.user_id + "' AND tgl LIKE '" + req.monthyear + "%'";
		if (req.privilege_id === '2' || req.privilege_id === '3') {
			where = "WHERE tgl LIKE '" + req.monthyear + "%'";;
		}

		c.query("SELECT " +
			" tbl_master_work_shift.`name` AS `name`," +
			" tbl_master_work_shift.starttime AS starttime," +
			" tbl_master_work_shift.endtime AS endtime," +
			" tbl_work_schedule.tgl AS tgl," +
			" tbl_work_schedule.shift_id AS shift_id," +
			" tbl_work_schedule.clock_in AS clock_in," +
			" tbl_work_schedule.clock_out AS clock_out," +
			" tbl_work_schedule.description AS description," +
			" tbl_work_schedule.user_id AS user_id," +
			" tbl_work_schedule.id AS id," +
			" tbl_pengguna.nik AS nik," +
			" tbl_pengguna.`name` AS username" +
			" FROM " +
			" tbl_work_schedule" +
			" JOIN tbl_master_work_shift" +
			" ON tbl_work_schedule.shift_id = tbl_master_work_shift.id " +
			" JOIN tbl_pengguna" +
			" ON tbl_work_schedule.user_id = tbl_pengguna.id " + where + " ORDER BY tgl,starttime ", null, { metadata: true, useArray: true }, function (err, rows) {
				if (err)
					throw err;

				//dbCallback(null,rows);
				//console.log(rows);
				var data = [];
				rows.forEach(function (items) {
					data.push({ id: items[9], user_id: items[8], tgl: items[3], name: items[0], starttime: items[1], endtime: items[2], shift_id: items[4], nik: items[10], username: items[11] });
				});
				//console.log(data);
				//let data = {data:rows};
				res.json(data);
			});
		c.end();
	},
	getShift: function (res) {
		c.query('SELECT id,name,starttime,endtime,description FROM tbl_master_work_shift', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//dbCallback(null,rows);
			var data = [];
			rows.forEach(function (items) {
				data.push({ id: items[0], name: items[1], starttime: items[2], endtime: items[3], description: items[4] });
			});
			//console.log(data);
			//let data = {data:rows};
			res.json(data);
		});
		c.end();
	},
	saveSchedule: function (req, res) {
		var data = JSON.parse(req.body.json);
		var salin = req.body.salin;

		var prepq = '';
		var tgl = '';
		data.forEach(function (items) {
			tgl = items.startDate.split('T');
			tgl = tgl[0];
			if (salin !== '' && salin !== 'null') {
				tgl = salin;
			}
			prepq += ",('" + items.user_id + "','" + tgl + "','" + items.shiftid + "')";

		})
		prepq = prepq.substring(1);
		//console.log("INSERT INTO tbl_work_schedule (user_id,tgl,shift_id) VALUES "+prepq);

		c.query("DELETE FROM tbl_work_schedule WHERE tgl='" + tgl + "' ", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
		});
		c.end();
		c.query("INSERT INTO tbl_work_schedule (user_id,tgl,shift_id) VALUES " + prepq, null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//dbCallback(null,rows);
			res.json({
				sucess: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});
			//console.log(data);
			//let data = {data:rows};
			//res.json(data);
		});
		c.end();


	},
	cekPresensi: function (req, res) {
		c.query("SELECT id,jam_masuk FROM tbl_presensi WHERE id_pengguna='" + req.user_id + "' AND (jam_masuk IS NOT NULL AND jam_pulang IS NULL)", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			var jam_masuk = '0';
			if (rows.info.numRows !== '0') {
				jam_masuk = rows[0][1];
			}
			res.json({ absen: rows.length, jam_masuk: jam_masuk });
		});
		c.end();
	},
	getPresensi: function (req, res) {
		c.query("SELECT v_work_shift.id,user_id,starttime,endtime,tgl,name,tbl_presensi.jam_masuk,tbl_presensi.jam_pulang,tbl_presensi.mood_masuk,tbl_presensi.mood_keluar,tbl_presensi.ket FROM v_work_shift LEFT  JOIN tbl_presensi ON v_work_shift.tgl=DATE_FORMAT(tbl_presensi.jam_masuk,'%Y-%m-%d') AND v_work_shift.user_id=tbl_presensi.id_pengguna  WHERE v_work_shift.user_id = '" + req.user_id + "' AND v_work_shift.tgl LIKE '" + req.monthyear + "%'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({ id: items[0], user_id: items[1], starttime: items[2], endtime: items[3], tgl: items[4], name: items[5], jam_masuk: items[6], jam_keluar: items[7], mood_masuk: items[8], mood_keluar: items[9], ket: items[10] });
			});
			res.json(data);

		});
		c.end();
	},
	saveCheckin: function (req, res) {
		c.query("INSERT INTO tbl_presensi (id_pengguna,jam_masuk,pict_masuk,mood_masuk,ket) VALUES ('" + req.id_pengguna + "','" + req.tgl + " " + req.jam_masuk + "','" + req.pict + "','" + req.mood + "','" + req.ket + "')", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			res.json({
				sucess: true,
				err: null,
				affectedRows: rows.info.affectedRows,
				jam_masuk: req.tgl + " " + req.jam_masuk
			});

			//res.json({absen:rows.length});
		});
		c.end();
	},
	saveCheckout: function (req, res) {
		c.query("UPDATE tbl_presensi SET jam_pulang='" + req.tgl + " " + req.jam_masuk + "', mood_keluar='" + req.mood + "', pict_keluar='" + req.pict + "' WHERE id_pengguna='" + req.id_pengguna + "' AND (jam_masuk IS NOT NULL AND jam_pulang IS NULL)", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
			res.json({
				sucess: true,
				err: null,
				affectedRows: rows.info.affectedRows
			});

			//res.json({absen:rows.length});
		});
		c.end();
	}, regist: function (req, res) {
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
	}, verif: function (req, res, rand) {
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
	}, isVerified: function (req, res) {
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
	}, forgotPass(req, res, rand) {
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

	}, resetPassword: function (req, res) {
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
	}
	, cekStatusDocument: function (req, res) {
		
		c.query("SELECT * FROM tbl_alihkelola WHERE username = '" + req.username + "' AND id = '" + req.produk + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];
			rows.forEach(function (items) {
				data.push({id: items[0], nama_produk: items[1], deskripsi: items[3], status: items[10], approve: items[11] });
			});
			if (rows.info.numRows !== '0') {
				res.json({
					success: true,
					err: null,
					data: data,
				});

			} else {
				res.json({
					success: false,
					err: null,
				});
			}

		});
		c.end();


	}
	, alihKelola: function (req, res) {
		var post = [req.namaproduk, req.username, req.deskripsi]
		c.query("INSERT INTO tbl_alihkelola (nama_produk,username,deskripsi,status,approve) VALUES (?,?,?,'not uploaded',0)", post, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				productAdded: req.namaproduk,
				affectedRows: rows.info.affectedRows
			});
		});


		c.end();
	}, dirFileAlihkelola: function (username, name, dir, id) {
		var post = [dir, username, id]
		c.query("UPDATE tbl_alihkelola  SET " + name + "= ?, status ='uploaded' WHERE username= ? AND  id = ?", post, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
		});


		c.end();
	}
	, checkDocumentUploaded: function (req, res) {

		c.query("SELECT * FROM tbl_alihkelola WHERE username = '" + req.username + "' AND id='" + req.produk + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];
			rows.forEach(function (items) {
				data.push({ nama_produk: items[1], deskripsi: items[3], status: items[10] });
			});
			if (rows.info.numRows !== '0') {
				res.json({
					success: true,
					nama_produk: data[0].nama_produk,
					deskripsi: data[0].deskripsi,
					status: data[0].status

				});
			} else {
				res.json({
					success: false,
					data: null,
				});

			}
			// if(rows.info.numRows!=='0'){
			// 	res.json({
			// 		success: true,
			// 		err: null,
			// });

			// }else{
			// 	res.json({
			// 		success: false,
			// 		err: null,
			// });
			// }

		});
		c.end();
	}

	, cekRegistered: function (req, res) {
		c.query("SELECT * FROM tbl_pengguna WHERE name ='" + req.username + "' OR email ='" + req.email + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];

			if (rows.info.numRows !== '0') {
				res.json({
					success: true,
					err: null,
					data: req.email
				});

			} else {
				res.json({
					success: false,
					err: null,
					data: req.username
				});
			}

		});
		c.end();


	}
	, getSPVEmail: function (req, cb) {
		c.query("SELECT email FROM tbl_pengguna WHERE privilege_id = 6", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];
			rows.forEach(function (items) {
				data.push({ email: items[0] });
			});
			cb(data);
			// res.json(data);

			// if(rows.info.numRows!=='0'){
			//   res.json({
			// 		success: true,
			// 		err: null,
			// 		data: req.email
			// });

			// }else{
			//   res.json({
			// 		success: false,
			// 		err: null,
			// 		data: req.username
			// });
			// }

		});
		c.end();


	}

	, getUserProdukAll: function (req, res) {
		c.query("SELECT id,nama_produk,status FROM tbl_alihkelola WHERE username ='" + req.username + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//function(){
			var data = [];
			rows.forEach(function (items) {
				data.push({ id:items[0], produk: items[1], status: items[2] });
			});

			res.json(data);

		});
		c.end();


	}, updateProduk: function (req, res) {
		var post = [req.deskripsi, req.username, req.id]
		c.query("UPDATE tbl_alihkelola SET deskripsi= ? WHERE username= ? AND id= ?", post, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//console.log(rows);
			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			if (rows.info.affectedRows != '0') {
				res.json({
					success: true,
					err: null,
					affectedRows: rows.info.affectedRows
				});
			} else {
				res.json({
					success: false,
					err: null,
					affectedRows: rows.info.affectedRows
				});

			}
		});

		c.end();
	},

	getAlihKelola: function (req, res) {
		c.query('SELECT * FROM tbl_alihkelola', null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					nama_produk: items[1],
					username: items[2],
					deskripsi: items[3],
					deskproduk: items[4],
					teknis: items[5],
					faq: items[6],
					manual: items[7],
					sympthom: items[8],
					bispro: items[9],
					status: items[10],
					approve: items[11]
				});
			});
			res.json(data);
		});
		c.end();
	},

	getProduk: function (req, res) {
		c.query("SELECT * FROM tbl_alihkelola WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					nama_produk: items[1],
					username: items[2],
					deskripsi: items[3],
					deskproduk: items[4],
					teknis: items[5],
					faq: items[6],
					manual: items[7],
					sympthom: items[8],
					bispro: items[9],
					status: items[10],
					approve: items[11]
				});
			});
			res.json(data);
		});
		c.end();
	},

	approveAlihKelola: function (req, res) {
		c.query("UPDATE tbl_alihkelola SET status='approved',approve=1 WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
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

	rejectAlihKelola: function (req, res) {
		c.query("UPDATE tbl_alihkelola SET status='not uploaded' WHERE id='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
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

	insertNotif: function (req, res) {
		c.query("INSERT INTO tbl_notifikasi (dari,untuk,message,ref,status) VALUES ('" + req.dari + "','" + req.untuk + "','" + req.message + "','" + req.ref + "','1')", null, { metadata: true, useArray: true }, function (err, rows) {
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

	getNotif: function (req, res) {
		c.query("SELECT * FROM tbl_notifikasi WHERE untuk='" + req.untuk + "' ORDER BY tanggal DESC LIMIT 7", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					dari: items[1],
					untuk: items[2],
					message: items[3],
					tanggal: items[4],
					ref: items[5],
					status: items[6]
				});
			});
			res.json(data);
		});
		c.end();
	},

	changeNotifStatus: function (req, res) {
		c.query("UPDATE tbl_notifikasi SET status='0' WHERE untuk='" + req.untuk + "'", null, { metadata: true, useArray: true }, function (err, rows) {
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

	getAlihKelolaUser: function (req, res) {
		c.query("SELECT * FROM tbl_alihkelola WHERE username='" + req.username + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					id: items[0],
					nama_produk: items[1],
					username: items[2],
					deskripsi: items[3],
					deskproduk: items[4],
					teknis: items[5],
					faq: items[6],
					manual: items[7],
					sympthom: items[8],
					bispro: items[9],
					status: items[10],
					approve: items[11]
				});
			});
			res.json(data);
		});
		c.end();
	},jadwalTransferKnowladge: function (req, res) {
		var post = [req.tanggal, req.waktu,req.id]
		c.query("UPDATE tb_transfer_knowladge SET tanggal= ?, waktu= ? WHERE id_produk= ?", post, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			//let data = {data:rows};
			//console.log(res.end(rows.info.affectedRows));
			res.json({
				success: true,
				err: null,
				
			});
		});


		c.end();
	},
	currentTransferKnowladge: function (req, res) {
		
		c.query("SELECT * FROM tb_transfer_knowladge WHERE id_produk='" + req.id + "'", null, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;

			var data = [];
			rows.forEach(function (items) {
				data.push({
					
					tanggal: items[2],
					waktu: items[3]
				});
			});
			if (rows.info.numRows != '0') {
			res.json({
				success:true,
				data:data,				
			});
		}else{
			res.json({
				success:false
			});
		}
		});
		c.end();
	},newjadwalTransferKnowladge: function (req, res) {
		var post = [req.id]
		c.query("INSERT INTO tb_transfer_knowladge (id_produk) VALUES (?)", post, { metadata: true, useArray: true }, function (err, rows) {
			if (err)
				throw err;
		});
		c.end();
	}



}
