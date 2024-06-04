import getListStudents from './0-get_list_students';

export default function getListStudentsIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const ids = [];
  const students = getListStudents();
  students.map((student) => {
    ids.push(student.id);
    return ids;
  });
  return ids;
}
