import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '450px',
      height: '320px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Form closed.');
    });
  }

  ngOnInit(): void {
  }

}
