export default function getStudentIdSum(studentsList) {
  return studentsList.reduce((sum, student) => sum + student.id, 0);
}
