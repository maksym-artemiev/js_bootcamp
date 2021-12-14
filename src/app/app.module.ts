import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderModule } from './shared/components/header/header.module';
import { BlogModule } from './blog/blog.module';
import { FormModule } from './shared/components/create-post-form/form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, BlogModule, FormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
