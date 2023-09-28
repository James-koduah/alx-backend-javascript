export default function handleResponseFromAPI(promise) {
  const gg = new Promise((resolve, reject) => {
    if (promise) {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    } else { reject(Error()); }
  });
  return gg;
}
