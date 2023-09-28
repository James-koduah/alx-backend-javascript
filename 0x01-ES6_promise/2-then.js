export default function handleResponseFromAPI(promise) {
  const gg = new Promise((resolve, reject) => {
      resolve({ status: 200, body: 'success' });
      reject(Error())
      console.log('Got a response from the API')
  });
  return gg;
}
