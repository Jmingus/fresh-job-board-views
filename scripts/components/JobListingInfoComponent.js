var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="JobListingInfoComponent">
              <div className="JobPosition">{this.props.model.get('job_position')}<span className="datePosted">{this.props.model.get('date_created')}</span></div>
              <div><span className="Employer">{this.props.model.get('employer')}</span> • {this.props.model.get('job_location')}</div>
              <div className="Description">{this.props.model.get('description')}</div>
              {this.props.tags}
              <hr />
            </div>
        );
    }
});
