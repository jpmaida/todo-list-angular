import { TodoApiService } from '../services/todo-api.service';
import { Component, OnInit } from '@angular/core';
import { NewTodoDialogComponent } from '../new-todo-dialog/new-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDoList = [];
  checked = true;

  constructor(private todoApiService: TodoApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadTodoList();
	}

  loadTodoList(){
    this.todoApiService.all().subscribe((data: any[])=>{
      console.log(data);
			this.toDoList = data;
		});
  }

  openNewToDoDialog(): void {
    const dialogRef = this.dialog.open(NewTodoDialogComponent, {
      width: '300px',
      data: {
        description : "",
        isDone : false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.todoApiService.new(result).subscribe((newToDo: any)=>{
          window.alert("To-Do '"+ newToDo.description + "' registred !");
        }, error => { }
        , () => {
          this.loadTodoList();
        });
      }
    });
  }

  deleteToDo(id: number): void{
    this.todoApiService.delete(id).subscribe(()=>{
      window.alert("To-Do has been deleted.");
    }, error => { }
    , () => {
      this.loadTodoList();
    });
  }

  markAsDoneOrUndone(toDo: any, isChecked: any): void{
    let alteredToDo = {
      id : toDo.id,
      description : toDo.description,
      isDone : isChecked
    };
    this.todoApiService.replace(alteredToDo).subscribe((resp: any)=>{
      window.alert("To-Do has been altered.");
    }, error => { }
    , () => {
      this.loadTodoList();
    });
  }
}
