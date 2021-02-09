function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individuals-individuals-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/individuals/individuals.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individuals/individuals.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndividualsIndividualsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.individuals.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <img src=\"../../assets/images/mainIndividuals.jpg\" class=\"img_main\" />\n\n  <ion-card class=\"card_search\">\n    <div class=\"div_img\">\n      <img src=\"../../assets/images/headerLogo.png\" class=\"img_logo\"/>\n    </div>\n    <form [formGroup]=\"searchLocationForm\">\n\n      <ngx-autocomplete #keyword (keypress)=\"onSearchChange($event.target.value)\" [searchKeyword]=\"'address'\"\n        [placeholderValue]=\"'main.home.search_placeholder' | translate\" [entries]=\"locationArry\"\n        (selectedValue)=\"selectEvent($event)\" class=\"search\">\n      </ngx-autocomplete>\n      <span class=\"search_error\">{{searchErrorMsg ? searchErrorMsg : '' }}</span>\n    </form>\n    <ion-row class=\"row_search\">\n      <ion-col size=\"4\" style=\"padding-left: 0px;\">\n      <ion-button expand=\"full\"  (click)=\"getSearchData('2',keyword)\" class=\"btn_buy\">{{ 'main.home.buy' | translate }}</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n      <ion-button expand=\"full\"  (click)=\"getSearchData('1',keyword)\" class=\"btn_buy\">{{ 'main.home.for_rent' | translate }}</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n      <ion-button expand=\"full\" [routerLink]=\"['/signin']\" class=\"btn_buy\">{{ 'main.home.for_sale' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"div_divider\"></div>\n\n  <div class=\"div_content\">\n    <div class=\"isEmpty\" *ngIf=\"content == '' || img == ''\">\n      <ion-label class=\"lbl-empty\">{{'main.reusable.empty' | translate}}</ion-label>\n    </div>\n    <h2 [innerHTML]=\"content ? content : '' \" class=\"lbl_desc_html\"></h2>\n  </div>\n  <img *ngIf=\"img\" [src]=\"api.getimageUrl('cms_pages/',img)\" class=\"img_meet\" />\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/individuals/individuals-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/individuals/individuals-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: IndividualsRoutingModule */

  /***/
  function srcAppIndividualsIndividualsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualsRoutingModule", function () {
      return IndividualsRoutingModule;
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


    var _individuals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./individuals.component */
    "./src/app/individuals/individuals.component.ts");

    var routes = [{
      path: '',
      component: _individuals_component__WEBPACK_IMPORTED_MODULE_3__["IndividualsComponent"]
    }];

    var IndividualsRoutingModule = function IndividualsRoutingModule() {
      _classCallCheck(this, IndividualsRoutingModule);
    };

    IndividualsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndividualsRoutingModule);
    /***/
  },

  /***/
  "./src/app/individuals/individuals.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/individuals/individuals.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndividualsIndividualsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img_main {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.4;\n}\n\n.div_img {\n  text-align: center;\n  padding: 16px 0px 8px 0px;\n}\n\n.div_img .img_logo {\n  width: 60%;\n}\n\n.card_search {\n  position: absolute;\n  top: 14px;\n  right: 0;\n  left: 0;\n  margin: 32px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: transparent;\n}\n\n.card_search .lbl_line {\n  color: var(--ion-color-primary-contrast);\n  font-size: 22px;\n  display: block;\n  text-align: center;\n}\n\n.card_search .imp {\n  --padding-start: 0px !important;\n  padding: 0px !important;\n}\n\n.card_search .search {\n  padding: 0px 0px;\n  width: 100%;\n}\n\n.card_search .row_search {\n  width: 100%;\n}\n\n.card_search .row_search .btn_buy {\n  width: 100% !important;\n  text-transform: uppercase;\n}\n\n.card_search.ios.hydrated {\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n}\n\n.search_error {\n  color: #fff;\n}\n\n.div_divider {\n  border: 5px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9pbmRpdmlkdWFscy9pbmRpdmlkdWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5kaXZpZHVhbHMvaW5kaXZpZHVhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQUk7RUFDRSxVQUFBO0FDRU47O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURFTTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVNO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREVNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQVI7O0FERU07RUFFRSxXQUFBO0FDRFI7O0FER1E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FDRFY7O0FES0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBRElFO0VBQ0Usc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2luZGl2aWR1YWxzL2luZGl2aWR1YWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5pbWdfbWFpbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAuZGl2X2ltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAwcHggOHB4IDBweDtcbiAgICAuaW1nX2xvZ297XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuICAuY2FyZF9zZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvLyBwYWRkaW5nOiAxNnB4O1xuICAgIC8vIGhlaWdodDogMTc1cHg7XG4gIFxuICAgICAgLmxibF9saW5le1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaW1we1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2h7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnJvd19zZWFyY2h7XG4gICAgICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICAgICAuYnRuX2J1eXtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuY2FyZF9zZWFyY2guaW9zLmh5ZHJhdGVke1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgLnNlYXJjaF9lcnJvcntcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC5kaXZfZGl2aWRlcntcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZWVlO1xuICB9IiwiLmltZ19tYWluIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5kaXZfaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDBweCA4cHggMHB4O1xufVxuLmRpdl9pbWcgLmltZ19sb2dvIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmRfc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2FyZF9zZWFyY2ggLmxibF9saW5lIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmRfc2VhcmNoIC5pbXAge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkX3NlYXJjaCAuc2VhcmNoIHtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZF9zZWFyY2ggLnJvd19zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkX3NlYXJjaCAucm93X3NlYXJjaCAuYnRuX2J1eSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkX3NlYXJjaC5pb3MuaHlkcmF0ZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uc2VhcmNoX2Vycm9yIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kaXZfZGl2aWRlciB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlZWU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/individuals/individuals.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/individuals/individuals.component.ts ***!
    \******************************************************/

  /*! exports provided: IndividualsComponent */

  /***/
  function srcAppIndividualsIndividualsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualsComponent", function () {
      return IndividualsComponent;
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


    var _global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var IndividualsComponent = /*#__PURE__*/function () {
      function IndividualsComponent(formBuilder, zone, api, router) {
        _classCallCheck(this, IndividualsComponent);

        this.formBuilder = formBuilder;
        this.zone = zone;
        this.api = api;
        this.router = router;
        this.locationArry = [];
        this.searchErrorMsg = "";
        this.getSearchLocation();
      }

      _createClass(IndividualsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.searchLocationForm = this.formBuilder.group({
            search: ["", null]
          });
          this.api.presentLoading();
          this.news_process = true;
          this.api.cmsPages().subscribe(function (data) {
            if (data.status == 1) {
              _this.title = data.data.individuals.page_title;
              _this.content = data.data.individuals.content;
              _this.img = data.data.individuals.image;
              _this.news_process = false;

              _this.api.dismissLoading();
            } else {
              _this.news_process = false;

              _this.api.dismissLoading();
            }
          });
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(event) {
          this.searchErrorMsg = "";
          this.selected_employee = JSON.stringify(event);
        }
      }, {
        key: "getSearchData",
        value: function getSearchData(type, keyword) {
          this.searchErrorMsg = "";

          if (keyword.data.length != 0) {
            if (type != '' && keyword.data[0].address != '') {
              this.router.navigate(["/listing"], {
                queryParams: {
                  t: type,
                  k: keyword.data[0].address
                }
              });
            }
          } else {
            this.searchErrorMsg = "No property available related to what you have searched";
          }
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
      }]);

      return IndividualsComponent;
    }();

    IndividualsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    IndividualsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-individuals',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./individuals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/individuals/individuals.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./individuals.component.scss */
      "./src/app/individuals/individuals.component.scss"))["default"]]
    })], IndividualsComponent);
    /***/
  },

  /***/
  "./src/app/individuals/individuals.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/individuals/individuals.module.ts ***!
    \***************************************************/

  /*! exports provided: IndividualsModule */

  /***/
  function srcAppIndividualsIndividualsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualsModule", function () {
      return IndividualsModule;
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


    var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-angular-autocomplete */
    "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _individuals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./individuals.component */
    "./src/app/individuals/individuals.component.ts");
    /* harmony import */


    var _individuals_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./individuals-routing.module */
    "./src/app/individuals/individuals-routing.module.ts");

    var IndividualsModule = function IndividualsModule() {
      _classCallCheck(this, IndividualsModule);
    };

    IndividualsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_5__["NgxAutocompleteModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _individuals_routing_module__WEBPACK_IMPORTED_MODULE_8__["IndividualsRoutingModule"]],
      declarations: [_individuals_component__WEBPACK_IMPORTED_MODULE_7__["IndividualsComponent"]]
    })], IndividualsModule);
    /***/
  }
}]);
//# sourceMappingURL=individuals-individuals-module-es5.js.map