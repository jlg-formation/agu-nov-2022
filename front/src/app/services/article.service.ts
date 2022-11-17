import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {
    console.log('instantiate service');
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (str === null) {
      return [
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
    }
    return JSON.parse(str);
  }

  async add(newArticle: Article) {
    this.articles.push(newArticle);
    this.save();
  }
  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
