import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import {
  faCoffee,
  faRotateRight,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faCoffee = faCoffee;
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();
  constructor(protected articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  async remove() {
    console.log('remove');
    await this.articleService.remove(this.selectedArticles);
    await this.articleService.refresh();
    this.selectedArticles.clear();
  }

  async refresh() {
    await this.articleService.refresh();
  }
}
