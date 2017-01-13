var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}, {color: '#000'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}, {color: '#000'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}, {color: '#000'}}>Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;
