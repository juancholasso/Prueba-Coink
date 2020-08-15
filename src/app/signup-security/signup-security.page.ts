import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup-security',
  templateUrl: './signup-security.page.html',
  styleUrls: ['./signup-security.page.scss'],
})
export class SignupSecurityPage implements OnInit {

  public IMG_STATE:string; 
  public IMG_COINK:string; 
  public IMG_COL:string;
  public body:any;
  public form : FormGroup;

  constructor(private service:ApiService,
    public alertController: AlertController,
    public router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.IMG_STATE = '/assets/img/state1.png';
    this.IMG_COINK = '/assets/img/coinksecure.png';
    this.IMG_COL = '/assets/img/col.png';
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      email_confirm: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required]],
      pin_confirm: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
         this.body = JSON.parse(params['body']);
      }
    )
  }

  public next():void{
    if(this.form.controls['email'].value != this.form.controls['email_confirm'].value){
      this.presentAlert("Error","Los correos no coinciden",["Volver"])
    }
    else if(this.form.controls['pin'].value != this.form.controls['pin_confirm'].value){
      this.presentAlert("Error","Los pines no coinciden",["Volver"])
    }
    else{
      this.router.navigate(['signup/securityvalidate'],
      { queryParams: { body: JSON.stringify(this.body) }});
    }
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
