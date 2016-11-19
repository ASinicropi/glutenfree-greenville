var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var User = require('../models/user.js').User;
var BaseLayout = require('.components/templates/base.jsx');
var parseHeaders = require('../parseUtilities.js').parseHeaders;
require('../router').router;

var LogInForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleLogInForm: function(e){
    e.preventDefault();

    var username = this.state.username;
    var password = this.state.password;
    var router = this.props.router;

    this.props.logInForm(username, password, router);
  },
  handleUsername: function(e){
    this.setState({username: e.target.value})
  },
  handlePassword: function(e){
    this.setState({password: e.target.value})
  },
  handleSubmit: function(e){

  },
  newUser: function(e){
    e.preventDefault();
    this.props.router.navigate('account/register', {trigger: true});
  },
  render: function(){
    return (
      <div className="col-md-6 col-md-offset-4">
        <h2>Login Here!</h2>
        <form onSubmit={this.handleLogInForm} id="login">
          <div className="form-group">
            <label htmlFor="username-login">Username:</label>
            <input onChange={this.handleUsername} value={this.state.username} className="form-control" name="username" id="username-login" type="username" placeholder="username"/>
          </div>

          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <input onChange={this.handlePassword} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="password"/>
          </div>

          <div>
            <button id="login-button" className="btn" type="submit">Log In</button>
            <span>I don't have an account.</span>
            <button onClick={this.newUser} id="newuser-button" className="btn" type="submit">Create New Account</button>
          </div>
        </form>
      </div>
    );
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  logIn: function(username, password, router){
    this.state.user.set({username: username, password: password});
    this.state.user.logIn(username, password, router)
  },
  render: function(){
    return (
      <div className="container">
        <BaseLayout>
          <div className="row">
            <LogIn logIn={this.logIn} router={this.props.router}/>
          </div>
        </BaseLayout>
      </div>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
