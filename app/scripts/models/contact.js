var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup.js').ParseModel;
var ParseCollection = require('./parseSetup.js').ParseCollection;
var parseHeaders = require('../parseUtilities.js').parseHeaders;

var Contact = ParseModel.extend({
  defaults: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/classes/Contact',

  userAuth: function(){
    parseHeaders('ASinicropi', 'slumber', this.get('sessionToken'));
    return this;
  },
  validate: function(attrs, options) {

    if(response.name) {
        this.trigger('name_check',response.name);
    }
    if(response.email) {
        this.trigger('email_check',response.email);
    }

    errors = [];

      if (attrs.first_name == '')
          errors.push({name: 'name', error: 'Please enter your name'});

      if (!email_filter.test(attrs.email))
          errors.push({email: 'email', error: 'Please enter a valid email address'});

      if (attrs.password == '')
          errors.push({name: 'password', error: 'Please provide a password.'});

      if(errors.length > 0)
        return errors;
      },
});

var ContactCollection = ParseCollection.extend({
  Model: Contact,

  baseUrl: 'https://sinicropi.herokuapp.com/classes/Contact'

});

module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
};
