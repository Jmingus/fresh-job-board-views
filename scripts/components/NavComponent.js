var React = require('react')

module.exports = React.createClass({
    render: function () {
        return (
          <nav className="NavComponent">
            <div className="black-bar"></div>
            <a href="#" className="logo">
              <img src="../images/images1/logo.png" />
              <span>FRESH JOBS</span>
            </a>
            <a href="#jobs">JOBS</a>
            <a href="#">COMPANIES</a>
            <a href="#">CITIES</a>
            <a href="#">WHY FRESH?</a>
            <a href="#employers">FOR EMPLOYERS</a>
          </nav>
          )
      }
    })
