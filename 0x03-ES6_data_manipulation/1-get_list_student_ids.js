export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const final = arr.map((elem) => elem.id);
  return final;
}
