import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
    var x = {
      "phone_number":"3223737326",
      "imei":"12331231"
    }
  
  }

}
