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

    if (localStorage.getItem('posts_data')) {
      this.posts = JSON.parse(localStorage.getItem('posts_data'));
    } else {
      this.posts = [
        {
          title: 'New covid research',
          text: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. ',
          author: 'User1',
          image: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
          date: new Date,
          category: 'news'
        },
        {
          title: 'My travel to asia',
          text: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. ',
          author: 'User2',
          image: 'https://dam.esquirelat.com/wp-content/uploads/2019/01/big-lebowski-jeff-bridges-regreso-cover-770x513.jpg',
          date: new Date,
          category: 'travel'
        },
      ]
    }
  }

  getAll() {
    return this.posts;
  }

  addPost(post) {
    this.posts.unshift(post);
    localStorage.setItem('posts_data', JSON.stringify(this.posts));
  }

  getPostbyCategory(category) {
    return this.posts.filter(post => category === post.category)
  }

}
