import { dataManager } from "./task1/async/promiseMethods/serveFromCache/mangeData";
import { pathToFileURL } from "url";
import task1 from "./task1";
import { getData } from "./task1/async/promiseMethods/serveFromCache/fetchData";
import { checkIfFileExists } from "./task1/async/promiseMethods/serveFromCache/helpers";
import {
  prom1,
  prom2,
  prom3,
} from "./task1/async/promiseMethods/MOCK_PROMISES";
import { recursivePromise } from "./task1/async/promiseMethods/recursivePromise/recursivePromise";
import {
  promiseAll,
  promiseRace,
  promiseLast,
  promiseIgnore,
} from "./task1/async/promiseMethods/promiseMethods/promiseMethods";

// const a = recursivePromise([prom1, prom2, prom3]);
// a.then((payLoad) => console.log(payLoad));

// const a = Promise.all([prom1, prom2, prom3]);
// a.then((value) => console.log(value)).catch((err) => console.log(err));

import { start } from "./task1/async/promiseMethods/mailWithHook/server";
start();
