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
    rating_img_url: '',
    url: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    is_closed: '',
    categories: [],
  },

  urlRoot: 'https://sinicropi.herokuapp.com/classes/Directory',

  userAuth: function(){
    parseHeaders('ASinicropi', 'slumber', this.get('sessionToken'));
    return this;
  },

});

var RestaurantCollection = ParseCollection.extend({

  model: Restaurant,
  baseUrl: 'https://sinicropi.herokuapp.com/classes/Directory/'
});

module.exports = {
  Restaurant: Restaurant,
  RestaurantCollection: RestaurantCollection
};
