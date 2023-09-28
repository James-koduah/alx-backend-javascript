export default function createIteratorObject(report) {
  const employees = [];
  const departments = Object.keys(report.allEmployees);
  for (const department of departments) {
    const arr = report.allEmployees[department];
    employees.push(...arr);
  }
  return employees;
}
