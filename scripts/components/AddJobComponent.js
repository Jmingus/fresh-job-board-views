var React = require('react')
var JobTipsComponent = require('./JobTipsComponent')
var JobFormComponent = require('./JobFormComponent')
var JobNavComponent = require('./JobNavComponent')
module.exports = React.createClass({
    render: function () {
        return (
          <section className="AddJobComponent">
            <JobNavComponent />
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
