webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/amazonservices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Amazonservices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Amazonservices = /** @class */ (function () {
    function Amazonservices(http) {
        this.http = http;
    }
    Amazonservices.prototype.getUserProfile = function (accesstoken) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Bearer ' + accesstoken
            })
        };
        return this.http.get('https://api.amazon.com/user/profile', httpOptions);
    };
    Amazonservices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Amazonservices);
    return Amazonservices;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-8 text-left\" *ngIf=\"loggedin; else elseBlock\"> {{ userName }}</div>\n    <ng-template #elseBlock>Bite melden Sie sich über den Amazon- Button an.</ng-template>\n    <div class=\"col-md-4\">\n      <amazon-login [clientId]=\"myClientId\" (amazonAuthResponse)=\"onAmazonAuthResponse($event)\">\n      </amazon-login>\n    </div>\n  </div>\n\n\n</div>\n\n\n<!-- <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">{{ title }} - Willkommen {{ userName }}</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\" routerLinkActive=\"active\">\n        <a [routerLink]=\"['/home']\" [queryParamsHandling]=\"true\">Home</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/edit']\" [queryParamsHandling]=\"true\">Medikamenteneinstellungen</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amazonservices__ = __webpack_require__("../../../../../src/app/amazonservices.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(amService) {
        this.amService = amService;
        this.title = 'Pillenbox-Konfigurator';
        this.showWaitInfo = false;
        this.myClientId = 'amzn1.application-oa2-client.a9e64c41743f4d14813be90d8f38cf9f';
        this.userName = 'Nicht angemeldet';
        this.loggedin = false;
    }
    AppComponent.prototype.onAmazonAuthResponse = function (event) {
        var _this = this;
        if (event.authRequest.error === undefined) {
            console.log(event);
            this.amService.getUserProfile(event.authRequest.access_token).subscribe(function (data) {
                console.log(data);
                _this.userName = data['name'];
                _this.loggedin = true;
            }, function (err) { return console.log(err); });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__amazonservices__["a" /* Amazonservices */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_amazon_login__ = __webpack_require__("../../../../angular-amazon-login/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_amazon_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_amazon_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__amazonservices__ = __webpack_require__("../../../../../src/app/amazonservices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            exports: [
                // CDk
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_overlay__["e" /* OverlayModule */],
                // Material
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatPaginatorModule */]
            ]
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7_angular_amazon_login__["AmazonLoginComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                MyMaterialModule
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__amazonservices__["a" /* Amazonservices */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map