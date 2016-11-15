var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var UserContainer = require('./components/accounts.jsx').UserContainer;
var MainContainer = require('./components/main.jsx').MainContainer;
var DirectoryContainer = require('./components.directory.jsx').DirectoryContainer;
var BlogContainer = require('./components.blog.jsx').BlogContainer;
var BlogDetailContainer = require('./components/blogDetail.jsx').BlogDetailContainer;
var AboutContainer = require('./components.about.jsx').AboutContainer;
var ContactContainer = require('./components.contact.jsx').ContactContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/directory/': 'restaurantList',
    '/directory/:id/': 'restaurant',
    '/blog/': 'blogList',
    '/blog/:id/': 'blogDetail',
    '/about/': 'about',
    '/contact/': 'contact',
    '/account/': 'account',
  },

  initialize: function(){},

  index: function(){

  },
  
  account: function(){
    ReactDOM.render(
      React.createElement(UserContainer),
      document.getElementById('app')
    )
  },

});

var router = new AppRouter();

module.exports = router;
