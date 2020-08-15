import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected http: HTTP;
  protected httpClient: HttpClient;
  protected platform: any;
  public logindata: any = [];

  constructor(
    http: HTTP,
    httpClient: HttpClient,
    platform: Platform,
  ) {
    this.http = http;
    this.httpClient = httpClient;
    this.platform = platform;
  }

  /*
   * This function identifies whether it is in mobile app or desktop for post
   */
  protected async post(pathUrl: string, data: any, token: any) {
    await this.platform.ready();
    const isCordovaDevice = this.platform.is('cordova');
    let headers = {};


    if (isCordovaDevice) {
      if (this.logindata.token != null) {
        headers = {
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      else {
        headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      try {
        this.http.setDataSerializer('json');
        const req = await this.http.post(pathUrl, data, headers);
        const reqObservable = await new Observable(
          (observer) => {
            observer.next(JSON.parse(req.data));
          });
        return reqObservable;
      } catch (err) {
        const errObservable = throwError(err);
        return errObservable;
      }
    } else {
      if (this.logindata.token != null) {
        headers = new HttpHeaders({
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      } else {
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      }
      return this.httpClient.post(pathUrl, data, { headers: headers });
    }
  }

  /*
   * This function identifies whether it is in mobile app or desktop for post
   */
  protected async put(pathUrl: string, data: any, token: any) {
    await this.platform.ready();
    const isCordovaDevice = this.platform.is('cordova');
    let headers = {};

    if (isCordovaDevice) {
      if (this.logindata.token != null) {
        headers = {
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      else {
        headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      try {
        this.http.setDataSerializer('json');
        const req = await this.http.put(pathUrl, data, headers);
        const reqObservable = await new Observable(
          (observer) => {
            observer.next(JSON.parse(req.data));
          });
        return reqObservable;
      } catch (err) {
        const errObservable = throwError(err);
        return errObservable;
      }
    } else {
      if (this.logindata.token != null) {
        headers = new HttpHeaders({
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      } else {
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      }
      return this.httpClient.put(pathUrl, data, { headers: headers });
    }
  }

  /*
    * This function identifies whether it is in mobile app or desktop for get
  */
  protected async get(pathUrl: string, token: any) {
    await this.platform.ready();
    const isCordovaDevice = this.platform.is('cordova');
    let headers = {};

    if (isCordovaDevice) {
      let headers;
      if (this.logindata.token != null) {
        headers = {
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      } else {
        headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      try {
        const req = await this.http.get(pathUrl, {}, headers);
        const reqObservable = await new Observable((observer) => {
          observer.next(JSON.parse(req.data));
        });
        return reqObservable;
      } catch (err) {
        const errObservable = throwError(err);
        return errObservable;
      }
    } else {
      let headers;
      if (this.logindata.token != null) {
        headers = new HttpHeaders({
          'Authorization': 'Bearer ' + this.logindata.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      } else {
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        });
      }
      return this.httpClient.get(pathUrl, { headers: headers });
    }
  }

  /*
    * Post with Files
  */
  protected async postFile(pathUrl: string, data: any, token: any, files: any, namefiles: any) {
    await this.platform.ready();
    let headers = {};
    if (this.logindata.token != null) {
      headers = {
        'Authorization': 'Bearer ' + this.logindata.token,
        'Content-Type': 'multipart/form-data',
      };
    } else {
      headers = {
        'Content-Type': 'multipart/form-data',
      };
    }
    try {
      const req = await this.http.uploadFile(pathUrl, data, headers, files, namefiles);
      const reqObservable = await new Observable(
        (observer) => {
          observer.next(JSON.parse(req.data));
        });
      return reqObservable;
    } catch (err) {
      const errObservable = throwError(err);
      return errObservable;
    }
  }

  protected async delete(pathUrl: string, token: any) {
    const isCordovaDevice = this.platform.is('cordova');
    this.http.setDataSerializer('json');
    const headers = {
      'Authorization': 'Bearer ' + this.logindata.token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    this.http.setDataSerializer('json');
    const req = await this.http.delete(pathUrl, null, headers);
    const reqObservable = await new Observable(
      (observer) => {
        observer.next(JSON.parse(req.data));
      });

    return reqObservable;
  }

  /*
   * This function identifies whether it is in mobile app or desktop for post
   */
  protected async postLogin(pathUrl: string, data: any) {
    let headers = {};
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    try {
      this.http.setDataSerializer('json');
      const req = await this.http.post(pathUrl, data, headers);
      const reqObservable = await new Observable(
        (observer) => {
          observer.next(JSON.parse(req.data));
        });
      return reqObservable;
    } catch (err) {
      const errObservable = throwError(err);
      return errObservable;
    }
  }
}
