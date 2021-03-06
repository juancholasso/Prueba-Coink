(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-datacount-signup-datacount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-datacount/signup-datacount.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-datacount/signup-datacount.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>\n        NÚMERO CELULAR\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content *ngIf=\"body != null\">\n    <ion-item>\n      <ion-img class=\"\" [src]=\"IMG_STATE\"></ion-img>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img class=\"imgCoink\" [src]=\"IMG_COINK\"></ion-img>\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-align-self-center\">\n          <ion-item>\n            <label class=\"titInfo\">¿Cuales son tus datos?</label>\n          </ion-item>\n          <ion-item>\n            <label class=\"textInfo\">Ahora necesitamos saber algunos datos tuyos</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr class=\"hrCel\">\n    <ion-grid>\n      <form [formGroup]=\"form\">\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label class=\"inplabel\">Tipo de documento</ion-label>\n            <ion-select placeholder=\"Tipo\" [(ngModel)]=\"body.document_id\" formControlName=\"document_id\">\n              <ion-select-option value=\"1\">Cédula de ciudadania</ion-select-option>\n              <ion-select-option value=\"2\">Cédula de extranjería</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label class=\"inplabel\">Número de documento</ion-label>\n            <ion-input style=\"text-align: end;\" inputmode=\"numeric\" type=\"number\" placeholder=\"#\" [(ngModel)]=\"body.document_number\" formControlName=\"document_number\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label class=\"inplabel\">Fecha de nacimiento</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YY\" placeholder=\"Fecha\" [(ngModel)]=\"body.birth_date\" formControlName=\"birth_date\"></ion-datetime>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n            <ion-item style=\"width: 100%;\">\n              <ion-label class=\"inplabel\">Fecha de expedición</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YY\" min=\"{{body.birth_date}}\" placeholder=\"Fecha\" [(ngModel)]=\"body.document_expiration_date\" formControlName=\"document_expiration_date\"></ion-datetime>\n            </ion-item>\n          </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label class=\"inplabel\">Genero que aparece en tu documento</ion-label>\n            <ion-select placeholder=\"Tipo\" [(ngModel)]=\"body.gender_id\" formControlName=\"gender_id\">\n              <ion-select-option value=\"1\">Cédula de ciudadania</ion-select-option>\n              <ion-select-option value=\"2\">Cédula de extranjería</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n      </form>\n    </ion-grid>\n    <div>\n      <ion-button (click)=\"next()\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"btnRegister\" [disabled]=\"form.invalid\" >Continuar</ion-button>\n    </div>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/signup-datacount/signup-datacount-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/signup-datacount/signup-datacount-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SignupDatacountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDatacountPageRoutingModule", function() { return SignupDatacountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_datacount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-datacount.page */ "./src/app/signup-datacount/signup-datacount.page.ts");




const routes = [
    {
        path: '',
        component: _signup_datacount_page__WEBPACK_IMPORTED_MODULE_3__["SignupDatacountPage"]
    }
];
let SignupDatacountPageRoutingModule = class SignupDatacountPageRoutingModule {
};
SignupDatacountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupDatacountPageRoutingModule);



/***/ }),

/***/ "./src/app/signup-datacount/signup-datacount.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/signup-datacount/signup-datacount.module.ts ***!
  \*************************************************************/
/*! exports provided: SignupDatacountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDatacountPageModule", function() { return SignupDatacountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_datacount_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-datacount-routing.module */ "./src/app/signup-datacount/signup-datacount-routing.module.ts");
/* harmony import */ var _signup_datacount_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-datacount.page */ "./src/app/signup-datacount/signup-datacount.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let SignupDatacountPageModule = class SignupDatacountPageModule {
};
SignupDatacountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _signup_datacount_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupDatacountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        declarations: [_signup_datacount_page__WEBPACK_IMPORTED_MODULE_5__["SignupDatacountPage"]]
    })
], SignupDatacountPageModule);



/***/ }),

/***/ "./src/app/signup-datacount/signup-datacount.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/signup-datacount/signup-datacount.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inplabel {\n  font-size: 0.8rem;\n  color: #828080;\n}\n\n.titInfo {\n  color: #28675E;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.textInfo {\n  color: #757575;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5wYWJsby9EZXZlbG9wbWVudC9Db2luay9QcnVlYmEtQ29pbmsvc3JjL2FwcC9zaWdudXAtZGF0YWNvdW50L3NpZ251cC1kYXRhY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAtZGF0YWNvdW50L3NpZ251cC1kYXRhY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1kYXRhY291bnQvc2lnbnVwLWRhdGFjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wbGFiZWx7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICM4MjgwODA7XG59XG4udGl0SW5mb3tcbiAgICBjb2xvcjogIzI4Njc1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnRleHRJbmZve1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufSIsIi5pbnBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzgyODA4MDtcbn1cblxuLnRpdEluZm8ge1xuICBjb2xvcjogIzI4Njc1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGV4dEluZm8ge1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/signup-datacount/signup-datacount.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/signup-datacount/signup-datacount.page.ts ***!
  \***********************************************************/
/*! exports provided: SignupDatacountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDatacountPage", function() { return SignupDatacountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let SignupDatacountPage = class SignupDatacountPage {
    constructor(service, alertController, router, route, formBuilder) {
        this.service = service;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.IMG_STATE = '/assets/img/state1.png';
        this.IMG_COINK = '/assets/img/coink.png';
        this.IMG_COL = '/assets/img/col.png';
        this.form = this.formBuilder.group({
            document_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            document_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(99999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1000000)]],
            birth_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            document_expiration_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            gender_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.body = JSON.parse(params['body']);
        });
    }
    next() {
        console.log(this.body);
        this.router.navigate(['signup/dataconfirm'], { queryParams: { body: JSON.stringify(this.body) } });
    }
    presentAlert(header, message, buttons) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                buttons: buttons
            });
            yield alert.present();
        });
    }
};
SignupDatacountPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
SignupDatacountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-datacount',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup-datacount.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-datacount/signup-datacount.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup-datacount.page.scss */ "./src/app/signup-datacount/signup-datacount.page.scss")).default]
    })
], SignupDatacountPage);



/***/ })

}]);
//# sourceMappingURL=signup-datacount-signup-datacount-module-es2015.js.map