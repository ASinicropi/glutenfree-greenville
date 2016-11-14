var React = require('react')

function BaseLayout(props){

  return (
    <div>
      <div className="container">
        <header>

        </header>
        <ul class="nav nav-pills" id="topNav">
          <li role="presentation"><a href="#">Sign in &amp; Sign up</a></li>
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
    </div>
  )
}
