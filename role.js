const User = require("./models/user.model");
const jwt = require('jsonwebtoken')



let SECRET_KEY = process.env.SECRET_KEY

console.log( process.env.SECRET_KEY);