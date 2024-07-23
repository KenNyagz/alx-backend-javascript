const fs = require('fs');

function countStudents (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    // Split data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No valid data in file');
    }

    const categories = lines[0].split(',');
    const studentLines = lines.slice(1);

    // Filter out invalid lines that don't fit expected format
    const validStudentLines = studentLines.filter(line => line.split(',').length === categories.length);

    console.log(`Number of students: ${validStudentLines.length}`); // log tot no students
    const fieldCounts = {};

    validStudentLines.forEach(line => {
      const [firstname, , , field] = line.split(',');

      if (!fieldCounts[field]) {
        fieldCounts[field] = {
          count: 0,
          students: []
        };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstname);
    });

    for (const field in fieldCounts) {
      const { count, students } = fieldCounts[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = countStudents;
