require('dotenv').config();
const knex = require('knex');

const app = require('./src/server');
const Database = require('./database/index');

const configuration = require('./knexfile');

async function start() {
    await Database.createConnection(knex, configuration[process.env.NODE_ENV]);
    app.listen(process.env.PORT, () => {
        console.log('Server running on Port: ', process.env.PORT);
    });
}

start();