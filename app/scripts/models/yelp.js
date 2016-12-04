var $ = require('jquery');
var Backbone = require('backbone');

var YelpSearch = Backbone.Model.extend({
  urlRoot: 'https://yelp-proxy-server1.herokuapp.com/search?term=Gluten+Free+Restaurants&location=Greenville+SC'
});

var YelpSeachCollection = Backbone.Collection.extend({
  model: YelpSearch,
  url: 'https://yelp-proxy-server1.herokuapp.com/search?term=Gluten+Free+Restaurants&location=Greenville+SC',
  parse: function(data){
    return data.businesses;
  }
});

module.exports = {
  YelpSearch: YelpSearch,
  YelpSeachCollection: YelpSeachCollection
};
