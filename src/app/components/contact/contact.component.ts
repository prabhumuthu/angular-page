import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private result;
  constructor(private _service: DashboardService) { }

  ngOnInit() {
    this._service.contactData().subscribe(
                        (res) => {  this.result = res},
                        (err:HttpErrorResponse)=>{
                          if(err.error instanceof Error)
                          console.log("client side error")
                          else
                          console.log("server side error")
                        })
}


}
