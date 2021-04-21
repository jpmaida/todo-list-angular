import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private SERVER_BASE_URL = "/api/todolist";

  constructor(private httpClient: HttpClient) { }

  public all(){
	  return this.httpClient.get(this.SERVER_BASE_URL);
	}

  public new(body: any){
    return this.httpClient.post(this.SERVER_BASE_URL,body);
  }

  public delete(id: number){
    return this.httpClient.delete(this.SERVER_BASE_URL+"/"+id);
  }

  public replace(toDo: any){
    return this.httpClient
      .put(this.SERVER_BASE_URL+"/"+toDo.id, toDo)
      .pipe(
        catchError(error => {
          window.alert("An error has occured!");
          return throwError("An error has occured: " + error.message);
        }));
  }
}
