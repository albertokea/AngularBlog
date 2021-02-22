import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[];

  async ngOnInit() {
    this.posts = await this.postService.getAll()
  }

  async filter($event) {
    await ($event.target.value == '') ? this.posts = this.postService.getAll() : this.posts = this.postService.getPostbyCategory($event.target.value);
  }

  async onClickFilter(category) {
    this.posts = await this.postService.getPostbyCategory(category);
  }
}
