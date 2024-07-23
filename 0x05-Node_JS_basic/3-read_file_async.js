const fs = require('fs').promises;

async function countStudents(filepath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
        // Split data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No valid student data in the file');
    }

    const headers = lines[0].split(',');
    const studentLines = lines.slice


  }


}
