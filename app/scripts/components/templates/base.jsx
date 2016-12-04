var React = require('react')

function BaseLayout(props){

  return (
    <div>
      <header>
        <div className="container">
          <div className="nav nav-pills" id="topNav">
            <a href={'#account/'}className="btn btn-primary btn-xs" role="button">&nbsp;&nbsp;Sign In &amp; Sign Up&nbsp;&nbsp;</a>
            <span>&nbsp;</span>
            <button className="btn btn-primary btn-xs">&nbsp;&nbsp;Newsletter&nbsp;&nbsp;</button>
            <span>&nbsp;</span>
            <a href={'#contact/'}className="btn btn-primary btn-xs" role="button">&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</a>
          </div>

          <div className="row" id="logo">
            <div className="col-md-9 col-md-offset-4">
              <img src="images/gluten-free-greenville-logo.png" alt="logo"/>
            </div>
          </div>

          <nav className="navbar navbar-default">
            <div className="col-md-7 col-md-offset-4">
              <ul className="nav navbar-nav" id="navMain"role="navigation">
                <li role="navigation"><a href={''}>Home</a></li>
                <li role="navigation"><a href={'#directory/'}>Directory</a></li>
                    <li role="navigation"><a href={'#blog/'}>Blog</a></li>
                <li role="navigation"><a href="#about/">About</a></li>
                <li role="navigation"><a href="#contact/">Contact</a></li>
              </ul>
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
