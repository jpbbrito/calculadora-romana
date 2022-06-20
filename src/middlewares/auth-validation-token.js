const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
    console.log('[authenticateToken.js] request.headers',  request.headers);

    if(!request.headers.authorization) return response.status(401).json({error: 'token invalido!'});

    const token = request.headers.authorization.split(' ')[1];
    
    if(token == null) return response.status(401).json({error: 'token invalido!'});

    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if(err) return response.status(401).json({error: 'token invalido!'});
        console.log('jwt.verify() -> ', data);
        request.authenticatedUser = {
            ...data.data
        }
        return next();
    });
}