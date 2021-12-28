import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [MatCardModule],
  exports: [UserComponent],
})
export class UserModule {}
