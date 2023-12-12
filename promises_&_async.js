//PROMISES (typically promises are built into libraries so we don't have to write them, but useful to understand the mechanics)
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("It failed");
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("It failed");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("It failed");
//   }, 2000);
// });

// Promise.all([promise, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//An enhancement on promises:
//Async/await (wrapping promise in a function so reusable) - "Un-then-ing"
// function genPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("It worked");
//     }, 1000);
//   });
// }

// async function go() {
//   try {
//     const result1 = await genPromise();
//     const result2 = await genPromise();
//     const result3 = await genPromise();
//     const result4 = await genPromise();
//     const result5 = await genPromise();

//     console.log(result1);
//   } catch (err) {
//     console.log(err);
//   }
// }
// go();
//would NOT normally write promises (usually done automatically^^)

// JavaScript Promises In 10 Minutes Eample (https://www.youtube.com/watch?v=DHvZLI7Db8E)

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("fail");
//   }
// });

// //then called if promise successful
// p.then((message) => {
//   console.log("This is in the then " + message);
//   //catch called if promise rejected or fails
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

// //Normal function
// function sum(a, b) {
//   return a + b;
// }
// //arrow function
// const sum2 = (a, b) => a + b;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("it did not work");
  }, 2000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(promise);
