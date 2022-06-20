const Database = require('../../database/index');
const bcrypt = require('bcrypt');

module.exports = {
    async matchUser(userName, password) {
        const user = await Database.connection.select('userName', 'password').from('users')
            .where('userName', '=', userName);
        if (user.length == 0) {
            return false;
        }
        const samePassword = bcrypt.compareSync(password, user[0].password);
        if (!samePassword) {
            return false;
        }
        return true;
    }
}