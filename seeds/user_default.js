/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');

exports.seed = async function(knex) {
  const salt = await bcrypt.genSaltSync();
  const passwordHash = await bcrypt.hashSync('admin', salt);
  const uuid = randomUUID();

  const user = {
    uuid,
    fullName: 'Administrator',
    userName: 'admin',
    password: passwordHash
  }
  const exist = await knex('users').select('*').where('userName', '=', user.userName);

  if (exist.length == 0) {
    return knex('users').insert([
      user
    ]);
  };
  console.log('Usuario já existe! ', exist );
};
