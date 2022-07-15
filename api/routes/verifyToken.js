const jwt = require('jsonwebtoken');

const verisfyToken = (req, res, next) => {

    const authHeader = req.headers.token;


    if (!authHeader) {
        return res.status(401).json("You are not authenticated!")
    } else {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWTSecretKey, (error, user) => {
            if (error) {
                res.status(403).json("Token is incorrect!")
            } else {
                req.user = user;
                next();
            }
        })
    }

}

const verifyTokenAndAuthorization = (req, res, next) => {
    verisfyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json('Not Authorized!')
        }
    })
}

module.exports = { verisfyToken, verifyTokenAndAuthorization };