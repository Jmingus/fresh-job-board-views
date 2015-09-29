var React = require('react')

module.exports = React.createClass({
    render: function () {
        return (
          <div className="JobFormComponent">
            <h3>Post your job</h3>
            <form>
              <label>Title<input type='text' /></label>
              <label>Company Name<input type='text' /></label>
              <label>Location<input type='text' /></label>
              <label>Description<textarea /></label>
              <label>Tags<input type='text' /></label>
              <button type="submit">Submit Job</button>
            </form>
          </div>
        );
    }
});
