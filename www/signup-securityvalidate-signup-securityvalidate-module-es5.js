function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-securityvalidate-signup-securityvalidate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-securityvalidate/signup-securityvalidate.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-securityvalidate/signup-securityvalidate.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSecurityvalidateSignupSecurityvalidatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>\n        NÚMERO CELULAR\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content *ngIf=\"body != null\">\n    <ion-item>\n      <ion-img class=\"\" [src]=\"IMG_STATE\"></ion-img>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img class=\"imgCoink\" [src]=\"IMG_COINK\"></ion-img>\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-align-self-center\">\n          <ion-item>\n            <label class=\"titInfo\">Configura tu cuenta</label>\n          </ion-item>\n          <ion-item>\n              <label class=\"textCelLabel\">Para finalizar, por favor lee con detenimiento este documento</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr class=\"hrCel\">\n    <p class=\"info\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </p>\n    <div>\n      <ion-button (click)=\"next()\" color=\"primary\" expand=\"block\" shape=\"round\" class=\"btnRegister\">Finalizar</ion-button>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/signup-securityvalidate/signup-securityvalidate-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/signup-securityvalidate/signup-securityvalidate-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SignupSecurityvalidatePageRoutingModule */

  /***/
  function srcAppSignupSecurityvalidateSignupSecurityvalidateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityvalidatePageRoutingModule", function () {
      return SignupSecurityvalidatePageRoutingModule;
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


    var _signup_securityvalidate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-securityvalidate.page */
    "./src/app/signup-securityvalidate/signup-securityvalidate.page.ts");

    var routes = [{
      path: '',
      component: _signup_securityvalidate_page__WEBPACK_IMPORTED_MODULE_3__["SignupSecurityvalidatePage"]
    }];

    var SignupSecurityvalidatePageRoutingModule = function SignupSecurityvalidatePageRoutingModule() {
      _classCallCheck(this, SignupSecurityvalidatePageRoutingModule);
    };

    SignupSecurityvalidatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupSecurityvalidatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup-securityvalidate/signup-securityvalidate.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/signup-securityvalidate/signup-securityvalidate.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SignupSecurityvalidatePageModule */

  /***/
  function srcAppSignupSecurityvalidateSignupSecurityvalidateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityvalidatePageModule", function () {
      return SignupSecurityvalidatePageModule;
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


    var _signup_securityvalidate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-securityvalidate-routing.module */
    "./src/app/signup-securityvalidate/signup-securityvalidate-routing.module.ts");
    /* harmony import */


    var _signup_securityvalidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-securityvalidate.page */
    "./src/app/signup-securityvalidate/signup-securityvalidate.page.ts");

    var SignupSecurityvalidatePageModule = function SignupSecurityvalidatePageModule() {
      _classCallCheck(this, SignupSecurityvalidatePageModule);
    };

    SignupSecurityvalidatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_securityvalidate_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupSecurityvalidatePageRoutingModule"]],
      declarations: [_signup_securityvalidate_page__WEBPACK_IMPORTED_MODULE_6__["SignupSecurityvalidatePage"]]
    })], SignupSecurityvalidatePageModule);
    /***/
  },

  /***/
  "./src/app/signup-securityvalidate/signup-securityvalidate.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/signup-securityvalidate/signup-securityvalidate.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSecurityvalidateSignupSecurityvalidatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inplabel {\n  font-size: 0.8rem;\n  color: #828080;\n}\n\n.titInfo {\n  color: #28675E;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.textInfo {\n  color: #757575;\n  font-size: 0.9rem;\n}\n\n.info {\n  color: #888888;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5wYWJsby9EZXZlbG9wbWVudC9Db2luay9jb2luay9zcmMvYXBwL3NpZ251cC1zZWN1cml0eXZhbGlkYXRlL3NpZ251cC1zZWN1cml0eXZhbGlkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwLXNlY3VyaXR5dmFsaWRhdGUvc2lnbnVwLXNlY3VyaXR5dmFsaWRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtc2VjdXJpdHl2YWxpZGF0ZS9zaWdudXAtc2VjdXJpdHl2YWxpZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wbGFiZWx7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICM4MjgwODA7XG59XG4udGl0SW5mb3tcbiAgICBjb2xvcjogIzI4Njc1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnRleHRJbmZve1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmluZm97XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSIsIi5pbnBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzgyODA4MDtcbn1cblxuLnRpdEluZm8ge1xuICBjb2xvcjogIzI4Njc1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGV4dEluZm8ge1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup-securityvalidate/signup-securityvalidate.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/signup-securityvalidate/signup-securityvalidate.page.ts ***!
    \*************************************************************************/

  /*! exports provided: SignupSecurityvalidatePage */

  /***/
  function srcAppSignupSecurityvalidateSignupSecurityvalidatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSecurityvalidatePage", function () {
      return SignupSecurityvalidatePage;
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

    var SignupSecurityvalidatePage = /*#__PURE__*/function () {
      function SignupSecurityvalidatePage(service, alertController, router, route, formBuilder, loadingController) {
        _classCallCheck(this, SignupSecurityvalidatePage);

        this.service = service;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.IMG_STATE = '/assets/img/state1.png';
        this.IMG_COINK = '/assets/img/coinksecure.png';
        this.IMG_COL = '/assets/img/col.png';
      }

      _createClass(SignupSecurityvalidatePage, [{
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var subscriber, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.service.signup(this.body);

                  case 2:
                    subscriber = _context.sent;
                    _context.next = 5;
                    return this.loadingController.create({
                      message: 'Cargando...',
                      duration: 2000
                    });

                  case 5:
                    loading = _context.sent;
                    _context.next = 8;
                    return loading.present();

                  case 8:
                    subscriber.subscribe(function (data) {
                      console.log(data);
                      loading.dismiss();

                      _this2.presentAlert("Exito", "Registro Existoso", ["Aceptar"]);
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();

                      _this2.presentAlert("Error", err.error.message, ["Aceptar"]);
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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

      return SignupSecurityvalidatePage;
    }();

    SignupSecurityvalidatePage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    SignupSecurityvalidatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-securityvalidate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-securityvalidate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-securityvalidate/signup-securityvalidate.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-securityvalidate.page.scss */
      "./src/app/signup-securityvalidate/signup-securityvalidate.page.scss"))["default"]]
    })], SignupSecurityvalidatePage);
    /***/
  }
}]);
//# sourceMappingURL=signup-securityvalidate-signup-securityvalidate-module-es5.js.map