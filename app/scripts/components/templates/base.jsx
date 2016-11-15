var React = require('react')

function BaseLayout(props){

  return (
    <div>
      <header>
        <div className="container">
          <ul class="nav nav-pills" id="topNav">
            <li role="presentation"><a href="#">Sign In &amp; Sign Up</a></li>
            <li role="presentation"><a href="#">Newsletter</a></li>
            <li role="presentation"><a href="#">Contact Us</a></li>
          </ul>

          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <p class="navbar-text"><a href="#" class="navbar-link">Home</a></p>
              <p class="navbar-text"><a href="#" class="navbar-link">Directory</a></p>
              <p class="navbar-text"><a href="#" class="navbar-link">Blog</a></p>
              <p class="navbar-text"><a href="#" class="navbar-link">About</a></p>
              <p class="navbar-text"><a href="#" class="navbar-link">Contact</a></p>
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
}

module.exports = BaseLayout;
