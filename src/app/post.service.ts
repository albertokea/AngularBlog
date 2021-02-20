import { Injectable } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  author: string,
  image: string,
  date: Date,
  category: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]

  constructor() {
    this.posts = [
      {
        title: 'New covid research',
        text: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. ',
        author: 'User1',
        image: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
        date: new Date,
        category: 'news'
      }
    ]
  }

  getAll() {
    return this.posts;
  }

  addPost(post) {
    return this.posts.unshift(post)
  }

  getPostbyCategory(category) {
    return this.posts.filter(post => category === post.category)
  }

}
