var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parseHeaders = require('./parseUtilities').parseHeaders;

var UserContainer = require('./components/account.jsx').UserContainer;
var NewUserContainer = require('./components/newUser.jsx').NewUserContainer;
var HomeContainer = require('./components/home.jsx').HomeContainer;
var DirectoryContainer = require('./components/directory.jsx').DirectoryContainer;
var DirectoryDetailContainer = require('./components/directoryDetail.jsx').DirectoryDetailContainer;
//var BlogContainer = require('./components/blog.jsx').BlogContainer;
//var BlogDetailContainer = require('./components/blogDetail.jsx').BlogDetailContainer;
var BaseLayOutTemplate = require('./components/templates/base.jsx').BaseLayOutTemplate;
var AboutTemplate = require('./components/templates/about/base.jsx').AboutTemplate;
var ContactContainer = require('./components/contact.jsx').ContactContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'account/register': 'accountNew',
    'account/': 'account',
    'directory/:id/': 'restaurantDetail',
    'directory/': 'restaurantList',
    //'blog/:id/': 'blogDetail',
    //'blog/': 'blogList',
    'about/': 'about',
    'contact/': 'contact',
  },

  initialize: function(){
    parseHeaders('ASinicropi', 'slumber');
  },

  home: function(){
    ReactDOM.render(
      React.createElement(HomeContainer, {router: this}),
      document.getElementById('app')
    );
  },

  restaurantList: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryContainer, {router: this, restaurantId: restaurantId}),
      document.getElementById('app')
    );
  },

  restaurantDetail: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryContainer, {router: this, restaurantId: restaurantId}),
      document.getElementById('app')
    );
  },

  //blogList: function(blogId){
    //ReactDOM.render(
      //React.createElement(BlogContainer, {router: this, blogId: blogId}),
      //document.getElementById('app')
    //);
  //},

  //blogDetail: function(blogId){
    //ReactDOM.render(
      //React.createElement(BlogDetailContainer, {router: this, blogId: blogId}),
      //document.getElementById('app')
    //);
  //},

  account: function(){
    ReactDOM.render(
      React.createElement(UserContainer, {router: this}),
      document.getElementById('app')
    );
  },

  accountNew: function(){
    ReactDOM.render(
      React.createElement(NewUserContainer, {router: this}),
      document.getElementById('app')
    );
  },

  about: function(){
    ReactDOM.render(
      React.createElement(AboutTemplate, {router: this}),
      document.getElementById('app')
    );
  },

  contact: function(){
    ReactDOM.render(
      React.createElement(ContactContainer, {router: this}),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = {
  router: router
};
