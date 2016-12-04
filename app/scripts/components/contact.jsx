var React = require('react');
var Backbone = require('backbone');

var Message = require('../models/contact.js').Message;
var MessageCollection = require('../models/contact.js').Message;
var User = require('../models/user.js').User;

var BaseLayout = require('./templates/base.jsx').BaseLayout;

var MessageForm = React.createClass({
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
  handleSubjectInput: function(e){
    e.preventDefault();

    this.setState({subject: e.target.value})
  },
  handleMessageInput: function(e){
    e.preventDefault();

    this.setState({message: e.target.value});
  },
  handleMessageSuccess: function(e){
    e.preventDefault();

    this.setState
  },
  handleSubmit: function(e){
    e.preventDefault();

    if (localStorage.user) {

      var name = this.state.name;
      var email = this.state.email;
      var subject = this.state.subject;
      var message = this.state.message;
      console.log(name);

      // handle vales from form here

      this.props.handleSubmit(name, email, subject, message, function(){
      });

      this.setState({name: '', email: '', subject: '', message: ''});

    } else {
      alert('test');
    }
   },

   render: function(){
     return (
       <form onSubmit={this.handleSubmit}>
        <div className="col-md-6">
          <div className="form-group" id="formOne">
            <input onChange={this.handleNameInput} value={this.state.name} type="name" className="form-control" id="Name" placeholder="Name"/>
          </div>

          <div className="form-group" id="formTwo">
           <input onChange={this.handleEmailInput} value={this.state.email} type="email" className="form-control" id="Email" placeholder="Email"/>
          </div>

          <div className="form-group" id="formThree">
            <input onChange={this.handleSubjectInput} value={this.state.subject} type="subject" className="form-control" id="Subject" placeholder="Subject"/>
         </div>
        </div>

        <div className="col-md-6">
          <textarea className="form-control" rows="5" placeholder="Message"></textarea>
          <button id="contactButton" className="btn btn-primary btn-sm">Submit</button>
        </div>
       </form>
     )
   }
});

var MessageContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    }
  },

  handleSubmit: function(name, email, subject, message){
    this.state.user.sendMessage(name, email, subject, message);
  },

  render: function(){
    return (
      <div className="container">
        <BaseLayout>
          <div className="col-md-7 col-md-offset-2" id="contactScreen">
            <h2 id="contactHeader">Leave a Message&#33;</h2>

            <MessageForm handleSubmit={this.handleSubmit}/>
          </div>
        </BaseLayout>
      </div>
    )
  }
});

module.exports = {
  MessageContainer: MessageContainer
};
