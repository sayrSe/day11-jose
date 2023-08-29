//Promises are a fundamental concept in JavaScript that allow you to work with asynchronous code in a more organized and readable manner.
//Promises represent a value that may not be available yet but will be at some point in the future, or an operation that hasn't completed yet but will eventually.

// Create a Promise that resolves after 2 seconds.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Resolved after 2000 milliseconds`);
    }, 2000);
});

// Create a Promise that rejects after 1 second.
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Promise rejected after 1000 milliseconds"));
    }, 1000);
});

// Use .then() and .catch() to handle the Promise results.
promise1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

promise2
    .then((result) => {
        console.log(result); // This won't be executed because promise2 is rejected.
    })
    .catch((error) => {
        console.error(error.message); // Handle the error message here.
    });

//Synchronous code executes tasks one after the other in a blocking manner, while asynchronous code allows tasks to run concurrently and uses mechanisms like callbacks,
//Promises, or async/await to manage the flow of asynchronous operations. Asynchronous code is preferred for tasks that might take time to complete, like I/O operations,
//to ensure that your program remains responsive and doesn't block.