async function recursivePromise(array: Array<Promise<unknown>>) {
  const result: Array<unknown> = [];
  return new Promise(async (resolve, reject) => {
    try {
      for (let promise of array) {
        const payLoad = await promise;
        result.push(payLoad);
      }
    } catch (err) {
      reject([...result, err]);
    }
    if (result.length === array.length) resolve(result);
  });
}

export { recursivePromise };
