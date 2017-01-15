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
                    <input type="text" ref="location" placeholder="Enter your city..." />
                    <div className="row">
                        <div className="large-6 large-offset-3 columns">
                            <button type="submit" className="success button expanded">Get Weather</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
