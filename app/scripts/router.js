var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parseHeaders = require('./parseUtilities.js').parseHeaders;

var UserContainer = require('./components/accounts.jsx').UserContainer;
var MainContainer = require('./components/main.jsx').MainContainer;
var DirectoryContainer = require('./components/directory.jsx').DirectoryContainer;
var DirectoryDetailContainer = require('./components/directoryDetail.jsx').DirectoryDetailContainer;
var BlogContainer = require('./components/blog.jsx').BlogContainer;
var BlogDetailContainer = require('./components/blogDetail.jsx').BlogDetailContainer;
var AboutTemplate = require('./templates/about/base.jsx').AboutTemplate;
var ContactContainer = require('./components/contact.jsx').ContactContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'directory/': 'restaurantList',
    'directory/:id/': 'restaurantDetail',
    'blog/': 'blogList',
    'blog/:id/': 'blogDetail',
    'account/': 'account',
    'about/': 'about',
    'contact/': 'contact'
  },
  initialize: function(){
    parseHeaders('ASinicropi', 'apollo');
  },
  index: function(){
    ReactDOM.render(
      React.createElement(MainContainer),
      document.getElementById('app')
    );
  },
  restaurantList: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryContainer, {restaurantId: restaurantId}),
      document.getElementById('app')
    );
  },
  restaurantDetail: function(restaurantId){
    ReactDOM.render(
      React.createElement(DirectoryContainer, {restaurantId: restaurantId}),
      document.getElementById('app')
    );
  },
  blogList: function(blogId){
    ReactDOM.render(
      React.createElement(BlogContainer, {blogId: blogId}),
    );
  },
  blogDetail: function(blogId){
    ReactDOM.render(
      React.createElement(BlogDetailContainer, {blogId: blogId}),
    );
  },
  account: function(){
    ReactDOM.render(
      React.createElement(UserContainer),
      document.getElementById('app')
    );
  },
  about: function(){
    ReactDOM.render(
      React.createElement(AboutTemplate),
      document.getElementById('app')
    );
  },
  contact: function(){
    ReactDOM.render(
      React.createElement(ContactContainer),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = router;
