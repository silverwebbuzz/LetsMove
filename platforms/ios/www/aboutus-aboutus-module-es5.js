function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.aboutus.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"../../assets/images/mainAboutUs.jpg\" class=\"img_main\" />\n\n  <ion-label class=\"lbl_main spc_all\">{{ 'main.aboutus.why_chose_us' | translate }}</ion-label>\n\n  <ion-label class=\"lbl_para1\">\n    We are Letsmove, an International Real Estate Property Platform in Greece. The foundations of our company lie on\n    providing simple access to our platform. Users including agents, developers and individuals, can connect with a\n    direct audience in a safe and user friendly environment. Letsmove started in Greece in 2019, and international\n    market expansion is planned in the near future. The aim is to build a brand on reputation of professionalism and\n    quality customer service as a priority. We will fully support you throughout the process and we are available 24/7\n    with online help and a call centre operating in the centre of Athens.\n  </ion-label>\n\n  <ion-label class=\"lbl_para1\">\n    Letsmove features an innovative system allowing equal access to agents, developers and individuals in order for them\n    to showcase their property to buy, rent or sell.\n  </ion-label>\n\n  <div class=\"div_founder\">\n    <img src=\"../../assets/images/isma.png\" class=\"img_founder\"/>\n    <ion-label class=\"lbl_founder\">Isma Javid</ion-label>\n    <ion-label class=\"lbl_paras\">\n      Isma Javid is the founder of Letsmove.gr. Isma set up Letsmove in 2019 after recognising a gap in the Greek property\n      market for a International Real Estate Platform. Isma has a great wealth of international experience and\n      understanding of the property market and investments in previous roles. Isma is also the founder of the innovative\n      company Lice Clinics of Greece.\n    </ion-label>\n  </div>\n\n  <ion-label class=\"lbl_stick\">{{ 'main.aboutus.our_team' | translate }}</ion-label>\n\n  <ion-slides pager=\"true\" [options]=\"slideOptsTeam\" class=\"slides2\">\n    <ion-slide class=\"slide2\" *ngFor=\"let team of ourTeam;\">\n      <ion-card class=\"card_slide2\">\n        <img [src]=\"this.api.getimageUrl('teams/',team.image)\" class=\"img_slide2\" />\n        <ion-label color=\"dark\" class=\"lbl_tech2\">{{team.name}} </ion-label>\n        <ion-label color=\"medium\" class=\"lbl_desc2\">{{team.designation}}</ion-label>\n      </ion-card>\n    </ion-slide>\n\n  </ion-slides>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AboutusPageRoutingModule */

  /***/
  function srcAppAboutusAboutusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function () {
      return AboutusPageRoutingModule;
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


    var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aboutus.page */
    "./src/app/aboutus/aboutus.page.ts");

    var routes = [{
      path: '',
      component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }];

    var AboutusPageRoutingModule = function AboutusPageRoutingModule() {
      _classCallCheck(this, AboutusPageRoutingModule);
    };

    AboutusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/aboutus/aboutus.module.ts ***!
    \*******************************************/

  /*! exports provided: AboutusPageModule */

  /***/
  function srcAppAboutusAboutusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function () {
      return AboutusPageModule;
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


    var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aboutus-routing.module */
    "./src/app/aboutus/aboutus-routing.module.ts");
    /* harmony import */


    var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-angular-autocomplete */
    "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js");
    /* harmony import */


    var _aboutus_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./aboutus.page */
    "./src/app/aboutus/aboutus.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutusPageModule = function AboutusPageModule() {
      _classCallCheck(this, AboutusPageModule);
    };

    AboutusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_6__["NgxAutocompleteModule"], _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]],
      declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_7__["AboutusPage"]]
    })], AboutusPageModule);
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/aboutus/aboutus.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutusAboutusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img_main {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.lbl_main {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  display: block;\n}\n\n.img_choose {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 16px 16px 0px 16px;\n}\n\n.spc_all {\n  padding: 16px;\n}\n\n.slides1 {\n  margin: 0px 16px;\n  padding-bottom: 16px;\n}\n\n.slides1 .slide1 .icon_slide1 {\n  font-size: 34px;\n  box-shadow: 0px 4px 10px var(--ion-color-secondary);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.slides1 .slide1 .lbl_title_slide1 {\n  display: block;\n  font-size: 22px;\n  text-align: left;\n  padding: 0px 16px 8px 16px;\n}\n\n.slides1 .slide1 .lbl_desc_slide1 {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  padding: 0px 16px 8px 16px;\n}\n\n.slides2 {\n  margin: 16px;\n  padding-bottom: 32px;\n}\n\n.slides2 .slide2 {\n  padding: 5px;\n}\n\n.slides2 .slide2 .card_slide2 {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0 0 10px #ccc;\n  width: 100%;\n  padding: 8px;\n}\n\n.slides2 .slide2 .card_slide2 .img_slide2 {\n  border-radius: 50%;\n}\n\n.slides2 .slide2 .card_slide2 .lbl_tech2 {\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 16px 16px 8px 16px;\n}\n\n.slides2 .slide2 .card_slide2 .lbl_desc2 {\n  display: block;\n  font-size: 14px;\n}\n\n.slides3 {\n  margin: 16px;\n  padding-bottom: 16px;\n}\n\n.slides3 .slide3 .card_slide3 {\n  padding: 16px;\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: var(--ion-color-secondary);\n}\n\n.slides3 .slide3 .card_slide3 .lbl_head3 {\n  font-size: 24px;\n  display: block;\n}\n\n.slides3 .slide3 .card_slide3 .lbl_desc3 {\n  display: block;\n  font-size: 16px;\n  padding: 16px 0px;\n}\n\n.slides3 .slide3 .card_slide3 .lbl_name3 {\n  display: block;\n  font-size: 18px;\n  padding: 16px;\n}\n\n.slides3 .slide3 .card_slide3 .lbl_4 {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.lbl_desc4 {\n  display: block;\n  margin: 0px 16px 16px 16px;\n  font-size: 16px;\n}\n\n.slides4 {\n  margin: 16px;\n  padding-bottom: 16px;\n}\n\n.lbl_stick {\n  font-size: 28px;\n  font-weight: 600;\n  display: block;\n  padding: 0px 16px 0px 16px;\n  color: var(--ion-color-dark);\n}\n\nion-content {\n  position: relative;\n}\n\n.img_main {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card_search {\n  position: absolute;\n  top: 105px;\n  right: 0;\n  left: 0;\n  margin: 16px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: var(--ion-color-primary);\n  padding: 16px;\n  height: 175px;\n}\n\n.card_search .lbl_line {\n  color: var(--ion-color-primary-contrast);\n  font-size: 22px;\n  display: block;\n  text-align: center;\n}\n\n.card_search .imp {\n  --padding-start: 0px !important;\n  padding: 0px !important;\n}\n\n.card_search .search {\n  padding: 0px 0px;\n  width: 100%;\n}\n\n.card_search .row_search {\n  float: right;\n}\n\n.card_search .row_search .btn_buy {\n  width: 51px;\n}\n\n.card_search.ios.hydrated {\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n}\n\n.lbl_para1 {\n  color: #515151;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 16px;\n  padding: 0px 16px;\n  display: block;\n}\n\n.div_founder {\n  text-align: center;\n  box-shadow: 0px 0px 4px #ccc;\n  margin: 16px;\n  padding: 16px;\n}\n\n.div_founder .img_founder {\n  height: 150px;\n  border-radius: 50%;\n}\n\n.div_founder .lbl_founder {\n  font-weight: bold;\n  font-size: 24px;\n  display: block;\n  padding: 8px;\n}\n\n.div_founder .lbl_paras {\n  color: #515151;\n  font-size: 16px;\n  font-weight: 300;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FEREk7RUFDRSxlQUFBO0VBQ0EsbURBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHTjs7QURESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0dOOztBRERJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDR047O0FERUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURBRTtFQUVFLFlBQUE7QUNDSjs7QURBSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFTjs7QURBTTtFQUNFLGtCQUFBO0FDRVI7O0FEQU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNFUjs7QURBTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRVI7O0FESUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURJSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FDRk47O0FESU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBRElNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRlI7O0FESU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRlI7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ1RGOztBRFdFO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0U7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDVEo7O0FEV0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNUSjs7QURXRTtFQUNFLFlBQUE7QUNUSjs7QURVSTtFQUNFLFdBQUE7QUNSTjs7QURZQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDVEY7O0FEWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNWSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1RKOztBRFdJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDVFI7O0FEV0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1RSOztBRFdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUlBLGNBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX21haW4ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5sYmxfbWFpbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW1nX2Nob29zZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuLnNwY19hbGwge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLnNsaWRlczEge1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAuc2xpZGUxIHtcbiAgICAuaWNvbl9zbGlkZTEge1xuICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmxibF90aXRsZV9zbGlkZTEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMHB4IDE2cHggOHB4IDE2cHg7XG4gICAgfVxuICAgIC5sYmxfZGVzY19zbGlkZTEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMHB4IDE2cHggOHB4IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5zbGlkZXMyIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgLnNsaWRlMiB7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgLmNhcmRfc2xpZGUyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4O1xuXG4gICAgICAuaW1nX3NsaWRlMiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5sYmxfdGVjaDIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggOHB4IDE2cHg7XG4gICAgICB9XG4gICAgICAubGJsX2Rlc2MyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlczMge1xuICBtYXJnaW46IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gIC5zbGlkZTMge1xuICAgIC5jYXJkX3NsaWRlMyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cbiAgICAgIC5sYmxfaGVhZDMge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmxibF9kZXNjMyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgfVxuICAgICAgLmxibF9uYW1lMyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICAubGJsXzQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubGJsX2Rlc2M0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IDE2cHggMTZweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zbGlkZXM0IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLy8gLnNsaWRlNHtcbiAgLy8gICAgIC5pbWdfc2xpZGU0e1xuXG4gIC8vICAgICB9XG4gIC8vIH1cbn1cblxuLmxibF9zdGljayB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDBweCAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWdfbWFpbiB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNhcmRfc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwNXB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTZweDtcbiAgaGVpZ2h0OiAxNzVweDtcblxuICAubGJsX2xpbmUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW1wIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWFyY2gge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvd19zZWFyY2gge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAuYnRuX2J1eSB7XG4gICAgICB3aWR0aDogNTFweDtcbiAgICB9XG4gIH1cbn1cbi5jYXJkX3NlYXJjaC5pb3MuaHlkcmF0ZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubGJsX3BhcmExe1xuICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5kaXZfZm91bmRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2NjYztcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5pbWdfZm91bmRlcntcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAubGJsX2ZvdW5kZXJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICAgIC5sYmxfcGFyYXN7XG4gICAgICAgIGNvbG9yOiAjNTE1MTUxO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIC8vIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59IiwiLmltZ19tYWluIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubGJsX21haW4ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nX2Nob29zZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuXG4uc3BjX2FsbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zbGlkZXMxIHtcbiAgbWFyZ2luOiAwcHggMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uc2xpZGVzMSAuc2xpZGUxIC5pY29uX3NsaWRlMSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2xpZGVzMSAuc2xpZGUxIC5sYmxfdGl0bGVfc2xpZGUxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4IDE2cHggOHB4IDE2cHg7XG59XG4uc2xpZGVzMSAuc2xpZGUxIC5sYmxfZGVzY19zbGlkZTEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggMTZweCA4cHggMTZweDtcbn1cblxuLnNsaWRlczIge1xuICBtYXJnaW46IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLnNsaWRlczIgLnNsaWRlMiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zbGlkZXMyIC5zbGlkZTIgLmNhcmRfc2xpZGUyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5zbGlkZXMyIC5zbGlkZTIgLmNhcmRfc2xpZGUyIC5pbWdfc2xpZGUyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNsaWRlczIgLnNsaWRlMiAuY2FyZF9zbGlkZTIgLmxibF90ZWNoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDE2cHggMTZweCA4cHggMTZweDtcbn1cbi5zbGlkZXMyIC5zbGlkZTIgLmNhcmRfc2xpZGUyIC5sYmxfZGVzYzIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2xpZGVzMyB7XG4gIG1hcmdpbjogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uc2xpZGVzMyAuc2xpZGUzIC5jYXJkX3NsaWRlMyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNsaWRlczMgLnNsaWRlMyAuY2FyZF9zbGlkZTMgLmxibF9oZWFkMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2xpZGVzMyAuc2xpZGUzIC5jYXJkX3NsaWRlMyAubGJsX2Rlc2MzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG4uc2xpZGVzMyAuc2xpZGUzIC5jYXJkX3NsaWRlMyAubGJsX25hbWUzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zbGlkZXMzIC5zbGlkZTMgLmNhcmRfc2xpZGUzIC5sYmxfNCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sYmxfZGVzYzQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggMTZweCAxNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNsaWRlczQge1xuICBtYXJnaW46IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4ubGJsX3N0aWNrIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nX21haW4ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXJkX3NlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDVweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogMTc1cHg7XG59XG4uY2FyZF9zZWFyY2ggLmxibF9saW5lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmRfc2VhcmNoIC5pbXAge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkX3NlYXJjaCAuc2VhcmNoIHtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZF9zZWFyY2ggLnJvd19zZWFyY2gge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2FyZF9zZWFyY2ggLnJvd19zZWFyY2ggLmJ0bl9idXkge1xuICB3aWR0aDogNTFweDtcbn1cblxuLmNhcmRfc2VhcmNoLmlvcy5oeWRyYXRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5sYmxfcGFyYTEge1xuICBjb2xvcjogIzUxNTE1MTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXZfZm91bmRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2NjYztcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmRpdl9mb3VuZGVyIC5pbWdfZm91bmRlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kaXZfZm91bmRlciAubGJsX2ZvdW5kZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuLmRpdl9mb3VuZGVyIC5sYmxfcGFyYXMge1xuICBjb2xvcjogIzUxNTE1MTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/aboutus/aboutus.page.ts ***!
    \*****************************************/

  /*! exports provided: AboutusPage */

  /***/
  function srcAppAboutusAboutusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPage", function () {
      return AboutusPage;
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


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutusPage = /*#__PURE__*/function () {
      function AboutusPage(statusBar, formBuilder, zone, api, router) {
        _classCallCheck(this, AboutusPage);

        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.api = api;
        this.router = router;
        this.slideOptsTeam = {
          zoom: false,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loopFillGroupWithBlank: true
        };
        this.locationArry = [];
      }

      _createClass(AboutusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchLocationForm = this.formBuilder.group({
            search: ["", null]
          });
          this.api.teamMember().subscribe(function (data) {
            if (data.status == 1) {
              _this.ourTeam = data.data; //this.loader = false;
            }
          });
          this.api.cmsPages().subscribe(function (data) {
            if (data.status == 1) {
              _this.title = data.data.about_us.page_title;
              _this.content = data.data.about_us.content;
              _this.img = data.data.about_us.image;
            }
          });
        }
      }, {
        key: "getSearchData",
        value: function getSearchData(type, keyword) {
          if (type != '' && keyword.data[0].address != '') {
            this.router.navigate(["/listing"], {
              queryParams: {
                t: type,
                k: keyword.data[0].address
              }
            });
          }
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(event) {
          this.selected_employee = JSON.stringify(event);
        }
      }, {
        key: "getSearchLocation",
        value: function getSearchLocation() {
          var _this2 = this;

          this.api.searchLocation().subscribe(function (data) {
            if (data.status == 1) {
              _this2.locationArry = data.data;
            }
          });
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(searchValue) {
          this.locationArry.sort(function (a, b) {
            return a.address.length - b.address.length;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleLightContent();
          this.statusBar.backgroundColorByHexString('#c41a3b');
        }
      }]);

      return AboutusPage;
    }();

    AboutusPage.ctorParameters = function () {
      return [{
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AboutusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./aboutus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./aboutus.page.scss */
      "./src/app/aboutus/aboutus.page.scss"))["default"]]
    })], AboutusPage);
    /***/
  }
}]);
//# sourceMappingURL=aboutus-aboutus-module-es5.js.map