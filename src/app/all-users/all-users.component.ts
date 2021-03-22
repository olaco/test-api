import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

   allUser:any= [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.allUsers();
  }

  allUsers(){

    this.http.get('https://randomuser.me/api/?results=3')
    .subscribe((response: {results: any[]})=> {


       this.allUser = response.results;

    })
  }





}
