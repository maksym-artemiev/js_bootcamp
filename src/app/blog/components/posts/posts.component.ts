import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];

  today: number = Date.now();

  constructor(private postService: PostService) {}

  public onClick(post: Post): void {
    post.like ? (post.like = 0) : (post.like = 1);
  }

  ngOnInit(): void {
    this.postService
      .getPostData()
      .subscribe((posts) => this.posts = posts);
  }
}
