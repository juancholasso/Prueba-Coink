import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-dataconfirm',
  templateUrl: './signup-dataconfirm.page.html',
  styleUrls: ['./signup-dataconfirm.page.scss'],
})
export class SignupDataconfirmPage implements OnInit {

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
    this.IMG_COINK = '/assets/img/coink.png';
    this.IMG_COL = '/assets/img/col.png';
    this.form = this.formBuilder.group({
      document_id: ['', Validators.required],
      document_number: ['', [Validators.required, Validators.max(99999999999), Validators.min(1000000)]],
      birth_date: ['', [Validators.required]],
      document_expiration_date: ['', Validators.required],
      gender_id: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
         this.body = JSON.parse(params['body']);
      }
    )
  }

  next(){
    this.router.navigate(['signup/security'],
    { queryParams: { body: JSON.stringify(this.body) }});
  }

  previous(){
    this.router.navigate(['signup/dataaccount'],
    { queryParams: { body: JSON.stringify(this.body) }});
  }

}
