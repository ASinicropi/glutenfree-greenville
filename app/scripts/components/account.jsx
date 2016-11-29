var React = require('react');
var Backbone = require('backbone');
var User = require('../models/user.js').User;

var BaseLayout = require('./templates/base.jsx');

var LogInForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleUsernameInput: function(e){
    e.preventDefault();

    this.setState({username: e.target.value})
  },
  handlePasswordInput: function(e){
    e.preventDefault();

    this.setState({password: e.target.value})
  },
  newUser: function(e){
    e.preventDefault();

    Backbone.history.navigate('account/register', {trigger: true});
  },
  handleLogIn: function(e){
    e.preventDefault();

    User.logIn(this.state.username, this.state.password, function(){
      Backbone.history.navigate('directory/', {trigger: true});
    });
  },

  render: function(){
    return (
      <form onSubmit={this.handleLogIn} id="login">
        <div className="form-group">
          <label htmlFor="username-login">Username:</label>
          <input onChange={this.handleUsernameInput} value={this.state.username} className="form-control" name="username" id="username-login" type="username" placeholder="username"/>
        </div>

        <div className="form-group">
          <label htmlFor="password-login">Password:</label>
          <input onChange={this.handlePasswordInput} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="password"/>
        </div>

        <div className="button-holder">
          <input onSubmit={this.handleLogIn} className="btn btn-primary" type="submit" value="Log In!"/>
          <span>I don't have an account.</span>
          <button onClick={this.newUser} className="btn btn-primary">Create an account!</button>
          </div>
      </form>
    );
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },
  logIn: function(username, password){
    this.state.user.set({username: username, password: password});
    this.state.user.logIn(username, password)
  },
  render: function(){
    return (
      <div className="container">
        <BaseLayout>
          <div className="row">
            <h2>Login Here!</h2>

            <LogInForm logIn={this.logIn}/>

          </div>
        </BaseLayout>
      </div>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
