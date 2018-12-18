var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'https://example.com';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  response.redirect(redirectStatus, newBaseURL);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
