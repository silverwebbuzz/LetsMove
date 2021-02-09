(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.home.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"../../assets/images/bannerSplash.png\" class=\"img_main\" />\n\n  <ion-card class=\"card_search\">\n    <div class=\"div_img\">\n      <img src=\"../../assets/images/headerLogo.png\" class=\"img_logo\" />\n    </div>\n    <form [formGroup]=\"searchLocationForm\">\n      <ngx-autocomplete #keyword (keypress)=\"onSearchChange($event.target.value)\" [searchKeyword]=\"'address'\"\n        [placeholderValue]=\"'main.home.search_placeholder' | translate\" [entries]=\"locationArry\"\n        (selectedValue)=\"selectEvent($event)\" class=\"search\">\n      </ngx-autocomplete>\n      <span class=\"search_error\">{{searchErrorMsg ? searchErrorMsg : '' }}</span>\n    </form>\n    <ion-row class=\"row_search\">\n      <ion-col size=\"4\" style=\"padding-left: 0px;\">\n        <ion-button expand=\"full\" (click)=\"getSearchData('2',keyword)\" class=\"btn_buy\">{{ 'main.home.buy' | translate }}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"full\" (click)=\"getSearchData('1',keyword)\" class=\"btn_buy\">\n          {{ 'main.home.for_rent' | translate }}</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"full\" [routerLink]=\"['/signin']\" class=\"btn_buy\">{{ 'main.home.for_sale' | translate }}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div class=\"div_divider\"></div>\n\n  <ion-row class=\"row_explore\">\n    <ion-col size=\"4\" class=\"col_explore\">\n      <img src=\"../../assets/images/homeIcon.png\" class=\"img_explore\" />\n    </ion-col>\n    <ion-col size=\"8\" class=\"col_explore\" style=\"text-align: left;\">\n      <ion-label class=\"lbl_explore\">Explore your property!</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"div_divider\"></div>\n\n  <div class=\"isEmpty1\" *ngIf=\"listSlider?.length == 0\">\n    <ion-label class=\"lbl-empty\">{{'main.reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <ion-row style=\"margin-top: 16px;\" *ngIf=\"listSlider?.length > 0\">\n    <ion-col size=\"9\" style=\"padding: 0px;\">\n      <ion-label class=\"lbl_stick\">Featured Properties</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" style=\"padding: 0px; text-align: right;\">\n      <ion-label color=\"primary\" style=\"text-transform: uppercase; padding: 0px 16px;\" (click)=\"listing_redirect()\">Show\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-slides [options]=\"slideOptsNews\" class=\"slides_news\">\n    <ion-slide class=\"slide_news\" *ngFor=\"let slide of listSlider;\">\n      <ion-card class=\"card_news\" (click)=\"PropertyDetails(slide.property_content.p_id)\">\n        <img *ngIf=\"slide.property_content.image == ''\" src=\"{{defaultImg}}\" class=\"img_news\" />\n\n        <img [src]=\"img('propertyImage/',slide.property_content.image.split(',')[0])\" class=\"img_news\" />\n        <ion-label color=\"dark\" class=\"lbl_head_news\">€{{ slide.property_content.price }}</ion-label>\n        <ion-label class=\"lbl_square\">{{slide.property_content.categoryName}} </ion-label>\n        <ion-label color=\"medium\" class=\"lbl_desc_news\">{{ slide.property_content.description }}</ion-label>\n      </ion-card>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-angular-autocomplete */ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_6__["NgxAutocompleteModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_main {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.4;\n}\n\n.div_img {\n  text-align: center;\n  padding: 16px 0px 8px 0px;\n}\n\n.div_img .img_logo {\n  width: 60%;\n}\n\n.card_search {\n  position: absolute;\n  top: 14px;\n  right: 0;\n  left: 0;\n  margin: 32px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: transparent;\n}\n\n.card_search .lbl_line {\n  color: var(--ion-color-primary-contrast);\n  font-size: 22px;\n  display: block;\n  text-align: center;\n  font-weight: bold;\n}\n\n.card_search .imp {\n  --padding-start: 0px !important;\n  padding: 0px !important;\n}\n\n.card_search .search {\n  padding: 0px 0px;\n  width: 100%;\n}\n\n.card_search .row_search {\n  width: 100%;\n}\n\n.card_search .row_search .btn_buy {\n  width: 100% !important;\n  text-transform: uppercase;\n}\n\n.card_search.ios.hydrated {\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n}\n\n.slides1 {\n  margin: 154px 16px 16px 16px;\n  padding-bottom: 20px;\n  z-index: 0 !important;\n}\n\n.slides1 .slide1 {\n  padding: 10px;\n}\n\n.slides1 .slide1 .card_slide1 {\n  height: 365px;\n  padding: 8px;\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0 0 10px #ccc;\n  color: var(--ion-color-primary-contrast);\n}\n\n.slides1 .slide1 .card_slide1 .img_slide1 {\n  height: 200px;\n  width: 200px;\n}\n\n.slides1 .slide1 .card_slide1 .lbl_tech1 {\n  display: block;\n  text-transform: uppercase;\n  font-size: 16px;\n  padding: 16px;\n  font-weight: bold;\n}\n\n.slides1 .slide1 .card_slide1 .lbl_desc1 {\n  display: block;\n  text-align: left;\n  color: var(--ion-color-medium);\n  padding: 0px 16px 0px 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card_live {\n  padding-bottom: 16px;\n  margin: 16px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: #eee;\n}\n\n.card_live .img_live {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card_live .lbl_live {\n  display: block;\n  font-size: 28px;\n  padding: 16px;\n  font-weight: 600;\n}\n\n.card_live .lbl_live_head {\n  display: block;\n  font-size: 18px;\n  padding: 0px 16px;\n}\n\n.card_live .lbl_live_desc {\n  display: block;\n  font-size: 15px;\n  padding: 16px 16px 5px 16px;\n  text-align: left;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card_live .lbl_btn {\n  padding: 0px 16px 16px 16px;\n  font-size: 18px;\n}\n\n.card_live .btn_prof {\n  width: 50%;\n  margin-left: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.slides_news {\n  margin: 16px;\n  padding-bottom: 4px;\n}\n\n.slides_news .slide_news .card_news {\n  height: 275px;\n  margin: 0px;\n  border-radius: 0px;\n}\n\n.slides_news .slide_news .card_news .img_news {\n  height: 175px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.slides_news .slide_news .card_news .lbl_head_news {\n  font-size: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: left;\n  padding: 6px 16px 0px 16px;\n}\n\n.slides_news .slide_news .card_news .lbl_square {\n  display: block;\n  font-size: 18px;\n  text-align: left;\n  padding: 0px 16px;\n}\n\n.slides_news .slide_news .card_news .lbl_desc_news {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  padding: 0px 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.btn_news {\n  text-transform: uppercase;\n  width: 50%;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n.slides_meet {\n  margin: 16px 16px 0px 16px;\n  padding-bottom: 4px;\n}\n\n.slides_meet .slide_meet .card_meet {\n  height: 415px;\n  padding: 16px;\n  margin: 0px 0px 30px 0px;\n  border-radius: 0px;\n  box-shadow: 0px 0px;\n  background: #eee;\n}\n\n.slides_meet .slide_meet .card_meet .lbl_head_meet {\n  display: block;\n  font-weight: 600;\n  font-size: 22px;\n  padding: 16px;\n}\n\n.slides_meet .slide_meet .card_meet .lbl_desc_meet {\n  display: block;\n  font-size: 15px;\n}\n\n.slides_meet .slide_meet .card_meet .lbl_name_meet {\n  display: block;\n  font-size: 28px;\n  font-weight: bold;\n  padding: 16px 16px 0px 16px;\n}\n\n.slides_property {\n  margin: 16px;\n  padding-bottom: 28px;\n}\n\n.slides_property .slide_property .card_property {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0 0 10px #ccc;\n  height: 405px;\n}\n\n.slides_property .slide_property .card_property .img_property {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.slides_property .slide_property .card_property .lbl_head_property {\n  display: block;\n  font-size: 17px;\n  text-align: left;\n  padding: 5px 16px;\n  font-weight: bold;\n}\n\n.slides_property .slide_property .card_property .lbl_add1_property {\n  display: block;\n  font-size: 15px;\n  text-align: left;\n  padding: 5px 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slides_property .slide_property .card_property .lbl_add2_property {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  padding: 5px 16px;\n}\n\n.slides_property .slide_property .card_property .lbl_rate {\n  display: block;\n  font-size: 14px;\n  text-align: left;\n  padding: 5px 16px;\n}\n\n.div_divider {\n  border: 5px solid #eee;\n}\n\n.lbl_stick {\n  font-size: 18px;\n  padding: 0px 16px;\n}\n\n.top {\n  padding-top: 16px;\n}\n\n.search_error {\n  color: #fff;\n}\n\n.lbl_ {\n  font-size: 20px !important;\n  font-weight: bold !important;\n}\n\n.lbl_news_desc {\n  display: block;\n  padding: 8px 16px 16px 16px;\n  font-size: 16px;\n  color: black;\n}\n\n.row_explore {\n  padding: 8px;\n}\n\n.row_explore .col_explore {\n  padding: 0px;\n  line-height: 75px;\n  text-align: center;\n}\n\n.row_explore .col_explore .img_explore {\n  height: 75px;\n}\n\n.row_explore .col_explore .lbl_explore {\n  display: block;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREFFO0VBQ0UsVUFBQTtBQ0VKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0U7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdFO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDREo7O0FESUU7RUFFRSxXQUFBO0FDSEo7O0FET0k7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FDTE47O0FEVUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFNBO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDTkY7O0FEUUU7RUFFRSxhQUFBO0FDUEo7O0FEU0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUNQTjs7QURTTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUFI7O0FEU007RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDUFI7O0FEU007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JB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O0VBQ0UsWUFBQTtBQ2hDTjs7QURrQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ2hDTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWdfbWFpbiB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLmRpdl9pbWd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwcHggOHB4IDBweDtcbiAgLmltZ19sb2dve1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbi5jYXJkX3NlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICAvLyB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gcGFkZGluZzogMTZweDtcbiAgLy8gaGVpZ2h0OiAxNzVweDtcblxuICAubGJsX2xpbmUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuaW1wIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWFyY2gge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbiAgLnJvd19zZWFyY2gge1xuICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0bl9idXkge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLmNhcmRfc2VhcmNoLmlvcy5oeWRyYXRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG59XG4uc2xpZGVzMSB7XG4gIG1hcmdpbjogMTU0cHggMTZweCAxNnB4IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG5cbiAgLnNsaWRlMSB7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDE2cHggI2NjYztcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLmNhcmRfc2xpZGUxIHtcbiAgICAgIGhlaWdodDogMzY1cHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG4gICAgICAuaW1nX3NsaWRlMSB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIC5sYmxfdGVjaDEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5sYmxfZGVzYzEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweCAwcHggMTZweDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYXJkX2xpdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuXG4gIC5pbWdfbGl2ZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAubGJsX2xpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmxibF9saXZlX2hlYWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgfVxuICAubGJsX2xpdmVfZGVzYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCA1cHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmxibF9idG4ge1xuICAgIHBhZGRpbmc6IDBweCAxNnB4IDE2cHggMTZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmJ0bl9wcm9mIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLnNsaWRlc19uZXdzIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuXG4gIC5zbGlkZV9uZXdzIHtcbiAgICAuY2FyZF9uZXdzIHtcbiAgICAgIGhlaWdodDogMjc1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHg7XG5cbiAgICAgIC5pbWdfbmV3cyB7XG4gICAgICAgIGhlaWdodDogMTc1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cbiAgICAgIC5sYmxfaGVhZF9uZXdzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHggMHB4IDE2cHg7XG4gICAgICB9XG4gICAgICAubGJsX3NxdWFyZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICB9XG4gICAgICAubGJsX2Rlc2NfbmV3cyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAvLyBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLy8gLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAgICAgICAvLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5idG5fbmV3cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNsaWRlc19tZWV0IHtcbiAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC5zbGlkZV9tZWV0IHtcbiAgICAuY2FyZF9tZWV0IHtcbiAgICAgIGhlaWdodDogNDE1cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDMwcHggMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG5cbiAgICAgIC8vIC5pbWdfbWVldHtcblxuICAgICAgLy8gfVxuICAgICAgLmxibF9oZWFkX21lZXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmxibF9kZXNjX21lZXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgLmxibF9uYW1lX21lZXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgICAgICAvLyBmb250LWZhbWlseTogQWxsdXJhO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2xpZGVzX3Byb3BlcnR5IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcblxuICAuc2xpZGVfcHJvcGVydHkge1xuICAgIC8vIG1hcmdpbjogMTZweCAwcHggMTZweCAwcHg7XG5cbiAgICAuY2FyZF9wcm9wZXJ0eSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG4gICAgICBoZWlnaHQ6IDQwNXB4O1xuXG4gICAgICAuaW1nX3Byb3BlcnR5IHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgICAgLmxibF9oZWFkX3Byb3BlcnR5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLmxibF9hZGQxX3Byb3BlcnR5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLmxibF9hZGQyX3Byb3BlcnR5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgICAubGJsX3JhdGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5kaXZfZGl2aWRlcntcbiAgYm9yZGVyOiA1cHggc29saWQgI2VlZTtcbn1cbi5sYmxfc3RpY2sge1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvcCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uc2VhcmNoX2Vycm9yIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sYmxfIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxfbmV3c19kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHggMTZweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5yb3dfZXhwbG9yZXtcbiAgcGFkZGluZzogOHB4O1xuICAuY29sX2V4cGxvcmV7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaW1nX2V4cGxvcmV7XG4gICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgfVxuICAgIC5sYmxfZXhwbG9yZXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxufSIsIi5pbWdfbWFpbiB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uZGl2X2ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwcHggOHB4IDBweDtcbn1cbi5kaXZfaW1nIC5pbWdfbG9nbyB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5jYXJkX3NlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNhcmRfc2VhcmNoIC5sYmxfbGluZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZF9zZWFyY2ggLmltcCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmRfc2VhcmNoIC5zZWFyY2gge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkX3NlYXJjaCAucm93X3NlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRfc2VhcmNoIC5yb3dfc2VhcmNoIC5idG5fYnV5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmRfc2VhcmNoLmlvcy5oeWRyYXRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5zbGlkZXMxIHtcbiAgbWFyZ2luOiAxNTRweCAxNnB4IDE2cHggMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHotaW5kZXg6IDAgIWltcG9ydGFudDtcbn1cbi5zbGlkZXMxIC5zbGlkZTEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNsaWRlczEgLnNsaWRlMSAuY2FyZF9zbGlkZTEge1xuICBoZWlnaHQ6IDM2NXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG4uc2xpZGVzMSAuc2xpZGUxIC5jYXJkX3NsaWRlMSAuaW1nX3NsaWRlMSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5zbGlkZXMxIC5zbGlkZTEgLmNhcmRfc2xpZGUxIC5sYmxfdGVjaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZXMxIC5zbGlkZTEgLmNhcmRfc2xpZGUxIC5sYmxfZGVzYzEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nOiAwcHggMTZweCAwcHggMTZweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkX2xpdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4uY2FyZF9saXZlIC5pbWdfbGl2ZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jYXJkX2xpdmUgLmxibF9saXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jYXJkX2xpdmUgLmxibF9saXZlX2hlYWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbi5jYXJkX2xpdmUgLmxibF9saXZlX2Rlc2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggNXB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDY7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNhcmRfbGl2ZSAubGJsX2J0biB7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDE2cHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhcmRfbGl2ZSAuYnRuX3Byb2Yge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zbGlkZXNfbmV3cyB7XG4gIG1hcmdpbjogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5zbGlkZXNfbmV3cyAuc2xpZGVfbmV3cyAuY2FyZF9uZXdzIHtcbiAgaGVpZ2h0OiAyNzVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5zbGlkZXNfbmV3cyAuc2xpZGVfbmV3cyAuY2FyZF9uZXdzIC5pbWdfbmV3cyB7XG4gIGhlaWdodDogMTc1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5zbGlkZXNfbmV3cyAuc2xpZGVfbmV3cyAuY2FyZF9uZXdzIC5sYmxfaGVhZF9uZXdzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDE2cHggMHB4IDE2cHg7XG59XG4uc2xpZGVzX25ld3MgLnNsaWRlX25ld3MgLmNhcmRfbmV3cyAubGJsX3NxdWFyZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuLnNsaWRlc19uZXdzIC5zbGlkZV9uZXdzIC5jYXJkX25ld3MgLmxibF9kZXNjX25ld3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idG5fbmV3cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNsaWRlc19tZWV0IHtcbiAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4uc2xpZGVzX21lZXQgLnNsaWRlX21lZXQgLmNhcmRfbWVldCB7XG4gIGhlaWdodDogNDE1cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLnNsaWRlc19tZWV0IC5zbGlkZV9tZWV0IC5jYXJkX21lZXQgLmxibF9oZWFkX21lZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLnNsaWRlc19tZWV0IC5zbGlkZV9tZWV0IC5jYXJkX21lZXQgLmxibF9kZXNjX21lZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNsaWRlc19tZWV0IC5zbGlkZV9tZWV0IC5jYXJkX21lZXQgLmxibF9uYW1lX21lZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuXG4uc2xpZGVzX3Byb3BlcnR5IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbn1cbi5zbGlkZXNfcHJvcGVydHkgLnNsaWRlX3Byb3BlcnR5IC5jYXJkX3Byb3BlcnR5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbiAgaGVpZ2h0OiA0MDVweDtcbn1cbi5zbGlkZXNfcHJvcGVydHkgLnNsaWRlX3Byb3BlcnR5IC5jYXJkX3Byb3BlcnR5IC5pbWdfcHJvcGVydHkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSAubGJsX2hlYWRfcHJvcGVydHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSAubGJsX2FkZDFfcHJvcGVydHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSAubGJsX2FkZDJfcHJvcGVydHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbn1cbi5zbGlkZXNfcHJvcGVydHkgLnNsaWRlX3Byb3BlcnR5IC5jYXJkX3Byb3BlcnR5IC5sYmxfcmF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xufVxuXG4uZGl2X2RpdmlkZXIge1xuICBib3JkZXI6IDVweCBzb2xpZCAjZWVlO1xufVxuXG4ubGJsX3N0aWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuLnRvcCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uc2VhcmNoX2Vycm9yIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sYmxfIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxfbmV3c19kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDE2cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yb3dfZXhwbG9yZSB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5yb3dfZXhwbG9yZSAuY29sX2V4cGxvcmUge1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm93X2V4cGxvcmUgLmNvbF9leHBsb3JlIC5pbWdfZXhwbG9yZSB7XG4gIGhlaWdodDogNzVweDtcbn1cbi5yb3dfZXhwbG9yZSAuY29sX2V4cGxvcmUgLmxibF9leHBsb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_global_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global/language.service */ "./src/app/global/language.service.ts");







let HomePage = class HomePage {
    constructor(statusBar, router, formBuilder, zone, languageService, api) {
        this.statusBar = statusBar;
        this.router = router;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.languageService = languageService;
        this.api = api;
        this.slideOptsFeatured = {
            zoom: false,
            slidesPerView: 1.2,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
        };
        this.slideOpts = {
            zoom: false,
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
        };
        this.slideOptsNews = {
            zoom: false,
            slidesPerView: 1.3,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
        };
        this.locationArry = [];
        this.searchErrorMsg = "";
        this.defaultImg = '../../assets/images/default.jpg';
        this.featuredDataGet();
        this.InvestorsDataGet();
        this.getSearchLocation();
        this.NewsDataGet();
        this.img = this.api.getimageUrl;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#c41a3b');
    }
    ngOnInit() {
        this.searchLocationForm = this.formBuilder.group({
            search: ["", null],
        });
    }
    NewsDataGet() {
        this.loading = true;
        this.api.DataGet().subscribe((data) => {
            if (data.status == 1) {
                this.news = data.data;
                this.loading = false;
            }
        });
    }
    PropertyDetails(propertyId) {
        if (propertyId) {
            this.router.navigate(["/details"], {
                queryParams: { pid: propertyId,
                }
            });
        }
    }
    selectEvent(event) {
        this.searchErrorMsg = "";
        this.selected_employee = JSON.stringify(event);
    }
    getSearchData(type, keyword) {
        this.searchErrorMsg = "";
        if (keyword.data.length != 0) {
            if (type != '' && keyword.data[0].address != '') {
                this.router.navigate(["/listing"], {
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
    featuredDataGet() {
        this.loading = true;
        this.api.fetured().subscribe((data) => {
            if (data.status == 1) {
                this.listSlider = data.data;
                this.len = this.listSlider.length > 0;
                this.loading = false;
            }
        });
    }
    listing_redirect() {
        this.router.navigate(["/listing"]);
    }
    InvestorsDataGet() {
        this.loading = true;
        this.api.investors().subscribe((data) => {
            if (data.status == 1) {
                this.investors = data.data;
                this.loading = false;
            }
        });
    }
    onSearchChange(searchValue) {
        this.locationArry.sort(function (a, b) {
            return a.address.length - b.address.length;
        });
    }
    newsDetails(id) {
        this.router.navigate(["/news-details"], {
            queryParams: { id: id,
            }
        });
    }
    newsList() {
        this.router.navigate(['/news']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_global_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map