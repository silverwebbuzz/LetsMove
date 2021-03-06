function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-reset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetResetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <ion-label class=\"lbl_header\">{{ 'main.reset.title' | translate }}</ion-label>\n\n    <div class=\"div-logo\">\n      <img src=\"../../assets/images/logo.png\" class=\"img_logo\"/>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <form [formGroup]=\"reset_form\" autocomplete=\"off\">\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"lock-closed-outline\" color=\"primary\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"new_password\" placeholder=\"{{ 'main.reset.password' | translate }}\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reset_form.controls.new_password.hasError('required') && reset_form.controls.new_password.touched\">\n          <p class=\"content add-error\">{{ 'main.reset.err_pass' | translate }}</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"lock-closed\" color=\"primary\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"confirm_password\" placeholder=\"{{ 'main.reset.c_pass' | translate }}\"\n            class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reset_form.controls.confirm_password.hasError('required') && reset_form.controls.confirm_password.touched\">\n          <p class=\"content add-error\">{{ 'main.reset.err_c_pass' | translate }}</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reset_form.controls.confirm_password.touched && reset_form.hasError('ResetPassword','confirm_password')\">\n          <p class=\"content add-error\"> {{ 'main.reset.not_match' | translate }}</p>\n        </ion-item>\n\n      </form>\n\n    </ion-card>\n    \n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"submit()\">{{ 'main.reset.submit' | translate }}</ion-button>\n\n    <ion-label class=\"lbl-new\" (click)=\"back()\">{{ 'main.reset.signin' | translate }}</ion-label>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/reset/reset-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/reset/reset-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: ResetPageRoutingModule */

  /***/
  function srcAppResetResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function () {
      return ResetPageRoutingModule;
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


    var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset.page */
    "./src/app/reset/reset.page.ts");

    var routes = [{
      path: '',
      component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
    }];

    var ResetPageRoutingModule = function ResetPageRoutingModule() {
      _classCallCheck(this, ResetPageRoutingModule);
    };

    ResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reset/reset.module.ts":
  /*!***************************************!*\
    !*** ./src/app/reset/reset.module.ts ***!
    \***************************************/

  /*! exports provided: ResetPageModule */

  /***/
  function srcAppResetResetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPageModule", function () {
      return ResetPageModule;
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


    var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reset-routing.module */
    "./src/app/reset/reset-routing.module.ts");
    /* harmony import */


    var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reset.page */
    "./src/app/reset/reset.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ResetPageModule = function ResetPageModule() {
      _classCallCheck(this, ResetPageModule);
    };

    ResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]],
      declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
    })], ResetPageModule);
    /***/
  },

  /***/
  "./src/app/reset/reset.page.scss":
  /*!***************************************!*\
    !*** ./src/app/reset/reset.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetResetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\n.img_logo {\n  height: 80px;\n  margin: 0 auto;\n  padding-top: 22px;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-secondary-contrast);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 4px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  justify-content: center;\n  margin-top: 18px;\n}\n.lbl-forgot {\n  color: var(--ion-color-dark);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 33px 30px 0px;\n}\n.lbl-new {\n  color: var(--ion-color-dark);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin: 20px 0px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  margin: 33px;\n  font-size: 16px;\n  background: var(--ion-color-primary);\n  box-shadow: 0px 8px 10px #ccc !important;\n  border-radius: 8px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n.btn-bottom {\n  margin-top: 20%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9yZXNldC9yZXNldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUtJLFdBQUE7QUNIUjtBRFNBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05KO0FEVUE7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDUko7QURXQTtFQUNJLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSwyREFBQTtBQ1RKO0FEV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUko7QURXQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDUko7QURVQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNQSjtBRFlBO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFdBO0VBQ0ksMENBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEY0E7RUFDSSxlQUFBO0FDWEo7QURVQTtFQUNJLGVBQUE7QUNYSjtBRGNBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDWEo7QURlQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQvcmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Vfc2lnbmlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAuZGl2LWNhcmR7XG4gICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgLy90b3A6IDMwJTtcbiAgICAgICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvL2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDc1cHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XG4gICAgfVxufVxuXG4ubGJsX2hlYWRlcntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cblxuXG4uaW1nX2xvZ297XG4gICAgLy8gd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xufVxuXG5pb24tY2FyZHtcbiAgICBtYXJnaW46IDUwcHggMjhweCAxNHB4IDI4cHg7XG4gICAgLy9wYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufVxuLmltZ19pY29ue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDE4cHg7XG59XG4vLyAjQ0ZFRkYwXG5pb24tcm93e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubGJsLWZvcmdvdHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHggMzNweCAzMHB4IDBweDtcbn1cbi8vIC5kaXYtZW1haWx7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4vLyB9XG4ubGJsLW5ld3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbmlvbi1idXR0b257XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIC8vIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAzM3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggI2NjYyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuOjpwbGFjZWhvbGRlcntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICNmZmY7XG59XG5cbi5idG4tYm90dG9te1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59IiwiLnBhZ2Vfc2lnbmluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2Vfc2lnbmluIC5kaXYtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGJsX2hlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuXG4uaW1nX2xvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDUwcHggMjhweCAxNHB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG5cbi5pbWdfaWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDE4cHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5sYmwtZm9yZ290IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAzM3B4IDMwcHggMHB4O1xufVxuXG4ubGJsLW5ldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luOiAzM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LWxvZ28ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2ZmZjtcbn1cblxuLmJ0bi1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/reset/reset.page.ts":
  /*!*************************************!*\
    !*** ./src/app/reset/reset.page.ts ***!
    \*************************************/

  /*! exports provided: ResetPage */

  /***/
  function srcAppResetResetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPage", function () {
      return ResetPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _global_password_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../global/password_validation */
    "./src/app/global/password_validation.ts");

    var ResetPage = /*#__PURE__*/function () {
      function ResetPage(statusBar, formBuilder, router, navCtrl, route, api) {
        var _this = this;

        _classCallCheck(this, ResetPage);

        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.route.queryParams.subscribe(function (params) {
          if (params.t) {
            _this.isvalidToken(params.t);
          }
        });
        this.reset_fb();
      }

      _createClass(ResetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isvalidToken",
        value: function isvalidToken(token) {
          var _this2 = this;

          this.api.verifytoken(token).subscribe(function (data) {
            if (data.token == true) {
              _this2.reset_token = token;
              return true;
            }
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleLightContent();
          this.statusBar.backgroundColorByHexString('#c41a3b');
        }
      }, {
        key: "reset_fb",
        value: function reset_fb() {
          this.reset_form = this.formBuilder.group({
            new_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: _global_password_validation__WEBPACK_IMPORTED_MODULE_7__["PasswordValidation"].ResetPassword
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          for (var v in this.reset_form.controls) {
            this.reset_form.controls[v].markAsTouched();
          }

          if (this.reset_form.valid) {
            var body = {
              token: this.reset_token,
              password: this.reset_form.value.new_password,
              confirm_password: this.reset_form.value.confirm_password
            };
            this.api.reset(body).subscribe(function (data) {
              _this3.data = data;

              if (data['status'] == 1) {
                _this3.api.presentToastWithOptions(_this3.data['message']);

                _this3.router.navigate(['/signin']);
              } else {
                _this3.api.presentToastWithOptions(_this3.data['message']);
              }
            }, function (err) {
              _this3.res_process = false;

              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/signin']);
        }
      }]);

      return ResetPage;
    }();

    ResetPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    ResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reset.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reset.page.scss */
      "./src/app/reset/reset.page.scss"))["default"]]
    })], ResetPage);
    /***/
  }
}]);
//# sourceMappingURL=reset-reset-module-es5.js.map