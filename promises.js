// 1.A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// to manage situations where you must wait for the outcome of an operation. For example, uploading files to the server and awaiting the response of an API call, or just asking the user to choose a file from their computer.
// 2.It's used to handle callbacks and avoid callback hell in JavaScript codebase. also avoid the inversion of control. Rather than pass a function to another we just attach a function with the promise object
// 3.There are 3 State Of a promise . pending, fulfilled, rejected
// 4.After Writing promise you should have to consume that
// 5.we can use promise.all() to check whether all the promises has been resolved or not , if any of these resolved then the control will go to the catch block
// Latter we use async await to avoid promise chain

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
    // reject("Oops! err")
  }, 2000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally");
  });

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Using promises
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const listItem = document.querySelector(".listItem");
    const button = document.querySelector("#myBtn");

    function handleShowTitles() {
      for (let i = 0; i < data.length; i++) {
        let li = `<li>${i + 1}. ${data[i].title}</li>`;
        listItem.innerHTML += li;
      }
    }
    button.addEventListener("click", () => {
      console.log("click");
      handleShowTitles();
    });
    button.removeEventListener("click", handleShowTitles);
  })
  .catch((err) => alert("Error", err));

// const getData = async () => {
//   try {
//     const res = await fetch(API_URL);
//     const data = await res.json();

//     const listItem = document.querySelector(".listItem");
//     for (let i = 0; i < data.length; i++) {
//       let li = `<li>${i + 1}. ${data[i].title}</li>`;
//       listItem.innerHTML += li;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// getData();
