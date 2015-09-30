var React = require('react');
var CompanyModel = require('../models/CompanyModel');
var JobListingModel = require('../models/JobListingModel');
var TagsCollection = require('../collections/TagsModelCollection');

var JobListingInfoComponent = require('./JobListingInfoComponent');
var CompanyInformationComponent = require('./CompanyInformationComponent');

var companyModel = new CompanyModel({
 id: 1,
 company_name: 'Origin',
 company_logo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRmvhpgNAzhgZuSHCserIb59Tyl9wWByip74K9exF8mBVmmKA9Mg',
 background_image: 'http://www.officialpsds.com/images/stocks/Background-flyer5_DXGFX-stock2536.jpg',
 company_size: 600,
 company_location: 'The Moon'
})

var jobListingModel = new JobListingModel({
id: 1,
job_position: 'Moon Walker',
date_created: 'Tuesday',
employer: companyModel.get('company_name'),
job_location: companyModel.get('company_location'),
description: 'You walk on the moon, Accepting anyone!',
tags: tagsCollection
})

var tagsCollection = new TagsCollection([
  {id: 1, tag_name: 'Origin'},
  {id: 2, tag_name: 'Space'},
  {id: 3, tag_name: 'Walking'},
  {id: 4, tag_name: 'Anyone'},
  {id: 5, tag_name: 'Rockets'}
  ])

module.exports = React.createClass({
    render: function() {
      var tags = tagsCollection.map(function(model){
        return <span key={"tag"+model.get("id")}>{model.get("tag_name")}</span>
      });
        return (
            <div className="JobListingComponent">
              <div className="left-column">
                <div className="border-margin">
                  <JobListingInfoComponent model={jobListingModel} tags={tags} />
                </div>
              </div>
              <div className="right-column">
                <div className="border-margin">
                  <CompanyInformationComponent model={companyModel} />
                </div>
              </div>
            </div>
        );
    }
});

