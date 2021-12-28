import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyBlogComponent } from './components/my-blog/my-blog.component';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';

import { PostsComponent } from './components/posts/posts.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MyBlogComponent, PopularTagsComponent, PostsComponent],
  imports: [BrowserModule, MatIconModule],
  exports: [MyBlogComponent],
})
export class BlogModule {}