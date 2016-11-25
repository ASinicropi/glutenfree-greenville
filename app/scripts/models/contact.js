var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('./parseUtilities.js').parseHeaders;

var ContactForm = ParseModel.extend({

});

var ContactFormCollection = ParseCollection.extend({

});

module.exports = {
  ContactForm: ContactForm,
  ContactFormCollection: ContactFormCollection
};
