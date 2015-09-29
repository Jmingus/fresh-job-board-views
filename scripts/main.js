'use strict';
var React = require('react');
var AddJobComponent = require('./components/AddJobComponent.js')
var mainElement = document.getElementById('main-content');

React.render(
  <AddJobComponent />,
  mainElement
);
