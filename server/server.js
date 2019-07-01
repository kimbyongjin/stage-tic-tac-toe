const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public/index.html')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('hello world');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port: ${port}`);
  }
});
