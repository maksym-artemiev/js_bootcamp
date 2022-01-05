import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';


import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    RouterModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
