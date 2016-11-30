var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;
var parseHeaders = require('../parseUtilities').parseHeaders;

var Restaurant = ParseModel.extend({
  default: {
    id: '',
    name: '',
    image_url: '',
    url: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    hours: '',
    categories: [],
  },

  urlRoot: 'https://sinicropi.herokuapp.com/classes/Directory'
});

var RestaurantCollection = ParseCollection.extend({

  model: Restaurant,
  baseUrl: 'https://sinicropi.herokuapp.com/classes/Directory/'
});

module.exports = {
  Restaurant: Restaurant,
  RestaurantCollection: RestaurantCollection
};
