'use strict';
var React = require('react');
var NavComponent = require('./components/NavComponent');
var AppComponent = require('./components/AppComponent')
var navElement = document.getElementById('nav');
var mainElement = document.getElementById('main-content');
React.render(<NavComponent />, navElement);
React.render(<AppComponent />, mainElement)

