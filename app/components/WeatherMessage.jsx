var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;

        return (
            <h4 className="text-center">It's it {temp}*c in {location}.</h4>
        );
    }
});

module.exports = WeatherMessage;
