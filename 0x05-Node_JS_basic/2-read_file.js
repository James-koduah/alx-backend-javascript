const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const rows = data.split('\n');
    const cs = [];
    const swe = [];
    let studentNumber = 0;
    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i];
      const details = row.split(',');
      if (details.length === 4) {
        if (details[3] === 'CS') cs.push(details[0]);
        if (details[3] === 'SWE') swe.push(details[0]);
        studentNumber += 1;
      }
    }
    console.log(`Number of students: ${studentNumber}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
}

module.exports = countStudents;
