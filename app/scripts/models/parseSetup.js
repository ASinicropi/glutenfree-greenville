var Backbone = require('backbone');

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId'

});

var ParseCollection = Backbone.Collection.extend({
  
});

module.exports = {
  ParseModel: ParseModel,
  ParseCollection: ParseCollection
};
