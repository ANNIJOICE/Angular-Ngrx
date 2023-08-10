import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddArticleAction } from './posts/store/article.action';
import { Article } from './posts/types/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => store.article);
  }

  addArticle(form: NgForm) {
    this.store.dispatch(
      new AddArticleAction(form.value)
    );
    form.reset();
  }

}
