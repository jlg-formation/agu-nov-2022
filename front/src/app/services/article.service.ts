import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      name: 'Tournevis',
      price: 2.5,
      qty: 123,
    },
    {
      name: 'Marteau',
      price: 2.25,
      qty: 25,
    },
  ];

  constructor() {
    console.log('instantiate service');
  }

  async add(newArticle: Article) {
    this.articles.push(newArticle);
  }
}
