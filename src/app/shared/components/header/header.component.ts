import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../create-post-form/create-post-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PostFormComponent, {
      width: '450px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form closed.');
    });
  }

  ngOnInit(): void {}
}
