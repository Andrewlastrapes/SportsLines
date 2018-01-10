import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';






@Injectable()
export class RestProvider {

  apiUrl = "https://jsonodds.com/api/odds/nfl"

  apiKey = "b8d96367-e88a-4f9d-aa5d-f270fab35c2c"

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


 getNFL() {
   return new Promise(resolve => {
     this.http.get("https://cors-anywhere.herokuapp.com/" + this.apiUrl, { headers: new HttpHeaders().set("JsonOdds-API-Key", "b8d96367-e88a-4f9d-aa5d-f270fab35c2c")}).subscribe(data => {
     resolve(data);
   },   err => {
  console.log(err);
   });
 });

	}

}