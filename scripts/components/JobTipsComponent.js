var React = require('react')

module.exports = React.createClass({
    render: function () {
        return (
            <div className="JobTipsComponent">
                <h3>Tips for your job posting</h3>
                < hr />

                <div className="tips-box"><span className="bold">Add Keywords</span> because
                    the majority of candidates search for available positions
                    using keywords, make sure you use all relevant keywords in
                    your posting.
                </div>
                <div className="tips-box"><span className="bold">Use Familiar Job Titles.</span> Use
                specific but familiar job titles in your postings. Make sure the titles
                are clear and succient.
                </div>
                <div className="tips-box"><span className="bold">Give Them Details.</span> The purpose of
                    posting a job is to spark a candidates interest in the available
                    position. When job postings have detailed desciptions, candidates tend
                    to apply to them more.
                </div>
                <div className="tips-box"><span className="bold">Expand Your Location.</span> Do not limit
                    your job posting to a restricted area around the jobs location. Make
                    sure to include surrounding cities and metropolitan areas in your searches.
                </div>
                <div className="tips-box"><span className="bold">Discuss Compensation.</span> Even though you may not
                    want to give an exact compensation, give a range. Make sure to point out any
                    bonuses, commissions, or non-monetary compensation, as well.
                </div>
            </div>
        );
    }
});
