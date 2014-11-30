/**
 * Created by mdemo on 14/11/24.
 */

var Vue = require('vue');
var Router = require('director').Router;
var app = new Vue(require('./app.vue'));
var router = new Router();

router.on('/', function () {
  window.scrollTo(0, 0);
  app.view = 'cards-view';
});

router.init('/');
