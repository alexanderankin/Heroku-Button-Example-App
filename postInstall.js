var db = require('./db');

(async function setup() {
  var knex = db.getKnex();
  try { await knex.schema.dropTableIfExists('data'); } catch (e) {}
  await knex.schema.createTable('data', t => {
    t.increments();
    t.string('item');
  });
  await knex('data').insert({
    item: 'Lorem ipsum deserunt in nulla.'
  });
  await knex.destroy();
})().then(() => console.log('done'));
