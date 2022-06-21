import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }
  
  public aboutData():any{
    //var token = (window.localStorage.getItem(JSON.parse("login_detail")))
    var obj = window.localStorage.getItem("login_details");
    var token = JSON.parse(obj).token;
    return this._http.post("http://localhost:8080/about",{
      'token': token
    })
  }

  public contactData():any{
    var obj = window.localStorage.getItem("login_details");
    var token = JSON.parse(obj).token;
    return this._http.post("http://localhost:8080/contact",{
      'token': token
    })
  }

  public portfolioData():any{
    var obj = window.localStorage.getItem("login_details");
    var token = JSON.parse(obj).token;
    return this._http.post("http://localhost:8080/portfolio",{
      'token': token
    })
  }

}
