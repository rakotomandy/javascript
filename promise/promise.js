// ===================================================
// ✅ JavaScript Promises – Introduction Before Async/Await
// ===================================================

// ===================================================
// ✅ What is a Promise?
// ===================================================
/*
🔸 A Promise represents the eventual completion (or failure) of an asynchronous operation.
🔸 It has three states:
   1. Pending – operation not complete
   2. Fulfilled – operation completed successfully
   3. Rejected – operation failed
🔸 Use .then() for success and .catch() for errors
*/

// ===================================================
// ✅ Creating a Simple Promise
// ===================================================

const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to simulate an error

  if (success) {
    resolve("✅ The operation was successful"); // Resolve the promise
  } else {
    reject("❌ The operation failed"); // Reject the promise
  }
});

myPromise
  .then((result) => console.log(result)) // Handle success
  .catch((error) => console.error(error)); // Handle error

// ===================================================
// ✅ Simulating Asynchronous Behavior with setTimeout
// ===================================================

function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🎉 Task completed after 2 seconds"); // Simulated async result
    }, 2000); // Wait 2 seconds
  });
}

asyncTask()
  .then((message) => console.log(message)) // Output success message
  .catch((err) => console.error("Error:", err)); // Handle any error

// ===================================================
// ✅ Chaining Promises
// ===================================================

function firstStep() {
  return Promise.resolve("Step 1 complete");
}

function secondStep(prevMessage) {
  return Promise.resolve(prevMessage + " → Step 2 complete");
}

firstStep()
  .then((result1) => secondStep(result1)) // Chain second step
  .then((result2) => console.log(result2)) // Final result
  .catch((err) => console.error("Error in chain:", err)); // Catch any error in chain

// ===================================================
// ✅ Now that you know Promises...
// ===================================================
/*
You are ready to learn async/await – a simpler way to write the same logic
without chaining .then()/.catch(). It makes your code cleaner.
*/

// ===================================================
// ✅ JavaScript Async & Await – Full Lesson with Comments
// ===================================================

// ===================================================
// ✅ 1. What is async/await?
// ===================================================
/*
🔸 async/await is syntax for writing asynchronous code that looks synchronous
🔸 Helps you handle promises more clearly than using .then().catch()
🔸 Makes code easier to read, debug, and maintain
*/

// ===================================================
// ✅ 2. The async Keyword
// ===================================================
/*
🔹 Declares a function as asynchronous
🔹 Automatically returns a Promise
*/

async function exampleAsync() {
  return "Hello from async function!"; // Implicitly returns a resolved Promise
}

exampleAsync().then((result) => console.log(result)); // Output the resolved value when the promise completes

// ===================================================
// ✅ 3. The await Keyword
// ===================================================
/*
🔹 Used inside async functions only
🔹 Pauses execution until the Promise resolves
🔹 Makes code look synchronous while still being non-blocking
*/

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); // Create a promise that resolves after ms milliseconds
}

async function waitAndPrint() {
  console.log("Wait starts..."); // Log before delay
  await delay(2000); // Wait for 2 seconds
  console.log("✅ Waited 2 seconds and now prints this"); // Log after the delay
}

waitAndPrint(); // Call the async function

// ===================================================
// ✅ 4. Async/Await with fetch API
// ===================================================

async function fetchPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Fetch data from API and wait for it

    if (!res.ok) throw new Error("❌ Failed to fetch post"); // Throw error if response not OK

    const data = await res.json(); // Parse JSON from the response
    console.log("📄 Post fetched:", data); // Log the parsed data
  } catch (err) {
    console.error("🚫 Error:", err.message); // Catch and log any error
  }
}

fetchPost(); // Call the function to fetch post

// ===================================================
// ✅ 5. Mixing async/await with try...catch
// ===================================================
/*
✅ Use try...catch blocks to catch any errors that occur inside async functions
✅ This is similar to .catch() in promises, but cleaner
*/

async function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Division by zero"); // Throw error if b is zero
    return a / b; // Return the result of division
  } catch (err) {
    console.error("❌ Math error:", err.message); // Log the custom error message
  }
}

safeDivide(10, 2); // Expected output: 5
safeDivide(10, 0); // Expected output: ❌ Math error: Division by zero

// ===================================================
// ✅ 6. Summary – async/await Concepts
// ===================================================
/*
🔹 async function → automatically returns a Promise
🔹 await expression → waits for a Promise to resolve
🔹 Makes async code look like normal sync code
🔹 Use try...catch for error handling
*/

// ===================================================
// ✅ 7. Bonus: Parallel Async Calls
// ===================================================

async function fetchMultiple() {
  const [post1, post2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
      res.json()
    ), // Fetch and parse post 1
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
      res.json()
    ), // Fetch and parse post 2
  ]);

  console.log("Post 1:", post1); // Log first post
  console.log("Post 2:", post2); // Log second post
}

fetchMultiple(); // Run parallel fetch operations

// ===================================================
// ✅ 8. Real-World Example – User Login and Data Load
// ===================================================
/*
Imagine a scenario where:
1. You need to log in the user (simulate with delay)
2. Then fetch their profile data
3. Then display it on screen
*/

function fakeLogin(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🔐 Logged in as:", user); // Log the login user name
      resolve({ token: "abc123" }); // Resolve with a mock token
    }, 1000); // Simulate delay of 1 second
  });
}

function fetchProfile(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📥 Fetched profile using token:", token); // Log fetched profile message
      resolve({ name: "Alice", age: 30 }); // Resolve with profile data
    }, 1000); // Simulate delay of 1 second
  });
}

async function loginAndLoadProfile() {
  const loginData = await fakeLogin("alice123"); // Step 1: Log in user and wait for token
  const profile = await fetchProfile(loginData.token); // Step 2: Fetch profile with token
  console.log("👤 User Profile:", profile); // Step 3: Display user profile
}

loginAndLoadProfile(); // Call the full async login and profile loading process
