var React = require('react');
var Backbone = require('backbone');

var Business = require('../models.directory.js').Business;
var BusinessCollection = require('../models.directory.js').BusinessCollection;

var DirectoryForm = React.createClass({
    getInitialState: function(){

      var rating_img_url = '',
      var name = '',
      var url = '',
      var display_phone = '',
      var = display_address: '',
      var is_closed = '',
      var categories = [],

      return {
        rating_img_url: rating_img_url,
        name: name,
        url: url,
        display_phone: display_phone,
        display_address: '',
        is_closed: '',
        categories: [],
      }
    }
})
