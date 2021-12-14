import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
