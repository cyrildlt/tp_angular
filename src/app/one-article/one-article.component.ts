import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../articles/Article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {
  onlyArticle: Article;
  constructor(private articleService: ArticleService, private router: ActivatedRoute, private routing: Router) {

  }

  ngOnInit() {
    this.router.params.subscribe(value => { this.articleService.getOneArticle(value["id"]).subscribe(articl => { this.onlyArticle = articl; }) })
  }

}
