export default function getStudentsByLocation(arr, city) {
  const final = arr.filter((elem) => elem.location === city);
  return final;
}
