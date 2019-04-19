import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }
  createArticle() {
    const formModel = this.articleForm.value;
    const newArticle = {
      title: formModel.title,
      content: formModel.content,
      author: formModel.author,
      id: Date.now()
    }
    this.articleService.createArticles(newArticle).subscribe(value => { this.router.navigateByUrl("/"); });
  }

  ngOnInit() {
  }

}
