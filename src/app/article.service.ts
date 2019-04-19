import { Injectable } from '@angular/core';
import { Article } from './articles/Article';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public getOneArticle(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + id);
  }

  public getSomeArticle(texte: string): Observable<Article[]> {
    let params: any = {};
    params.q = texte;
    return this.http.get<Article[]>("http://localhost:3000/articles/", { params });
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticles(article: Article): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/articles/" + article.id);
  }

  public createArticles(article: Article): Observable<void> {
    return this.http.post<void>("http://localhost:3000/articles", article);
  }
}
