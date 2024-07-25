countStudents = require('../3-read_file_async');


async function fetchStudents(filepath) {
    const students = await countStudents(filepath);
  };

export function readDatabase(filepath) {
  countStudents(filepath).then {
    return 
  }.catch(err) {
    console.error(err);
  }

}
