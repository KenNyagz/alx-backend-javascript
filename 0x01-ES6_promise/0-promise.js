function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeOut(() => {
      const success - true;
      if (success) {
        resolve('API response data'); // Resolve with response data
      } else {
        reject(new Error('Failed to fetch data')); // Reject with an error
      }
    }, 2000);
    }
  });
}
