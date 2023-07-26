//ไฟล์ app.js
const express = require('express');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/** specify the directory from where to serve static assets such as JavaScript, CSS, images **/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/jquery-ui', express.static(__dirname + '/node_modules/jquery-ui/dist/'));

/** remove fix route and use path solution **/

app.get('/welcome', (req, res) =>
  res.send({
    error: false,
    message: 'Welcome NodeJS, Express',
  }),
);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});
