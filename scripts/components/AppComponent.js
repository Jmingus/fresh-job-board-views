var Backbone = require('backbone');
var React = require('react');

var JobListingComponent = require('./JobListingComponent');
var AddJobComponent = require('./AddJobComponent');
var JobListingCollection = require('../collections/JobListingCollection');
var jobCollection = new JobListingCollection();


module.exports = React.createClass({
  getInitialState: function() {
      return {
          pageName: 'employers',
          id: null
      };
  },
  componentWillMount: function() {
    var self = this;

    var Router = Backbone.Router.extend({
      routes: {
        'employers': 'employerPage',
        'jobs': 'jobsPage'
      },
      employerPage: function(){
        self.setState({
          pageName: 'employers'
        })
      },
      jobsPage: function(){
        jobCollection.fetch();
        self.setState({
          pageName: 'jobs'
        })
      }
    });

    var app = new Router();
    Backbone.history.start();
  },
  render: function() {
    var pageComponent = null;
    var currentState = this.state.pageName;
    if(currentState === 'employers'){
      pageComponent = <AddJobComponent />
    }else if(currentState === 'jobs'){
      pageComponent = <JobListingComponent collection={jobCollection}/>
    }

    return (
        <div>
          {pageComponent}
        </div>
      );
  }
});

