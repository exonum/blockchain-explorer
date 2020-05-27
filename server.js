const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const parser = require('yargs-parser');

// Initialize application
const app = express();

// Get app params
const argv = parser(process.argv.slice(2));
const port = argv.port;
const publicApiRoot = argv.publicApiRoot;
const privateApiRoot = argv.privateApiRoot;

if (typeof port === 'undefined') {
  throw new Error('--port parameter is not set.');
}

if (typeof publicApiRoot === 'undefined') {
  throw new Error('--public-api-root parameter is not set.');
}

if (typeof privateApiRoot === 'undefined') {
  throw new Error('--private-api-root parameter is not set.');
}

// Set path to static files
app.use(express.static(__dirname + '/'));

// Public proxy middleware options
const publicApiProxy = createProxyMiddleware({
  target: publicApiRoot,
  ws: true,
  pathRewrite: {
    '^/public/api': '/api' // remove base path
  }
});

// Private proxy middleware options
const privateApiProxy = createProxyMiddleware({
  target: privateApiRoot,
  pathRewrite: {
    '^/private/api': '/api' // remove base path
  }
});

app.use('/public/api', publicApiProxy);
app.use('/private/api', privateApiProxy);
app.listen(port);
