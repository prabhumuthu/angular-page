import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private result;
  constructor(private _service: DashboardService) { }

  ngOnInit() {
    this._service.aboutData().subscribe(
                        (res) => {  this.result = res
                      },
                        (err:HttpErrorResponse)=>{
                          if(err.error instanceof Error)
                          console.log("client side error")
                          else
                          console.log("server side error")
                        })
}


}
