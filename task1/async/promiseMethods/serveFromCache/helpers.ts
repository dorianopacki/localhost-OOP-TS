import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

async function checkIfFileExists(fileName: string) {
  try {
    const result: string = await readFile(`.//cache/${fileName}.json`, "utf-8");
    return await JSON.parse(result);
  } catch (error) {
    return error;
  }
}

async function saveBookInCache(fileName: string, data: any) {
  try {
    await writeFile(`.//cache/${fileName}.json`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export { checkIfFileExists, saveBookInCache };
