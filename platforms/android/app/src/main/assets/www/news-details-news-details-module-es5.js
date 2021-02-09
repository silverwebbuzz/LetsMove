function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-details-news-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news-details/news-details.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-details/news-details.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsDetailsNewsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">News Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty1\" *ngIf=\"title == '' && img == '' && description == ''\">\n    <ion-label class=\"lbl-empty\">{{'main.reusable.empty' | translate}}</ion-label>\n  </div>\n\n  <img *ngIf=\"img\" [src]=\"this.api.getimageUrl('newsimage/',img)\"  class=\"img_main\"/>\n\n  <ion-label class=\"lbl_head\">{{title}}</ion-label>\n\n  <ion-label class=\"lbl_desc\" [innerHtml]=\"description\"></ion-label>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/news-details/news-details-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/news-details/news-details-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NewsDetailsPageRoutingModule */

  /***/
  function srcAppNewsDetailsNewsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailsPageRoutingModule", function () {
      return NewsDetailsPageRoutingModule;
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


    var _news_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-details.page */
    "./src/app/news-details/news-details.page.ts");

    var routes = [{
      path: '',
      component: _news_details_page__WEBPACK_IMPORTED_MODULE_3__["NewsDetailsPage"]
    }];

    var NewsDetailsPageRoutingModule = function NewsDetailsPageRoutingModule() {
      _classCallCheck(this, NewsDetailsPageRoutingModule);
    };

    NewsDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/news-details/news-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/news-details/news-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewsDetailsPageModule */

  /***/
  function srcAppNewsDetailsNewsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailsPageModule", function () {
      return NewsDetailsPageModule;
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


    var _news_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-details-routing.module */
    "./src/app/news-details/news-details-routing.module.ts");
    /* harmony import */


    var _news_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news-details.page */
    "./src/app/news-details/news-details.page.ts");

    var NewsDetailsPageModule = function NewsDetailsPageModule() {
      _classCallCheck(this, NewsDetailsPageModule);
    };

    NewsDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _news_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsDetailsPageRoutingModule"]],
      declarations: [_news_details_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailsPage"]]
    })], NewsDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/news-details/news-details.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/news-details/news-details.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsDetailsNewsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .lbl_head {\n  display: block;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 16px 16px 0px 16px;\n}\nion-content .img_main {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .lbl_desc {\n  display: block;\n  font-size: 16px;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9uZXdzLWRldGFpbHMvbmV3cy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cy1kZXRhaWxzL25ld3MtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsMkJBQUE7QUNEUjtBREdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRFI7QURHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1kZXRhaWxzL25ld3MtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAubGJsX2hlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbiAgICB9XG4gICAgLmltZ19tYWlue1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5sYmxfZGVzY3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgLmxibF9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbn1cbmlvbi1jb250ZW50IC5pbWdfbWFpbiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5sYmxfZGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news-details/news-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/news-details/news-details.page.ts ***!
    \***************************************************/

  /*! exports provided: NewsDetailsPage */

  /***/
  function srcAppNewsDetailsNewsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailsPage", function () {
      return NewsDetailsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewsDetailsPage = /*#__PURE__*/function () {
      function NewsDetailsPage(navCtrl, api, route) {
        _classCallCheck(this, NewsDetailsPage);

        this.navCtrl = navCtrl;
        this.api = api;
        this.route = route;
      }

      _createClass(NewsDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var reqData = this.route.snapshot.queryParams;
          this.api.presentLoading();
          this.news_process = true;
          this.api.getNewsDetails(reqData.id).subscribe(function (data) {
            if (data.status == 1) {
              _this.img = data.data.image;
              _this.title = data.data.title;
              _this.description = data.data.description;
              _this.news_process = false;

              _this.api.dismissLoading();
            } else {
              _this.news_process = false;

              _this.api.dismissLoading();
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.pop();
        }
      }]);

      return NewsDetailsPage;
    }();

    NewsDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    NewsDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./news-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news-details/news-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./news-details.page.scss */
      "./src/app/news-details/news-details.page.scss"))["default"]]
    })], NewsDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=news-details-news-details-module-es5.js.map