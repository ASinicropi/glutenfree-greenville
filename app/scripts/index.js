var $ = require('jquery');
var Backbone = require('backbone');

var HomeContainer = require('./components/templates/home/base.jsx').HomeContainer;

require('./router');

$(function(){
  Backbone.history.start();
});
