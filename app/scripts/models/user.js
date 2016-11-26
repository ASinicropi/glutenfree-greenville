var $ = require('jquery');
var Backbone = require('backbone');
var router = require('../router');

var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;
var FileModel = require('./file').FileModel;

var parseHeaders = require('../parseUtilities.js').parseHeaders;

var User = ParseModel.extend({
  defaults: {
    'name': '',
    'email': '',
    'password': '',
    'username': ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/users',
  login: function(username, password, callback){
    var self = this;
    var url = 'https://sinicropi.herokuapp.com/' + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);

    $.ajax(url).then(function(response){
      localStorage.setItem('sessionToken', response.sessionToken);
      localStorage.setItem('userSession', JSON.stringify(response));
      localStorage.setItem('userID', response.objectId);
      localStorage.setItem('username', response.username);

      parseHeaders('ASinicropi', 'apollo', response.sessionToken);

      callback(response);
    });
  },
  signUp: function(callback){
    var self = this;
    var url = 'https://sinicropi.herokuapp.com/' + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);
    $.post(url, {
      'name': this.get('name'),
      'email': this.get('email'),
      'username': this.get('username'),
      'password': this.get('password')
    }).then(function(){
    self.login(self.get('username'), self.get('password'), callback);
  });
},
},{
  logout: function(){
    localStorage.clear();
  }
});

module.exports = {
  User: User
};
