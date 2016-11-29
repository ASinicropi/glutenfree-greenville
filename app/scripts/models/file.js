var Backbone = require('backbone');

var ParseModel = require('./parseSetup').ParseModel;

var parseHeaders = require('../parseUtilities').parseHeaders;

var FileModel = ParseModel.extend({
  defaults: {
    name: 'default.jpg'
  },
  urlRoot: function(){
    var url = 'https://sinicropi.herokuapp.com/files/'

    return url + encodeURIComponent(this.get('name'));
  },
  save: function(attributes, options){
    options = options || {};
    attributes = attributes || {};

    this.set(attributes);

    var image = this.get('data');

    options.data = image;

    options.beforeSend = function(request) {
      request.setRequestHeader("X-Parse-Application-Id", 'ASinicropi');
      request.setRequestHeader("X-Parse-REST-API-Key", 'apollo');
      request.setRequestHeader("Content-Type", image.type);
    };

    options.processData = false;
    options.contentType = false;

    return Backbone.Model.prototype.save.call(this, attributes, options);
  },
});

module.exports = {
  FileModel: FileModel
};
