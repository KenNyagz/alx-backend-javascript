const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const studeez = await countStudents(process.argv[2]);
  res.end(studeez);
});

const port = 1245;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
