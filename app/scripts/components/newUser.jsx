var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var User = require('../models/user').User;
var BaseLayout = require('.components/templates/base.jsx');
var parseHeaders = require('../parseUtilities.js').parseHeaders;
require('../router').router;

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      username: '',
      password: ''
    };
  },
  handleEmail: function(e){
    e.preventDefault();

    this.setState({email: e.target.value});
  },
  handleUsername: function(e){
    e.preventDefault();

    this.setState({username: e.target.value});
  },
  handlePassword: function(e){
    e.preventDefault();

    this.setState({password: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();

    var signupData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleSubmit(signupData);
    this.setState({email: '', username: '', password: ''});
  },

  render: function(){
    return (
      <div className="col-md-6 col-md-offset-4">
        <h2>Create your accout here!</h2>
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
});
