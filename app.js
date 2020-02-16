const express = require("express")
const app = express()
var cors = require('cors')
const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var books = require("./routes/books")
var auth = require("./routes/auth")
var apiAuth = require("./routes/apiAuth")
app.use(cors());

app.use("/apiAuth", apiAuth)
app.use("/", books)
app.use("/auth", auth)


app.listen(8080, () => {
    console.log("8080 listen by node")
})