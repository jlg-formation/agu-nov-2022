import { Injectable } from '@angular/core';
import { Article, NewArticle } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {
    console.log('instantiate service');
  }

  async add(newArticle: NewArticle) {
    this.articles.push({ ...newArticle, id: 'xxx' });
    this.save();
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (str === null) {
      return [];
    }
    return JSON.parse(str);
  }

  async refresh() {}

  async remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
