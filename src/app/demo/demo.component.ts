import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[DataserviceService]
})
export class DemoComponent implements OnInit {
user:any=[];
  constructor(private dataservice:DataserviceService,private _http:Http) { }
  demo()
  {
   var v = this.dataservice.getUsers();
  
      alert(v.toString());
         return this._http.get('http://localhost:5678/api/user/getAll')
         .map(resdata=>this.user=resdata.json());
  
  }
  getdata()
  {
    alert(this.user);
    console.log(this.user);
  }
  ngOnInit() {
  }

}
