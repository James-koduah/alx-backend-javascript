export default function updateUniqueItems(arg) {
  if (!(arg instanceof Map)) throw new Error('Cannot process');
  const update = arg;
  for (const [key, value] of arg) {
    if (value === 1) update.set(key, 100);
  }
  return update;
}
