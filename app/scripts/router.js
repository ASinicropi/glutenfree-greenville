var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parseHeaders = require('./parseUtilities').parseHeaders;

var UserContainer = require('./components/account.jsx').UserContainer;
var NewUserContainer = require('./components/newUser.jsx').NewUserContainer;
var HomeContainer = require('./components/templates/home/base.jsx').HomeContainer;
var DirectoryListContainer = require('./components/directory.jsx').DirectoryListContainer;
var DirectoryDetailContainer = require('./components/directoryDetail.jsx').DirectoryDetailContainer;
var BlogContainer = require('./components/blog.jsx').BlogContainer;
var BlogDetailContainer = require('./components/blogDetail.jsx').BlogDetailContainer;
var AboutContainer = require('./components/templates/about/base.jsx').AboutContainer;
var MessageContainer = require('./components/contact.jsx').MessageContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'account/': 'account',
    'account/register': 'accountNew',
    'directory/:id/': 'restaurantDetail',
    'directory/': 'restaurantList',
    'blog/:id/': 'blogDetail',
    'blog/': 'blogList',
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

  restaurantList: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryListContainer, {router: this, restaurantId: restaurantId}),
      document.getElementById('app')
    );
  },

  restaurantDetail: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryListContainer, {router: this, restaurantId: restaurantId}),
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

  about: function(){
    ReactDOM.render(
      React.createElement(AboutContainer, {router: this}),
      document.getElementById('app')
    );
  },

  contact: function(){
    ReactDOM.render(
      React.createElement(MessageContainer, {router: this}),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = {
  router: router
};
