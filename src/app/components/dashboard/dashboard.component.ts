import { Component, OnInit } from '@angular/core';
//whenever we click the logout we need to land the login page 
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public logout(){
    window.localStorage.removeItem("login_details");
    this._router.navigate(["/"]);
  }

}
