const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv[2];
    countStudents(database)
      .then((r) => {
        const [studentNumber, cs, swe] = r;
        res.write(`Number of students: ${studentNumber}\n`);
        res.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
        res.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        res.end();
      });
  }
}).listen('1245');

module.exports = app;
