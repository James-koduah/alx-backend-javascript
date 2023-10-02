export default function updateStudentGradeByCity(students, city, newGrades) {
  const byLocation = students.filter((elem) => elem.location === city);
  const grades = newGrades.map((elem) => elem.studentId);
  const final = byLocation.map((e) => {
    const elem = e;
    if (grades.includes(elem.id)) {
      const grade = newGrades.filter((e) => e.studentId === elem.id);
      elem.grade = grade[0].grade;
    } else {
      elem.grade = 'N/A';
    }
    return elem;
  });
  return final;
}
