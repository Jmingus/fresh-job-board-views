var React = require('react');
var Backbone = require('backbone');
var JobListingCollection = require('../collections/JobListingCollection');

module.exports = React.createClass({
    componentWillMount: function() {
        this.jobs = new JobListingCollection();
    },
    render: function () {
        return (
          <div className="JobFormComponent">
            <h3>Post your job</h3>
            <form onSubmit={this.post}>
              <label>Title<input ref="title" type='text' /></label>
              <label>Company Name<input ref="name" type='text' /></label>
              <label>Location<input ref="location" type='text' /></label>
              <label>Description<textarea ref="description" /></label>
              <label>Tags<input ref="tags" type='text' /></label>
              <button type="submit">Submit Job</button>
            </form>
          </div>
        );
    },
    post: function(e){
      e.preventDefault()
      console.log('posted')
      this.jobs.create({
        job_position: this.refs.title.getDOMNode().value,
        date_created: Date.now(),
        employer: this.refs.name.getDOMNode().value,
        job_location: this.refs.location.getDOMNode().value,
        description: this.refs.description.getDOMNode().value
      })
    }
});
