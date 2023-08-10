import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../types/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<PostInterface[]> {
    const posts: PostInterface[] = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
      { id: 3, title: "Third Post" },
    ]
    return of(posts).pipe(delay(2000));
  }
}
