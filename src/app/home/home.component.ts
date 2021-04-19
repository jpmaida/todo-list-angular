import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDoList = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{
			console.log(data);
			this.toDoList = data;
		})
	}

}
