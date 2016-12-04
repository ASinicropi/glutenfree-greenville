var React = require('react');
var $ = window.jQuery = require('jquery');

var Base = require('../base.jsx').BaseLayout;

require('bootstrap-sass');

function HomeContainer(props){
  return (
    <Base>
      <div className="container">
        <div className="Home row">
          <div className="col-md-offset-2 col-md-8">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" id="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4" id="pic1">
                      <img src="images/gfg4.PNG" alt="gfg1" id="GFG1"/>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4" id="pic2">
                      <img src="images/gfg3.PNG" alt="gfg2" id="GFG2"/>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-sm-4 col-sm-offset-4" id="pic3">
                      <img src="images/FullSizeRender.jpg" alt="gfg3" id="GFG3"/>
                    </div>
                  </div>
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>

              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Base>
  )
};

module.exports = {
  HomeContainer: HomeContainer
};
