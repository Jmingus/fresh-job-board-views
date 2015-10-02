var React = require('react');
var Backbone = require('backbone');
var JobListingCollection = require('../collections/JobListingCollection');
var TagsCollection = require('../collections/TagsCollection');
var JobsTagsCollection = require('../collections/JobsTagsCollection');
var async = require('async');
var jobsCollection = new JobListingCollection();
var tagsCollection = new TagsCollection();
var jobsTagsCollection = new JobsTagsCollection();

module.exports = React.createClass({
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
      var self = this
      var newJob = null;
      var newTagArray = null;
      e.preventDefault()
      async.series([
        function(callback){
          console.log('start saving job');
          newJob = jobsCollection.create({
            job_position: self.refs.title.getDOMNode().value,
            date_created: Date.now(),
            employer: self.refs.name.getDOMNode().value,
            job_location: self.refs.location.getDOMNode().value,
            description: self.refs.description.getDOMNode().value
          },{
            success: function() {
              callback(null);
            },
            error: function(err) {
              console.log('jobs error', err);
            }
          });
        },
        function(callback){
          console.log('start saving tags');
          var alltags = self.refs.tags.getDOMNode().value.split(" ")
          async.map(
            alltags,
            function(item, callback){
              var newTag = tagsCollection.create({
                tag_name: item
              },{
              success: function(){
                callback(null, newTag.id)
              },
              error: function(err) {
                console.log('tags error', err)
              }
            });
            },
            function(err, data) {
              newTagArray = data
              callback(null)
            }
          )
        },
        function(callback){
          console.log('start saving jobtags')
          jobsTagsCollection.create({
            job_id: newJob.id,
            tag_ids: newTagArray
          },{success: function(){
            console.log('done')
            callback(null)
          }})
        }
      ]);
    }
});
