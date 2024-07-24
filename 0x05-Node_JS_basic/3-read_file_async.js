const fs = require('fs').promises;

async function countStudents (filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    // Split data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No valid student data in the file');
    }

    const headers = lines[0].split(',');
    const studentLines = lines.slice(1);
    // Filter out lines that don't match expected format
    const validStudents = studentLines.filter(line => line.split(',').length === headers.length);

    totalStudents = validStudents.length;
    const fieldCounts = {};

    validStudents.forEach(line => {
      const [firstName, , , field] = line.split(',');

      if (!fieldCounts[field]) {
        fieldCounts[field] = {
          count: 0,
          students: []
        };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstName);
    });

    let output = `Number of students: ${totalStudents}\n`;
    for (const field in fieldCounts) {
      const { count, students } = fieldCounts[field];
      output += (`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }

  return output
  } catch (err) {
    console.error(err);
  }
}

module.exports = countStudents;
