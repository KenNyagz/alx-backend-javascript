export default function updateStudentGradeByCity(students, city, newGrades) {
  const arr = [];
  students
    .filter((student) => student.city === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      arr.push({
        id: student.id,
        name: student.name,
        city: student.city,
        // ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      });
      console.log(arr);
    });
    return arr;
}
