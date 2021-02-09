function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <app-language-buttons></app-language-buttons>\n    \n    <ion-label class=\"lbl_header\">{{ 'main.login.title' | translate }}</ion-label>\n\n    <div class=\"div-logo\">\n      <img src=\"../../assets/images/logo.png\" class=\"img_logo\"/>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <form [formGroup]=\"login_form\" autocomplete=\"off\">\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"mail\" color=\"primary\"></ion-icon>\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{ 'main.login.email' | translate }}\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">{{ 'main.login.err_email' | translate }}</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('incorrect') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">Email Address Does Not Exists.</p>\n        </ion-item>\n        \n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-icon name=\"lock-closed\" color=\"primary\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'main.login.password' | translate }}\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">{{ 'main.login.err_password' | translate }}</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">Invalid password.</p>\n        </ion-item>\n\n      </form>\n\n    </ion-card>\n\n    <ion-label class=\"lbl-forgot\" (click)=\"forgot()\">{{ 'main.login.forgot_password' | translate }}</ion-label>\n    \n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"login()\">{{ 'main.login.sign_in_account' | translate }}</ion-button>\n\n    <ion-label class=\"lbl-new\" (click)=\"signup()\">{{ 'main.login.sign_up_account' | translate }}</ion-label>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signin/signin-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signin/signin-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SigninPageRoutingModule */

  /***/
  function srcAppSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
      return SigninPageRoutingModule;
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


    var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/signin/signin.page.ts");

    var routes = [{
      path: '',
      component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }];

    var SigninPageRoutingModule = function SigninPageRoutingModule() {
      _classCallCheck(this, SigninPageRoutingModule);
    };

    SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SigninPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signin/signin.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signin/signin.module.ts ***!
    \*****************************************/

  /*! exports provided: SigninPageModule */

  /***/
  function srcAppSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
      return SigninPageModule;
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


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/signin/signin.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _language_buttons_language_buttons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../language-buttons/language-buttons.module */
    "./src/app/language-buttons/language-buttons.module.ts");

    var SigninPageModule = function SigninPageModule() {
      _classCallCheck(this, SigninPageModule);
    };

    SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"], _language_buttons_language_buttons_module__WEBPACK_IMPORTED_MODULE_8__["LanguageButtonsModule"]],
      declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })], SigninPageModule);
    /***/
  },

  /***/
  "./src/app/signin/signin.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signin/signin.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\n.img_logo {\n  height: 80px;\n  margin: 0 auto;\n  padding-top: 22px;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-secondary-contrast);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 4px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  justify-content: center;\n  margin-top: 18px;\n}\n.lbl-forgot {\n  color: var(--ion-color-dark);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 33px 30px 0px;\n}\n.lbl-new {\n  color: var(--ion-color-dark);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin: 20px 0px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  margin: 33px;\n  font-size: 16px;\n  background: var(--ion-color-primary);\n  box-shadow: 0px 8px 10px #ccc !important;\n  border-radius: 8px;\n}\n.lbl_OR {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  margin-top: 20px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.fb_img:after {\n  content: \"\";\n  width: 2px;\n  height: 28px;\n  background-color: var(--ion-color-medium);\n  top: 12px;\n  bottom: 0;\n  right: -20px;\n  font-size: 23px;\n  position: absolute;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n.btn-bottom {\n  margin-top: 20%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ0k7RUFLSSxXQUFBO0FDSFI7QURTQTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFNBO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEaUJBO0VBQ0ksMkJBQUE7RUFFQSxrQkFBQTtFQUNBLDJEQUFBO0FDZko7QURpQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDZEo7QURpQkE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEZ0JBO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2JKO0FEa0JBO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRGlCQTtFQUNJLDBDQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNoQko7QURvQkE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRG9CQTtFQUNJLGVBQUE7QUNqQko7QURnQkE7RUFDSSxlQUFBO0FDakJKO0FEbUJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNoQko7QURtQkE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNoQko7QURvQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX3NpZ25pbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLmRpdi1jYXJke1xuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgIC8vdG9wOiAzMCU7XG4gICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3NXB4O1xuICAgICAgICAvL2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIH1cbn1cblxuLmxibF9oZWFkZXJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cbi5pbWdfbG9nb3tcbiAgICAvLyB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIycHg7XG59XG5cbi8vIGlvbi1jYXJke1xuLy8gICAgIG1hcmdpbjogMzJweCAyOHB4IDE0cHggMjhweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbi8vIH1cblxuaW9uLWNhcmR7XG4gICAgbWFyZ2luOiA1MHB4IDI4cHggMTRweCAyOHB4O1xuICAgIC8vcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbn1cbi5pbWdfaWNvbntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxOHB4O1xufVxuLy8gI0NGRUZGMFxuaW9uLXJvd3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLmxibC1mb3Jnb3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4IDMzcHggMzBweCAwcHg7XG59XG4vLyAuZGl2LWVtYWlse1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuLy8gfVxuLmxibC1uZXd7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG5pb24tYnV0dG9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAvLyB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMzNweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cbi5sYmxfT1J7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBcbn1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZiX2ltZzphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHRvcDogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICNmZmY7XG59XG5cbi5idG4tYm90dG9te1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59IiwiLnBhZ2Vfc2lnbmluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2Vfc2lnbmluIC5kaXYtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGJsX2hlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuXG4uaW1nX2xvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDUwcHggMjhweCAxNHB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG5cbi5pbWdfaWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDE4cHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5sYmwtZm9yZ290IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAzM3B4IDMwcHggMHB4O1xufVxuXG4ubGJsLW5ldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luOiAzM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubGJsX09SIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mYl9pbWc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0b3A6IDEycHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmRpdi1sb2dvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG59XG5cbi5idG4tYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signin/signin.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signin/signin.page.ts ***!
    \***************************************/

  /*! exports provided: SigninPage */

  /***/
  function srcAppSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
      return SigninPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SigninPage = /*#__PURE__*/function () {
      function SigninPage(statusBar, formBuilder, api, router) {
        _classCallCheck(this, SigninPage);

        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.login_fb();
      }

      _createClass(SigninPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.overlaysWebView(false);
          this.statusBar.show();
          this.statusBar.styleLightContent();
          this.statusBar.backgroundColorByHexString('#c41a3b');
        }
      }, {
        key: "login_fb",
        value: function login_fb() {
          this.login_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          for (var v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
          }

          if (this.login_form.valid) {
            this.api.presentLoading();
            this.login_process = true;
            var body = {
              email: this.login_form.value.email,
              password: this.login_form.value.password
            };
            this.api.signin(body).subscribe(function (val) {
              _this.val = val;
              _this.login_process = false;

              _this.api.dismissLoading();

              if (_this.val['status'] == 1) {
                _this.login_process = false;

                _this.api.dismissLoading();

                if (_this.val && _this.val.data.token) {
                  localStorage.setItem("userToken", _this.val.data.token);
                  localStorage.setItem("currentUser", JSON.stringify(_this.val));
                  localStorage.setItem("permission", JSON.stringify(_this.val.user_permission));
                }

                _this.api.presentToastWithOptions(_this.val['message']);

                _this.router.navigate(['/home']);
              } else if (_this.val['status'] == 0 && _this.val['message'] == "Invalid credential") {
                _this.api.presentToastWithOptions(_this.val['message']);
              } else if (_this.val['status'] == 0 && _this.val.data.email) {
                _this.api.presentToastWithOptions(_this.val.data['email']);
              }
            }, function (err) {
              _this.login_process = false;

              _this.api.dismissLoading();

              _this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }
      }, {
        key: "signup",
        value: function signup() {
          this.router.navigate(['/signup']);
        }
      }, {
        key: "forgot",
        value: function forgot() {
          this.router.navigate(['/forgot']);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return SigninPage;
    }();

    SigninPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signin.page.scss */
      "./src/app/signin/signin.page.scss"))["default"]]
    })], SigninPage);
    /***/
  }
}]);
//# sourceMappingURL=signin-signin-module-es5.js.map