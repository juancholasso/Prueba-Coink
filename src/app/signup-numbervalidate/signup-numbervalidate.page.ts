import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-numbervalidate',
  templateUrl: './signup-numbervalidate.page.html',
  styleUrls: ['./signup-numbervalidate.page.scss'],
})
export class SignupNumbervalidatePage implements OnInit {


  public IMG_STATE:string; 
  public IMG_COINK:string; 
  public IMG_COL:string; 

  public body:any;


  constructor(private service:ApiService,
    public alertController: AlertController,
    public router:Router,
    public route: ActivatedRoute
  ) {
    this.IMG_STATE = '/assets/img/state1.png';
    this.IMG_COINK = '/assets/img/coink.png';
    this.IMG_COL = '/assets/img/col.png';
  }
  
  async ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
         this.body = JSON.parse(params['body']);
      }
    )
  }

  public next():void{
    console.log(this.body)
    if(this.body.phone_number.toString().length != 10){
      this.presentAlert("Error", `El número ${this.body.phone_number} no es válido.`, ['Volver']);
    }
    else
      this.router.navigate(['signup/dataaccount'],
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
