export default function appendToEachArrayValue(array, appendString) {
  for (let elem in array) {
    if (elem) {
      elem = appendString + elem;
    }
  }

  return array;
}
