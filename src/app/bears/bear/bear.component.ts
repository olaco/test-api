import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bear',
  templateUrl: './bear.component.html',
  styleUrls: ['./bear.component.css']
})
export class BearComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


  }




}












//   get_male() {
//     this.httpClient.get("https://randomuser.me/api/?results=25&gender=male")
//         .subscribe((res: { results: any[] }) => {
//             console.log(res);
//             //this.randomUser = res.results[0]; // only use the first user, or
//              this.randomUser = res.results; // use all entries returned by the api.
//     });
// }


