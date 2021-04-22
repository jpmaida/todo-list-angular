import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  //private BASE_SERVER_URL = "http://localhost:8080";
  private BASE_SERVER_URL = "";
  private BASE_API_URL = "/api/todolist";
  private BASE_FULL_URL = this.BASE_SERVER_URL + this.BASE_API_URL;

  constructor(private httpClient: HttpClient) { }

  public all(){
	  return this.httpClient
      .get(this.BASE_FULL_URL)
      .pipe(
        catchError(error => { return this.handleError(error); })
      );;
	}

  public new(body: any){
    return this.httpClient
      .post(this.BASE_FULL_URL,body)
      .pipe(
        catchError(error => { return this.handleError(error); })
      );
  }

  public delete(id: number){
    return this.httpClient
      .delete(this.BASE_FULL_URL+"/"+id)
      .pipe(
        catchError(error => { return this.handleError(error); })
      );
  }

  public replace(toDo: any): any{
    return this.httpClient
      .put(this.BASE_FULL_URL+"/"+toDo.id, toDo)
      .pipe(
        catchError(error => {
          if(error.status == 400){
            return throwError("To-Do list can't be altered.");
          } else {
            return this.handleError(error);
          }
        })
      );
  }

  private handleError(error: any) {
    window.alert("An error has occured!");
    return throwError("An error has occured: " + error.message);
  }
}
