import fs from 'fs';
//const countStudents = require('../3-read_file_async');

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readfile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = data.trim().split('\n').splice(1);
        const fields = {};

        students.forEach((line) => {
          if (line.trim() !== '') {
            const [firstname, lastname, email, field] = line.split(',');
            if (fields[field]) {
              fields[field].push(firstname);
            } else {
              fields[field] = [firstname];
            }
          }
        });
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
