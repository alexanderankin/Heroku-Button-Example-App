var expect = require('chai').expect;

var knex = require('../db').getKnex();

describe('it queries different db', () => {
  before(async () => {
    try { await knex.schema.dropTableIfExists('data'); } catch (e) {}
    await knex.schema.createTable('data', t => {
      t.increments();
      t.string('item');
    });
    await knex('data').insert({
      item: 'Lorem ipsum deserunt in nulla.'
    });
  });
  it('test', async () => {
    var rows = await knex('data').select('*');
    expect(rows).to.be.ok;
    expect(rows.length).to.equal(1);
    expect(rows[0].item).to.contain('Lorem');
  })
  after(async () => await knex.destroy());
});