const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2];
    readDatabase(database)
      .then((r) => {
        const cs = r[1];
        const swe = r[2];
        response.write('This is the list of our students\n');
        response.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
        response.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        response.end();
      }).catch((e) => { response.write(e.message); })
      .finally(() => {
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE\n');
      response.end();
      return;
    }
    const database = process.argv[2];
    readDatabase(database)
      .then((r) => {
        if (major === 'CS') {
          response.write(`List: ${r[1].join(', ')}\n`);
        } else {
          response.write(`List: ${r[2].join(', ')}`);
        }
        response.end();
      }).catch((e) => { response.write(e.message); })
      .finally(() => {
        response.end();
      });
  }
}

module.exports = StudentsController;
