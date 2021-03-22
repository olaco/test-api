import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'male-users',
  templateUrl: './male-users.component.html',
  styleUrls: ['./male-users.component.css']
})
export class MaleUsersComponent implements OnInit {

  maleUsers:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(){

    this.maleUser()
  }

  maleUser(){

      this.http.get('https://randomuser.me/api/?results=4&gender=male')
      .subscribe((response: {results: any[]}) => {

        this.maleUsers= response.results;
      })
  }

}
