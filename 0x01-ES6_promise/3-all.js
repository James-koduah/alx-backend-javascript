const utils = require('./utils');

const { uploadPhoto } = utils;
const { createUser } = utils;

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((message) => {
      console.log(`${message[0].body} ${message[1].firstName} ${message[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
