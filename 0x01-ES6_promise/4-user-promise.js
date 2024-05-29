export default function signUpUser(firstName, lastName) {
  let user = {}
  new Promise((success, fail) => {
    if (success) {
      user = {
        firstName: firstName,
        lastName: lastName
      };
    }

  });
  return user;
}
