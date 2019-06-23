const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var db = require('./database.js');
const crypto = require("crypto");
var mailService = require('./mailService.js');
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
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Instantiating the express-jwt middleware
const jwtMW = exjwt({
	secret: 'safe-t_dijalan_ADMIN'
});

/////////////////////////////////////////////////////////////////////////////////////////////
// CONSTANT LIST
const ADMIN_SECRET = 'safe-t_dijalan_ADMIN';
const USER_SECRET = 'safe-t_dijalan_USER';
// Initialize Cipher Option
const ALGORITHM = 'aes-192-cbc';
const SECRET_CIPHER = 'safe-t_dijalan';
const CIPHER_SALT = '4Ld1_1337';
const CIPHER_KEY = crypto.scryptSync(SECRET_CIPHER, CIPHER_SALT, 24);
const CIPHER_IV = Buffer.alloc(16, 0); // Initialization vector.
const CIPHER_BASE = 'base64';
// Initialize Hash Option
const HASH_ALGORITHM = 'sha256';

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
	console.log("loginAdmin")

	// const cipher = crypto.createCipheriv(ALGORITHM, CIPHER_KEY, CIPHER_IV);
	// let password = cipher.update(req.body.password, 'utf8', 'hex');
	// password += cipher.final('hex');

	const password = crypto.createHmac(HASH_ALGORITHM, SECRET_CIPHER).update(req.body.password).digest(CIPHER_BASE);
	console.log(password);

	// var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
	// var password = mykey.update(req.body.password, 'utf8', 'hex')
	// password += mykey.final('hex');

	db.cekLoginAdmin(email, password, function (err, data) {
		if (data.length === 1) {
			//If all credentials are correct do this
			let token = jwt.sign({
				id: data[0].id,
				name: data[0].name,
				email: data[0].email,
				citizen_id: data[0].citizen_id,
				captured_id: data[0].captured_id,
				previledge_id: data[0].previledge_id,
				user_type: "Admin"
			}, ADMIN_SECRET, { expiresIn: 43210 }); // Sigining the token
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
	console.log("loginUser")

	const password = crypto.createHmac(HASH_ALGORITHM, SECRET_CIPHER).update(req.body.password).digest(CIPHER_BASE);

	// const cipher = crypto.createCipheriv(ALGORITHM, CIPHER_KEY, CIPHER_IV);
	// let password = cipher.update(req.body.password, 'utf8', 'hex');
	// password += cipher.final('hex');

	// var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
	// var password = mykey.update(req.body.password, 'utf8', 'hex')
	// password += mykey.final('hex');

	console.log(password);

	db.cekLoginUser(email, password, function (err, data) {
		if (data.length === 1 && data[0].status === "1") {
			//If all credentials are correct do this
			let token = jwt.sign({
				id: data[0].id,
				name: data[0].name,
				email: data[0].email,
				phone: data[0].phone,
				citizen_id: data[0].citizen_id,
				captured_id: data[0].captured_id,
				gender: data[0].gender,
				address: data[0].address,
				status: data[0].status,
				user_type: "User"
			}, USER_SECRET, { expiresIn: 43210 }); // Sigining the token
			res.json({
				success: true,
				err: null,
				token
			});
		}
		else if (data.length === 1 && data[0].status === "0") {
			res.json({
				success: false,
				token: null,
				err: 'User is not verified'
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
	res.send({ message: 'You are authenticated' }); //Sending some response when authenticated
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API List
app.post('/api/check-admin-registered', (req, res) => {
	db.checkAdminRegistered(req.body, res);
})

app.post('/api/check-user-registered', (req, res) => {
	db.checkUserRegistered(req.body, res);
})

app.get('/api/user/verify/:id', (req, res) => {
	db.checkVerified(req.params, res);
})

app.put('/api/user/verify/:id', jwtMW, (req, res) => {
	db.verifyUser(req.params, res);
})

app.post('/api/user/verify-token', (req, res) => {
	db.verifyToken(req.body, res);
})

app.post('/api/user/verify/send-mail', (req, res) => {
	const token = crypto.randomBytes(16).toString('hex');
	mailService.sendVerification(req.body.email, req.body.name, token);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API User
app.get('/api/user', jwtMW, (req, res) => {
	db.getUserAll(req.body, res);
})

app.get('/api/user/:id', (req, res) => {
	db.getUser(req.params, res);
})

app.post('/api/user', (req, res) => {
	var upload = multer({
		storage: storageUser,
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

		// var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
		// var password = mykey.update(req.body.password, 'utf8', 'hex')
		// password += mykey.final('hex');

		const password = crypto.createHmac(HASH_ALGORITHM, SECRET_CIPHER).update(req.body.password).digest(CIPHER_BASE);
		const token = crypto.randomBytes(16).toString('hex');
		req.body.captured_id = req.file.filename;
		req.body.token = token;

		db.newUser(req.body, password, res);
	})
})

app.put('/api/user/:id', jwtMW, (req, res) => {
	if (req.body.password === undefined || req.body.password === "") {
		res.status(400).send({ message: 'Bad Request: Parameters cannot empty.' });
	}
	var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.updateUser(req, password, res);
})

app.delete('/api/user/:id', jwtMW, (req, res) => {
	db.deleteUser(req.params, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Admin
app.get('/api/admin', jwtMW, (req, res) => {
	db.getAdminAll(req.body, res);
})

app.get('/api/admin/:id', jwtMW, (req, res) => {
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

		// var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
		// var password = mykey.update(req.body.password, 'utf8', 'hex')
		// password += mykey.final('hex');

		const password = crypto.createHmac(HASH_ALGORITHM, SECRET_CIPHER).update(req.body.password).digest(CIPHER_BASE);
		req.body.captured_id = req.file.filename;

		db.newAdmin(req.body, password, res);
	})
})

app.put('/api/admin/:id', jwtMW, (req, res) => {
	db.updateAdmin(req, res);
})

app.delete('/api/admin/:id', jwtMW, (req, res) => {
	db.deleteAdmin(req, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Kendaraan
app.get('/api/vehicle', (req, res) => {
	db.getVehicleAll(req.body, res);
})

app.get('/api/vehicle/:id', (req, res) => {
	db.getVehicle(req.params, res);
})

app.post('/api/vehicle', jwtMW, (req, res) => {
	db.newVehicle(req, res);
})

app.put('/api/vehicle/:id', jwtMW, (req, res) => {
	db.updateVehicle(req, res);
})

app.delete('/api/vehicle/:id', jwtMW, (req, res) => {
	db.deleteVehicle(req, res);
})

/////////////////////////////////////////////////////////////////////////////////////////////
// API Pelanggaran
app.get('/api/ticket', (req, res) => {
	db.getTicketAll(req.body, res);
})

app.get('/api/ticket/:id', (req, res) => {
	db.getTicket(req.params, res);
})

app.get('/api/ticket/user/:id', (req, res) => {
	db.getUserTicket(req.params, res);
})

app.post('/api/ticket', jwtMW, (req, res) => {
	var mykey = crypto.createCipher('aes-128-cbc', SECRET_CIPHER);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.newAdmin(req.body, password, res);
})

app.put('/api/ticket/:id', jwtMW, (req, res) => {
	db.updateAdmin(req, res);
})

app.delete('/api/ticket/:id', jwtMW, (req, res) => {
	db.delAdmin(req, res);
})

// UPLOAD FILE
app.post('/api/uploadImage', jwtMW, (req, res) => {
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
