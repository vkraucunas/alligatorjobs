var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require("../../../queries2");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alligator Jobs', user: req.user? req.user.fname: "" });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Alligator Job', user: req.user? req.user.fname: "" });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Alligator Job', user: req.user? req.user.fname: "" });
});

router.get('/cultures', function(req, res, next) {
  res.render('cultures', { title: 'Alligator Job', user: req.user? req.user.fname: "" });
});

router.get('/cultures/:id', function(req, res, next) {
  res.render('culture_profile', { title: 'Alligator Job', user: req.user? req.user.fname: "" });
});

router.get('/public/user/:id', function(req, res, next) {
  res.render('user', { title: 'Alligator Job', user: req.user? req.user.fname: "" });
});

module.exports = router;
