import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => {
      // Map the results to the desired structure
      result = []
      return results.map((result) => {
        if (result.status === 'fulfilled') {
          result.push({ status: result.status, value: result.value });
        } else {
          result.push({ status: result.status, value: result.reason });
        }
      });
      return result;
    });
}
