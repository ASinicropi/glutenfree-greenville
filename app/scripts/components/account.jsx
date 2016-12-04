var React = require('react');
var Backbone = require('backbone');
var User = require('../models/user.js').User;

var BaseLayout = require('./templates/base.jsx').BaseLayout;

var LogInForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: '',
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

    var username = this.state.username;
    var password = this.state.password;

    this.props.handleLogIn(username, password);

    this.setState({username: '', password: ''});
    },

    render: function(){
      return (
        <form onSubmit={this.handleLogIn} id="login">
          <div className="form-group">
            <input onChange={this.handleUsernameInput} value={this.state.username} className="form-control" name="username" id="username-login" type="username" placeholder="Username"/>
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordInput} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Password"/>
          </div>

          <div>
            <button id="logInButton" className="btn btn-primary btn-sm" type="submit">Log In&#33;</button>
            <div id="link-signup">
              <span id="account-signup">Don't have an account&#63;</span>
              <a href="#" onClick={this.newUser} id="account-link">&nbsp;Create New Account Here&#33;</a>
            </div>
          </div>
        </form>
      )
    }
});

var UserContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },

  handleLogIn: function(username, password){
    this.state.user.logIn(username, password, function(){
        Backbone.history.navigate('directory/', {trigger: true});
    });
  },

  render: function(){
    return (
      <div className="container">
        <BaseLayout>
          <div className="col-md-6 col-md-offset-3">
            <div className="row" id="loginScreen">
              <div>
                <h2 id="loginHeader">Login Here&#33;</h2>

                <LogInForm handleLogIn={this.handleLogIn}/>
              </div>
            </div>
          </div>
        </BaseLayout>
      </div>
    )
  }
});

module.exports = {
  UserContainer: UserContainer
};
