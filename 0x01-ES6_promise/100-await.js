import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = uploadPhoto().resolve();
    const user = createUser().resolve();
    return {
      photo,
      user,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
