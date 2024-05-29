export default function signUpUser(firstName, lastName) {
  let user = {}
  return new Promise((success, fail) => {
    if (firstName && lastName) {
      user = {
        firstName: firstName,
        lastName: lastName
      };
      success(user);
    }
  });
}
