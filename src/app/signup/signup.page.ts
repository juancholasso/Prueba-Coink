import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public IMG_STATE:string; 
  public IMG_COINK:string; 
  public IMG_COL:string; 

  public body:any = {
    "phone_number":"",
    "names":"",
    "last_names":"",
    "document_id":null,
    "document_number":"",
    "document_expiration_date":"",
    "birth_date":"",
    "gender_id":null,
    "state_id":"",
    "city_id":"",
    "address":"",
    "pin":"",
    "email":"",
    "imei":"",
    "push_registration_id":"",
    "topic_registration_id":"",
    "referrer_phonenumber":"",
    "query_id":"",
  }

  constructor(private service:ApiService,
    public alertController: AlertController,
    public router: Router
  ) {
    this.IMG_STATE = '/assets/img/state1.png';
    this.IMG_COINK = '/assets/img/coink.png';
    this.IMG_COL = '/assets/img/col.png';
  }
  
  async ngOnInit() {
  }

  public next():void{
    console.log(this.body)
    if(this.body.phone_number.toString().length != 10){
      this.presentAlert("Error", `El número ${this.body.phone_number} no es válido.`, ['Volver']);
    }
    else
      this.router.navigate(['signup/numbervalidate'],
      { queryParams: { body: JSON.stringify(this.body) }});
  }

  async presentAlert(header:string, message:string, buttons:Array<string>) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }
}
