export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let i = false;
  for (const elem of reportWithIterator) {
    if (!i) {
      string += `${elem} `;
      i = true;
    } else {
      string += ` | ${elem}`;
    }
  }
  return string;
}
