var Backbone = require('backbone');

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId',

  toPointer: function(className, objectId){
    var pointerObject = {
      '_type': 'Pointer',
      className: className,
      objectId: objectId,
    };

    return pointerObject;
  },

  save: function(attributes, options){

    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;

    return Backbone.Model.prototype.save.apply(this, arguments);
  }
});

var ParseCollection = Backbone.Collection.extend({
  whereClause: {field: '', className: '', objectId: ''},

  parseWhere: function(field, className, objectId){
    this.whereClause = {
      field: field,
      className: className,
      objectId: objectId,
      '__type': 'Pointer',
    };

    return this;
  },

  url: function(){
    var url = this.baseUrl;

    if(this.whereClause.field){
      var field = this.whereClause.field;
      delete this.whereClause.field;
      url += '?where={"' + field + '":' + JSON.stringify(this.whereClause) + '}';
    }

    return url;
  },

  parse: function(data){
    return data.results;
  },
});

module.exports = {
  ParseModel: ParseModel,
  ParseCollection: ParseCollection
};
