var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var Business = require ('../models/directory.js').Business;
var BusinessCollection = require ('../models/directory.js').BusinessCollection;
var parseHeaders = require('../parseUtilities').parseHeaders;

var BusinessHeading = React.createClass({
  render: function(){
    return (
      <div>
        <h1>this.props.</h1>
      </div>
    )
  }
})
