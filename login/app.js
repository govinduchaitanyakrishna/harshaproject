var express = require('express');
var app = express();
var db = require('./db');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT||5000;
var cors = require('cors');
app.use(cors());

const AuthController = require('./auth/authController');

app.get('/', (req, res) => {
    res.send("welcome to loginApi")
})

app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`Listning port no ${port}`)
})