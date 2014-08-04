var express = require('express');
var logfmt = require('logfmt');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('<h1>Hello BFTW!</h1>');
});

app.get('/bftw', function(req, res) {
    var html = '<div>' +
            '<h1>Day 1: Workflows, agility and collaboration</h1>' +
            '<ul>' +
                '<li>Technical debt</li>' +
                '<li>Choosing the right technology for the job</li>' +
                '<li>Unix command line</li>' +
                '<li>GIT Distributed version control</li>' +
                '<li>The Cloud / Amazon Web Services / Heroku / Microsoft Azure</li>' +
                '<li>Docker and Doku</li>' +
                '<li>Backend as a service / Parse / FireBase / Stormpath / ACS</li>' +
                '<li>Thinking about mobile</li>' +
                '<li>Dabases / SQL / NoSQL</li>' +
                '<li>Local or in the cloud?</li>' +
                '<li>Agile / Scrum</li>' +
                '<li>Backend Analytics</li>' +
                '<li>F*#& it ship it</li>' +
                '<li>Hackers should be social</li>' +
                '<li>Hands on Git workshop</li>' +
                '<li>Pushing a project to Heroku</li>' +
                '<li>AWS S3 Cloud storage</li>' +
                '<li>Working with Docker and Doku</li>' +
                '<li>Working with NoSQL / Redis / MongoDB</li>' +
                '<li>GitHub / BitBucket / Gitlab</li>' +
            '</ul>' +
        '</div>' +
        '<div>' +
            '<h1>Day 2: The Backend</h1>' +
            '<ul>' +
                '<li>Service oriented architectures</li>' +
                '<li>Making developers happier, more productive and more efficient</li>' +
                '<li>Test driven approach</li>' +
                '<li>HTTP fundamentals and terminology</li>' +
                '<li>HTTPS / SSL / TLS</li>' +
                '<li>RESTful APIs</li>' +
                '<li>HTTP Servers</li>' +
                '<li>WebSockets</li>' +
                '<li>Databases / SQL / NoSQL</li>' +
                '<li>Caching web applications</li>' +
                '<li>Metrics, analytics, logging, monitoring</li>' +
                '<li>Security</li>' +
                '<li>Deployment / The Twelve Factors</li>' +
                '<li>Modern frameworks for the web</li>' +
                '<li>Python for the web by example</li>' +
                '<li>Hands on building a web application with Python</li>' +
                '<li>Setting up Python, Virtualenv, PIP</li>' +
                '<li>Working with Django and Flask</li>' +
                '<li>Building a RESTful API backend for a web based application</li>' +
                '<li>Authentication and Authorization</li>' +
                '<li>Deploying to Heroku</li>' +
            '</ul>' +
        '</div>' +
        '<div>' +
            '<h1>Day 3: The Web Client</h1>' +
            '<ul>' +
                '<li>State of the web</li>' +
                '<li>The browser is the VM</li>' +
                '<li>Can I Use?</li>' +
                '<li>HTML5</li>' +
                '<li>CSS3 / Responsive design / Bootstrap and beyond</li>' +
                '<li>JavaScript is a real programming language</li>' +
                '<li>JavaScript ES6</li>' +
                '<li>Collaboration (jsbin / jsfiddle)</li>' +
                '<li>Client side performance / JS / CSS / Mobile</li>' +
                '<li>Minification, compression, delivery</li>' +
                '<li>CDNs</li>' +
                '<li>Cache busting</li>' +
                '<li>Browser developer tools</li>' +
                '<li>Package managers / NPM / Bower</li>' +
                '<li>Build tools / Grunt / Gulp / Brunch  / Broccoli</li>' +
                '<li>Node.js on the client / Browserify</li>' +
                '<li>jQuery by example</li>' +
                '<li>Backbone.js by example</li>' +
                '<li>Angular.js by example</li>' +
                '<li>React.js by example</li>' +
                '<li>Ember.js by example</li>' +
                '<li>Working with ember-cli</li>' +
                '<li>Building a Hello World example</li>' +
                '<li>Building a real web app with Ember.js</li>' +
                '<li>Listing data from the server</li>' +
                '<li>Creating new objects</li>' +
                '<li>Deleting objects</li>' +
                '<li>Building a web component</li>' +
                '<li>Rendering markdown on the client</li>' +
                '<li>Publishing to Heroku, S3 and other cloud providers</li>' +
                '<li>Adding d3 graphics to our application</li>' +
            '</ul>' +
        '</div>';
    res.send(html);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
