const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const database = process.argv[2];
  await countStudents(database)
    .then((r) => {
      const [studentNumber, cs, swe] = r;
      res.write(`Number of students: ${studentNumber}\n`);
      res.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
      res.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    }).catch((e) => { res.write(e.message); })
    .finally(() => {
      res.end();
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
