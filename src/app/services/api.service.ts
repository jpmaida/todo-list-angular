import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_BASE_URL = "/api/todolist";

  constructor(private httpClient: HttpClient) { }

  public get(){
		return this.httpClient.get(this.SERVER_BASE_URL);
	}
}
