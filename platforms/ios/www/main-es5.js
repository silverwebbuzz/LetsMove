function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu contentId=\"content\" class=\"menu-container\">\n    <ion-header>\n      <ion-toolbar class=\"head-tool\">\n        <ion-card class=\"card-profile\">\n          <img src=\"../assets/images/headerLogo.png\" class=\"profile-pic\" />\n        </ion-card>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <div class=\"btn_lan\"> \n      <app-language-buttons></app-language-buttons>\n      </div>\n\n      <div *ngFor=\"let p of pages\">\n\n        <ion-menu-toggle *ngIf=\"p.url\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" mode=\"md\" lines=\"none\" class=\"items\">\n            <ion-icon [icon]=\"p.icon\" slot=\"start\" class=\"spc\"></ion-icon>\n            <ion-label>{{ p.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\"\n          detail=\"false\" mode=\"md\" lines=\"none\" class=\"items\">\n          <ion-icon [icon]=\"p.icon\" slot=\"start\" class=\"spc\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"arrow-forward\" *ngIf=\"!p.open\" class=\"icon-end\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"arrow-down\" *ngIf=\"p.open\" class=\"icon-end\"></ion-icon>\n          <ion-label>{{ p.title }}</ion-label>\n        </ion-item>\n\n        <ion-list *ngIf=\"p.open\" class=\"spc-menu\">\n          <ion-menu-toggle>\n            <ion-item *ngFor=\"let sub of p.children\" [routerLink]=\"sub.url\" routerDirection=\"root\"\n              routerLinkActive=\"active\" mode=\"md\" lines=\"none\" class=\"sub-item items\">\n              <ion-icon [icon]=\"sub.icon\" slot=\"start\" class=\"spc\"></ion-icon>\n              <ion-label>{{ sub.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      </div>\n\n      <ion-item *ngIf=\"!this.api.getToken1()\" mode=\"md\" lines=\"none\" class=\"items\" (click)=\"login()\">\n        <ion-icon icon=\"log-in\" slot=\"start\" class=\"spc\"></ion-icon>\n        <ion-label>Login</ion-label>\n    </ion-item>\n\n      <ion-item *ngIf=\"this.api.getToken1()\" mode=\"md\" lines=\"none\" class=\"items\"  (click)=\"logout()\">\n          <ion-icon icon=\"log-out\" slot=\"start\" class=\"spc\"></ion-icon>\n          <ion-label>Logout</ion-label>\n      </ion-item>\n      \n\n    </ion-content>\n\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/language-buttons/language-buttons.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language-buttons/language-buttons.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLanguageButtonsLanguageButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown\">\n    \n    <div class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n        <a>\n            <img [src]=\"this.api.getimageUrl('languageImage/',languageService.languageImage)\" class=\"img_flag\"/>\n            <p>{{languageService.languagePreference | uppercase }}</p>\n        </a>\n    </div>\n    <div class=\"dropdown-menu languageDrop\">\n        <a class=\"dropdown-item\" *ngFor=\"let language of languages\"\n            (click)=\"languageService.changeLanguage(language.abbreviation,language.image,language.id,language.name)\">\n            <img [src]=\"this.api.getimageUrl('languageImage/',language.image)\" class=\"img_flag\"/>\n            <p>{{ language.abbreviation | uppercase }}</p>\n        </a>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'aboutus',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | aboutus-aboutus-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("aboutus-aboutus-module")]).then(__webpack_require__.bind(null,
        /*! ./aboutus/aboutus.module */
        "./src/app/aboutus/aboutus.module.ts")).then(function (m) {
          return m.AboutusPageModule;
        });
      }
    }, {
      path: 'details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | details-details-module */
        "details-details-module").then(__webpack_require__.bind(null,
        /*! ./details/details.module */
        "./src/app/details/details.module.ts")).then(function (m) {
          return m.DetailsPageModule;
        });
      }
    }, {
      path: 'error',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | error-error-module */
        "error-error-module").then(__webpack_require__.bind(null,
        /*! ./error/error.module */
        "./src/app/error/error.module.ts")).then(function (m) {
          return m.ErrorPageModule;
        });
      }
    }, {
      path: 'forgot',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgot-forgot-module */
        "forgot-forgot-module").then(__webpack_require__.bind(null,
        /*! ./forgot/forgot.module */
        "./src/app/forgot/forgot.module.ts")).then(function (m) {
          return m.ForgotPageModule;
        });
      }
    }, {
      path: 'listing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | listing-listing-module */
        "listing-listing-module").then(__webpack_require__.bind(null,
        /*! ./listing/listing.module */
        "./src/app/listing/listing.module.ts")).then(function (m) {
          return m.ListingPageModule;
        });
      }
    }, {
      path: 'reset',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | reset-reset-module */
        [__webpack_require__.e("common"), __webpack_require__.e("reset-reset-module")]).then(__webpack_require__.bind(null,
        /*! ./reset/reset.module */
        "./src/app/reset/reset.module.ts")).then(function (m) {
          return m.ResetPageModule;
        });
      }
    }, {
      path: 'signin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signin-signin-module */
        "signin-signin-module").then(__webpack_require__.bind(null,
        /*! ./signin/signin.module */
        "./src/app/signin/signin.module.ts")).then(function (m) {
          return m.SigninPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'contactus',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contactus-contactus-module */
        "contactus-contactus-module").then(__webpack_require__.bind(null,
        /*! ./contactus/contactus.module */
        "./src/app/contactus/contactus.module.ts")).then(function (m) {
          return m.ContactusPageModule;
        });
      }
    }, {
      path: 'language-buttons',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./language-buttons/language-buttons.module */
        "./src/app/language-buttons/language-buttons.module.ts")).then(function (m) {
          return m.LanguageButtonsModule;
        });
      }
    }, {
      path: 'agent',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | agent-agent-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("agent-agent-module")]).then(__webpack_require__.bind(null,
        /*! ./agent/agent.module */
        "./src/app/agent/agent.module.ts")).then(function (m) {
          return m.AgentModule;
        });
      }
    }, {
      path: 'developers',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | developers-developers-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("developers-developers-module")]).then(__webpack_require__.bind(null,
        /*! ./developers/developers.module */
        "./src/app/developers/developers.module.ts")).then(function (m) {
          return m.DevelopersModule;
        });
      }
    }, {
      path: 'individuals',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | individuals-individuals-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("individuals-individuals-module")]).then(__webpack_require__.bind(null,
        /*! ./individuals/individuals.module */
        "./src/app/individuals/individuals.module.ts")).then(function (m) {
          return m.IndividualsModule;
        });
      }
    }, {
      path: 'directory',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | directory-directory-module */
        [__webpack_require__.e("default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"), __webpack_require__.e("directory-directory-module")]).then(__webpack_require__.bind(null,
        /*! ./directory/directory.module */
        "./src/app/directory/directory.module.ts")).then(function (m) {
          return m.DirectoryModule;
        });
      }
    }, {
      path: 'news',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | news-news-module */
        "news-news-module").then(__webpack_require__.bind(null,
        /*! ./news/news.module */
        "./src/app/news/news.module.ts")).then(function (m) {
          return m.NewsPageModule;
        });
      }
    }, {
      path: 'news-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | news-details-news-details-module */
        "news-details-news-details-module").then(__webpack_require__.bind(null,
        /*! ./news-details/news-details.module */
        "./src/app/news-details/news-details.module.ts")).then(function (m) {
          return m.NewsDetailsPageModule;
        });
      }
    }, {
      path: 'landing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | landing-landing-module */
        "landing-landing-module").then(__webpack_require__.bind(null,
        /*! ./landing/landing.module */
        "./src/app/landing/landing.module.ts")).then(function (m) {
          return m.LandingPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.active-parent {\n  font-weight: 500;\n}\n.sub-item {\n  padding-left: 20px;\n}\n.card-profile {\n  margin: 0px;\n  border-radius: 0px;\n}\n.card-profile .profile-pic {\n  display: block;\n  text-align: center;\n  margin: 0px;\n  padding: 20px;\n}\nion-label {\n  text-transform: uppercase;\n}\n.head-tool {\n  --padding-start: 0px;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-end: 0px;\n}\n.items {\n  --min-height: 40px;\n  height: 40px;\n}\n.spc-menu {\n  margin-bottom: 0px;\n}\n.icon-end {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.spc {\n  margin-right: 16px;\n}\nion-footer {\n  padding-bottom: 16px;\n}\n.btn_lan {\n  padding: 2px 0px 2px 16px;\n}\n.btn_lan .dropdown-menu {\n  min-width: 85px !important;\n  transform: translate3d(0px, 34px, 0px) !important;\n  left: -15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0FDQ0Y7QURBRTtFQUNFLDhDQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FKO0FES0E7RUFDRSx5QkFBQTtBQ0ZGO0FESUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDREY7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0FDRUY7QURDQTtFQUNFLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaW9uLWljb24ge1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuLmFjdGl2ZS1wYXJlbnQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYXJkLXByb2ZpbGUge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gIC5wcm9maWxlLXBpYyB7XG4gICAgLy93aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMiU7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbn1cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaGVhZC10b29sIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5pdGVtcyB7XG4gIC0tbWluLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3BjLW1lbnUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pY29uLWVuZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNwYyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5idG5fbGFuIHtcbiAgcGFkZGluZzogMnB4IDBweCAycHggMTZweDtcbn1cblxuLmJ0bl9sYW4gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDg1cHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDM0cHgsIDBweCkgIWltcG9ydGFudDtcbiAgbGVmdDogLTE1cHggIWltcG9ydGFudDtcbn1cbiIsIi5hY3RpdmUge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYWN0aXZlIGlvbi1pY29uIHtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFjdGl2ZS1wYXJlbnQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYXJkLXByb2ZpbGUge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtcHJvZmlsZSAucHJvZmlsZS1waWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWQtdG9vbCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG4uaXRlbXMge1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnNwYy1tZW51IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaWNvbi1lbmQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNwYyB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uYnRuX2xhbiB7XG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDE2cHg7XG59XG5cbi5idG5fbGFuIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiA4NXB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAzNHB4LCAwcHgpICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, alertCtrl, menuCtrl, router, api, deeplinks, location, alertController) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.api = api;
        this.deeplinks = deeplinks;
        this.location = location;
        this.alertController = alertController;
        this.pages = [{
          title: 'Home',
          url: '/home',
          icon: 'home'
        }, {
          title: 'Contact Us',
          url: '/contactus',
          icon: 'call'
        }, {
          title: 'About Us',
          url: '/aboutus',
          icon: 'information-sharp'
        }, {
          title: 'Agents',
          url: '/agent',
          icon: 'body'
        }, {
          title: 'Developers',
          url: '/developers',
          icon: 'code'
        }, {
          title: 'Individuals',
          url: '/individuals',
          icon: 'man'
        }];
        this.backButtonEvent();
        this.initializeApp();

        if (!localStorage.getItem('userToken') || !localStorage.getItem('prefered-language')) {
          this.router.navigate(['/home']);
        }

        if (localStorage.getItem('userToken') || localStorage.getItem('prefered-language')) {
          this.router.navigate(['/home']);
        }

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
            window.scrollTo(0, 0);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "backButtonEvent",
        value: function backButtonEvent() {
          var _this = this;

          this.platform.backButton.subscribeWithPriority(0, function () {
            _this.routerOutlets.forEach(function (outlet) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(this.router.url != '/home')) {
                          _context.next = 5;
                          break;
                        }

                        _context.next = 3;
                        return this.location.back();

                      case 3:
                        _context.next = 6;
                        break;

                      case 5:
                        if (this.router.url === '/home') {
                          if (this.router.url === '/home') {
                            this.presentAlertConfirm();
                          } else {
                            navigator['app'].exitApp();
                          }
                        }

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      // header: 'Confirm!',
                      message: 'Are you sure you want to exit the app?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Close App',
                        handler: function handler() {
                          navigator['app'].exitApp();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.show();

            _this2.statusBar.styleLightContent();

            _this2.statusBar.backgroundColorByHexString('#c41a3b');

            setTimeout(function () {
              _this2.splashScreen.hide();
            }, 3000);
          });
          this.platform.ready().then(function () {
            _this2.deeplinks.route({
              '/reset': {}
            }).subscribe(function (match) {
              if (match.$args.t) {
                _this2.router.navigate(["/reset"], {
                  queryParams: {
                    t: match.$args.t
                  }
                });
              }
            }, function (nomatch) {});

            _this2.statusBar.styleDefault();

            setTimeout(function () {
              _this2.splashScreen.hide();
            }, 3000);
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.menuCtrl.close();
          this.router.navigate(['/landing']);
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.menuCtrl.close();
                    _context3.next = 3;
                    return this.alertCtrl.create({
                      // mode: 'md',
                      header: 'Confirm !',
                      message: 'Are you sure you want to logout ?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                      }, {
                        text: 'Logout',
                        handler: function handler() {
                          localStorage.clear();

                          _this3.api.presentToastWithOptions('Logout successfully!');

                          _this3.router.navigate(['/home']);
                        }
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/esm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _language_buttons_language_buttons_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./language-buttons/language-buttons.module */
    "./src/app/language-buttons/language-buttons.module.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js"); // import { LanguageButtonsComponent } from './language-buttons/language-buttons.component';


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _language_buttons_language_buttons_module__WEBPACK_IMPORTED_MODULE_16__["LanguageButtonsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'ios'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_13__["Deeplinks"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/global/common_service.ts":
  /*!******************************************!*\
    !*** ./src/app/global/common_service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppGlobalCommon_serviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        responseType: 'JSON'
      })
    };

    var CommonService = /*#__PURE__*/function () {
      function CommonService(toastCtrl, loadingController, http, modal) {
        _classCallCheck(this, CommonService);

        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.modal = modal;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.NormalUser = 2;
        this.Agents = 3;
        this.Developer = 4;
        this.isLoading = false;
        this.isModalOpen = false;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(CommonService, [{
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(message, cssClass, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: message ? message : null,
                      duration: 3000,
                      position: position ? position : 'bottom',
                      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = true;
                    _context5.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this4.isLoading) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isLoading = false;
                    _context6.next = 3;
                    return this.loadingController.dismiss();

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(PageName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.isModalOpen = true;
                    _context7.next = 3;
                    return this.modal.create({
                      component: PageName
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this5.isModalOpen) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context7.abrupt("return", _context7.sent);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.isModalOpen = false;
                    _context8.next = 3;
                    return this.modal.dismiss();

                  case 3:
                    return _context8.abrupt("return", _context8.sent);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "isCheckMethod",
        value: function isCheckMethod(methodName) {
          if (localStorage.getItem("permission")) {
            var currentUser = JSON.parse(localStorage.getItem("permission"));
            var userpermissionArray = currentUser.permission;
            return userpermissionArray.indexOf(methodName) != -1;
          }
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        } // api call

      }, {
        key: "user_roll",
        value: function user_roll() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'roleList');
        }
      }, {
        key: "signin",
        value: function signin(body) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'login', body);
        }
      }, {
        key: "signup",
        value: function signup(body) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'registration', body);
        }
      }, {
        key: "searchLocation",
        value: function searchLocation() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getSearchLocation');
        }
      }, {
        key: "fetured",
        value: function fetured() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'feturedPropertyList');
        }
      }, {
        key: "investors",
        value: function investors() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'investors');
        }
      }, {
        key: "WithoutTokenAdd",
        value: function WithoutTokenAdd(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'searchProperty', data);
        }
      }, {
        key: "getPriceInterval",
        value: function getPriceInterval() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getPriceInterval');
        }
      }, {
        key: "isUserlogin",
        value: function isUserlogin() {
          return localStorage.getItem('userToken') ? true : false;
        }
      }, {
        key: "filterProperty",
        value: function filterProperty(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'filterProperty', data);
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return localStorage.getItem('prefered-language-id') || 1;
        }
      }, {
        key: "DataGet",
        value: function DataGet() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'newsList');
        }
      }, {
        key: "allLanguageList",
        value: function allLanguageList() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'allLanguageList');
        }
      }, {
        key: "getOptionValue",
        value: function getOptionValue(URL) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'propertyTypeList');
        }
      }, {
        key: "ResidentialList",
        value: function ResidentialList(languageId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'ResidentialCategoryList' + "/" + languageId);
        }
      }, {
        key: "CommercialList",
        value: function CommercialList(languageId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'CommercialCategoryList' + "/" + languageId);
        }
      }, {
        key: "LandList",
        value: function LandList(languageId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'LandCategoryList' + "/" + languageId);
        }
      }, {
        key: "AdvertiseBanner",
        value: function AdvertiseBanner(property_content_id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getAdvertiseBanner' + "/" + property_content_id);
        }
      }, {
        key: "cmsPages",
        value: function cmsPages() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'cmsPages');
        }
      }, {
        key: "forgot",
        value: function forgot(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'forgetPassword', data);
        }
      }, {
        key: "sliderGet",
        value: function sliderGet() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'investors');
        }
      }, {
        key: "getimageUrl",
        value: function getimageUrl(FolderName, imageName) {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_url + FolderName + imageName;
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          return this.http.get("http://api.ipify.org/?format=json");
        }
      }, {
        key: "getToken1",
        value: function getToken1() {
          return localStorage.getItem('userToken') ? true : false;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null;
        }
      }, {
        key: "favouriteProperty",
        value: function favouriteProperty(Id, data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'favouriteProperty' + "/" + Id, data);
        }
      }, {
        key: "PropertyCounter",
        value: function PropertyCounter(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'storeViewPropertyCounter', data);
        }
      }, {
        key: "forgotEmailCheck",
        value: function forgotEmailCheck(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'AppForgetPassword', data);
        }
      }, {
        key: "reset",
        value: function reset(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'updatePassword', data);
        }
      }, {
        key: "contactus",
        value: function contactus(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'support', data);
        }
      }, {
        key: "propertyDetail",
        value: function propertyDetail(Id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'propertyDetail' + "/" + Id);
        }
      }, {
        key: "RecomandationGet",
        value: function RecomandationGet(Id) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'recommendationProperty', Id);
        }
      }, {
        key: "Negotitation",
        value: function Negotitation(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'storePriceNegotitation', data);
        }
      }, {
        key: "verifytoken",
        value: function verifytoken(Id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'verifytoken' + "/" + Id);
        }
      }, {
        key: "teamMember",
        value: function teamMember() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'teamMember');
        }
      }, {
        key: "advertisement",
        value: function advertisement(Id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'advertisement' + "/" + Id);
        }
      }, {
        key: "allnewsList",
        value: function allnewsList() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'allnewsList');
        }
      }, {
        key: "getNewsDetails",
        value: function getNewsDetails(Id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'getNewsDetails' + "/" + Id);
        }
      }, {
        key: "siteSetting",
        value: function siteSetting() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'siteSetting');
        }
      }, {
        key: "propertyUserDetail",
        value: function propertyUserDetail(languageId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + 'propertyUserDetail' + "/" + languageId);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/global/language.service.ts":
  /*!********************************************!*\
    !*** ./src/app/global/language.service.ts ***!
    \********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppGlobalLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/global/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common_service */
    "./src/app/global/common_service.ts");

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService(translate, api, router) {
        _classCallCheck(this, LanguageService);

        //translate.addLangs(['en', 'tr', 'nl']);
        this.translate = translate;
        this.api = api;
        this.router = router;
        this.languagePreference = _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language') || 'en';
        this.languageName = _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language-name') || 'English';
        this.languageId = _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language-id') || 1;
        this.languageImage = _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language-image') || 'us-svg.png';
        this.languageMenuShow = true;
        translate.setDefaultLang(_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language') || 'en');
        translate.use(_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language') || 'en');

        _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language', _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language') || this.languagePreference);

        _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language-name', _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getItem('prefered-language-name') || this.languageName);
      }

      _createClass(LanguageService, [{
        key: "changeLanguage",
        value: function changeLanguage(language, image, language_id, language_name) {
          this.languagePreference = language;
          this.languageName = language_name;
          this.languageImage = image;
          this.languageId = language_id;
          this.translate.use(language); // this.languageMenuShow = false;
          // setTimeout(() => {
          //     this.languageMenuShow = true;
          //   },300);

          _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language', language);

          _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language-name', language_name);

          _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language-image', image);

          _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].setItem('prefered-language-id', language_id); // this.router.navigate(["/signin"]);

        }
      }]);

      return LanguageService;
    }();

    LanguageService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LanguageService);
    /***/
  },

  /***/
  "./src/app/global/storage.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/global/storage.service.ts ***!
    \*******************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppGlobalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService = /*#__PURE__*/function () {
      _createClass(StorageService, null, [{
        key: "setObject",
        value: function setObject(key, data) {
          try {
            var serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
          } catch (e) {
            throw new Error('Provided data is not serializable!');
          }
        }
      }, {
        key: "getObject",
        value: function getObject(key) {
          var item = localStorage.getItem(key);
          return item && JSON.parse(item);
        }
      }, {
        key: "setItem",
        value: function setItem(key, data) {
          localStorage.setItem(key, data);
          return data;
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          var data = localStorage.getItem(key);
          return data;
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          localStorage.removeItem(key);
        }
      }]);

      function StorageService() {
        _classCallCheck(this, StorageService);

        if (typeof Storage === 'undefined') {
          throw new Error('StorageService: Local storage is not supported');
        }
      }

      return StorageService;
    }();

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/language-buttons/language-buttons-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/language-buttons/language-buttons-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LanguageButtonsRoutingModule */

  /***/
  function srcAppLanguageButtonsLanguageButtonsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageButtonsRoutingModule", function () {
      return LanguageButtonsRoutingModule;
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


    var _language_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./language-buttons.component */
    "./src/app/language-buttons/language-buttons.component.ts");

    var routes = [{
      path: '',
      component: _language_buttons_component__WEBPACK_IMPORTED_MODULE_3__["LanguageButtonsComponent"]
    }];

    var LanguageButtonsRoutingModule = function LanguageButtonsRoutingModule() {
      _classCallCheck(this, LanguageButtonsRoutingModule);
    };

    LanguageButtonsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LanguageButtonsRoutingModule);
    /***/
  },

  /***/
  "./src/app/language-buttons/language-buttons.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/language-buttons/language-buttons.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLanguageButtonsLanguageButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown {\n  width: 100px;\n  margin: 0px;\n  padding: 8px 0px 0px 0px;\n}\n\n.dropdown-item {\n  padding: 5px 8px;\n}\n\n.dropdown-menu {\n  padding: 0px;\n  border-radius: 0px;\n  min-width: 100px;\n  transform: translate3d(13px, 34px, 0px) !important;\n}\n\np {\n  display: inline-block;\n  line-height: 0;\n  padding: 0px 6px;\n  margin: 0px;\n}\n\n.img_flag {\n  width: 28px;\n  height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9sYW5ndWFnZS1idXR0b25zL2xhbmd1YWdlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmd1YWdlLWJ1dHRvbnMvbGFuZ3VhZ2UtYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZS1idXR0b25zL2xhbmd1YWdlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDBweDtcbn1cbi5kcm9wZG93bi1pdGVte1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG59XG4uZHJvcGRvd24tbWVudXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxM3B4LCAzNHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5we1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmltZ19mbGFne1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjFweDtcbn0iLCIuZHJvcGRvd24ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiA4cHggMHB4IDBweCAwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxM3B4LCAzNHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwcHggNnB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmltZ19mbGFnIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/language-buttons/language-buttons.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/language-buttons/language-buttons.component.ts ***!
    \****************************************************************/

  /*! exports provided: LanguageButtonsComponent */

  /***/
  function srcAppLanguageButtonsLanguageButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageButtonsComponent", function () {
      return LanguageButtonsComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _global_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/language.service */
    "./src/app/global/language.service.ts");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");

    var LanguageButtonsComponent = /*#__PURE__*/function () {
      function LanguageButtonsComponent(translate, languageService, api) {
        var _this6 = this;

        _classCallCheck(this, LanguageButtonsComponent);

        this.translate = translate;
        this.languageService = languageService;
        this.api = api;
        this.languages = [{
          abbreviation: 'en',
          name: 'English',
          gap: '',
          image: 'us-svg.png'
        }, {
          abbreviation: 'el',
          name: 'Greek',
          gap: 'ml-1',
          image: 'greec.png'
        }];
        this.api.allLanguageList().subscribe(function (data) {
          if (data.status == 1) {
            _this6.languages = data.data;
            console.log("lanukjj", _this6.languages);
          }
        });
        this.img = api;
      }

      _createClass(LanguageButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguageButtonsComponent;
    }();

    LanguageButtonsComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _global_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    LanguageButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language-buttons',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./language-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/language-buttons/language-buttons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./language-buttons.component.scss */
      "./src/app/language-buttons/language-buttons.component.scss"))["default"]]
    })], LanguageButtonsComponent);
    /***/
  },

  /***/
  "./src/app/language-buttons/language-buttons.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/language-buttons/language-buttons.module.ts ***!
    \*************************************************************/

  /*! exports provided: LanguageButtonsModule */

  /***/
  function srcAppLanguageButtonsLanguageButtonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageButtonsModule", function () {
      return LanguageButtonsModule;
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


    var _language_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./language-buttons.component */
    "./src/app/language-buttons/language-buttons.component.ts");
    /* harmony import */


    var _language_buttons_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./language-buttons-routing.module */
    "./src/app/language-buttons/language-buttons-routing.module.ts");

    var LanguageButtonsModule = function LanguageButtonsModule() {
      _classCallCheck(this, LanguageButtonsModule);
    };

    LanguageButtonsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _language_buttons_routing_module__WEBPACK_IMPORTED_MODULE_6__["LanguageButtonsRoutingModule"]],
      declarations: [_language_buttons_component__WEBPACK_IMPORTED_MODULE_5__["LanguageButtonsComponent"]],
      exports: [_language_buttons_component__WEBPACK_IMPORTED_MODULE_5__["LanguageButtonsComponent"]]
    })], LanguageButtonsModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      base_url: 'https://admin.letsmove.gr/api/',
      property_thumb_url: "https://admin.letsmove.gr/public/propertyImage/thumbImage/",
      property_image_url: "https://admin.letsmove.gr/public/propertyImage/",
      image_url: "https://admin.letsmove.gr/public/"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/macmini/Desktop/Documents/MD/ionicProject/Let-Move-Mobile/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map