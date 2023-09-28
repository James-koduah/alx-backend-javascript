export default function handleResponseFromAPI(promise) {
  promise
    .then(() => { console.log('Got a response form the API'); })
    .then(() => { console.log('Got a response form the API'); })
    .then(() => {
      console.log('Got a response form the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => Error());
}
