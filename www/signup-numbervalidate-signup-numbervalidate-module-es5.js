function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-numbervalidate-signup-numbervalidate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-numbervalidate/signup-numbervalidate.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-numbervalidate/signup-numbervalidate.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupNumbervalidateSignupNumbervalidatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      NÚMERO CELULAR\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"body != null\">\n  <ion-item>\n    <ion-img class=\"\" [src]=\"IMG_STATE\"></ion-img>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-img class=\"imgCoink\" [src]=\"IMG_COINK\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\" class=\"ion-align-self-center\">\n          <label class=\"textCelLabel\">Digita el código que recibiste vía\n            <p class=\"textCel\">mensaje de texto</p> al {{body.phone_number}}</label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr class=\"hrCel\">\n  <ion-item>\n    <ion-input type=\"number\" [(ngModel)]=\"body.pin\" style=\"text-align: center;\" placeholder=\"XXXX\"></ion-input>\n  </ion-item>\n  <div>\n      <ion-button (click)=\"next()\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"btnRegister\">Continuar</ion-button>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/signup-numbervalidate/signup-numbervalidate-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/signup-numbervalidate/signup-numbervalidate-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: SignupNumbervalidatePageRoutingModule */

  /***/
  function srcAppSignupNumbervalidateSignupNumbervalidateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupNumbervalidatePageRoutingModule", function () {
      return SignupNumbervalidatePageRoutingModule;
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


    var _signup_numbervalidate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-numbervalidate.page */
    "./src/app/signup-numbervalidate/signup-numbervalidate.page.ts");

    var routes = [{
      path: '',
      component: _signup_numbervalidate_page__WEBPACK_IMPORTED_MODULE_3__["SignupNumbervalidatePage"]
    }];

    var SignupNumbervalidatePageRoutingModule = function SignupNumbervalidatePageRoutingModule() {
      _classCallCheck(this, SignupNumbervalidatePageRoutingModule);
    };

    SignupNumbervalidatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupNumbervalidatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup-numbervalidate/signup-numbervalidate.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/signup-numbervalidate/signup-numbervalidate.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SignupNumbervalidatePageModule */

  /***/
  function srcAppSignupNumbervalidateSignupNumbervalidateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupNumbervalidatePageModule", function () {
      return SignupNumbervalidatePageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_numbervalidate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-numbervalidate-routing.module */
    "./src/app/signup-numbervalidate/signup-numbervalidate-routing.module.ts");
    /* harmony import */


    var _signup_numbervalidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-numbervalidate.page */
    "./src/app/signup-numbervalidate/signup-numbervalidate.page.ts");

    var SignupNumbervalidatePageModule = function SignupNumbervalidatePageModule() {
      _classCallCheck(this, SignupNumbervalidatePageModule);
    };

    SignupNumbervalidatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_numbervalidate_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupNumbervalidatePageRoutingModule"]],
      declarations: [_signup_numbervalidate_page__WEBPACK_IMPORTED_MODULE_6__["SignupNumbervalidatePage"]]
    })], SignupNumbervalidatePageModule);
    /***/
  },

  /***/
  "./src/app/signup-numbervalidate/signup-numbervalidate.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/signup-numbervalidate/signup-numbervalidate.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupNumbervalidateSignupNumbervalidatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1udW1iZXJ2YWxpZGF0ZS9zaWdudXAtbnVtYmVydmFsaWRhdGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/signup-numbervalidate/signup-numbervalidate.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/signup-numbervalidate/signup-numbervalidate.page.ts ***!
    \*********************************************************************/

  /*! exports provided: SignupNumbervalidatePage */

  /***/
  function srcAppSignupNumbervalidateSignupNumbervalidatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupNumbervalidatePage", function () {
      return SignupNumbervalidatePage;
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

    var SignupNumbervalidatePage = /*#__PURE__*/function () {
      function SignupNumbervalidatePage(service, alertController, router, route) {
        _classCallCheck(this, SignupNumbervalidatePage);

        this.service = service;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.IMG_STATE = '/assets/img/state1.png';
        this.IMG_COINK = '/assets/img/coink.png';
        this.IMG_COL = '/assets/img/col.png';
      }

      _createClass(SignupNumbervalidatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.route.queryParams.subscribe(function (params) {
                      _this.body = JSON.parse(params['body']);
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "next",
        value: function next() {
          console.log(this.body);

          if (this.body.phone_number.toString().length != 10) {
            this.presentAlert("Error", "El n\xFAmero ".concat(this.body.phone_number, " no es v\xE1lido."), ['Volver']);
          } else this.router.navigate(['signup/dataaccount'], {
            queryParams: {
              body: JSON.stringify(this.body)
            }
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, message, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: header,
                      message: message,
                      buttons: buttons
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SignupNumbervalidatePage;
    }();

    SignupNumbervalidatePage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    SignupNumbervalidatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-numbervalidate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-numbervalidate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-numbervalidate/signup-numbervalidate.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-numbervalidate.page.scss */
      "./src/app/signup-numbervalidate/signup-numbervalidate.page.scss"))["default"]]
    })], SignupNumbervalidatePage);
    /***/
  }
}]);
//# sourceMappingURL=signup-numbervalidate-signup-numbervalidate-module-es5.js.map