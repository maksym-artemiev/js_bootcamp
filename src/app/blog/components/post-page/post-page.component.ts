import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/shared/services/login-service';

import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less'],
})
export class PostPageComponent implements OnInit {
  post!: Post | undefined;
  authorized!: string | null;
  isSameAuthor: boolean = false;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private logService: LogService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  getPost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postService.getPostById(id).subscribe((post: Post) => {
      this.post = post;
      this.isSameAuthor = this.isAuthor();
    });
  }

  onPageRoute(id = ''): void {
    this.router.navigate([`edit-post/${id}`]);
  }

  editPost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(id);
    this.router.navigate(['edit-post']);
  }

  deletePost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.postService.deletePostById(id).subscribe();
    this.router.navigate(['home']);
  }

  isAuthor() {
    return localStorage.getItem('id')
      ? this.post?.author._id === localStorage.getItem('id')
      : false;
  }

  public toggleLike(id: string) {
    if (id && this.authorized) {
      return this.postService
        .like(id)
        .subscribe((post: Post) => (this.post = post));
    } else {
      return this.snackBar.open('You can`t vote if not logged!!!', 'Ok.', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    }
  }

  public backToList() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.getPost();
    this.logService
      .isAuthenticated()
      .subscribe((authorized) => (this.authorized = authorized));
  }
}
