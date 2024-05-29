export default function signUpUser(firstName, lastName) {
  let user = {}
  return new Promise((success, fail) => {
    if (success) {
      user = {
        firstName: firstName,
        lastName: lastName
      };
      success(user);
    }
  });
}
