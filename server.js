'use strict';

const express = require('express');

const server = express();

server.use(express.static('./public', {
  
    extensions: ['html', 'htm']
}));

const init = () => {
    server.listen(8000, err => console.log(err || 'Server läuft'));
}

init();
