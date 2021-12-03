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
    about: 'Spoken interaction with mobile devices and consumer'
  },
  {
    name: 'John Dow',
    title: 'Accessibility of Remote Meetings',
    about: 'The impact of COVID-19 has seen a substantial increase'
  }]

  today: number = Date.now();

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPostData().subscribe(post => this.posts.unshift(post));
  }
}
