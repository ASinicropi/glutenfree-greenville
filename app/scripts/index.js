var $ = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');
require('bootstrap-sass/assets/javascripts/bootstrap.min.js');
require('./router.js');

$(function(){
  Backbone.history.start();
});
