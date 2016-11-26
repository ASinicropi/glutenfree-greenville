var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user.js').User;
var BaseLayout = require('./templates/base.jsx');

require('../router');

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      email: '',
      username: '',
      password: ''
   };
 },
 handleName: function(e){
   e.preventDefault();

   this.setState({name: e.target.value});
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

   var name = this.state.name;
   var email = this.state.email;
   var username = this.state.username;
   var password = this.state.password;

   this.props.signUpNewUser(name, email, username, password);
   this.setState({name: '', email: '', username: '', password: ''});
  },
  render: function(){

    return (
      <div className="col-md-6 col-md-offset-4">
        <h2>Create your accout here!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input onChange={this.handleName} value={this.state.name} type="name" className="form-control" id="Name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input onChange={this.handleEmail} value={this.state.email} type="email" className="form-control" id="Email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="Username">Username:</label>
            <input onChange={this.handleUsername} value={this.state.username} type="username" className="form-control" id="Username" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="Password1">Password:</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="Password1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Sign Up!</button>
        </form>
      </div>
    )
  }
});

var NewUserContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },

  signUpNewUser: function(name, email, username, password){
    this.state.user.set({name: name, email: email, username: username, password: password});
    this.state.user.signUp();
    },

    render: function(){
      return (
        <div className="container">
          <BaseLayout>
            <div className="row">
              <SignUpForm signUpNewUser={this.signUp}/>
            </div>
          </BaseLayout>
        </div>
        )
    }
});

module.exports = {
  NewUserContainer: NewUserContainer
};
