export default function hasValuesFromArray(set, array) {
  let final = true;
  for (const elem of array) {
    if (set.has(elem) === false) {
      final = false;
      break;
    }
  }
  return final;
}
