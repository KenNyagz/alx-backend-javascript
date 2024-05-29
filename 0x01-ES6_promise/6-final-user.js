import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'
/*
export default function handleProfileSignup(firstName, lastName, fileName) {
    promises = [signupUser(firstName, lastName), uploadPhoto(fileName)];
    

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
}*/

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the imported functions with the provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => {
      // Map the results to the desired structure
      return results.map((result) => {
        if (result.status === 'fulfilled') {
          return { status: result.status, value: result.value };
        } else {
          return { status: result.status, value: result.reason };
        }
      });
    });
}
