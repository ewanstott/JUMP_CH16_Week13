//PROMISES
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
function genPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("It worked");
    }, 1000);
  });
}

async function go() {
  try {
    const result1 = await genPromise();
    const result2 = await genPromise();
    const result3 = await genPromise();
    const result4 = await genPromise();
    const result5 = await genPromise();

    console.log(result1);
  } catch (err) {
    console.log(err);
  }
}
go();
//would NOT normally write promises (usually done automatically^^)
