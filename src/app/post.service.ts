import { Injectable } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  author: string,
  image: string,
  date: string,
  category: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]

  constructor() { }


}
