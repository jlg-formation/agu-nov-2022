import { json, Router } from "express";
import { Article } from "./interfaces/article";

const generateId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1e9);
};

const articles: Article[] = [
  {
    id: generateId(),
    name: "Tournevis cruciforme",
    price: 2.5,
    qty: 123,
  },
  {
    id: generateId(),
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

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle = req.body;
  console.log("newArticle: ", newArticle);
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

export const api = app;
