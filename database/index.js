class Database {
    static connection;
    constructor() {

    }
    static async createConnection(knex, configuration) {
        console.log('[Database] configuration.connection :', configuration.connection);
        try {
            this.connection = await knex(configuration);
            console.log('[createConnection] Database working');
            return this.connection;
        } catch (errors) {
            console.log('[createConnection] Error to connect DB ->', errors);
        }
    }
    static getConnection() {
        return Database.connection;
    }
}

module.exports = Database;