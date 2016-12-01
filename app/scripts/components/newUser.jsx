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
        <div className ="form-group">
          <label htmlForfor="InputFile">Image upload:</label>
          <input type="InputFile" id="file"/>
        </div>
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input onChange={this.handleNameInput} value={this.state.name} type="name" className="form-control" id="Name" placeholder="Name"/>
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input onChange={this.handleEmailInput} value={this.state.email} type="email" className="form-control" id="Email" placeholder="Email"/>
        </div>

        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input onChange={this.handleUsernameInput} value={this.state.username} type="username" className="form-control" id="Username" placeholder="Username"/>
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input onChange={this.handlePasswordInput} value={this.state.password} type="password" className="form-control" id="Password1" placeholder="Password"/>
        </div>

        <button id="newUserButton" className="btn btn-primary" type="submit">Sign Up!</button>
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
          <div className="row">
            <h2>Create your accout here!</h2>
            <SignUpForm handleSignUp={this.handleSignUp}/>
          </div>
        </BaseLayout>
      </div>
      )
  }
});

module.exports = {
  NewUserContainer: NewUserContainer
};
