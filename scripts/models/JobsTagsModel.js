var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
      id: null,
      job_id: null,
      tag_ids: null
    },
    urlRoot: 'https://jmingus-server.herokuapp.com/collections/jobstags'
})
