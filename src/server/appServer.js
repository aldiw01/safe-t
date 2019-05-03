const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
var db = require('./database.js');
const crypto = require("crypto");
var up = require('./uploadfiles.js');
var upload = require('express-fileupload');
var sendEmail = require('./emailVerification.js');

// Instantiating the express app
const app = express();
// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
	next();
});// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload());
// INstantiating the express-jwt middleware
const jwtMW = exjwt({
	secret: 'safe-t_dijalan'
});
const secret = 'safe-t_dijalan';

// LOGIN ROUTE
app.post('/api/login', (req, res) => {
	const { username } = req.body;

	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.cekLogin(username, password, function (err, data) {
		if (data.length === 1) {
			//If all credentials are correct do this
			let token = jwt.sign({
				id: data[0].id,
				username: data[0].name,
				email: data[0].email,
			}, secret, { expiresIn: 129600 }); // Sigining the token
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

// Error handling 
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
		res.status(401).send(err);
	}
	else {
		next(err);
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API List
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

app.get('/api/admin', (req, res) => {
	db.getAdminAll(req.body, res);
})

app.get('/api/admin/:id', (req, res) => {
	db.getAdmin(req.params, res);
})

app.post('/api/admin', (req, res) => {
	var mykey = crypto.createCipher('aes-128-cbc', secret);
	var password = mykey.update(req.body.password, 'utf8', 'hex')
	password += mykey.final('hex');

	db.newAdmin(req.body, password, res);
})

app.put('/api/admin/:id', (req, res) => {
	db.updateAdmin(req, res);
})

app.delete('/api/admin/:id', (req, res) => {
	db.delAdmin(req, res);
})

// Starting the app on PORT 3000
const PORT = process.env.PORT || 8900;
app.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`Magic happens on port ${PORT}`);
});
