var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('../parseUtilities.js').parseHeaders;

var Recipe = ParseModel.extend({

});

var RecipeCollection = ParseCollection.extend({

});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
