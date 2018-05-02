import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataserviceService {

   result:any=[];

   constructor(private _http:Http) { }

   
   getUsers() {
    return this._http.get('http://localhost:5678/api/user/getAll')
    .map(res => res.json());
    // return new Promise((resolve, reject) => {
    //   return this._http.get(`http://localhost:5678/api/user/getAll`).toPromise().then(response => {
    //     resolve(response.json());
    //   }).catch(() => reject());
    // });
    
  }
}
