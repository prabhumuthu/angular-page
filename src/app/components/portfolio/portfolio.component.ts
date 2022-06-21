import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private result;
  constructor(private _service: DashboardService) { }

  ngOnInit() {
    this._service.portfolioData().subscribe(
                        (res) => {  this.result = res},
                        (err:HttpErrorResponse)=>{
                          if(err.error instanceof Error)
                          console.log("client side error")
                          else
                          console.log("server side error")
                        })
}

}
