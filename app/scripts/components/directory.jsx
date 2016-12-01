var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

var BaseLayout = require('./templates/base.jsx').BaseLayout;
var YelpSeachCollection = require('../models/yelp.js').YelpSeachCollection;

var SearchItem = React.createClass({
  render: function(){
    var business = this.props.business;
    return (
      <div>

      </div>
    )
  }
});

var SearchList = React.createClass({

  render: function(){
    var yelpData = this.props.Collection.map(function(business){

      var businesses = business.get('businesses');

      return businesses.map(function(business){
        return <SearchItem key={business.id} business={business}/>
      });

      return (
        <div>
          {yelpData}
        </div>
      )
    });
  }
});

var DirectoryListContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new YelpSeachCollection()
    }
  },

  componentWillUnmount: function(){
    // var collection = this.state.
  },

  render: function(){
    return (
      <h1>test</h1>
    )
  }


});

module.exports = {
  DirectoryListContainer: DirectoryListContainer
};
