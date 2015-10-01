var React = require('react');

var JobListingInfoComponent = require('./JobListingInfoComponent');
var CompanyInformationComponent = require('./CompanyInformationComponent');


module.exports = React.createClass({
    componentDidMount: function() {
          var self = this;
          this.props.collection.on('sync', function(){
            self.forceUpdate();
          })
    },
    render: function() {
      var allJobs = this.props.collection.map(function(job){
        return (<JobListingInfoComponent job={job} key={job.cid} />)
      });
        return (
            <div className="JobListingComponent">
              <div className="left-column">
                <div className="border-margin">
                  {allJobs}
                </div>
              </div>
              <div className="right-column">
                <div className="border-margin">
                </div>
              </div>
            </div>
        );
    }
});

