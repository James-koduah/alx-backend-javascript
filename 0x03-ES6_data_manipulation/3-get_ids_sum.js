export default function getStudentIdsSum(arr) {
  const final = arr.reduce((totalId, elem) => totalId + elem.id, 0);
  return final;
}
