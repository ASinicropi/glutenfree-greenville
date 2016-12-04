var React = require('react');
var Backbone = require('backbone');
var User = require('../models/user.js').User;

var BaseLayout = require('./templates/base.jsx').BaseLayout;

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      email: '',
      username: '',
      password: '',
   };
 },
 handleNameInput: function(e){
   e.preventDefault();

   this.setState({name: e.target.value})
 },
 handleEmailInput: function(e){
   e.preventDefault();

   this.setState({email: e.target.value})
 },
 handleUsernameInput: function(e){
   e.preventDefault();

   this.setState({username: e.target.value})
 },
 handlePasswordInput: function(e){
   e.preventDefault();

   this.setState({password: e.target.value});
 },
 handleSignUp: function(e){
   e.preventDefault();

    var name = this.state.name;
    var email = this.state.email;
    var username = this.state.username;
    var password = this.state.password;

   this.props.handleSignUp(name, email, username, password, function(){
     Backbone.history.navigate('account/', {trigger: true});
   });

   this.setState({name: '', email: '', username: '', password: ''});
  },

  render: function(){

    return (
      <form onSubmit={this.handleSignUp} id="signup">
        <div className="form-group">
          <input type="file" id="File"/>
          <p id="file-signup" className="help-block">Please upload profile image&#33;</p>
        </div>

        <div className="form-group">
          <input onChange={this.handleNameInput} value={this.state.name} type="name" className="form-control" id="name-signup" placeholder="Name"/>
        </div>

        <div className="form-group">
          <input onChange={this.handleEmailInput} value={this.state.email} type="email" className="form-control" id="email-signup" placeholder="Email"/>
        </div>

        <div className="form-group">
          <input onChange={this.handleUsernameInput} value={this.state.username} type="username" className="form-control" id="username-signup" placeholder="Username"/>
        </div>

        <div className="form-group">
          <input onChange={this.handlePasswordInput} value={this.state.password} type="password" className="form-control" id="password-signup" placeholder="Password"/>
        </div>

        <div id="form-box-signup">
          <div className="checkbox">
            <label id="Newsletter">
              <input type="checkbox">Sign up for Newsletter</input>
            </label>
          </div>
          <button id="newUserButton" className="btn btn-primary btn-sm" type="submit">Sign Up&#33;</button>
        </div>
      </form>
    )
  }
});

var NewUserContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },

  handleSignUp: function(name, email, username, password){
    this.state.user.signUp(name, email, username, password);
  },

  render: function(){
    return (
      <div className="container">
        <BaseLayout>
          <div className="col-md-6 col-md-offset-3">
            <div className="row" id="signupScreen">
              <div>
                <h2 id="signupHeader">Create your accout here&#33;</h2>
                <SignUpForm handleSignUp={this.handleSignUp}/>
              </div>
            </div>
          </div>
        </BaseLayout>
      </div>
      )
  }
});

module.exports = {
  NewUserContainer: NewUserContainer
};
