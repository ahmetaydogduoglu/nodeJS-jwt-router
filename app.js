const express = require("express")
const app = express()
var cors = require('cors')
const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var books = require("./routes/books")
app.use(cors());

app.use((req, res, next) => {
    const token = false
    if (token) next();
    else res.json({ err: "error no have token" })
})

app.use("/", jsonParser, books)
app.listen(8080, () => {
    console.log("8080 listen by node")
})