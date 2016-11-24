var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('../parseUtilities.js').parseHeaders;

var Blog = ParseModel.extend({
  default: {
    name: '',
    content: '',
    dateCreated: ''
  },

  urlRoot: 'https://sinicropi.herokuapp.com/classes/Blog/'

});

var BlogCollection = ParseCollection.extend({
  model: Blog,
  baseUrl: 'https://sinicropi.herokuapp.com/classes/Blog/'
});

module.exports = {
  Blog: Blog,
  BlogCollection: BlogCollection
};
