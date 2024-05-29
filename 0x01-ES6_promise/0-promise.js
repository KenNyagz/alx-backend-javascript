export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation
    // Example: Fetch data from an API
    fetch('https://api.gateio.ws/api/v4/spot/tickers')
      .then(response => response.json())
      .then(data => {
        // Resolve the Promise with the API response data
        resolve(data);
      })
      .catch(error => {
        // Reject the Promise with the error
        reject(error);
      });
  });
}
