var React = require('react');
var Backbone = require('backbone');
var _ = require('underscore');

var BaseLayout = require('./templates/base.jsx').BaseLayout;
var YelpSeachCollection = require('../models/yelp.js').YelpSeachCollection;

var SearchFilter = React.createClass({
  handleChange: function(e){
    this.props.selectCategory(e.target.value)
  },
  render: function(){
    var options = this.props.categories.map(function(category){
      return <option key={category.alias}>{category.title}</option>
    });

    return (
      <select onChange={this.handleChange}>
        <option value="empty">
          Category&#58;
        </option>
        {options}
      </select>
    )
  }
});

var SearchItem = React.createClass({
  render: function(){
    var business = this.props.business;
    var addressLineOne = business.attributes.location['display_address'][0];
    var addressLineTwo = business.attributes.location['display_address'][1];

    return (
        <div>
          <div className="row">
            <div className="col-md-4">
              <h4 id="yelpName">{business.get('name')}</h4>
            </div>

            <div className="col-md-1">
              <span id="yelpRating" className="badge">{business.get('rating')}</span>
            </div>
          </div>

          <div className="row">
            <p id="yelpPhone">{business.get('display_phone').substring(3)}</p>
          </div>

          <div className="row">
            <p id="yelpAddress">{addressLineOne}<br />{addressLineTwo}</p>
          </div>

        </div>
    )
  }
});

var SearchList = React.createClass({

  render: function(){
    var yelpData = this.props.collection.map(function(business){
        return <SearchItem key={business.get('id')} business={business}/>
    });

    return (
      <div>
        {yelpData}
      </div>
    );
  }
});

var DirectoryListContainer = React.createClass({
  getInitialState: function(){
    return {
      collection: new YelpSeachCollection(),
      categories: [],
      selectedCategory: 'empty',
    }
  },

  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;

    collection.fetch().then(function(){
      // get the unique list of categories
      console.log(collection);
      var rawCategories = _.uniq(_.flatten(collection.pluck('categories')));
      var categories = [];

      for(var i=0; i<rawCategories.length; i += 2){
        categories.push({
          title: rawCategories[i],
          alias: rawCategories[i+1]
        });
      }

      self.setState({
        collection: self.state.collection,
        categories: categories,
      })
    });
  },

  selectCategory: function(category){
    this.setState({selectedCategory: category})
  },

  render: function(){
    var self = this;
    var collection =  this.state.collection;

    if(this.state.selectedCategory != "empty"){
      collection = this.state.collection.filter(function(restaurant){
        var cat = _.flatten(restaurant.get('categories'));
        return cat.indexOf(self.state.selectedCategory) > -1;
      });
    }

    return (
      <div>
        <BaseLayout>
          <div className="col-md-4">
            <SearchFilter categories={this.state.categories} selectCategory={this.selectCategory}/>
          </div>
          <div className='col-md-5 col-md-offset-7'>
            <div className="panel panel-default" id="directoryPanel">
              <div className="panel-body">
                <SearchList collection={collection}/>
              </div>
            </div>
          </div>
        </BaseLayout>
      </div>
    )
  }
});

module.exports = {
  DirectoryListContainer: DirectoryListContainer
};
