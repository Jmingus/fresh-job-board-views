'use strict';
var Backbone = require('backbone');
var React = require('react');

var JobListingComponent = require('./components/JobListingComponent');
var AddJobComponent = require('./components/AddJobComponent');
var NavComponent = require('./components/NavComponent');

var mainElement = document.getElementById('main-content');
var navElement = document.getElementById('nav')


var Router = Backbone.Router.extend({
  routes: {
    'employers': 'employerPage',
    'jobs': 'jobsPage'
  },
  employerPage: function(){
    React.render(
     <AddJobComponent />,
      mainElement
    );
  },
  jobsPage: function(){
    React.render(
      <JobListingComponent />,
      mainElement
    )
  }
})

React.render(
<NavComponent />,
  navElement
);

var app = new Router();
Backbone.history.start();
