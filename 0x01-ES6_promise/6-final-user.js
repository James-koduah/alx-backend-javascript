import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo]).then((res) => {
    const arr = [];
    res.forEach((elem) => {
      if (elem.status === 'fulfilled') {
        arr.push(elem);
      } else {
        arr.push({ status: elem.status, value: `Error: ${elem.reason.message}` });
        // arr.push(elem);
      }
    });
    return arr;
  });
}
