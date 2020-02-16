const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const bearerheader = req.headers['authorization']
    if (typeof bearerheader !== "undefined") {
        const bearer = bearerheader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken;
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            console.log(authData)
            if (err) {
                res.sendStatus(403)
            } else {
                next();
            }
        })
    } else {
        res.sendStatus(403)
    }

}