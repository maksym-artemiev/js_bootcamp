import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderModule } from './shared/components/header/header.module';
import { BlogModule } from './blog/blog.module';
import { FormModule } from './shared/components/create-post-form/form.module';
import { UserModule } from './user/user.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    BlogModule,
    FormModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
