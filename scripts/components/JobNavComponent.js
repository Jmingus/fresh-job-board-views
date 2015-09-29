var React = require('react')

module.exports = React.createClass({
    render: function () {
        return (
          <nav className="JobNavComponent">
            <div className="black-bar"></div>
            <div className="logo">
              <img src="../images/images1/logo.png" />
              <span>FRESH JOBS</span>
            </div>
            <span>JOBS</span>
            <span>COMPANIES</span>
            <span>CITIES</span>
            <span>WHY FRESH?</span>
            <span>FOR EMPLOYERS</span>
          </nav>
          )
      }
    })
