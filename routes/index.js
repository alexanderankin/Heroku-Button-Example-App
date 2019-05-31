var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

router.get('/add', async function(req, res, next) {
  var knex = db.getKnex();
  await knex('data').insert({ item: 'another Laboris ut duis cupidatat.'});
  res.redirect('/list');
});

router.get('/list', async function (req, res, next) {
  var knex = db.getKnex();
  var list = await knex('data').select('item');
  res.render('list', {
    title: 'Express | List',
    list: list.map(el => el.item)
  });
})
router.get('/env', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    env: process.env
  });
});

module.exports = router;
