var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;
var parseHeaders = require('../parseUtilities').parseHeaders;

var Business = ParseModel.extend({

  urlRoot: 'https://sinicropi.herokuapp.com/classes/Directory'
});

var BusinessCollection = ParseCollection.extend({

  model: Business,
  baseUrl: 'https://sinicropi.herokuapp.com/classes/Directory/'
});

module.exports = {
  Business: Business,
  BusinessCollection: BusinessCollection
};
