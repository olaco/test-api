import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'female-users',
  templateUrl: './female-users.component.html',
  styleUrls: ['./female-users.component.css']
})
export class FemaleUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

   randomUser:any = [];

  ngOnInit() {

    this.get_female();
  }



  get_female() {
    this.http.get("https://randomuser.me/api/?results=3&gender=female")
        .subscribe((response: { results: any[] }) => {
            console.log(response);
            //this.randomUser = res.results[0]; // only use the first user, or
             this.randomUser = response.results; // use all entries returned by the api.
    });
}

}
