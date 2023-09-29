import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto().resolve();
    const user = await createUser().resolve();
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
