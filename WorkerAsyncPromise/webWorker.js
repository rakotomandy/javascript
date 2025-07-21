/* 
A Worker lets JavaScript run tasks in a separate thread (background) so it does not block the main UI.

✅ Example: Main page stays responsive while Worker does heavy calculation.
*/


// index.js (Main Thread)

// Create a new Worker object, using a JavaScript file 'worker.js'
const worker = new Worker('worker.js');

// Send a message to the Worker
worker.postMessage('Start calculation'); // Tell the worker to begin work

// Listen for a message back from the Worker
worker.onmessage = (event) => {
  console.log('Result from worker:', event.data); // Log the result received from the worker
};



// worker.js (Worker Thread)

// Listen for messages from the main thread
onmessage = (event) => {
    if (event.data === 'Start calculation') { // If message is "Start calculation"
      let result = 0;
      // Perform a heavy calculation (e.g., sum numbers up to 100 million)
      for (let i = 0; i < 1e8; i++) {
        result += i;
      }
      // Send the result back to the main thread
      postMessage(result);
    }
  };
  

  
  /* 
  🧠 Important:

postMessage → Main thread ↔ Worker communication.

Worker runs independently (does not freeze the page).

Workers cannot access the DOM directly.
  */