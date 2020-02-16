var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var checkAuth = require("../middleware/chechAuth")
let books = [{
    name: "satranç",
    author: "Stedan Zweig"
}, {
    name: "Bab-ı Esrar",
    author: "Ahmet Ümmit"
}, {
    name: "Kiralık Konak",
    author: "Yakup Kadri Karaosmanoğlu"
}, {
    name: "Hobbit",
    author: "J.R.R Tolkien"
}]

router.get("/", checkAuth, (req, res, next) => {
    res.send({
        books: books,
        
    })
   
})

router.post("/", jsonParser, (req, res, next) => {
    const { name, author } = req.body
    console.log(name, author)
    books = [...books, { name, author }]
    res.json({ books })
})

module.exports = router