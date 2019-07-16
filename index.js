const express = require('express')
const path = require('path')
var http = require('http');
var url  = require('url');
const PORT = process.env.PORT || 8888;

http.createServer(function (req, res) {
  if (req.url == '/home'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Welcome to the Home Page</h1>');
  }
  else if (req.url == '/getData'){
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end('Name: Kaylee Hartzog, Class: CS313'); 
  }
  else {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Page Not Found');
  }
}).listen(PORT);
