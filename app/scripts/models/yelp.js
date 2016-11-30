var $ = require('jquery');
var Backbone = require('backbone');

var yelpData = Backbone.Model.extend({

  url: 'https://yelp-proxy-server1.herokuapp.com/search?term=gluten-free&location=Greenville%20SC'

});

var yelpCollection = Backbone.collection.extend({

  model: yelpData,
  url: 'https://yelp-proxy-server1.herokuapp.com/search'

});

module.exports = {
  yelpData: yelpData,
  yelpCollection: yelpCollection
};
