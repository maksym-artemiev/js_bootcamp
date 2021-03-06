import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBlogComponent } from '../app/blog/components/my-blog/my-blog.component';
import { PostFormComponent } from '../app/shared/components/create-post-form/create-post-form.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { UserComponent } from './auth/components/user/user.component';
import { PostPageComponent } from './blog/components/post-page/post-page.component';
import { UpdateCommentComponent } from './blog/components/update-comment/update-comment.component';
import { UpdatePostPageComponent } from './blog/components/update-post-page/update-post-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: MyBlogComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'new-article',
    component: PostFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'posts/:id',
    component: PostPageComponent,
  },
  {
    path: 'edit-post/:id',
    component: UpdatePostPageComponent,
  },
  {
    path: 'edit-comment/:id',
    component: UpdateCommentComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
