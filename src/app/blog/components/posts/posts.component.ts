import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
})

export class PostsComponent implements OnInit {
  posts!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  public onClick(post: Post): void {
    post.like ? (post.like = 0) : (post.like = 1);
  }

  ngOnInit(): void {
    this.posts = this.postService.getDataFromServer();
  }
}
