var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Enter your city..." placeholder="Search weahter by city name..." />
                    <div className="row">
                        <div className="large-6 large-offset-3 columns">
                            <button type="submit" className="hollow button success expanded">Get Weather</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
