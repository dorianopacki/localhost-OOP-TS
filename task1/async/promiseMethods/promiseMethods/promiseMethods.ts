function promiseAll(array: Array<Promise<unknown>>): Promise<unknown> {
  const result: Array<unknown> = [];
  return new Promise((resolve, reject) => {
    array.forEach(async (promise) => {
      try {
        const payLoad = await promise;
        result.push(payLoad);
      } catch (error) {
        reject(error);
      }

      if (result.length === array.length) resolve(result);
    });
  });
}

function promiseRace(array: Array<Promise<unknown>>) {
  return new Promise((resolve, reject) => {
    array.forEach(async (promise) => {
      try {
        const payLoad = await promise;
        resolve(payLoad);
      } catch (error) {
        reject(error);
      }
    });
  });
}

function promiseLast(array: Array<Promise<unknown>>) {
  const result: Array<unknown> = [];
  return new Promise((resolve, reject) => {
    array.forEach(async (promise) => {
      try {
        const payLoad = await promise;
        result.push(payLoad);
      } catch (error) {
        reject(error);
      }
      if (result.length === array.length) resolve(result[result.length - 1]);
    });
  });
}

function promiseIgnore(array: Array<Promise<unknown>>) {
  const result: Array<unknown> = [];
  const errors: Array<unknown> = [];
  return new Promise<unknown>((resolve, reject) => {
    array.forEach(async (promise) => {
      try {
        const payLoad = await promise;
        result.push(payLoad);
      } catch (error) {
        errors.push(error);
      }
      if ([...errors, ...result].length === array.length) resolve(result);
    });
  });
}

export { promiseAll, promiseRace, promiseLast, promiseIgnore };
