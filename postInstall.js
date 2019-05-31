var db = require('../db');

(async function setup() {
  try { await knex.schema.dropTableIfExists('data'); } catch (e) {}
  await knex.schema.createTable('data', t => {
    t.increments();
    t.string('item');
  });
  await knex('data').insert({
    item: 'Lorem ipsum deserunt in nulla.'
  });
})().then(() => console.log('done'));
