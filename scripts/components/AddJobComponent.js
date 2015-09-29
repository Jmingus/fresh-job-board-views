var React = require('react')
var JobTipsComponent = require('./JobTipsComponent')
var JobFormComponent = require('./JobFormComponent')
module.exports = React.createClass({
    render: function () {
        return (
          <section className="AddJobComponent">
            <div>
              <JobFormComponent />
            </div>
            <div>
              <JobTipsComponent />
            </div>
          </section>
          )
      }
})
