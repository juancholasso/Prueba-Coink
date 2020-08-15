function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-dataconfirm-signup-dataconfirm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-dataconfirm/signup-dataconfirm.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-dataconfirm/signup-dataconfirm.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupDataconfirmSignupDataconfirmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>\n        NÚMERO CELULAR\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content *ngIf=\"body != null\">\n    <ion-item>\n      <ion-img class=\"\" [src]=\"IMG_STATE\"></ion-img>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img class=\"imgCoink\" [src]=\"IMG_COINK\"></ion-img>\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-align-self-center\">\n          <ion-item>\n            <label class=\"titInfo\">¿Cuales son tus datos?</label>\n          </ion-item>\n          <ion-item>\n            <label class=\"textInfo\">Ahora necesitamos saber algunos datos tuyos</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr class=\"hrCel\">\n    <ion-grid>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label position=\"floating\" class=\"inplabel\">Tipo de documento</ion-label>\n            <ion-select class=\"vallabel\" disabled placeholder=\"Tipo\" [(ngModel)]=\"body.document_id\" >\n              <ion-select-option value=\"1\">Cédula de ciudadania</ion-select-option>\n              <ion-select-option value=\"2\">Cédula de extranjería</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\" class=\"ion-untouched ion-pristine item-interactive item-select item-has-placeholder item-has-value item-interactive-disabled item-select-disabled item md ion-activatable ion-focusable hydrated item-label item-label-floating\">\n            <ion-label position=\"floating\" class=\"inplabel\">Número de documento</ion-label>\n            <ion-label class=\"vallabel ng-untouched ng-pristine md in-item select-disabled hydrated ion-untouched ion-pristine\">{{body.document_number}}</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label position=\"floating\" class=\"inplabel\">Fecha de nacimiento</ion-label>\n            <ion-datetime class=\"vallabel\" disabled displayFormat=\"DD/MM/YY\" placeholder=\"Fecha\" [(ngModel)]=\"body.birth_date\" ></ion-datetime>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n            <ion-item style=\"width: 100%;\">\n              <ion-label position=\"floating\" class=\"inplabel\">Fecha de expedición</ion-label>\n              <ion-datetime class=\"vallabel\" disabled displayFormat=\"DD/MM/YY\" min=\"{{body.birth_date}}\" placeholder=\"Fecha\" [(ngModel)]=\"body.document_expiration_date\"></ion-datetime>\n            </ion-item>\n          </ion-row>\n        <ion-row>\n          <ion-item style=\"width: 100%;\">\n            <ion-label position=\"floating\" class=\"inplabel\">Genero que aparece en tu documento</ion-label>\n            <ion-select class=\"vallabel\" disabled placeholder=\"Tipo\" [(ngModel)]=\"body.gender_id\">\n              <ion-select-option value=\"1\">Cédula de ciudadania</ion-select-option>\n              <ion-select-option value=\"2\">Cédula de extranjería</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n    </ion-grid>\n    <div style=\"text-align: center;\">\n      <ion-button (click)=\"previous()\" color=\"danger\" shape=\"round\" class=\"btnRegister\">Cancelar</ion-button>\n      <ion-button (click)=\"next()\" color=\"primary\" shape=\"round\" class=\"btnRegister\">Continuar</ion-button>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/signup-dataconfirm/signup-dataconfirm-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/signup-dataconfirm/signup-dataconfirm-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SignupDataconfirmPageRoutingModule */

  /***/
  function srcAppSignupDataconfirmSignupDataconfirmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupDataconfirmPageRoutingModule", function () {
      return SignupDataconfirmPageRoutingModule;
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


    var _signup_dataconfirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-dataconfirm.page */
    "./src/app/signup-dataconfirm/signup-dataconfirm.page.ts");

    var routes = [{
      path: '',
      component: _signup_dataconfirm_page__WEBPACK_IMPORTED_MODULE_3__["SignupDataconfirmPage"]
    }];

    var SignupDataconfirmPageRoutingModule = function SignupDataconfirmPageRoutingModule() {
      _classCallCheck(this, SignupDataconfirmPageRoutingModule);
    };

    SignupDataconfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupDataconfirmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup-dataconfirm/signup-dataconfirm.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/signup-dataconfirm/signup-dataconfirm.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SignupDataconfirmPageModule */

  /***/
  function srcAppSignupDataconfirmSignupDataconfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupDataconfirmPageModule", function () {
      return SignupDataconfirmPageModule;
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


    var _signup_dataconfirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-dataconfirm-routing.module */
    "./src/app/signup-dataconfirm/signup-dataconfirm-routing.module.ts");
    /* harmony import */


    var _signup_dataconfirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-dataconfirm.page */
    "./src/app/signup-dataconfirm/signup-dataconfirm.page.ts");

    var SignupDataconfirmPageModule = function SignupDataconfirmPageModule() {
      _classCallCheck(this, SignupDataconfirmPageModule);
    };

    SignupDataconfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_dataconfirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupDataconfirmPageRoutingModule"]],
      declarations: [_signup_dataconfirm_page__WEBPACK_IMPORTED_MODULE_6__["SignupDataconfirmPage"]]
    })], SignupDataconfirmPageModule);
    /***/
  },

  /***/
  "./src/app/signup-dataconfirm/signup-dataconfirm.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/signup-dataconfirm/signup-dataconfirm.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupDataconfirmSignupDataconfirmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inplabel {\n  font-size: 1rem;\n}\n\n.vallabel {\n  color: #124B40;\n  opacity: 1 !important;\n}\n\n.vallabel input.native-input.sc-ion-input-md {\n  opacity: 1 !important;\n}\n\n.vallabel .native-input sc-ion-input-md {\n  opacity: 1 !important;\n}\n\n.titInfo {\n  color: #28675E;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.textInfo {\n  color: #757575;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1YW5wYWJsby9EZXZlbG9wbWVudC9Db2luay9QcnVlYmEtQ29pbmsvc3JjL2FwcC9zaWdudXAtZGF0YWNvbmZpcm0vc2lnbnVwLWRhdGFjb25maXJtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwLWRhdGFjb25maXJtL3NpZ251cC1kYXRhY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURBSTtFQUNJLHFCQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtBQ0VSOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtZGF0YWNvbmZpcm0vc2lnbnVwLWRhdGFjb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnBsYWJlbHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi52YWxsYWJlbHtcbiAgICBjb2xvcjogIzEyNEI0MDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgaW5wdXQubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1tZHtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi50aXRJbmZve1xuICAgIGNvbG9yOiAjMjg2NzVFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4udGV4dEluZm97XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59IiwiLmlucGxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udmFsbGFiZWwge1xuICBjb2xvcjogIzEyNEI0MDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLnZhbGxhYmVsIGlucHV0Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4udmFsbGFiZWwgLm5hdGl2ZS1pbnB1dCBzYy1pb24taW5wdXQtbWQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi50aXRJbmZvIHtcbiAgY29sb3I6ICMyODY3NUU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnRleHRJbmZvIHtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup-dataconfirm/signup-dataconfirm.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/signup-dataconfirm/signup-dataconfirm.page.ts ***!
    \***************************************************************/

  /*! exports provided: SignupDataconfirmPage */

  /***/
  function srcAppSignupDataconfirmSignupDataconfirmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupDataconfirmPage", function () {
      return SignupDataconfirmPage;
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

    var SignupDataconfirmPage = /*#__PURE__*/function () {
      function SignupDataconfirmPage(service, alertController, router, route, formBuilder) {
        _classCallCheck(this, SignupDataconfirmPage);

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

      _createClass(SignupDataconfirmPage, [{
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
          this.router.navigate(['signup/security'], {
            queryParams: {
              body: JSON.stringify(this.body)
            }
          });
        }
      }, {
        key: "previous",
        value: function previous() {
          this.router.navigate(['signup/dataaccount'], {
            queryParams: {
              body: JSON.stringify(this.body)
            }
          });
        }
      }]);

      return SignupDataconfirmPage;
    }();

    SignupDataconfirmPage.ctorParameters = function () {
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

    SignupDataconfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-dataconfirm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-dataconfirm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-dataconfirm/signup-dataconfirm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-dataconfirm.page.scss */
      "./src/app/signup-dataconfirm/signup-dataconfirm.page.scss"))["default"]]
    })], SignupDataconfirmPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-dataconfirm-signup-dataconfirm-module-es5.js.map