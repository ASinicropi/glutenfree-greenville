var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parseSetup').ParseModel;
var ParseCollection = require('./parseSetup').ParseCollection;

var parseHeaders = require('../parseUtilities').parseHeaders;

var User = ParseModel.extend({
  defaults: {
    'name': '',
    'email': '',
    'password': '',
    'username': ''
  },
  idAttribute: 'objectId',
  urlRoot: 'https://sinicropi.herokuapp.com/users',
  baseurl: 'https://sinicropi.herokuapp.com/',

  logIn: function(username, password, callback){

    var url = this.baseurl + 'login?username=' + username + '&password=' + encodeURI(password);
    var self = this;

    $.ajax(url).then(function(response){
      localStorage.set('sessionToken', response.sessionToken);
      localStorage.set('user', JSON.stringify(response));
      localStorage.set('username', response.username);
      localStorage.set('objectId', response.objectId);
      
      parseHeaders('ASinicropi', 'slumber', this.get('sessionToken'));
        return this;
      },
    })


      user.auth();

      localStorage.setItem('user', JSON.stringify(user.toJSON()));

      callback(user);
    });
 },

 signUp: function(username, password, callback){

   var user = new User();
   url = this.baseUrl + 'users';

   user.save().then(function(){
     user.auth();
     localStorage.setItem('user', JSON.stringify(self.toJSON()));

     callback(user);
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
