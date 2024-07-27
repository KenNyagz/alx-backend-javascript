import readDatabase from '../utils';


class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const field = await readDatabase(request.app.get('databasePath'));
      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b));

      let output = "This is the list of our students\n";
      for (const field of sortedFields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      response.status(200).send(output);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, resp) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fields = await readDatabase(req.app.get('databasePath'));
      const students = fields[major];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

}

export default StudentsController;
