var React = require('react');

var Base = require('../base.jsx').BaseLayout;

function AboutContainer(props){
  return (
    <Base>
      <div className="About">
        <div className="col-md-6">
          <h3 id="About">About Us</h3>
            <p id="P1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Gluten Free Greenville, the go-to guide for everything gluten free here in the Upstate. We’re a small startup born out of need—the need for easier ways to navigate the world of dining sans gluten.
              At GFG our mission is to create an easier dining experience for those with celiac and gluten intolerance, while forming a local, gluten free community.
              It’s tough. To know where to eat, when menus have changed, and what restaurants actually offer gluten free goods. This site, with a little help from all of you, will keep the Greenville gluten free community up to date on all the gluten free gastronomic stops in town, while also serving up gluten free recipes, and featured dishes at our favorite, local dives!
              Welcome to Gluten Free Greenville.</p>
        </div>
      </div>

      <div className="GFG">
        <div className="col-md-6">
          <h3 id="GFG">The GFG Team </h3>
          <p id="P2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alyssa Sinicropi: Alyssa grew up with celiac disease. Diagnosed at the age of twelve, her diet radically changed. Growing up in a world without gluten free substitutes was hard, but soon enough the world started to catch up. As someone with celiac, finding a reliable source of gluten free menus, restaurants, and recipes in one place was hard, and that’s why Gluten Free Greenville was born—to give the Greenville community something it was missing, a guide to everything gluten free.</p>
        </div>
      </div>
    </Base>
  )
};

module.exports = {
  AboutContainer: AboutContainer
};
