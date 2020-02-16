var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var checkAuth = require("../middleware/chechAuth")

router.post("/", checkAuth, jsonParser, (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password)
    if (email && password) {
        var token = jwt.sign({ email, password }, 'secretkey', { expiresIn: "1h" });
        res.send({
            token: token
        })

    }
})

module.exports = router