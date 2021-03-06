function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.contactus.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"../../assets/images/contactus.png\" class=\"img_main\"/>\n\n  <ion-label class=\"lbl_main spc_all\">{{ 'main.contactus.get_in_touch_with_us' | translate }}</ion-label>\n\n  <ion-label color=\"medium\" class=\"lbl_desc spc\">{{ 'main.contactus.description' | translate }}</ion-label>\n\n  <ion-item lines=\"none\" class=\"item_add\">\n    <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>\n    <ion-label class=\"icon_spc lbl_add_head\">{{ 'main.contactus.address' | translate }}</ion-label>\n  </ion-item>\n\n  <ion-label color=\"medium\" class=\"lbl_desc lbl_add\">{{ address }}</ion-label>\n\n  <ion-item lines=\"none\" class=\"item_add\">\n    <ion-icon name=\"phone-portrait-outline\" color=\"primary\"></ion-icon>\n    <ion-label class=\"icon_spc lbl_add_head\">{{ 'main.contactus.phone_txt' | translate }}</ion-label>\n  </ion-item>\n\n  <ion-label color=\"medium\" class=\"lbl_desc lbl_add\">{{ phone_no }}</ion-label>\n  <ion-label color=\"medium\" class=\"lbl_desc lbl_add\">{{ telephone }}</ion-label>\n\n  <ion-item lines=\"none\" class=\"item_add\">\n    <ion-icon name=\"mail-outline\" color=\"primary\" class=\"icon_spc\"></ion-icon>\n    <ion-label class=\"icon_spc lbl_add_head\">{{ 'main.contactus.email_txt' | translate }}</ion-label>\n  </ion-item>\n\n  <ion-label color=\"medium\" class=\"lbl_desc lbl_add\">{{ email }}</ion-label>\n\n  <form [formGroup]=\"contact_form\" autocomplete=\"off\">\n\n  <ion-item lines=\"none\" class=\"input-item top\">\n    <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{ 'main.contactus.name' | translate }}\" class=\"input-box\">\n    </ion-input>\n  </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n    *ngIf=\"contact_form.controls.name.hasError('required') && contact_form.controls.name.touched\">\n    <p class=\"content add-error\">{{ 'main.contactus.err_name' | translate }}</p>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item\">\n    <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{ 'main.contactus.Email' | translate }}\" class=\"input-box\">\n    </ion-input>\n  </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n    *ngIf=\"contact_form.controls.email.hasError('required') && contact_form.controls.email.touched\">\n    <p class=\"content add-error\">{{ 'main.contactus.err_email' | translate }}</p>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" formControlName=\"subject\" placeholder=\"{{ 'main.contactus.subject' | translate }}\" class=\"input-box\">\n    </ion-input>\n  </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n    *ngIf=\"contact_form.controls.subject.hasError('required') && contact_form.controls.subject.touched\">\n    <p class=\"content add-error\">{{ 'main.contactus.err_subject' | translate }}</p>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-textarea row=\"3\" type=\"text\" formControlName=\"message\" placeholder=\"{{ 'main.contactus.message' | translate }}\" class=\"input-box\"></ion-textarea>\n  </ion-item>\n\n  <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n    *ngIf=\"contact_form.controls.message.hasError('required') && contact_form.controls.message.touched\">\n    <p class=\"content add-error\">{{ 'main.contactus.err_msg' | translate }}</p>\n  </ion-item>\n\n  </form>\n\n  <ion-button expand=\"full\" class=\"btn_snd\" (click)=\"send()\">{{ 'main.contactus.send' | translate }}</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/contactus/contactus-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/contactus/contactus-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ContactusPageRoutingModule */

  /***/
  function srcAppContactusContactusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function () {
      return ContactusPageRoutingModule;
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


    var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/contactus/contactus.page.ts");

    var routes = [{
      path: '',
      component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }];

    var ContactusPageRoutingModule = function ContactusPageRoutingModule() {
      _classCallCheck(this, ContactusPageRoutingModule);
    };

    ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/contactus/contactus.module.ts ***!
    \***********************************************/

  /*! exports provided: ContactusPageModule */

  /***/
  function srcAppContactusContactusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function () {
      return ContactusPageModule;
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


    var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactus-routing.module */
    "./src/app/contactus/contactus-routing.module.ts");
    /* harmony import */


    var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/contactus/contactus.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ContactusPageModule = function ContactusPageModule() {
      _classCallCheck(this, ContactusPageModule);
    };

    ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"]],
      declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })], ContactusPageModule);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/contactus/contactus.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img_main {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.lbl_main {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  display: block;\n}\n\n.lbl_desc {\n  display: block;\n}\n\n.spc_all {\n  padding: 16px;\n}\n\n.spc {\n  padding: 0px 16px 16px 16px;\n}\n\n.item_add {\n  --padding-start: 12px;\n}\n\n.lbl_add {\n  padding-left: 42px;\n  padding-right: 16px;\n}\n\n.icon_spc {\n  padding-left: 4px;\n}\n\n.top {\n  margin-top: 32px !important;\n}\n\n.input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 10px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 0px 0px #ccc;\n  margin: 16px 16px 0px 16px;\n  background: #eee;\n  --background: #eee;\n  border: 1px solid #ccc;\n}\n\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n\n.input-item .input-box {\n  margin-left: 0px;\n}\n\n.btn_snd {\n  margin: 16px 0px 0px 0px;\n  font-weight: bold;\n}\n\n.validator-error {\n  --background: transparent;\n  color: #d44848;\n  --min-height: 18px;\n  --padding-start: 16px;\n}\n\n.validator-error .content {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.lbl_add_head {\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QUREQTtFQUNJLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksMkJBQUE7QUNPSjs7QURMQTtFQUVJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURISTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREZJO0VBRUksZ0JBQUE7QUNHUjs7QURHQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEUjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX21haW57XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmxibF9tYWlue1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubGJsX2Rlc2N7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uc3BjX2FsbHtcbiAgICBwYWRkaW5nOiAxNnB4Oztcbn1cblxuLnNwY3tcbiAgICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XG59XG4uaXRlbV9hZGR7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xufVxuLmxibF9hZGR7XG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uaWNvbl9zcGN7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4udG9we1xuICAgIG1hcmdpbi10b3A6IDMycHggIWltcG9ydGFudDtcbn1cbi5pbnB1dC1pdGVte1xuICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjY2NjO1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWJveHtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAvLy0tY29sb3I6ICNmZmY7XG4gICAgfVxufVxuXG4uYnRuX3NuZHtcbiAgICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIEZpZWxkIEVycm9yXG4udmFsaWRhdG9yLWVycm9ye1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNkNDQ4NDg7XG4gICAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcblxuICAgIC5jb250ZW50e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuLmxibF9hZGRfaGVhZHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIuaW1nX21haW4ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5sYmxfbWFpbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYmxfZGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3BjX2FsbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zcGMge1xuICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XG59XG5cbi5pdGVtX2FkZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbn1cblxuLmxibF9hZGQge1xuICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pY29uX3NwYyB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogMzJweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNjY2M7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uaW5wdXQtaXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmlucHV0LWl0ZW0gLmlucHV0LWJveCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5idG5fc25kIHtcbiAgbWFyZ2luOiAxNnB4IDBweCAwcHggMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZhbGlkYXRvci1lcnJvciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDQ0ODQ4O1xuICAtLW1pbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbn1cbi52YWxpZGF0b3ItZXJyb3IgLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGJsX2FkZF9oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/contactus/contactus.page.ts ***!
    \*********************************************/

  /*! exports provided: ContactusPage */

  /***/
  function srcAppContactusContactusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPage", function () {
      return ContactusPage;
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


    var _global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");

    var ContactusPage = /*#__PURE__*/function () {
      function ContactusPage(statusBar, formBuilder, router, api) {
        _classCallCheck(this, ContactusPage);

        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.contact_fb();
      }

      _createClass(ContactusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.siteSetting().subscribe(function (data) {
            if (data.status == 1) {
              _this.address = data.data.address;
              _this.phone_no = data.data.phone_no;
              _this.telephone = data.data.telephone;
              _this.email = data.data.email;
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
        key: "contact_fb",
        value: function contact_fb() {
          this.contact_form = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this2 = this;

          for (var v in this.contact_form.controls) {
            this.contact_form.controls[v].markAsTouched();
          }

          if (this.contact_form.valid) {
            this.api.presentLoading();
            this.contact_process = true;
            var body = {
              name: this.contact_form.value.name,
              email: this.contact_form.value.email,
              subject: this.contact_form.value.subject,
              message: this.contact_form.value.message
            };
            this.api.contactus(body).subscribe(function (data) {
              _this2.contact_process = false;

              _this2.api.dismissLoading();

              if (data.status == 1) {
                _this2.api.presentToastWithOptions(data.message);
              } else {
                _this2.api.presentToastWithOptions(data.message);
              }
            }, function (err) {
              _this2.contact_process = false;

              _this2.api.dismissLoading();

              _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }
      }]);

      return ContactusPage;
    }();

    ContactusPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }];
    };

    ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contactus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contactus.page.scss */
      "./src/app/contactus/contactus.page.scss"))["default"]]
    })], ContactusPage);
    /***/
  }
}]);
//# sourceMappingURL=contactus-contactus-module-es5.js.map