var express = require('express');
var app = express();
var express = require('body-parser');

var dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/dishes', (req, res) => {
  res.writeHead(200, { 'Content-TYPE': 'application/json' });
  res.write(JSON.stringify(dishes));
  res.end();
});

app.get('/dishes/type', (req, res) => {
  dishes = {
    type: req.body.type,
  };
  if (type == dishes[type]) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(dishes[type]));
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Record Not Found</h1></body></html>');
    res.end();
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var post = server.address().port;
  console.log('app is listening on port 3000');
});
