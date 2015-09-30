var React = require('react');

module.exports = React.createClass({
    render: function() {
        var backgroundImgUrl = {backgroundImage: 'url('+ this.props.model.get('background_image')+ ')'}
        return (
          <div className="CompanyInformationComponent">
            <h2>Featured Company</h2>
            <hr />
            <div style={backgroundImgUrl}>
              <img src={this.props.model.get('company_logo')} />
              <h1>{this.props.model.get('company_name')}</h1>
              <h3>{this.props.model.get('company_location')}</h3>
            </div>
          </div>
          )
      }
    })
