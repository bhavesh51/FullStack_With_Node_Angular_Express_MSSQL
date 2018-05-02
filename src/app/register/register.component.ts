import { Component, OnInit } from '@angular/core';
import {Form,FormBuilder,FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import {DataserviceService} from '../dataservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor() { }
// private _http : Http
  ngOnInit() {
  }
 
  register(form:any)
  {
    // return this._http.post('http://localhost:54857/api/LoginCheck?userName='+form.value.userName+'&password='+form.value.password, form.value)
    // .subscribe(function(resProductData){
    //   this.user = resProductData.json();
    //   console.log("form data  "+form.value.userName);
    //   console.log(this.user);
    //   if(this.user!=null)
    //     {
    //       if(this.user==form.value.userName)
    //         {
    //             sessionStorage.setItem('loginstatus', '1');
    //             var data = sessionStorage.getItem('loginstatus');
    //             location.reload();
    //             // this.router.navigate(['/home']); 
               
    //         }
    //         else
    //         {
    //             sessionStorage.setItem('loginstatus', '0');
    //             var data = sessionStorage.getItem('loginstatus');
    //             alert("Not matched");
    //         }
    //     }
    //     else
    //     {
    //             alert("UserName and Password Are Not Matched");
    //     }
    // });

  }

}
