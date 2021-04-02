import express from "express";

const app = express();

app.get("/send-email", (req, res) => {
  res.send(`<button>Click me </button>`);
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};
