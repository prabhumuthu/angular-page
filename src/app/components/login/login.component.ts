import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginService,
              private _router:Router) { }

  ngOnInit() {

  }

  public login(arg1):any{
    this._service.authenticate(arg1).subscribe(res=>{
      if(res.login=="success")
      {
        window.localStorage.setItem("login_details",JSON.stringify(res));
        this._router.navigate(["/dashboard"]);
      }
      else 
      alert("Login failed");
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error)
      console.log("Client side error")
      else
      console.log("Server side error")
      
    })
  }

}
