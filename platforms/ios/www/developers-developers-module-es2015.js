(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["developers-developers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/developers/developers.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/developers/developers.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.developers.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <img src=\"../../assets/images/mainDevelopers.jpg\" class=\"img_main\" />\n\n  <ion-card class=\"card_search\">\n    <div class=\"div_img\">\n      <img src=\"../../assets/images/headerLogo.png\" class=\"img_logo\"/>\n    </div>\n    <form [formGroup]=\"searchLocationForm\">\n\n      <ngx-autocomplete #keyword (keypress)=\"onSearchChange($event.target.value)\" [searchKeyword]=\"'address'\"\n        [placeholderValue]=\"'main.home.search_placeholder' | translate\" [entries]=\"locationArry\"\n        (selectedValue)=\"selectEvent($event)\" class=\"search\">\n      </ngx-autocomplete>\n      <span class=\"search_error\">{{searchErrorMsg ? searchErrorMsg : '' }}</span>\n    </form>\n    <ion-row class=\"row_search\">\n      <ion-col size=\"4\" style=\"padding-left: 0px;\">\n      <ion-button expand=\"full\"  (click)=\"getSearchData('2',keyword)\" class=\"btn_buy\">{{ 'main.home.buy' | translate }}</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\"  (click)=\"getSearchData('1',keyword)\" class=\"btn_buy\">{{ 'main.home.for_rent' | translate }}</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n      <ion-button expand=\"full\" [routerLink]=\"['/signin']\" class=\"btn_buy\">{{ 'main.home.for_sale' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"div_divider\"></div>\n\n  <div class=\"div_content\">\n    <div class=\"isEmpty\" *ngIf=\"content == '' || img == ''\">\n      <ion-label class=\"lbl-empty\">{{'main.reusable.empty' | translate}}</ion-label>\n    </div>\n    <h2 [innerHTML]=\"content ? content : '' \" class=\"lbl_desc_html\"></h2>\n  </div>\n  <img *ngIf=\"img\" [src]=\"api.getimageUrl('cms_pages/',img)\" class=\"img_meet\" />\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/developers/developers-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/developers/developers-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DevelopersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersRoutingModule", function() { return DevelopersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _developers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developers.component */ "./src/app/developers/developers.component.ts");




const routes = [
    {
        path: '',
        component: _developers_component__WEBPACK_IMPORTED_MODULE_3__["DevelopersComponent"]
    }
];
let DevelopersRoutingModule = class DevelopersRoutingModule {
};
DevelopersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevelopersRoutingModule);



/***/ }),

