var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here are a few example locations to try out:</p>
                <ol>
                    <li>
                        <Link to='/?location=Ha%20Noi'>Ha Noi</Link>
                    </li>
                    <li>
                        <Link to='/?location=Thanh%20Pho%20Ho%20Chi%20Minh'>Thanh Pho Ho Chi Minh</Link>
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports = Example;
