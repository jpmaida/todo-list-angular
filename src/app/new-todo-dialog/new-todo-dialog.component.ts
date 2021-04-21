import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrls: ['./new-todo-dialog.component.css']
})
export class NewTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  description: string;
  isDone: boolean;
}