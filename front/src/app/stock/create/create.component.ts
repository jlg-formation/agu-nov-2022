import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl(1, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  async submit() {
    console.log('submit');
    const newArticle = this.f.value as Article;
    // await this.articleService.add(newArticle);
    this.router.navigateByUrl('/stock');
  }
}
