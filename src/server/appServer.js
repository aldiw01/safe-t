const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var db = require('./database.js');
const crypto = require("crypto");
// var sendEmail = require('./emailVerification.js');
var path = require('path');

// Instantiating the express app
const app = express();
// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});// Setting up bodyParser to use json and set it to req.body
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload());
// Instantiating the express-jwt middleware
const jwtMW = exjwt({
	secret: 'safe-t_dijalan'
});
const secret = 'safe-t_dijalan';

/////////////////////////////////////////////////////////////////////////////////////////////
// Multer for File Handling
const multer = require('multer');

const storageAdmin = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + '/uploads/admin/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname);
	}
})

const storageUser = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + '/uploads/user/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname);
	}
})

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

/////////////////////////////////////////////////////////////////////////////////////////////
// LOGIN ROUTE
app.post('/api/loginAdmin', (req, res) => {
	const { email } = req.body;
	console.log(req.body);

	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.cekLoginAdmin(email, password, function (err, data) {
		if (data.length === 1) {
			//If all credentials are correct do this
			let token = jwt.sign({
				id: data[0].id,
				username: data[0].username,
				email: data[0].email,
			}, secret, { expiresIn: 43210 }); // Sigining the token
			res.json({
				success: true,
				err: null,
				token
			});
		}
		else {
			res.json({
				success: false,
				token: null,
				err: 'Username or password is incorrect'
			});
		}
	});
});

app.post('/api/loginUser', (req, res) => {
	const { email } = req.body;

	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.cekLoginUser(email, password, function (err, data) {
		if (data.length === 1) {
			//If all credentials are correct do this
			let token = jwt.sign({
				id: data[0].id,
				username: data[0].name,
				email: data[0].email,
			}, secret, { expiresIn: 43210 }); // Sigining the token
			res.json({
				success: true,
				err: null,
				token
			});
		}
		else {
			res.json({
				success: false,
				token: null,
				err: 'Username or password is incorrect'
			});
		}
	});
});

app.get('/api/', jwtMW /* Using the express jwt MW here */, (req, res) => {
	res.send('You are authenticated'); //Sending some response when authenticated
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API List

app.post('/api/cekRegistered', (req, res) => {
	db.cekRegistered(req.body, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API User
app.get('/api/user', (req, res) => {
	db.getUserAll(req.body, res);
})

app.get('/api/user/:id', (req, res) => {
	db.getUser(req.params, res);
})

app.post('/api/user', (req, res) => {
	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.newUser(req.body, password, res);
})

app.put('/api/user/:id', (req, res) => {
	db.updateUser(req, res);
})

app.delete('/api/user/:id', (req, res) => {
	db.delUser(req, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Admin
app.get('/api/admin', (req, res) => {
	db.getAdminAll(req.body, res);
})

app.get('/api/admin/:id', (req, res) => {
	db.getAdmin(req.params, res);
})

app.post('/api/admin', (req, res) => {
	var upload = multer({
		storage: storageAdmin,
		limits: {
			fileSize: 1024 * 1024
		},
		fileFilter: fileFilter
	}).single('fileImage');
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			// A Multer error occurred when uploading.
			res.send(err);
			return
		} else if (err) {
			// An unknown error occurred when uploading.
			res.send(err);
			return
		} else if (req.file == undefined) {
			res.send('index', { message: 'No file selected!' })
			return
		}
		// Everything went fine.
		console.log('Upload success.');

		var mykey = crypto.createCipher('aes-128-cbc', secret);
		var password = mykey.update(req.body.password, 'utf8', 'hex')
		password += mykey.final('hex');
		req.body.captured_id = req.file.filename;

		db.newAdmin(req.body, password, res);
	})
})

app.put('/api/admin/:id', (req, res) => {
	db.updateAdmin(req, res);
})

app.delete('/api/admin/:id', (req, res) => {
	db.delAdmin(req, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Kendaraan
app.get('/api/vehicle', jwtMW, (req, res) => {
	db.getVehicleAll(req.body, res);
})

app.get('/api/vehicle/:id', (req, res) => {
	db.getVehicle(req.params, res);
})

app.post('/api/vehicle', (req, res) => {
	db.newVehicle(req, res);
})

app.put('/api/vehicle/:id', (req, res) => {
	db.updateVehicle(req, res);
})

app.delete('/api/vehicle/:id', (req, res) => {
	db.deleteVehicle(req, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Pelanggaran
app.get('/api/ticket', jwtMW, (req, res) => {
	db.getViolationsAll(req.body, res);
})

app.get('/api/ticket/:id', (req, res) => {
	db.getViolations(req.params, res);
})

app.post('/api/ticket', (req, res) => {
	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.newAdmin(req.body, password, res);
})

app.put('/api/ticket/:id', (req, res) => {
	db.updateAdmin(req, res);
})

app.delete('/api/ticket/:id', (req, res) => {
	db.delAdmin(req, res);
})

// UPLOAD FILE
app.post('/api/uploadImage', (req, res) => {
	// var upload = multer({
	// 	storage: storageVehicle,
	// 	limits: {
	// 		fileSize: 1024 * 1024
	// 	},
	// 	fileFilter: fileFilter
	// }).single('fileImage');
	// upload(req, res, function (err) {
	// 	if (err instanceof multer.MulterError) {
	// 		// A Multer error occurred when uploading.
	// 		res.send(err);
	// 		return
	// 	} else if (err) {
	// 		// An unknown error occurred when uploading.
	// 		res.send(err);
	// 		return
	// 	}
	// 	// Everything went fine.
	// 	res.status(200).send({ message: "upload success." });
	// })
	// console.log(req.body);
})

// Error handling 
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
		res.status(401).send(err);
	}
	else {
		next(err);
	}
});

// Starting the app on PORT 3000
const PORT = process.env.PORT || 8900;
app.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`Magic happens on port ${PORT}`);
});
