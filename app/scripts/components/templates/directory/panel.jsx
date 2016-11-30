var React = require('react')

function PanelLayout(props){
  return (
    <div classname="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">Sort By</h3>
      </div>
      <div className="panel-body">
        <div>
          <div class="checkbox">
            <label><input type="checkbox"> One Star</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Two Star</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Three Star</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Four Star</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Five Star</label>
          </div>
        </div>

        <a class="btn btn-primary">Submit</a>
      </div>
    </div>
  )
}
