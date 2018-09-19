const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = 9000;
const router = require('./routes.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log('server running at 9000')
})