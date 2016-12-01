var React = require('react');
var Backbone = require('backbone');

var Contact = require('../models/contact.js').Contact;
var ContactCollection = require('../models/contact.js').ContactCollection;
var User = require('../models/user.js').User;

var parseHeaders = require('../parseUtilities.js').parseHeaders;

var ContactForm = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      username: '',
      subject: '',
      message: '',
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
  handleSubjetInput: function(e){
    e.preventDefault();

    this.setState({subject: e.target.value})
  },
  handleMessageInput: function(e){
    e.preventDefault();

    this.setState({message: e.target.value});
  },
  newUser: function(e){
    e.preventDefault();

    Backbone.history.navigate('account/register', {trigger: true});
  },
  handleSubmit: function(e){
    e.preventDefault();

    var name = this.state.name;
    var email = this.state.email;
    var subject = this.state.subject;
    var message = this.state.message;

    this.props.handleSignUp(name, email, subject, message, function(){
      Backbone.history.navigate('account/', {trigger: true});
    });

    this.setState({name: '', email: '', subject: '', message: ''});
   },

   render: function(){
     return (
       <form>

       </form>
     )
   }
});

// var ContactContainer  = React.createClass({
//
// });
