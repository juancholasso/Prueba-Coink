import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, throwError } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService{

  KEY_CIPHER:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI0NDEyNTIiLCJWZXJzaW9uIjoiMS4wLjAifQ.OHyAIQwymM8QKo0ETrP8QIpneMEvJncMdgb3YCBbPTY";
  PATH:string = "https://api.bancoink.biz/qa";
  API_KEY:string = "441252";

  constructor(http: HTTP,
    httpClient: HttpClient,
    platform: Platform) {
    super(http,httpClient,platform);
  }

  public login(data:any, url:string="/login/verifyDirectLogin"){
    var body:any ={ 
      "payload": this.encrypt(data)
    }
    return this.post(this.PATH+url+"?apiKey="+this.API_KEY, body, null);
  }

  public signup(data:any, url:string="/signup/v2"){
    var body:any ={ 
      "payload": this.encrypt(data)
    }
    return this.post(this.PATH+url+"?apiKey="+this.API_KEY, body, null);
  }

  private encrypt(json: any, key:string=this.KEY_CIPHER){
    var hash = CryptoJS.enc.Utf8.parse(JSON.stringify(json));
    var keyHash = this.getKeyHash(key);
    var payload = CryptoJS.TripleDES.encrypt(hash, keyHash, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).toString();
    return payload;
  }

  private decrypt(payload: string, key:string=this.KEY_CIPHER){
    var hash = CryptoJS.enc.Base64.parse(payload);
    var keyHash = this.getKeyHash(key);
    var json = CryptoJS.TripleDES.decrypt(hash, keyHash, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return json;
  }

  private getKeyHash(key:string){
    var hash = CryptoJS.MD5(key).toString();
    hash += hash.substring(0,16);
    return CryptoJS.enc.Hex.parse(hash);
  }
}
