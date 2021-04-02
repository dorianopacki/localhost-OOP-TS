import { getData } from "./fetchData";
import { checkIfFileExists, saveBookInCache } from "./helpers";

const dataManager = async (query: string) => {
  try {
    const dataFromCache = await checkIfFileExists(query);

    if (!dataFromCache) {
      console.log(dataFromCache);
    } else {
      const data = await getData(query);
      await saveBookInCache(query, data);
    }
  } catch (err) {
    console.log(err);
  }
};

export { dataManager };
