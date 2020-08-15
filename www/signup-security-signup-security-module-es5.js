function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-security-signup-security-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-security/signup-security.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-security/signup-security.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSecuritySignupSecurityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>\n        NÚMERO CELULAR\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content *ngIf=\"body != null\">\n    <ion-item>\n      <ion-img class=\"\" [src]=\"IMG_STATE\"></ion-img>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img class=\"imgCoink\" [src]=\"IMG_COINK\"></ion-img>\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-align-self-center\">\n          <ion-item>\n            <label class=\"titInfo\">Configura tu cuenta</label>\n          </ion-item>\n          <ion-item>\n              <label class=\"textCelLabel\">Escribe el correo que estará vinculado a tu cuenta</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr class=\"hrCel\">\n    <ion-grid>\n      <form [formGroup]=\"form\">\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label position=\"floating\" class=\"inplabel\">Correo electrónico</ion-label>\n            <ion-input  [(ngModel)]=\"body.email\" type=\"email\" inputmode=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n              <ion-label position=\"floating\" class=\"inplabel\">Confirmar correo electrónico</ion-label>\n              <ion-input type=\"email\" inputmode=\"email\" formControlName=\"email_confirm\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n              <ion-label position=\"floating\" class=\"inplabel\">PIN de seguridad</ion-label>\n              <ion-input  type=\"number\" inputmode=\"number\" [(ngModel)]=\"body.pin\" formControlName=\"pin\"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n            <ion-item style=\"width: 100%;\">\n              <ion-label position=\"floating\" class=\"inplabel\">Confirmar PIN de seguridad</ion-label>\n              <ion-input  type=\"number\" inputmode=\"number\" formControlName=\"pin_confirm\"></ion-input>\n            </ion-item>\n          </ion-row>\n      </form>\n    </ion-grid>\n    <div>\n      <ion-button (click)=\"next()\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"btnRegister\" [disabled]=\"form.invalid\" >Continuar</ion-button>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/signup-security/signup-security-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/signup-security/signup-security-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupSecurityPageRoutingModule */

  /***/
  function srcAppSignupSecuritySignupSecurityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityPageRoutingModule", function () {
      return SignupSecurityPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signup_security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-security.page */
    "./src/app/signup-security/signup-security.page.ts");

    var routes = [{
      path: '',
      component: _signup_security_page__WEBPACK_IMPORTED_MODULE_3__["SignupSecurityPage"]
    }];

    var SignupSecurityPageRoutingModule = function SignupSecurityPageRoutingModule() {
      _classCallCheck(this, SignupSecurityPageRoutingModule);
    };

    SignupSecurityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupSecurityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup-security/signup-security.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/signup-security/signup-security.module.ts ***!
    \***********************************************************/

  /*! exports provided: SignupSecurityPageModule */

  /***/
  function srcAppSignupSecuritySignupSecurityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityPageModule", function () {
      return SignupSecurityPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_security_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup-security-routing.module */
    "./src/app/signup-security/signup-security-routing.module.ts");
    /* harmony import */


    var _signup_security_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-security.page */
    "./src/app/signup-security/signup-security.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupSecurityPageModule = function SignupSecurityPageModule() {
      _classCallCheck(this, SignupSecurityPageModule);
    };

    SignupSecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _signup_security_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupSecurityPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      declarations: [_signup_security_page__WEBPACK_IMPORTED_MODULE_5__["SignupSecurityPage"]]
    })], SignupSecurityPageModule);
    /***/
  },

  /***/
  "./src/app/signup-security/signup-security.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/signup-security/signup-security.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSecuritySignupSecurityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inplabel {\n  font-size: 0.8rem;\n  color: #828080;\n}\n\n.titInfo {\n  color: #28675E;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.textInfo {\n  color: #757575;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5wYWJsby9EZXZlbG9wbWVudC9Db2luay9QcnVlYmEtQ29pbmsvc3JjL2FwcC9zaWdudXAtc2VjdXJpdHkvc2lnbnVwLXNlY3VyaXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwLXNlY3VyaXR5L3NpZ251cC1zZWN1cml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwLXNlY3VyaXR5L3NpZ251cC1zZWN1cml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wbGFiZWx7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICM4MjgwODA7XG59XG4udGl0SW5mb3tcbiAgICBjb2xvcjogIzI4Njc1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnRleHRJbmZve1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufSIsIi5pbnBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzgyODA4MDtcbn1cblxuLnRpdEluZm8ge1xuICBjb2xvcjogIzI4Njc1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGV4dEluZm8ge1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup-security/signup-security.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/signup-security/signup-security.page.ts ***!
    \*********************************************************/

  /*! exports provided: SignupSecurityPage */

  /***/
  function srcAppSignupSecuritySignupSecurityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityPage", function () {
      return SignupSecurityPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupSecurityPage = /*#__PURE__*/function () {
      function SignupSecurityPage(service, alertController, router, route, formBuilder) {
        _classCallCheck(this, SignupSecurityPage);

        this.service = service;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.IMG_STATE = '/assets/img/state1.png';
        this.IMG_COINK = '/assets/img/coinksecure.png';
        this.IMG_COL = '/assets/img/col.png';
        this.form = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
          email_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
          pin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          pin_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      }

      _createClass(SignupSecurityPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.body = JSON.parse(params['body']);
          });
        }
      }, {
        key: "next",
        value: function next() {
          if (this.form.controls['email'].value != this.form.controls['email_confirm'].value) {
            this.presentAlert("Error", "Los correos no coinciden", ["Volver"]);
          } else if (this.form.controls['pin'].value != this.form.controls['pin_confirm'].value) {
            this.presentAlert("Error", "Los pines no coinciden", ["Volver"]);
          } else {
            this.router.navigate(['signup/securityvalidate'], {
              queryParams: {
                body: JSON.stringify(this.body)
              }
            });
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: header,
                      message: message,
                      buttons: buttons
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SignupSecurityPage;
    }();

    SignupSecurityPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    SignupSecurityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-security',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-security.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-security/signup-security.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-security.page.scss */
      "./src/app/signup-security/signup-security.page.scss"))["default"]]
    })], SignupSecurityPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-security-signup-security-module-es5.js.map