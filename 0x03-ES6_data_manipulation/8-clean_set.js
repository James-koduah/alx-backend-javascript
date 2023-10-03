export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const final = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      final.push(item.slice(startString.length));
    }
  }
  return final.join('-');
}
