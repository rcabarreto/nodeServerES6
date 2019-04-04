#!/usr/bin/env node

/* eslint-disable import/order */

import app from './app';
import http from 'http';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * normalizePort
 * @param {*} val Takes a string or an integer with the port number
 *
 * @returns {Number} port
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Error handler for the server start
 *
 * @param {Object} error A Js Error object
 *
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Prints out some message letting user know the server is running
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`testApi:Server Listening on ${bind}`);
}
