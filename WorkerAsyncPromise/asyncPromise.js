// A function that returns a Promise (a future value)
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate data loading after 1 second
      setTimeout(() => {
        resolve('Data loaded'); // Successfully resolve the promise
      }, 1000);
    });
  }
  
  // Async function using await to simplify Promise usage
  async function getData() {
    console.log('Fetching...'); // Print when fetching starts
    const data = await fetchData(); // Wait for fetchData to finish
    console.log(data); // Print "Data loaded" when Promise is resolved
  }
  
  // Start the async function
  getData();
  