export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {})
    .then(() => {})
    .then(() => {})
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
