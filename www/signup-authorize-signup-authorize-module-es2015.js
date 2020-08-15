(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-authorize-signup-authorize-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-authorize/signup-authorize.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-authorize/signup-authorize.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>signupAuthorize</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup-authorize/signup-authorize-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/signup-authorize/signup-authorize-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SignupAuthorizePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAuthorizePageRoutingModule", function() { return SignupAuthorizePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_authorize_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-authorize.page */ "./src/app/signup-authorize/signup-authorize.page.ts");




const routes = [
    {
        path: '',
        component: _signup_authorize_page__WEBPACK_IMPORTED_MODULE_3__["SignupAuthorizePage"]
    }
];
let SignupAuthorizePageRoutingModule = class SignupAuthorizePageRoutingModule {
};
SignupAuthorizePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupAuthorizePageRoutingModule);



/***/ }),

/***/ "./src/app/signup-authorize/signup-authorize.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/signup-authorize/signup-authorize.module.ts ***!
  \*************************************************************/
/*! exports provided: SignupAuthorizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAuthorizePageModule", function() { return SignupAuthorizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-authorize-routing.module */ "./src/app/signup-authorize/signup-authorize-routing.module.ts");
/* harmony import */ var _signup_authorize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-authorize.page */ "./src/app/signup-authorize/signup-authorize.page.ts");







let SignupAuthorizePageModule = class SignupAuthorizePageModule {
};
SignupAuthorizePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_authorize_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupAuthorizePageRoutingModule"]
        ],
        declarations: [_signup_authorize_page__WEBPACK_IMPORTED_MODULE_6__["SignupAuthorizePage"]]
    })
], SignupAuthorizePageModule);



/***/ }),

/***/ "./src/app/signup-authorize/signup-authorize.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/signup-authorize/signup-authorize.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1hdXRob3JpemUvc2lnbnVwLWF1dGhvcml6ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup-authorize/signup-authorize.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/signup-authorize/signup-authorize.page.ts ***!
  \***********************************************************/
/*! exports provided: SignupAuthorizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAuthorizePage", function() { return SignupAuthorizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SignupAuthorizePage = class SignupAuthorizePage {
    constructor() { }
    ngOnInit() {
    }
};
SignupAuthorizePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-authorize',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup-authorize.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-authorize/signup-authorize.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup-authorize.page.scss */ "./src/app/signup-authorize/signup-authorize.page.scss")).default]
    })
], SignupAuthorizePage);



/***/ })

}]);
//# sourceMappingURL=signup-authorize-signup-authorize-module-es2015.js.map