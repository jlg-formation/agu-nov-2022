import { Router } from "express";

const articles = [
  {
    name: "Tournevis cruciforme",
    price: 2.5,
    qty: 123,
  },
  {
    name: "Marteau",
    price: 2.25,
    qty: 25,
  },
];

const app = Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
