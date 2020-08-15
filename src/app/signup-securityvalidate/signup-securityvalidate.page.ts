import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-signup-securityvalidate',
  templateUrl: './signup-securityvalidate.page.html',
  styleUrls: ['./signup-securityvalidate.page.scss'],
})
export class SignupSecurityvalidatePage implements OnInit {

  public IMG_STATE:string; 
  public IMG_COINK:string; 
  public IMG_COL:string;
  public body:any;

  constructor(private service:ApiService,
    public alertController: AlertController,
    public router: Router,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) { 
    this.IMG_STATE = '/assets/img/state1.png';
    this.IMG_COINK = '/assets/img/coinksecure.png';
    this.IMG_COL = '/assets/img/col.png';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
         this.body = JSON.parse(params['body']);
      }
    )
  }

  public async next(){
    var subscriber = await this.service.signup(this.body);
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();

    subscriber.subscribe(
      (data:any)=>{
        console.log(data);
        loading.dismiss();
        this.presentAlert("Exito","Registro Existoso",["Aceptar"]);
      },
      (err:any)=>{
        console.log(err)
        loading.dismiss();
        this.presentAlert("Error",err.error.message,["Aceptar"]);
      }
    )
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
