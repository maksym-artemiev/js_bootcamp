import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/shared/services/login-service';

import { PostService } from '../../services/post.service';
import { Post } from '../posts/post.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less'],
})
export class PostPageComponent implements OnInit {
  post!: Post | undefined;
  authorized!: string | null;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private logService: LogService
  ) {}

  getPost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postService
      .getPostById(id)
      .subscribe((post: Post) => (this.post = post));
  }

  ngOnInit(): void {
    this.getPost();
    this.logService
      .isAuthenticated()
      .subscribe((authorized) => (this.authorized = authorized));
  }
}
