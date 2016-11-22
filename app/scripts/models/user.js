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
  baseUrl: 'https://sinicropi.herokuapp.com/',

  login: function(username, password, callback){
    var url = this.baseUrl + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);
    var self = this;

    $.ajax(url).then(function(response){
      localStorage.setItem('sessionToken', response.sessionToken);
      localStorage.setItem('userSession', JSON.stringify(response));
      localStorage.setItem('userID', response.objectId);
      localStorage.setItem('name', response.name);

      parseHeaders('ASinicropi', 'apollo', response.sessionToken);

      callback(response);
    });
  },
  current: function(){
    var userData = localStorage.getItem('user');

    if(!userData || !JSON.parse(userData).token){
      return undefined;
    }
    return new User(JSON.parse(userData));
  },
  signUp: function(callback){
    var self = this, url = this.baseUrl + 'users';
    $.post(url, {
      'name': this.get('name'),
      'email': this.get('email'),
      'username': this.get('username'),
      'password': this.get('password')
    }).then(function(data){
      self.login(set.get('username'), self.get('password'), callback);
    });
  },
},{
  logout: function(){
    var url = baseUrl + 'logout/';
    $.post(url).then(function(){
      localStorage.clear();
    });
  }
});

module.exports = {
  User: User
};
