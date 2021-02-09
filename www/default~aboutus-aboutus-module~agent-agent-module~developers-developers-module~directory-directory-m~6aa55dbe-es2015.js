(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe"],{

/***/ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js ***!
  \*************************************************************************************************/
/*! exports provided: NgxAutocompleteComponent, NgxAutocompleteModule, NgxAutocompleteService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAutocompleteComponent", function() { return NgxAutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAutocompleteModule", function() { return NgxAutocompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAutocompleteService", function() { return NgxAutocompleteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-autocomplete.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["searchInput"];
const _c1 = function (a0) { return { "suggestion-active": a0 }; };
function NgxAutocompleteComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxAutocompleteComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const entry_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setValue(entry_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "list", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, i_r5 == ctx_r1.activeSuggestion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r4[ctx_r1.searchKeyword], " ");
} }
function NgxAutocompleteComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxAutocompleteComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Searching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgxAutocompleteService {
    constructor() { }
}
NgxAutocompleteService.ɵfac = function NgxAutocompleteService_Factory(t) { return new (t || NgxAutocompleteService)(); };
NgxAutocompleteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxAutocompleteService, factory: NgxAutocompleteService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgxAutocompleteService.ctorParameters = () => [];
/** @nocollapse */ NgxAutocompleteService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgxAutocompleteService_Factory() { return new NgxAutocompleteService(); }, token: NgxAutocompleteService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxAutocompleteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAutocompleteComponent {
    constructor() {
        this.selectedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.data = [];
        this.showSearches = false;
        this.isSearching = false;
        this.activeSuggestion = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSearch();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getData(name) {
        /** @type {?} */
        let data = this.entries.filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            return val[this.searchKeyword].toLowerCase().includes(name.toLowerCase()) == true;
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    }
    /**
     * @return {?}
     */
    dataSearch() {
        /** @type {?} */
        const search$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.target.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
         * @return {?}
         */
        () => this.isSearching = true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} term
         * @return {?}
         */
        (term) => term ? this.getData(term) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
         * @return {?}
         */
        () => {
            this.isSearching = false,
                this.showSearches = true;
        })));
        search$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.isSearching = false;
            this.data = data;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setValue(data) {
        /** @type {?} */
        let value = data[this.searchKeyword];
        this.searchInput.nativeElement.value = value;
        this.data = [data];
        this.activeSuggestion = 0;
        this.selectedValue.emit(data);
        this.showSearches = false;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackById(index, item) {
        return item._id;
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.showSearches = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    changeSuggestion(e) {
        if (e.keyCode === 13) {
            if (this.data.length != 0) {
                this.setValue(this.data[this.activeSuggestion]);
                this.scrollTo();
            }
        }
        // User pressed the up arrow
        else if (e.keyCode == 38) {
            if (this.activeSuggestion == 0) {
                return false;
            }
            else {
                this.activeSuggestion = this.activeSuggestion - 1;
                this.scrollTo();
            }
        }
        // User pressed the down arrow
        else if (e.keyCode == 40) {
            if (this.activeSuggestion == this.data.length - 1) {
                return false;
            }
            else {
                this.activeSuggestion = this.activeSuggestion + 1;
                this.scrollTo();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollTo() {
        /** @type {?} */
        let str = `list${this.activeSuggestion}`;
        /** @type {?} */
        let elmnt = document.getElementById(str);
        elmnt.scrollIntoView();
        window.scrollTo(0, 0);
    }
}
NgxAutocompleteComponent.ɵfac = function NgxAutocompleteComponent_Factory(t) { return new (t || NgxAutocompleteComponent)(); };
NgxAutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxAutocompleteComponent, selectors: [["ngx-autocomplete"]], viewQuery: function NgxAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { entries: "entries", placeholderValue: "placeholderValue", inputId: "inputId", searchKeyword: "searchKeyword" }, outputs: { selectedValue: "selectedValue" }, decls: 7, vars: 9, consts: [[1, "position-relative"], ["type", "text", "id", "auto-search", "autocomplete", "off", 1, "form-control", 3, "placeholder", "id", "click", "keyup"], ["searchInput", ""], ["clickOutside", "", 1, "dropdown-content", 3, "id", "inputId", "hidden", "clickOutside"], ["tappable", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["tappable", "", 3, "ngClass", "id", "click"]], template: function NgxAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxAutocompleteComponent_Template_input_click_1_listener() { return ctx.showSearches = true; })("keyup", function NgxAutocompleteComponent_Template_input_keyup_1_listener($event) { return ctx.changeSuggestion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NgxAutocompleteComponent_Template_div_clickOutside_3_listener() { return ctx.closeDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxAutocompleteComponent_a_4_Template, 2, 5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxAutocompleteComponent_a_5_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxAutocompleteComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderValue)("id", ctx.inputId + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId + 2)("inputId", ctx.inputId + 1)("hidden", !ctx.showSearches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.length <= 0 && !ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearching);
    } }, directives: function () { return [DropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]]; }, styles: [".dropdown-content[_ngcontent-%COMP%] {\n      background-color: #fafafa;\n      width: 100%;\n      max-height: 150px;\n      overflow-y: auto;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n      cursor: pointer;\n    }\n\n    .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: black;\n      padding: 15px 18px;\n      text-decoration: none;\n      display: block;\n    }\n\n    .suggestion-active[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1}\n\n    input[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 12px 20px;\n      margin: 8px 0;\n      box-sizing: border-box;\n    }"] });
/** @nocollapse */
NgxAutocompleteComponent.ctorParameters = () => [];
NgxAutocompleteComponent.propDecorators = {
    entries: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholderValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    inputId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchKeyword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput', { static: true },] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxAutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-autocomplete',
                template: `
    <div class="position-relative">

    <input type="text" class="form-control" [placeholder]="placeholderValue" id="auto-search" #searchInput autocomplete="off" [id]="inputId+1" (click)="showSearches = true" (keyup)="changeSuggestion($event)">
    
    <div [id]="inputId+2" clickOutside (clickOutside)="closeDropDown()" [inputId]="inputId+1" [hidden]="!showSearches" class="dropdown-content">
        <a *ngFor="let entry of data; trackBy: trackById;let i = index" tappable (click)="setValue(entry)"  [ngClass]="{ 'suggestion-active' : i == activeSuggestion} " id="list{{i}}">
                {{entry[searchKeyword] }}   
        </a>
        <a *ngIf="data && data.length <= 0 && !isSearching" >No Data Found</a>
        <a *ngIf="isSearching">Searching...</a>
    </div>
    
  </div>
  `,
                styles: [`
  
    .dropdown-content {
      background-color: #fafafa;
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      cursor: pointer;
    }

    .dropdown-content a {
      color: black;
      padding: 15px 18px;
      text-decoration: none;
      display: block;
    }

    .suggestion-active, .dropdown-content a:hover {background-color: #f1f1f1}

    input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
    }
 
  `]
            }]
    }], function () { return []; }, { selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], entries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholderValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchKeyword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dropdown.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} targetElement
     * @return {?}
     */
    onClick(targetElement) {
        if (targetElement.id == this.inputId) {
            return;
        }
        /** @type {?} */
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            this.clickOutside.emit(null);
        }
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "clickOutside", ""]], hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { inputId: "inputId" }, outputs: { clickOutside: "clickOutside" } });
/** @nocollapse */
DropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DropdownDirective.propDecorators = {
    clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event.target'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event.target']]
        }], inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-autocomplete.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAutocompleteModule {
}
NgxAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxAutocompleteModule });
NgxAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxAutocompleteModule_Factory(t) { return new (t || NgxAutocompleteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxAutocompleteModule, { declarations: function () { return [NgxAutocompleteComponent,
        DropdownDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [NgxAutocompleteComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NgxAutocompleteComponent,
                    DropdownDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [
                    NgxAutocompleteComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-angular-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-angular-autocomplete.js.map

/***/ })

}]);
//# sourceMappingURL=default~aboutus-aboutus-module~agent-agent-module~developers-developers-module~directory-directory-m~6aa55dbe-es2015.js.map