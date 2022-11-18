import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticleService } from './article.service';

const url = '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article instantiated');
    this.refresh();
  }

  override async refresh() {
    try {
      const articles = await lastValueFrom(this.http.get<Article[]>(url));
      console.log('articles: ', articles);
      this.articles = articles;
      this.save();
    } catch (err) {
      console.log('err: ', err);
    }
  }

  override async add(newArticle: Article): Promise<void> {
    await super.add(newArticle);
    this.http.post(url, newArticle).subscribe({
      next: () => {
        console.log('next');
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }

  override async remove(selectedArticles: Set<Article>): Promise<void> {
    await super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete(url, {
        body: ids,
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: () => {
          console.log('next');
        },
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }
}
