var jwt = require("jsonwebtoken");
var express = require("express")
var router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post("/", jsonParser, (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    if (email && password) {
        const token = jwt.sign({ email: email }, 'secretkey', { expiresIn: "3h" })
        return res.status(200).send({ message: 'success', token: token });
    }
})

module.exports = router