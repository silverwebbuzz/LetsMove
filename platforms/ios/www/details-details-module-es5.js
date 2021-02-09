function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"head\">{{ 'main.property_detail.title' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img *ngIf=\"advertisementImage\" [src]=\"advertisementImage\" (click)=\"ads()\">\n\n  <ion-label class=\"lbl_price_add\">\n    {{propertyDetails.slug_title != 'null' ? propertyDetails.slug_title : ''}}\n  </ion-label>\n\n  <ion-label class=\"lbl_add\">\n    {{propertyDetails.location}}\n  </ion-label>\n\n  <ion-label color=\"primary\" class=\"lbl_price_list\">\n    €{{propertyDetails.price}}\n  </ion-label>\n\n  <ion-slides pager=\"true\" [options]=\"slideOptsDetails\" class=\"slides_details\">\n    <ng-container *ngIf=\"propertyDetails.image else elseblock\">\n      <ion-slide *ngFor=\"let slide of slides;\">\n        <img [src]=\"slide.url\" class=\"img_detail_slide\" />\n      </ion-slide>\n    </ng-container>\n    <ng-template #elseblock>\n      <img src=\"{{defaultImg}}\">\n    </ng-template>\n  </ion-slides>\n\n  <ion-segment mode=\"md\" [(ngModel)]=\"tabs\" value=\"view\">\n    <ion-segment-button class=\"btn_seg\" value=\"desc\" [ngClass]=\"{'activeTabsbtn': this.tabName == 'Description'}\"\n      (click)=\"openTab('Description')\">\n      <ion-label>{{ 'main.property_detail.description' | translate }}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"btn_seg\" value=\"view\" [ngClass]=\"{'activeTabsbtn': this.tabName == 'MapAndStreet'}\"\n      (click)=\"openTab('MapAndStreet')\">\n      <ion-label>{{ 'main.property_detail.map_street_view' | translate }}</ion-label>\n\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"tabs\">\n    <div *ngSwitchCase=\"'desc'\" class=\"div_box\">\n      <span *ngIf=\"this.tabName == 'Description'\" [ngClass]=\"{'activeTab': this.tabName == 'Description'}\">\n        <ion-row class=\"row_seg\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <p *ngIf=\"propertyDetails.p_unique_id\">\n                <span class=\"lbl_head\">{{ 'main.property_detail.reference_number' | translate }}</span>\n                <span class=\"lbl_desc\"> {{propertyDetails.p_unique_id ? '#' + propertyDetails.p_unique_id : ''}}</span>\n              </p>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{ 'main.property_detail.price' | translate }} :</span>\n              <span class=\"lbl_desc\"> €{{propertyDetails.price ? propertyDetails.price : ''}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.avaliable_date' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.date | date: 'dd-MMMM-yyyy'}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.avaliable_for' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.is_available == 1 ? 'Rent' : 'Sale'}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.type' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.categoryName | titlecase}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.area_size' | translate}} </span>\n              <span class=\"lbl_desc\">{{propertyDetails.property_area_size ? propertyDetails.property_area_size : ''}} Sq\n                m</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg hr_line\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{ 'main.property_detail.floor' | translate }}</span>\n              <span class=\"lbl_desc\">{{propertyDetails.floorName ? propertyDetails.floorName : ''}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.orientation' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.orientationName ? propertyDetails.orientationName : ''}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg hr_line\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.zone' | translate}} </span>\n              <span class=\"lbl_desc\">{{propertyDetails.zoneName ? propertyDetails.zoneName : ''}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.heating' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.heatingName ? propertyDetails.heatingName : ''}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg hr_line\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.heating_medium' | translate}}</span>\n              <span class=\"lbl_desc\">\n                {{propertyDetails.heatingMediumName ? propertyDetails.heatingMediumName : ''}}</span>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{'main.property_detail.energy_class' | translate}}</span>\n              <span class=\"lbl_desc\"> {{propertyDetails.energyClassName ? propertyDetails.energyClassName : ''}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-label class=\"lbl_desc_f\"\n          *ngIf=\"propertyDetails.propertyFeatures && propertyDetails.propertyFeatures.length\">\n          {{'main.property_detail.property_features' | translate}}</ion-label>\n\n\n        <ion-row class=\"row_seg hr_line\" *ngFor=\"let feature of propertyDetails.propertyFeatures;let last = last;\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{feature.name}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg hr_line\">\n          <ion-col size=\"5\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\" *ngIf=\"propertyDetails.roomName\">\n              <span class=\"lbl_head\">{{propertyDetails.roomName ? propertyDetails.roomName : ''}}+</span>\n              <span class=\"lbl_desc\"> {{ 'main.property_detail.room' | translate }}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row_seg hr_line\" *ngIf=\"propertyDetails.no_of_bathroom\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{propertyDetails.no_of_bathroom ? propertyDetails.no_of_bathroom : ''}} </span>\n              <span class=\"lbl_desc\"> {{'main.property_detail.bathroom' | translate}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-label class=\"lbl_desc_f\" *ngIf=\"propertyDetails.otherFeatures && propertyDetails.otherFeatures.length\">\n          {{'main.property_detail.other_features' | translate}}</ion-label>\n\n        <ion-row class=\"row_seg hr_line\" *ngFor=\"let feature of propertyDetails.otherFeatures;let last = last;\">\n          <ion-col size=\"7\" class=\"col_seg\">\n            <ion-label class=\"lbl_seg\">\n              <span class=\"lbl_head\">{{feature.name}}</span>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-label class=\"lbl_desc_f\">\n          {{ 'main.property_detail.full_description' | translate }}\n        </ion-label>\n\n        <ion-label color=\"medium\" class=\"lbl_desc_d\">\n          {{propertyDetails.description ? propertyDetails.description : '' }}\n        </ion-label>\n      </span>\n    </div>\n    <div class=\"div_box  map_box\" [hidden]=\"this.tabName == 'Description'\">\n      <ion-content>\n        <div #mapElement class=\"map\"></div>\n      </ion-content>\n    </div>\n\n  </div>\n\n  <ion-card class=\"card_form\">\n    <ion-label color=\"dark\" class=\"lbl_prop\">\n      <span class=\"spn_bold\">{{ 'main.property_detail.i_m_interested' | translate }} </span>\n      <span class=\"spn\"> {{ 'main.property_detail.in_this_property' | translate }}</span>\n    </ion-label>\n\n    <ion-row>\n      <ion-col size=\"8\" style=\"margin: auto;\">\n        <p translate=\"main.property_detail.contact_information\" class=\"nago-contact-info\" class=\"p_\"></p>\n        <p class=\"p_\">\n          <span>{{ role_name }} :</span> {{ first_name }}\n          {{ last_name }}\n        </p>\n        <p class=\"p_\">\n          <span>{{ \"main.contactus.phone_txt\" | translate }}</span>\n          {{ contact_no }}\n        </p>\n      </ion-col>\n      <ion-col size=\"4\" style=\"margin: auto; text-align: right;\">\n        <div *ngIf=\"profile_image != null\">\n          <img *ngIf=\"social_profile_image == null\" [src]=\"this.api.getimageUrl('profile/', profile_image)\"\n            class=\"img_profile imgs_\" />\n        </div>\n        <div *ngIf=\"social_profile_image != null\">\n          <img *ngIf=\"profile_image == null\" src=\"{{ social_profile_image }}\" class=\"img_profile imgs_\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"detail_form\" autocomplete=\"off\">\n\n      <ion-item lines=\"none\" class=\"input-item top\">\n        <ion-input type=\"text\" formControlName=\"firstName\"\n          placeholder=\"{{ 'main.property_detail.first_name' | translate }}\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.firstName.hasError('required') && detail_form.controls.firstName.touched\">\n        <p class=\"content add-error\">{{ 'main.property_detail.err_first_name' | translate }}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item top\">\n        <ion-input type=\"text\" formControlName=\"lastName\"\n          placeholder=\"{{ 'main.property_detail.last_name' | translate }}\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.lastName.hasError('required') && detail_form.controls.lastName.touched\">\n        <p class=\"content add-error\">{{ 'main.property_detail.err_last_name' | translate }}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item top\">\n        <ion-input type=\"number\" formControlName=\"number\" placeholder=\"{{ 'main.property_detail.phone' | translate }}\"\n          class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.number.hasError('required') && detail_form.controls.number.touched\">\n        <p class=\"content add-error\">{{ 'main.property_detail.err_phone' | translate }}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item top\">\n        <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{ 'main.property_detail.email' | translate }}\"\n          class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.email.hasError('required') && detail_form.controls.email.touched\">\n        <p class=\"content add-error\">{{ 'main.property_detail.err_email' | translate }}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item top\">\n        <ion-input type=\"number\" formControlName=\"price\"\n          placeholder=\"{{ 'main.property_detail.nagotiation_price' | translate }}\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.price.hasError('required') && detail_form.controls.price.touched\">\n        <p class=\"content add-error\">{{ 'main.property_detail.err_price' | translate }}</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add space\">\n        <ion-textarea row=\"3\" type=\"text\" formControlName=\"message\"\n          placeholder=\"{{ 'main.property_detail.enter_text_here' | translate }}\" class=\"input-box\"></ion-textarea>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n        *ngIf=\"detail_form.controls.message.hasError('required') && detail_form.controls.message.touched\">\n        <p class=\"content add-error\">{{'main.property_detail.err_text' | translate }}</p>\n      </ion-item>\n\n      <ion-label color=\"dark\" class=\"lbl_info\">\n        {{ 'main.property_detail.message' | translate }}\n      </ion-label>\n\n      <ion-button expand=\"block\" class=\"btn_send\" (click)=\"send()\">{{ 'main.property_detail.send_message' | translate }}\n      </ion-button>\n\n      <ion-row class=\"row_terms\">\n        <ion-col size=\"1\" class=\"col_terms\">\n          <ion-checkbox mode=\"md\" (ionChange)=\"checkbox($event)\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"11\" class=\"col_terms\">\n          <ion-label class=\"lbl_terms\">{{ 'main.property_detail.policy' | translate }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-card>\n\n  <ion-card class=\"card_mark\">\n    <ion-label color=\"dark\" class=\"lbl_head\">\n      {{ 'main.property_detail.this_property_is_marketed_by' | translate }}\n    </ion-label>\n    <ion-label color=\"dark\" class=\"lbl_add_full\">\n      {{propertyDetails.areaName ? propertyDetails.areaName : '' }}\n      {{propertyDetails.subAreaName ? propertyDetails.subAreaName : '' }},\n    </ion-label>\n    <ion-label color=\"dark\" class=\"lbl_name\">\n      {{propertyDetails.neighborhoodName ? propertyDetails.neighborhoodName : '' }}</ion-label>\n    <ion-label color=\"dark\" class=\"lbl_country\">\n      {{propertyDetails.countryName ? propertyDetails.countryName : '' }}\n    </ion-label>\n    <div class=\"hr_line\"></div>\n    <ion-item lines=\"none\" class=\"item_property\" *ngIf=\"this.api.isUserlogin()\">\n      <ion-icon name=\"heart\" *ngIf=\"like == 1\" style=\"display: inline; color: #c41a3b;\"></ion-icon>\n      <a (click)=\"saveProperty(this.property_content_id)\">\n        <ion-icon name=\"heart-outline\" *ngIf=\"like == 0\"></ion-icon>\n        <span class=\"dark\" href=\"#\" style=\"color: #000;\">{{ 'main.property_detail.save_property' | translate }}</span>\n      </a>\n    </ion-item>\n    <div class=\"hr_line\"></div>\n  </ion-card>\n\n  <div *ngIf=\"bannerImage\" class=\"div_banner\">\n    <img [src]=\"bannerImage\" class=\"img_banner\">\n  </div>\n\n  <div *ngIf=\"listSlider?.length > 0\">\n    <ion-label class=\"lbl_stick\">{{ 'main.property_detail.recommendation_properties' | translate }}</ion-label>\n\n    <ion-slides pager=\"true\" [options]=\"slideOptsFeatured\" class=\"slides_property\">\n      <ng-container *ngIf=\"listSlider && listSlider.length > 0\">\n        <ion-slide class=\"slide_property\" *ngFor=\"let slide of listSlider;\">\n          <ion-card class=\"card_property\" (click)=\"recommendDetails(slide.p_id)\">\n            <img [src]=\"this.api.getimageUrl('propertyImage/',slide.image.split(',')[0])\" class=\"img_property\" />\n            <ion-label color=\"dark\" class=\"lbl_head_property\">{{ slide.propertyName }}</ion-label>\n            <ion-label color=\"medium\" class=\"lbl_add2_property\">{{ slide.description }}</ion-label>\n            <ion-label color=\"medium\" class=\"lbl_rate\">Neighborhood Rating</ion-label>\n          </ion-card>\n        </ion-slide>\n      </ng-container>\n      <ng-template *ngIf=\"listSlider && listSlider.length < 0\">\n        <img src=\"{{defaultImg}}\">\n      </ng-template>\n    </ion-slides>\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/details/details-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/details/details-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: DetailsPageRoutingModule */

  /***/
  function srcAppDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
      return DetailsPageRoutingModule;
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


    var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");

    var routes = [{
      path: '',
      component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }];

    var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
      _classCallCheck(this, DetailsPageRoutingModule);
    };

    DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/details/details.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/details/details.module.ts ***!
    \*******************************************/

  /*! exports provided: DetailsPageModule */

  /***/
  function srcAppDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
      return DetailsPageModule;
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


    var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-routing.module */
    "./src/app/details/details-routing.module.ts");
    /* harmony import */


    var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var DetailsPageModule = function DetailsPageModule() {
      _classCallCheck(this, DetailsPageModule);
    };

    DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
      declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })], DetailsPageModule);
    /***/
  },

  /***/
  "./src/app/details/details.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/details/details.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .lbl_price_add {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0px;\n  display: block;\n}\nion-content .lbl_add {\n  padding: 8px 0px;\n  font-size: 14px;\n  display: block;\n}\nion-content .lbl_price_list {\n  padding: 0px;\n  font-size: 24px;\n  font-weight: bold;\n}\nion-content .slides_details {\n  margin-top: 16px;\n  padding-bottom: 28px;\n}\nion-content .div_box {\n  padding: 8px;\n  border: 1px solid #ccc;\n  height: auto;\n}\nion-content .div_box .row_seg {\n  padding: 5px 0px;\n  border-bottom: 0.5px dotted #ccc;\n}\nion-content .div_box .row_seg .col_seg {\n  padding: 0px;\n}\nion-content .div_box .row_seg .col_seg .lbl_seg {\n  font-size: 14px;\n}\nion-content .div_box .row_seg .col_seg .lbl_seg .lbl_head {\n  font-weight: bold;\n}\nion-content .div_box .row_seg .col_seg .lbl_seg .lbl_desc {\n  font-weight: normal;\n}\nion-content .lbl_desc_f {\n  font-size: 16px;\n  font-weight: bold;\n  display: block;\n  padding: 8px 0px;\n}\nion-content .lbl_desc_d {\n  display: block;\n  font-size: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content .hr_line {\n  border-bottom: 1px solid #ccc;\n}\nion-content .slides_property {\n  margin: 16px 0px 0px 0px;\n  padding-bottom: 28px;\n}\nion-content .slides_property .slide_property .card_property {\n  margin: 0px;\n  border-radius: 0px;\n  box-shadow: 0 0 10px #ccc;\n  height: 330px;\n}\nion-content .slides_property .slide_property .card_property .img_property {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .slides_property .slide_property .card_property .lbl_head_property {\n  display: block;\n  font-size: 20px;\n  text-align: left;\n  padding: 5px 16px;\n  text-transform: uppercase;\n}\nion-content .slides_property .slide_property .card_property .lbl_add1_property {\n  display: block;\n  font-size: 18px;\n  text-align: left;\n  padding: 5px 16px;\n  text-transform: uppercase;\n}\nion-content .slides_property .slide_property .card_property .lbl_add2_property {\n  display: block;\n  font-size: 16px;\n  text-align: left;\n  padding: 5px 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content .slides_property .slide_property .card_property .lbl_rate {\n  display: block;\n  font-size: 14px;\n  text-align: left;\n  padding: 5px 16px;\n}\nion-content .lbl_stick {\n  font-size: 20px;\n  display: block;\n  padding-top: 16px;\n  font-weight: 600;\n}\nion-content .card_mark {\n  margin: 0px;\n  box-shadow: 0px 0px;\n  border-radius: 0px;\n  background: #eee;\n  padding: 16px;\n  margin-top: 16px;\n}\nion-content .card_mark .lbl_head {\n  font-weight: bold;\n  font-size: 16px;\n  display: block;\n}\nion-content .card_mark .lbl_add_full {\n  display: block;\n  font-size: 16px;\n  padding: 5px 0px;\n}\nion-content .card_mark .b._name {\n  display: block;\n  font-size: 16px;\n}\nion-content .card_mark .lbl_country {\n  display: block;\n  font-size: 16px;\n  padding: 5px 0px;\n}\nion-content .card_mark .item_property {\n  --padding-start: 0px;\n  --background: #eee;\n}\nion-content .card_mark .item_property ion-icon {\n  margin-right: 8px;\n}\nion-content .card_form {\n  margin: 0px;\n  box-shadow: 0px 0px;\n  border-radius: 0px;\n  background: #eee;\n  padding: 16px;\n  margin-top: 16px;\n}\nion-content .card_form .lbl_prop {\n  font-size: 18px;\n}\nion-content .card_form .lbl_prop .spn_bold {\n  font-weight: bold;\n}\nion-content .card_form .lbl_prop .spn {\n  font-weight: normal;\n}\nion-content .card_form .input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 10px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 0px 0px #ccc;\n  margin: 16px 0px 0px 0px;\n  background: #fff;\n  --background: #fff;\n  border: 1px solid #ccc;\n}\nion-content .card_form .input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\nion-content .card_form .input-item .input-box {\n  margin-left: 0px;\n}\nion-content .card_form .lbl_info {\n  margin-top: 8px;\n  font-size: 14px;\n  display: block;\n}\nion-content .card_form .row_terms .col_terms {\n  padding: 0px;\n}\nion-content .card_form .row_terms .col_terms .lbl_terms {\n  display: block;\n}\nion-content .map_box {\n  height: 300px !important;\n}\nion-content .btn_send {\n  text-transform: uppercase;\n  --border-radius: 8px;\n  margin: 16px 0px;\n}\n.map {\n  position: unset !important;\n}\n.hide {\n  display: none !important;\n}\n.div_banner {\n  margin: 16px 0px;\n}\n.div_banner .img_banner {\n  height: auto;\n  width: auto;\n}\n.img_detail_slide {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.imgs_ {\n  height: 75px;\n  width: 75px;\n}\n.p_ {\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9MZXQtTW92ZS1Nb2JpbGUvc3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURLRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNISjtBREtFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FES0k7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FDSE47QURJTTtFQUNFLFlBQUE7QUNGUjtBREdRO0VBQ0UsZUFBQTtBQ0RWO0FER1U7RUFDRSxpQkFBQTtBQ0RaO0FER1U7RUFDRSxtQkFBQTtBQ0RaO0FEUUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTko7QURRRTtFQUNFLDZCQUFBO0FDTko7QURTRTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7QUNQSjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDVlI7QURZUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1ZWO0FEWVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1ZWO0FEWVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1ZWO0FEWVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVlY7QURZUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1ZWO0FEZ0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDZko7QURpQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZk47QURpQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZk47QURpQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ2ZOO0FEaUJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2ZOO0FEaUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ2ZOO0FEaUJNO0VBQ0UsaUJBQUE7QUNmUjtBRG9CRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURtQkk7RUFDRSxlQUFBO0FDakJOO0FEa0JNO0VBQ0UsaUJBQUE7QUNoQlI7QURrQk07RUFDRSxtQkFBQTtBQ2hCUjtBRG9CSTtFQUVFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNyQk47QUR1Qk07RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNyQlI7QUR3Qk07RUFFRSxnQkFBQTtBQ3ZCUjtBRDZCSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzNCTjtBRCtCTTtFQUNFLFlBQUE7QUM3QlI7QUQ4QlE7RUFDRSxjQUFBO0FDNUJWO0FEaUNFO0VBQ0Usd0JBQUE7QUMvQko7QURpQ0U7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUMvQko7QURrQ0E7RUFDRSwwQkFBQTtBQy9CRjtBRHNDQTtFQUNFLHdCQUFBO0FDbkNGO0FEcUNBO0VBQ0UsZ0JBQUE7QUNsQ0Y7QURtQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2pDSjtBRG9DQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2pDRjtBRG1DQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDaENGO0FEa0NBO0VBQ0Usa0JBQUE7QUMvQkYiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgLmxibF9wcmljZV9hZGQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmxibF9hZGQge1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5sYmxfcHJpY2VfbGlzdCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAvLyAuYnRuX3NlZ3tcbiAgLy8gICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vICAgICBjb2xvcjogd2hpdGU7XG4gIC8vIH1cbiAgLnNsaWRlc19kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyOHB4O1xuICB9XG4gIC5kaXZfYm94IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAucm93X3NlZyB7XG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkICNjY2M7XG4gICAgICAuY29sX3NlZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF9zZWcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgIC5sYmxfaGVhZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxibF9kZXNjIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxibF9kZXNjX2Yge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG4gIC5sYmxfZGVzY19kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaHJfbGluZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICAuc2xpZGVzX3Byb3BlcnR5IHtcbiAgICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XG5cbiAgICAuc2xpZGVfcHJvcGVydHkge1xuICAgICAgLy8gbWFyZ2luOiAxNnB4IDBweCAxNnB4IDBweDtcblxuICAgICAgLmNhcmRfcHJvcGVydHkge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xuICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuXG4gICAgICAgIC5pbWdfcHJvcGVydHkge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9oZWFkX3Byb3BlcnR5IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfYWRkMV9wcm9wZXJ0eSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX2FkZDJfcHJvcGVydHkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9yYXRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sYmxfc3RpY2sge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmNhcmRfbWFyayB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAubGJsX2hlYWQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmxibF9hZGRfZnVsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgfVxuICAgIC5iLl9uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAubGJsX2NvdW50cnkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIH1cbiAgICAuaXRlbV9wcm9wZXJ0eSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogI2VlZTtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZF9mb3JtIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAubGJsX3Byb3Age1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgLnNwbl9ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAuc3BuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjY2NjO1xuICAgICAgbWFyZ2luOiAxNnB4IDBweCAwcHggMHB4O1xuICAgICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtYm94IHtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAvLy0tY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxibF9pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5yb3dfdGVybXMge1xuICAgICAgLmNvbF90ZXJtcyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF90ZXJtcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1hcF9ib3gge1xuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuX3NlbmQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgfVxufVxuLm1hcCB7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4vLyAjbWFwIHtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kaXZfYmFubmVyIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbiAgLmltZ19iYW5uZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuLmltZ19kZXRhaWxfc2xpZGUge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW1nc197XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4ucF97XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfcHJpY2VfYWRkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5sYmxfYWRkIHtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5sYmxfcHJpY2VfbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXNfZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9ib3gge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IC5kaXZfYm94IC5yb3dfc2VnIHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZG90dGVkICNjY2M7XG59XG5pb24tY29udGVudCAuZGl2X2JveCAucm93X3NlZyAuY29sX3NlZyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfYm94IC5yb3dfc2VnIC5jb2xfc2VnIC5sYmxfc2VnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9ib3ggLnJvd19zZWcgLmNvbF9zZWcgLmxibF9zZWcgLmxibF9oZWFkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAuZGl2X2JveCAucm93X3NlZyAuY29sX3NlZyAubGJsX3NlZyAubGJsX2Rlc2Mge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgLmxibF9kZXNjX2Yge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5sYmxfZGVzY19kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCAuaHJfbGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlc19wcm9wZXJ0eSB7XG4gIG1hcmdpbjogMTZweCAwcHggMHB4IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XG59XG5pb24tY29udGVudCAuc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG4gIGhlaWdodDogMzMwcHg7XG59XG5pb24tY29udGVudCAuc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSAuaW1nX3Byb3BlcnR5IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlc19wcm9wZXJ0eSAuc2xpZGVfcHJvcGVydHkgLmNhcmRfcHJvcGVydHkgLmxibF9oZWFkX3Byb3BlcnR5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tY29udGVudCAuc2xpZGVzX3Byb3BlcnR5IC5zbGlkZV9wcm9wZXJ0eSAuY2FyZF9wcm9wZXJ0eSAubGJsX2FkZDFfcHJvcGVydHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXNfcHJvcGVydHkgLnNsaWRlX3Byb3BlcnR5IC5jYXJkX3Byb3BlcnR5IC5sYmxfYWRkMl9wcm9wZXJ0eSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi1jb250ZW50IC5zbGlkZXNfcHJvcGVydHkgLnNsaWRlX3Byb3BlcnR5IC5jYXJkX3Byb3BlcnR5IC5sYmxfcmF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmxibF9zdGljayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfbWFyayB7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tY29udGVudCAuY2FyZF9tYXJrIC5sYmxfaGVhZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfbWFyayAubGJsX2FkZF9mdWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX21hcmsgLmIuX25hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfbWFyayAubGJsX2NvdW50cnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfbWFyayAuaXRlbV9wcm9wZXJ0eSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG59XG5pb24tY29udGVudCAuY2FyZF9tYXJrIC5pdGVtX3Byb3BlcnR5IGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5pb24tY29udGVudCAuY2FyZF9mb3JtIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2Zvcm0gLmxibF9wcm9wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZm9ybSAubGJsX3Byb3AgLnNwbl9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAuY2FyZF9mb3JtIC5sYmxfcHJvcCAuc3BuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2Zvcm0gLmlucHV0LWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjY2NjO1xuICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbmlvbi1jb250ZW50IC5jYXJkX2Zvcm0gLmlucHV0LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmlvbi1jb250ZW50IC5jYXJkX2Zvcm0gLmlucHV0LWl0ZW0gLmlucHV0LWJveCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5pb24tY29udGVudCAuY2FyZF9mb3JtIC5sYmxfaW5mbyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5jYXJkX2Zvcm0gLnJvd190ZXJtcyAuY29sX3Rlcm1zIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcmRfZm9ybSAucm93X3Rlcm1zIC5jb2xfdGVybXMgLmxibF90ZXJtcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLm1hcF9ib3gge1xuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuYnRuX3NlbmQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRpdl9iYW5uZXIge1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuLmRpdl9iYW5uZXIgLmltZ19iYW5uZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uaW1nX2RldGFpbF9zbGlkZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltZ3NfIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cblxuLnBfIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/details/details.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/details/details.page.ts ***!
    \*****************************************/

  /*! exports provided: DetailsPage */

  /***/
  function srcAppDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var DetailsPage = /*#__PURE__*/function () {
      function DetailsPage(navCtrl, statusBar, formBuilder, router, iab, route, ref, api) {
        var _this = this;

        _classCallCheck(this, DetailsPage);

        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.iab = iab;
        this.route = route;
        this.ref = ref;
        this.api = api;
        this.storeDetails = '';
        this.tabs = "desc";
        this.propertyDetails = [];
        this.allLangpropertyDetails = [];
        this.propertyImages = [];
        this.slides = [];
        this.userLikeProperty = [];
        this.advertisementImage = "";
        this.tabName = "Description";
        this.LanguageName = localStorage.getItem('prefered-language-name') || 'English';
        this.slideOptsDetails = {
          zoom: true,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loopFillGroupWithBlank: true
        };
        this.slideOptsFeatured = {
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
        this.like = 0;
        this.languageArray = [];
        this.defaultImg = '../../assets/images/default.jpg';
        this.detail_fb();
        this.getpropertyDetail();
        this.route.queryParams.subscribe(function (params) {
          _this.api.propertyUserDetail(params.pid).subscribe(function (data) {
            _this.role_name = data.data.role_name;
            _this.first_name = data.data.first_name;
            _this.last_name = data.data.last_name;
            _this.contact_no = data.data.contact_no;
            _this.profile_image = data.data.profile_image;
            _this.social_profile_image = data.data.social_profile_image;

            if (data.status == 1) {}
          });
        });
      }

      _createClass(DetailsPage, [{
        key: "getAreaBanner",
        value: function getAreaBanner(property_content_id) {
          var _this2 = this;

          this.api.AdvertiseBanner(property_content_id).subscribe(function (data) {
            if (data.status == 1) {
              _this2.bannerImage = data.bottomBanner ? data.bottomBanner.image : '';
            }
          });
        }
      }, {
        key: "mapproperty",
        value: function mapproperty(lat, _long) {
          var map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {
              lat: Number(lat),
              lng: Number(_long)
            },
            zoom: 14
          });
          var pos = {
            lat: Number(lat),
            lng: Number(_long)
          };
          map.setCenter(pos);
          var icon = {
            url: './assets/icon/location-marker.png',
            scaledSize: new google.maps.Size(35, 35)
          };
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Hello World!',
            icon: icon
          });
          var content = "<p>This is your current position !</p>";
          var infoWindow = new google.maps.InfoWindow({
            content: content
          });
          google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mapproperty('', '');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveProperty",
        value: function saveProperty(property_content_id) {
          var _this3 = this;

          if (this.api.isUserlogin()) {
            var body = {
              type: 1,
              property_content_id: property_content_id
            };
            this.api.favouriteProperty(this.api.getToken(), body).subscribe(function (data) {
              if (data.status == 1) {
                _this3.like = 1;
              }
            });
          }
        }
      }, {
        key: "recommendDetails",
        value: function recommendDetails(propertyId) {
          if (propertyId) {
            this.router.navigate(["/details"], {
              queryParams: {
                pid: propertyId
              }
            });
          }

          this.content.scrollToTop(100);
        }
      }, {
        key: "ads",
        value: function ads() {
          this.iab.create(this.add_url, '_system', 'location=yes');
        }
      }, {
        key: "getadvertisement",
        value: function getadvertisement(property_content_id) {
          var _this4 = this;

          this.api.advertisement(property_content_id).subscribe(function (data) {
            data.data != null ? _this4.advertisementImage = data.data.image : '';
          });
        }
      }, {
        key: "openTab",
        value: function openTab(name) {
          this.tabName = name;
        }
      }, {
        key: "getpropertyDetail",
        value: function getpropertyDetail() {
          var _this5 = this;

          this.Imgloading = true;
          this.route.queryParams.subscribe(function (params) {
            _this5.propertyMainId = params.pid;

            _this5.getIpAddress(_this5.propertyMainId);

            _this5.api.propertyDetail(_this5.propertyMainId).subscribe(function (data) {
              if (data.status == 1) {
                _this5.languageArray = data.data.languages; // this.allLangpropertyDetails = data.data;
                // this.propertyDetails = data.data.English;

                _this5.languageArray = data.data.languages;
                _this5.allLangpropertyDetails = data.data; // this.allLangpropertyDetails = data.data;

                if (data.data.languages[0].title) {
                  _this5.SwitchLanguage(_this5.LanguageName);
                } else {
                  _this5.router.navigate(["/404"]);
                }

                if (_this5.propertyDetails.image) {
                  var images = _this5.propertyDetails.image.split(",");

                  images.forEach(function (image) {
                    _this5.propertyImages.push({
                      url: _this5.api.getimageUrl("propertyImage/", image)
                    });
                  });
                  _this5.slides = _this5.propertyImages;
                }

                _this5.Imgloading = false;
              } else {
                // error part
                _this5.router.navigate(["/404"]);
              }
            });
          });
        }
      }, {
        key: "SwitchLanguage",
        value: function SwitchLanguage(LanguageName) {
          var _this6 = this;

          var i = 0;
          var languagesLength = this.languageArray.length;

          while (i < languagesLength) {
            if (LanguageName == this.languageArray[i].title) {
              this.propertyDetails = this.allLangpropertyDetails[LanguageName];
            }

            i++;
          }

          this.property_content_id = this.propertyDetails.id;
          this.getAreaBanner(this.property_content_id);
          this.getadvertisement(this.property_content_id);
          this.mapproperty(this.propertyDetails.latitude, this.propertyDetails.longitude);
          setTimeout(function () {
            _this6.RecomandationPropertyDataGet(_this6.property_content_id, _this6.propertyDetails.property_type_id, _this6.propertyDetails.location);
          }, 2000);
        }
      }, {
        key: "RecomandationPropertyDataGet",
        value: function RecomandationPropertyDataGet(property_content_id, property_type_id, location) {
          var _this7 = this;

          var body = {
            id: property_content_id,
            propertyType: property_type_id,
            location: location,
            language_id: this.api.getLanguage()
          };
          this.loading = true;
          this.api.RecomandationGet(body).subscribe(function (data) {
            if (data.status == 1) {
              _this7.listSlider = data.recommendationProperty;
              _this7.loading = false;
            }
          });
        }
      }, {
        key: "getIpAddress",
        value: function getIpAddress(propertyMainId) {
          var _this8 = this;

          this.api.getIPAddress().subscribe(function (res) {
            var body = {
              token: _this8.api.getToken() ? _this8.api.getToken() : null,
              property_id: propertyMainId,
              ip: res.ip
            };

            _this8.api.PropertyCounter(body).subscribe(function (data) {});
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(["/listing"]);
          this.navCtrl.pop();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleLightContent();
          this.statusBar.backgroundColorByHexString('#c41a3b');
        }
      }, {
        key: "checkbox",
        value: function checkbox(e) {
          if (e.detail.checked == true) {
            this.checked = '1';
          } else {
            this.checked = '0';
          }
        }
      }, {
        key: "detail_fb",
        value: function detail_fb() {
          this.detail_form = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this9 = this;

          for (var v in this.detail_form.controls) {
            this.detail_form.controls[v].markAsTouched();
          }

          if (this.detail_form.valid) {
            this.api.presentLoading();
            this.details_process = true;
            var body = {
              property_content_id: this.property_content_id,
              first_name: this.detail_form.value.firstName,
              last_name: this.detail_form.value.lastName,
              phone: this.detail_form.value.number,
              email: this.detail_form.value.email,
              nagotiation_price: this.detail_form.value.price,
              comment: this.detail_form.value.message,
              agree: this.checked ? this.checked : '0'
            };
            this.loading = false;
            this.api.Negotitation(body).subscribe(function (data) {
              _this9.details_process = false;

              _this9.api.dismissLoading();

              if (data.status == 1) {
                _this9.api.presentToastWithOptions(data.message);
              } else {
                _this9.api.presentToastWithOptions(data.message);
              }
            }, function (err) {
              _this9.details_process = false;

              _this9.api.dismissLoading();

              _this9.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], DetailsPage.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', {
      "static": true
    })], DetailsPage.prototype, "mapElement", void 0);
    DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./details.page.scss */
      "./src/app/details/details.page.scss"))["default"]]
    })], DetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=details-details-module-es5.js.map