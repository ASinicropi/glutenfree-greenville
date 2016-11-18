var $ = require('jquery');
var Backbone = require('backbone');

var parseHeaders = require('../parseUtilities.js').parseHeaders;
var ParseModel = require('./parseModels.js').ParseModel;

var User = ParseModel.extend({
  defaults: {
    'name': '',
    'email': '',
    'password': '',
    'username': ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/users',

  login: function(username, password){
    var url = this.urlRoot + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);
    var self = this;

    $.ajax(url).then(function(response){
      localStorage.setItem('sessionToken', response.sessionToken);
      localStorage.setItem('userSession', JSON.stringify(response));
      localStorage.setItem('userID', response.objectId);
      localStorage.setItem('name', response.name);
      router.navigate('', {trigger: true});

      parseHeaders('ASinicropi', 'apollo', response.sessionToken);
    });
  },
  signUp: function(){
    var self = this;

    this.save().then(function(data){
      self.set('password', '')
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
      router.navigate('account/', {trigger: true});
    });
  }
});

module.exports = {
  User: User
};
