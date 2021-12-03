import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts = [{
    name: 'John Dow',
    title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
    about: 'Spoken interaction with mobile devices and consumer',
    like: 0
  },
  {
    name: 'John Dow',
    title: 'Accessibility of Remote Meetings',
    about: 'The impact of COVID-19 has seen a substantial increase',
    like: 0
  }]

  today: number = Date.now();

  constructor(private postService: PostService) { }

  public onClick(p: any): void {
    p.like ? p.like = 0 : p.like = 1;
  }

  ngOnInit(): void {

    this.postService.getPostData().subscribe(post => this.posts.unshift({...post, like: 0}));
  }
}
