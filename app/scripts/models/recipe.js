var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;
var parseHeaders = require('../parseUtilities').parseHeaders;

var Recipe = ParseModel.extend({

});

var RecipeCollection = ParseCollection.extend({

});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
