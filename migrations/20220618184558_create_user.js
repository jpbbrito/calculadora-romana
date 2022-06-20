/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exist = await knex.schema.hasTable('users');
    if (!exist) {
        return knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.uuid('uuid').notNullable();
            table.string('userName', 255).unique().notNullable();
            table.string('fullName', 255).notNullable();
            table.string('password', 255).notNullable();
            table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
            table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
        });
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
