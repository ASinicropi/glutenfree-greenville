var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('../parseUtilities.js').parseHeaders;

var Directory = ParseModel.extend({
  //idAttribute: '_id',
  default: {
    id: '',
    name: '',
    image_url: '',
    url: '',
    price: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    hours: '',
    categories: ''
  },

  urlRoot: 'https://sinicropi.herokuapp.com/classes/Directory/'

});

var DirectoryCollection = ParseCollection.extend({
  model: Directory,
  baseUrl: 'https://sinicropi.herokuapp.com/classes/Directory/'

});

module.exports = {
  Directory: Directory,
  DirectoryCollection: DirectoryCollection
};
