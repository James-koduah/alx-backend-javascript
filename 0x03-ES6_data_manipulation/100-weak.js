export const weakMap = new WeakMap();

export function queryAPI(arg) {
  if (weakMap.has(arg) === false) {
    weakMap.set(arg, 1);
  } else {
    let number = weakMap.get(arg);
    number += 1;
    if (number >= 5) throw new Error('Endpoint load is high');
    weakMap.set(arg, number);
  }
}
