var express = require("express");

var app = express();
const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
	if (req.headers['x-fowarded-proto'] === 'http') {
		next();
	} else {

	}
});

app.use(express.static("public"));

app.listen(PORT, function() {
	console.log("Server is running on port " + PORT);
});
