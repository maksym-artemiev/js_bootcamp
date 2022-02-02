import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyBlogComponent } from './components/my-blog/my-blog.component';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PostsComponent } from './components/posts/posts.component';
import { MatIconModule } from '@angular/material/icon';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CreateCommentsComponent } from './components/create-comments/create-comments.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { UpdatePostPageComponent } from './components/update-post-page/update-post-page.component';

@NgModule({
  declarations: [
    MyBlogComponent,
    PopularTagsComponent,
    PostsComponent,
    PostPageComponent,
    CreateCommentsComponent,
    CommentsListComponent,
    UpdatePostPageComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [MyBlogComponent],
})
export class BlogModule {}
