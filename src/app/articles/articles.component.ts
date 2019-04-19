import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from './Article';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {


  private _articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  articles(): Article[] {
    return this._articles;
  }

  delete(article: Article): void {
    this.articleService.deleteArticles(article).subscribe(() => { this.articleService.getArticles().subscribe(articl => this._articles = articl); })
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articl => this._articles = articl);
  }

  onChangeValue(texte: string): void {
    let articleCorrespondant: Article[];
    this.articleService.getSomeArticle(texte).subscribe(articl => { this._articles = articl; });

  }
}
