import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
