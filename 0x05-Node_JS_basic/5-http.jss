const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];

    if (!filePath) {
      res.end('Cannot load database');
    } else {
      try {
        const studentData = await countStudents(filePath);
        res.end(`This is the list of our students\n${studentData}`);
      } catch (err) {
        res.end(err.message);
      }
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 1245;

app.listen(port)

module.exports = app;
