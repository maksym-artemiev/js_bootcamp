import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBlogComponent } from '../app/blog/components/my-blog/my-blog.component';
import { PostFormComponent } from '../app/shared/components/create-post-form/create-post-form.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { UserComponent } from './auth/components/user/user.component';


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
