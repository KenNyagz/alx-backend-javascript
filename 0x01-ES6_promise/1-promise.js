/*export default getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success'
      });
    } else {
      reject(new Error('The fake api is not working correctly'));
    }
  });
}*/
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The API is not working currently'));
    }
  });
}

