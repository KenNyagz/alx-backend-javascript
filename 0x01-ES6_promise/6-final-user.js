import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [createdUser, photo] = await Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)]
  );
  return [
    {
      status: createdUser.status,
      value: createdUser.value
    },
    {
      status: photo.status,
      value: photo.value
    }
  ];
}
