const Database = require('../../database/index');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');

module.exports = {
    async findUserByUUID(uuid, columns = '*') {
        try {
            const user = await Database
                .connection
                .select(columns)
                .from('users')
                .where('uuid', '=', uuid);

            if (user.length == 0) {
                return false;
            }
            return user[0];
        } catch (error) {
            console.log('[findUserByUUID] -> error: ', error);
            return 'code_error_db'
        }

    },
    async findUserByUsername(userName, columns = '*') {
        try {
            const user = await Database
                .connection
                .select(columns)
                .from('users')
                .where('userName', '=', userName);

            if (user.length == 0) {
                return false;
            }
            return user[0];
        } catch (error) {
            console.log('[findUserByUsername] error:', error);
            return 'code_error_db';
        }
    },
    async saveNewUser({ userName, fullName, password }) {
        const salt = await bcrypt.genSaltSync();
        const passwordHash = await bcrypt.hashSync(password, salt);
        const uuid = randomUUID();
        const data = {
            uuid,
            userName,
            fullName,
            password: passwordHash
        }
        try {
            const result = await Database
                .connection('users')
                .insert(data);
            console.log('[saveNewUser] -> result', result);
            return uuid;
        } catch(err) {
            console.log('[saveNewUser] -> err', err);
            return 'code_error_db'
        }
    }
}