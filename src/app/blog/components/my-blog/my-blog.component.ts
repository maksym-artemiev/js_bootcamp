import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.less'],
})
export class MyBlogComponent implements OnInit {
  posts!: Observable<Post[]>;
  authorized!: string | null;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getDataFromServer();
  }
}
