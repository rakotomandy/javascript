// =========================
// 1. Error (Base Class)
// =========================

// The most basic error type.
// You can create a general error using Error.
try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Base Error:");
    console.log(error.name);    // "Error"
    console.log(error.message); // "Something went wrong!"
    console.log(error.stack);   // Stack trace (where it happened)
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 2. TypeError
  // =========================
  
  // Happens when you use the wrong type (e.g., call a number like a function).
  try {
    const num = 42;
    num(); // Trying to call a number as a function ❌
  } catch (error) {
    console.log("TypeError:");
    console.log(error.name);    // "TypeError"
    console.log(error.message); // Something like "num is not a function"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 3. ReferenceError
  // =========================
  
  // Happens when you use a variable that does not exist.
  try {
    console.log(undeclaredVariable); // ❌ Variable does not exist
  } catch (error) {
    console.log("ReferenceError:");
    console.log(error.name);    // "ReferenceError"
    console.log(error.message); // "undeclaredVariable is not defined"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 4. RangeError
  // =========================
  
  // Happens when a number is out of acceptable range.
  try {
    const arr = new Array(-1); // ❌ Array size cannot be negative
  } catch (error) {
    console.log("RangeError:");
    console.log(error.name);    // "RangeError"
    console.log(error.message); // "Invalid array length"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 5. SyntaxError
  // =========================
  
  // Happens when code structure is wrong (usually caught at parsing time).
  try {
    eval('let = 5'); // ❌ Invalid JavaScript syntax
  } catch (error) {
    console.log("SyntaxError:");
    console.log(error.name);    // "SyntaxError"
    console.log(error.message); // "Unexpected token '='"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 6. URIError
  // =========================
  
  // Happens when encodeURIComponent or decodeURIComponent fails.
  try {
    decodeURIComponent('%'); // ❌ '%' must be followed by two hex digits
  } catch (error) {
    console.log("URIError:");
    console.log(error.name);    // "URIError"
    console.log(error.message); // "URI malformed"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 7. EvalError
  // =========================
  
  // Rare today, related to the eval() function.
  try {
    throw new EvalError('Problem with eval function!');
  } catch (error) {
    console.log("EvalError:");
    console.log(error.name);    // "EvalError"
    console.log(error.message); // "Problem with eval function!"
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 8. AggregateError
  // =========================
  
  // Introduced in ES2021. Represents multiple errors together (like in Promise.any()).
  try {
    const allErrors = new AggregateError([
      new Error("First problem"),
      new Error("Second problem"),
    ], "Multiple errors occurred");
  
    throw allErrors; // Manually throw AggregateError
  } catch (error) {
    console.log("AggregateError:");
    console.log(error.name);    // "AggregateError"
    console.log(error.message); // "Multiple errors occurred"
    console.log(error.errors);  // Array of individual Error objects
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 9. Using try...catch...finally
  // =========================
  
  // - try: place code that might fail
  // - catch: handle the error if it happens
  // - finally: always run, whether error happened or not
  
  try {
    console.log("Trying to run code...");
    throw new Error("Unexpected issue!");
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Cleanup or final steps (always runs)");
  }
  
  console.log('---------------------------');
  
  
  // =========================
  // 10. Real-world patterns
  // =========================
  
  // Example: Retry a network operation on failure
  async function fetchData() {
    let retries = 3;
    while (retries > 0) {
      try {
        console.log("Trying to fetch...");
        throw new Error("Network problem"); // Simulate failure
        // In real world: await fetch(url);
      } catch (error) {
        console.log(`Failed attempt (${4 - retries}):`, error.message);
        retries--;
        if (retries === 0) {
          console.log("All retries failed.");
        }
      } finally {
        console.log("Finished one attempt");
      }
    }
  }
  
  fetchData();
  