const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("From the first promise");
  }, 60);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("From the second promise");
  }, 50);
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" From the third promise");
  }, 10);
});

export { prom1, prom2, prom3 };
