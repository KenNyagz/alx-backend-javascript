export default function getStudentsByLocation(studentsArray, city) {
  const arr = [];
  studentsArray.filter((student) => {
    if (student.location === city) {
      arr.push(student);
    }
    return arr;
  });
  return arr;
}
