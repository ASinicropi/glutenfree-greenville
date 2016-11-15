var $ = require('jquery');
var Backbone = require('backbone');
var router = require('../router');

var parseHeaders = require('../parseUtilities').parseHeaders;

var ParseUser = Backbone.Model.extend({
  idAttributes: 'objectId'
}, {
  // methods
});

var User = ParseUser.extend({
  auth: function(){
    // set headers
  }
})
