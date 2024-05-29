import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => {
      // Map the results to the desired structure
      let result = []
      results.map((reslt) => {
        if (reslt.status === 'fulfilled') {
          result.push({ status: reslt.status, value: reslt.value });
        } else {
          result.push({ status: reslt.status, value: reslt.reason.toString() });
        }
      });
      return result;
    });
}
