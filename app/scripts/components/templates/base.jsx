var React = require('react')

function BaseLayout(props){

  return (
    <div>
      <header>
        <div className="container">
          <div className="nav nav-pills" id="topNav">
            <span class="label label-primary"><a href="#">Sign In &amp; Sign Up</a></span>
            <span class="label label-primary"><a href="#">Newsletter</a></span>
            <span class="label label-primary"><a href="#">Contact Us</a></span>
          </div>

          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <p className="navbar-text"><a href="#" className="navbar-link">Home</a></p>
              <p className="navbar-text"><a href="#" className="navbar-link">Directory</a></p>
              <p className="navbar-text"><a href="#" className="navbar-link">Blog</a></p>
              <p className="navbar-text"><a href="#" className="navbar-link">About</a></p>
              <p className="navbar-text"><a href="#" className="navbar-link">Contact</a></p>
            </div>
          </nav>
        </div>
      </header>

      <div className="container">
       <div className="row">
         {props.children}
       </div>
     </div>

     <div className="container">
         <hr />
         <footer>
             <div className="row">
                 <div className="col-lg-12">
                     <p>© 2016 Gluten Free Greenville</p>
                 </div>
             </div>
         </footer>

     </div>
   </div>
  )
};

module.exports = {
  BaseLayout: BaseLayout
};
