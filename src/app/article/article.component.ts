import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../articles/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();

  constructor() {
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }
  ngOnInit() {
  }


}
