var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('../parseUtilities.js').parseHeaders;

var Message = ParseModel.extend({
  defaults: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/classes/Contact',
});

var MessageCollection = ParseCollection.extend({
  Model: Message,

  baseUrl: 'https://sinicropi.herokuapp.com/classes/Contact'

});

module.exports = {
  Message: Message,
  MessageCollection: MessageCollection
};
