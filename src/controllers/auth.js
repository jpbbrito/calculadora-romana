const jwt = require('jsonwebtoken');

const { findUserByUsername } = require('../repositories/users');
const { matchUser } = require('../repositories/auth');
module.exports = {
    async authenticate(request, response) {
        const { userName, password } = request.body;
        const result = await matchUser(userName, password)
        if (!result) {
            return response.status(403).json({ error: 'userName or password is wrong' });
        }
        const user = await findUserByUsername(userName);
        const token = jwt.sign({ data: {userName, level: user.level}}, process.env.TOKEN_SECRET, { expiresIn: 30 * 60 });
        return response.json({
            token: token
        });
    }
}