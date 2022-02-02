import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LogService } from 'src/app/shared/services/login-service';
import { PostService } from '../../services/post.service';
import { Post } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
})
export class PostsComponent implements OnInit {
  @Input() post!: Post;
  authorized!: string | null;

  constructor(
    private postService: PostService,
    private router: Router,
    private logService: LogService,
    private snackBar: MatSnackBar
  ) {}

  public toggleLike(id: string) {
    if (id && this.authorized) {
      return this.postService
        .like(id)
        .subscribe((post: Post) => (this.post = post));
    } else {
      return this.snackBar.open('You can`t like a post if not logged!!!', 'Ok.', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    }
  }

  onPageRoute(id = ''): void {
    this.router.navigate([`posts/${id}`]);
  }

  ngOnInit(): void {
    this.logService
      .isAuthenticated()
      .subscribe((authorized) => (this.authorized = authorized));
  }
}
