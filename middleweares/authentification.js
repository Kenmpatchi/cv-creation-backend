const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader;
    if(!token) return res.status(401).json({message: 'Unauthorized!'});
    jwt.verify(token, process.env.Access_Token, (err, user) => {
        if(err) return res.status(403).json({message: 'Token no longer valid.'});
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;