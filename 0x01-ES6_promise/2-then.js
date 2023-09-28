export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {})
    .then(() => {})
    .then(() => {
      console.log('Got a response form the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => Error());
}
