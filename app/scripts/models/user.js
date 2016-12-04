var $ = require('jquery');
var Backbone = require('backbone');

var FileModel = require('./file').FileModel;
var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;
var parseHeaders = require('../parseUtilities').parseHeaders;

var User = ParseModel.extend({
  defaults: {
    'name': '',
    'email': '',
    'password': '',
    'username': '',
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/users',
  baseurl: 'https://sinicropi.herokuapp.com/',

  userAuth: function(){
    parseHeaders('ASinicropi', 'slumber', this.get('sessionToken'));
    return this;
  },
  logIn: function(username, password, callback){
    var self = this;
    var url = this.baseurl + 'login?username=' + username + '&password=' + encodeURI(password);
    this.set({username: username, password: password});

    $.ajax(url).then(function(response){
      localStorage.setItem('sessionToken', response.sessionToken);
      localStorage.setItem('user', JSON.stringify(response));
      localStorage.setItem('username', response.username);
      localStorage.setItem('objectId', response.objectId);

      callback(response);
    });
  },

  signUp: function(name, email, username, password, callback){
   var self = this;
   var url = this.baseUrl + 'users';
   this.set({name: name, email: email, username: username, password: password});

   this.save().then(function(data){
     localStorage.setItem('user', JSON.stringify(self.toJSON()));

     callback(self);
   });
  },

  sendMessage: function(name, email, subject, message, callback){
    var self = this;
    var url = this.baseUrl + 'classes/Contact';
    this.set({name: name, email: email, subject: subject, message: message});

    this.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(self.toJSON()));

      callback(self);
    });
  },

  current: function(){
   var user = new User(JSON.parse(localStorage.getItem('user')));

   return user;
  }
});

module.exports = {
  User: User
};
