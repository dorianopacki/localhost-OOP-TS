import fetch from "node-fetch";

async function getData<T>(query: string): Promise<T> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error("The error has occurred" + err.message);
  }
}
export { getData };