/***/ "./src/app/developers/developers.component.scss":
/*!******************************************************!*\
  !*** ./src/app/developers/developers.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_main {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.4;\n}\n\n.div_img {\n  text-align: center;\n  padding: 16px 0px 8px 0px;\n}\n\n.div_img .img_logo {\n  width: 60%;\n}\n\n.card_search {\n  position: absolute;\n  top: 14px;\n  right: 0;\n  left: 0;\n  margin: 32px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: transparent;\n}\n\n.card_search .lbl_line {\n  color: var(--ion-color-primary-contrast);\n  font-size: 22px;\n  display: block;\n  text-align: center;\n}\n\n.card_search .imp {\n  --padding-start: 0px !important;\n  padding: 0px !important;\n}\n\n.card_search .search {\n  padding: 0px 0px;\n  width: 100%;\n}\n\n.card_search .row_search {\n  width: 100%;\n}\n\n.card_search .row_search .btn_buy {\n  width: 100% !important;\n  text-transform: uppercase;\n}\n\n.card_search.ios.hydrated {\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n}\n\n.search_error {\n  color: #fff;\n}\n\n.div_divider {\n  border: 5px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9kZXZlbG9wZXJzL2RldmVsb3BlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldmVsb3BlcnMvZGV2ZWxvcGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURBSTtFQUNFLFVBQUE7QUNFTjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREVNO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQVI7O0FERU07RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDQVI7O0FERU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNBUjs7QURFTTtFQUVFLFdBQUE7QUNEUjs7QURHUTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUNEVjs7QURLRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FES0U7RUFDRSxzQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZGV2ZWxvcGVycy9kZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5pbWdfbWFpbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAuZGl2X2ltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAwcHggOHB4IDBweDtcbiAgICAuaW1nX2xvZ297XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuICAuY2FyZF9zZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvLyBwYWRkaW5nOiAxNnB4O1xuICAgIC8vIGhlaWdodDogMTc1cHg7XG4gIFxuICAgICAgLmxibF9saW5le1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaW1we1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2h7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnJvd19zZWFyY2h7XG4gICAgICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgICAgICAuYnRuX2J1eXtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuY2FyZF9zZWFyY2guaW9zLmh5ZHJhdGVke1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG5cbiAgLnNlYXJjaF9lcnJvcntcbiAgICBjb2xvcjojZmZmO1xuICB9XG5cbiAgLmRpdl9kaXZpZGVye1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZWU7XG4gIH0iLCIuaW1nX21haW4ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmRpdl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDhweCAwcHg7XG59XG4uZGl2X2ltZyAuaW1nX2xvZ28ge1xuICB3aWR0aDogNjAlO1xufVxuXG4uY2FyZF9zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jYXJkX3NlYXJjaCAubGJsX2xpbmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZF9zZWFyY2ggLmltcCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmRfc2VhcmNoIC5zZWFyY2gge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkX3NlYXJjaCAucm93X3NlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRfc2VhcmNoIC5yb3dfc2VhcmNoIC5idG5fYnV5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmRfc2VhcmNoLmlvcy5oeWRyYXRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5zZWFyY2hfZXJyb3Ige1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRpdl9kaXZpZGVyIHtcbiAgYm9yZGVyOiA1cHggc29saWQgI2VlZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/developers/developers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/developers/developers.component.ts ***!
  \****************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let DevelopersComponent = class DevelopersComponent {
    constructor(formBuilder, zone, api, router) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.api = api;
        this.router = router;
        this.locationArry = [];
        this.searchErrorMsg = "";
        this.getSearchLocation();
    }
    ngOnInit() {
        this.searchLocationForm = this.formBuilder.group({
            search: ["", null],
        });
        this.api.presentLoading();
        this.news_process = true;
        this.api.cmsPages()
            .subscribe((data) => {
            if (data.status == 1) {
                this.title = data.data.developers.page_title;
                this.content = data.data.developers.content;
                this.img = data.data.developers.image;
                this.news_process = false;
                this.api.dismissLoading();
            }
            else {
                this.news_process = false;
                this.api.dismissLoading();
            }
        });
    }
    selectEvent(event) {
        this.searchErrorMsg = "";
        this.selected_employee = JSON.stringify(event);
    }
    getSearchData(type, keyword) {
        this.searchErrorMsg = "";
        if (keyword.data.length != 0) {
            if (type != '' && keyword.data[0].address != '') {
                this.router.navigate(["/property"], {
                    queryParams: { t: type, k: keyword.data[0].address }
                });
            }
        }
        else {
            this.searchErrorMsg = "No property available related to what you have searched";
        }
    }
    getSearchLocation() {
        this.api.searchLocation().subscribe((data) => {
            if (data.status == 1) {
                this.locationArry = data.data;
            }
        });
    }
    onSearchChange(searchValue) {
        this.locationArry.sort(function (a, b) {
            return a.address.length - b.address.length;
        });
    }
};
DevelopersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DevelopersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-developers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./developers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/developers/developers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./developers.component.scss */ "./src/app/developers/developers.component.scss")).default]
    })
], DevelopersComponent);



/***/ }),

/***/ "./src/app/developers/developers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/developers/developers.module.ts ***!
  \*************************************************/
/*! exports provided: DevelopersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersModule", function() { return DevelopersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _developers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developers.component */ "./src/app/developers/developers.component.ts");
/* harmony import */ var _developers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developers-routing.module */ "./src/app/developers/developers-routing.module.ts");
/* harmony import */ var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-angular-autocomplete */ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js");









let DevelopersModule = class DevelopersModule {
};
DevelopersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_8__["NgxAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _developers_routing_module__WEBPACK_IMPORTED_MODULE_7__["DevelopersRoutingModule"]
        ],
        declarations: [_developers_component__WEBPACK_IMPORTED_MODULE_6__["DevelopersComponent"]]
    })
], DevelopersModule);



/***/ })

}]);
//# sourceMappingURL=developers-developers-module-es2015.js.map