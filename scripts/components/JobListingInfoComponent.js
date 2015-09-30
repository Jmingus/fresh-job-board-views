var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="JobListingInfoComponent">
              <div className="JobPosition">{this.props.job.get('job_position')}<span className="datePosted">{this.props.job.get('date_created')}</span></div>
              <div><span className="Employer">{this.props.job.get('employer')}</span> • {this.props.job.get('job_location')}</div>
              <div className="Description">{this.props.job.get('description')}</div>
              <hr />
            </div>
        );
    }
});
