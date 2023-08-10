import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PostActions from '../../store/actions'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
      
  }

}
