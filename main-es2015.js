(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'coronamap-nl';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_geo_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/geo-data.service */ "./src/app/core/geo-data.service.ts");
/* harmony import */ var _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/municipality-data.service */ "./src/app/core/municipality-data.service.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_home_page_map_options_map_options_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home-page/map-options/map-options.component */ "./src/app/pages/home-page/map-options/map-options.component.ts");
/* harmony import */ var _pages_home_page_map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/home-page/map/map.component */ "./src/app/pages/home-page/map/map.component.ts");
/* harmony import */ var _pages_home_page_map_buttons_map_buttons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home-page/map-buttons/map-buttons.component */ "./src/app/pages/home-page/map-buttons/map-buttons.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_16__["MunicipalityDataService"],
        _core_geo_data_service__WEBPACK_IMPORTED_MODULE_15__["GeoDataService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__["LeafletModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
        _pages_home_page_map_options_map_options_component__WEBPACK_IMPORTED_MODULE_18__["MapOptionsComponent"],
        _pages_home_page_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
        _pages_home_page_map_buttons_map_buttons_component__WEBPACK_IMPORTED_MODULE_20__["MapButtonsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__["LeafletModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__["LeafletModule"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
                    _pages_home_page_map_options_map_options_component__WEBPACK_IMPORTED_MODULE_18__["MapOptionsComponent"],
                    _pages_home_page_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
                    _pages_home_page_map_buttons_map_buttons_component__WEBPACK_IMPORTED_MODULE_20__["MapButtonsComponent"]
                ],
                providers: [
                    _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_16__["MunicipalityDataService"],
                    _core_geo_data_service__WEBPACK_IMPORTED_MODULE_15__["GeoDataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/geo-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/geo-data.service.ts ***!
  \******************************************/
/*! exports provided: GeoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoDataService", function() { return GeoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GeoDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMunicipalityBorders() {
        return this.httpClient.get('/assets/geo/gemeentegrenzen_simplified.geojson')
            .toPromise();
    }
    getSafetyRegionBorders() {
        return this.httpClient.get('/assets/geo/gemeentegrenzen_simplified.geojson')
            .toPromise();
    }
}
GeoDataService.ɵfac = function GeoDataService_Factory(t) { return new (t || GeoDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GeoDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeoDataService, factory: GeoDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/municipality-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/municipality-data.service.ts ***!
  \***************************************************/
/*! exports provided: MunicipalityDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MunicipalityDataService", function() { return MunicipalityDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class MunicipalityDataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.selectedFileKey = '';
        this.selectedFileKey$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cache = {};
        this.filesUrl = 'https://kapulara.github.io/COVID-19-NL/Municipalities/json/files.json';
        this.isLoading = false;
        this.fileUrl = (key) => `https://kapulara.github.io/COVID-19-NL/Municipalities/json/${key}-latest.json`;
        this.getFiles();
    }
    getFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            const fileResult = (yield this.httpClient.get(this.filesUrl).toPromise());
            this.isLoading = true;
            this.files = fileResult.map((fileName) => ({
                fileName,
                key: fileName.split('-latest.json').join('')
            }));
            return this.files;
        });
    }
    getFileByKey(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](this.cache[key])) {
                return this.cache[key];
            }
            this.isLoading = true;
            const result = yield this.httpClient.get(this.fileUrl(key))
                .toPromise();
            this.isLoading = false;
            this.cache[key] = this.toCache(result);
            return result;
        });
    }
    selectLastOne() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.select(this.files[this.files.length - 1].key);
        });
    }
    onChange($event) {
        console.log($event);
    }
    select(key) {
        this.selectedFileKey = key;
        this.selectedFileKey$.next(this.selectedFileKey);
    }
    preload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let index = 0; index < this.files.length; index++) {
                const file = this.files[index];
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](this.cache[file.key])) {
                    continue;
                }
                yield this.getFileByKey(file.key);
            }
        });
    }
    toCache(items) {
        const data = {};
        items.forEach((item) => data[item['Gemnr']] = item);
        return data;
    }
}
MunicipalityDataService.ɵfac = function MunicipalityDataService_Factory(t) { return new (t || MunicipalityDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MunicipalityDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MunicipalityDataService, factory: MunicipalityDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MunicipalityDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/municipality-data.service */ "./src/app/core/municipality-data.service.ts");
/* harmony import */ var _map_options_map_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-options/map-options.component */ "./src/app/pages/home-page/map-options/map-options.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/pages/home-page/map/map.component.ts");
/* harmony import */ var _map_buttons_map_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-buttons/map-buttons.component */ "./src/app/pages/home-page/map-buttons/map-buttons.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function HomePageComponent_mat_progress_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 1);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50)("mode", "indeterminate");
} }
class HomePageComponent {
    constructor(municipalityDataService) {
        this.municipalityDataService = municipalityDataService;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__["MunicipalityDataService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 1, consts: [["class", "loader", 3, "diameter", "mode", 4, "ngIf"], [1, "loader", 3, "diameter", "mode"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-map-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_mat_progress_spinner_3_Template, 1, 2, "mat-progress-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.municipalityDataService.isLoading);
    } }, directives: [_map_options_map_options_component__WEBPACK_IMPORTED_MODULE_2__["MapOptionsComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _map_buttons_map_buttons_component__WEBPACK_IMPORTED_MODULE_4__["MapButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  position: relative;\n}\n[_nghost-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  z-index: 1000;\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .loader[_ngcontent-%COMP%]     circle {\n  stroke: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgIDo6bmctZGVlcCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuOmhvc3QgLmxvYWRlciA6Om5nLWRlZXAgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmZmZmZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__["MunicipalityDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/map-buttons/map-buttons.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home-page/map-buttons/map-buttons.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapButtonsComponent", function() { return MapButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/municipality-data.service */ "./src/app/core/municipality-data.service.ts");
/* harmony import */ var _map_buttons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-buttons.service */ "./src/app/pages/home-page/map-buttons/map-buttons.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










const _c0 = function (a0) { return { "card--selected": a0 }; };
function MapButtonsComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r40.municipalityDataService == null ? null : ctx_r40.municipalityDataService.selectedFileKey) === (file_r41 == null ? null : file_r41.key)))("value", file_r41.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", file_r41.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r41.key, " ");
} }
class MapButtonsComponent {
    constructor(municipalityDataService, mapButtonsService) {
        this.municipalityDataService = municipalityDataService;
        this.mapButtonsService = mapButtonsService;
    }
    ngOnInit() {
    }
}
MapButtonsComponent.ɵfac = function MapButtonsComponent_Factory(t) { return new (t || MapButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__["MunicipalityDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_buttons_service__WEBPACK_IMPORTED_MODULE_2__["MapButtonsService"])); };
MapButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapButtonsComponent, selectors: [["app-map-buttons"]], decls: 27, vars: 8, consts: [[1, "buttons", "buttons--padding"], ["id", "files"], ["matNativeControl", "", "required", "", 3, "ngModel", "ngModelChange"], ["disabled", "", "value", ""], ["class", "card", 3, "ngClass", "value", 4, "ngFor", "ngForOf"], [1, "buttons"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", 1, "divider", 3, "disabled", "click"], [1, "card", 3, "ngClass", "value"]], template: function MapButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapButtonsComponent_Template_select_ngModelChange_4_listener($event) { return ctx.municipalityDataService.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select day...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapButtonsComponent_option_7_Template, 2, 6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_9_listener() { return ctx.mapButtonsService.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard_arrow_left_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_12_listener() { return ctx.mapButtonsService.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "keyboard_arrow_right_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_15_listener() { return ctx.mapButtonsService.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "skip_previous_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_18_listener() { return ctx.mapButtonsService.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "stop_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_21_listener() { return ctx.mapButtonsService.pause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "pause_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapButtonsComponent_Template_button_click_24_listener() { return ctx.mapButtonsService.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "play_arrow_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.municipalityDataService.selectedFileKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.municipalityDataService.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canGoPrevious || ctx.mapButtonsService.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canGoNext || ctx.mapButtonsService.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canGoToStart || ctx.mapButtonsService.isRunning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canStop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canPause);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.mapButtonsService.canPlay);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  left: 20px;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .buttons--padding[_ngcontent-%COMP%] {\n  padding: 1.25em;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL21hcC1idXR0b25zL21hcC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvbWFwLWJ1dHRvbnMvbWFwLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7QUNBTjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBREtJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvbWFwLWJ1dHRvbnMvbWFwLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAuYnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmLS1wYWRkaW5nIHtcbiAgICAgIHBhZGRpbmc6IDEuMjVlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG46aG9zdCAuYnV0dG9ucyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuYnV0dG9ucyBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmJ1dHRvbnMgLmRpdmlkZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAuYnV0dG9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IC5idXR0b25zLS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMS4yNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-buttons',
                templateUrl: './map-buttons.component.html',
                styleUrls: ['./map-buttons.component.scss']
            }]
    }], function () { return [{ type: _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_1__["MunicipalityDataService"] }, { type: _map_buttons_service__WEBPACK_IMPORTED_MODULE_2__["MapButtonsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/map-buttons/map-buttons.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home-page/map-buttons/map-buttons.service.ts ***!
  \********************************************************************/
/*! exports provided: MapButtonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapButtonsService", function() { return MapButtonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/municipality-data.service */ "./src/app/core/municipality-data.service.ts");





class MapButtonsService {
    constructor(municipalityDataService) {
        this.municipalityDataService = municipalityDataService;
        this.isRunning = false;
        this.isPaused = false;
        this.canPause = false;
        this.canGoToStart = false;
        this.canStop = false;
        this.canPlay = false;
        this.canGoPrevious = false;
        this.canGoNext = false;
        this.municipalityDataService.selectedFileKey$.subscribe(() => this.check());
        this.check();
    }
    play() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isRunning) {
                return;
            }
            yield this.municipalityDataService.preload();
            if (!this.isPaused) {
                this.start();
            }
            clearInterval(this.timer);
            this.isRunning = true;
            this.check();
            this.timer = setInterval(() => {
                if (this.canGoToNext()) {
                    this.next();
                }
                else {
                    this.stop();
                }
            }, 500);
        });
    }
    pause() {
        clearInterval(this.timer);
        this.isRunning = false;
        this.isPaused = true;
        this.check();
    }
    stop() {
        clearInterval(this.timer);
        this.isRunning = false;
        this.isPaused = false;
        this.check();
    }
    start() {
        const files = this.municipalityDataService.files;
        if (files.length > 0) {
            this.municipalityDataService.select(files[0].key);
        }
    }
    previous() {
        const files = this.municipalityDataService.files;
        const item = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](files, { key: this.municipalityDataService.selectedFileKey });
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](item)) {
            const currentIndex = files.indexOf(item);
            const previousIndex = currentIndex - 1;
            const previousItem = files[previousIndex];
            if (lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](previousItem)) {
                return;
            }
            this.municipalityDataService.select(previousItem.key);
        }
    }
    canGoToNext() {
        const files = this.municipalityDataService.files;
        const item = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](files, { key: this.municipalityDataService.selectedFileKey });
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](item)) {
            const currentIndex = files.indexOf(item);
            const nextIndex = currentIndex + 1;
            const nextItem = files[nextIndex];
            return !lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](nextItem);
        }
        return false;
    }
    next() {
        const files = this.municipalityDataService.files;
        const item = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](files, { key: this.municipalityDataService.selectedFileKey });
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](item)) {
            const currentIndex = files.indexOf(item);
            const nextIndex = currentIndex + 1;
            const nextItem = files[nextIndex];
            if (lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](nextItem)) {
                return;
            }
            this.municipalityDataService.select(nextItem.key);
        }
    }
    check() {
        const item = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.municipalityDataService.files, { key: this.municipalityDataService.selectedFileKey });
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](item)) {
            const count = this.municipalityDataService.files.length;
            const currentIndex = this.municipalityDataService.files.indexOf(item);
            this.canGoPrevious = (currentIndex - 1) >= 0;
            this.canGoNext = currentIndex + 1 <= (count - 1);
            this.canGoToStart = this.canGoPrevious;
        }
        else {
            this.canGoPrevious = false;
            this.canGoNext = false;
            this.canGoToStart = false;
        }
        this.canPlay = !this.isRunning;
        this.canPause = this.isRunning;
        this.canStop = this.isRunning || this.isPaused;
    }
}
MapButtonsService.ɵfac = function MapButtonsService_Factory(t) { return new (t || MapButtonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_municipality_data_service__WEBPACK_IMPORTED_MODULE_3__["MunicipalityDataService"])); };
MapButtonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapButtonsService, factory: MapButtonsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapButtonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_3__["MunicipalityDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/map-options/map-options.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home-page/map-options/map-options.component.ts ***!
  \**********************************************************************/
/*! exports provided: MapOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOptionsComponent", function() { return MapOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _map_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-options.service */ "./src/app/pages/home-page/map-options/map-options.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");







function MapOptionsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle-group", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MapOptionsComponent_div_2_Template_mat_button_toggle_group_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.mapOptionsService.setHasLabels($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r36.mapOptionsService.hasLabels);
} }
class MapOptionsComponent {
    constructor(mapOptionsService) {
        this.mapOptionsService = mapOptionsService;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.visible = false;
    }
}
MapOptionsComponent.ɵfac = function MapOptionsComponent_Factory(t) { return new (t || MapOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_options_service__WEBPACK_IMPORTED_MODULE_2__["MapOptionsService"])); };
MapOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapOptionsComponent, selectors: [["app-map-options"]], decls: 3, vars: 2, consts: [[1, "icon", 3, "click"], [3, "icon"], ["class", "options", 4, "ngIf"], [1, "options"], [3, "value", "valueChange"], ["group", "matButtonToggleGroup"], ["value", "off"], ["value", "on"]], template: function MapOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapOptionsComponent_Template_div_click_0_listener() { return ctx.visible = !ctx.visible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapOptionsComponent_div_2_Template, 9, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"]], styles: ["[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  min-height: 26px;\n  min-width: 26px;\n  background: white;\n  z-index: 1000;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  margin: auto;\n}\n[_nghost-%COMP%]   .options[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 56px;\n  bottom: 20px;\n  z-index: 1000;\n  border-radius: 5px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n[_nghost-%COMP%]   .options[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n[_nghost-%COMP%]   .options[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL21hcC1vcHRpb25zL21hcC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvbWFwLW9wdGlvbnMvbWFwLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGTjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0xKO0FET0k7RUFDRSxhQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvbWFwLW9wdGlvbnMvbWFwLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4gICAgbWluLXdpZHRoOiAyNnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgZmEtaWNvbiB7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICAub3B0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDU2cHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG4gIG1pbi13aWR0aDogMjZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjpob3N0IC5pY29uIGZhLWljb24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCAub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTZweDtcbiAgYm90dG9tOiAyMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOmhvc3QgLm9wdGlvbnMgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLm9wdGlvbnMgbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-options',
                templateUrl: './map-options.component.html',
                styleUrls: ['./map-options.component.scss']
            }]
    }], function () { return [{ type: _map_options_service__WEBPACK_IMPORTED_MODULE_2__["MapOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/map-options/map-options.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home-page/map-options/map-options.service.ts ***!
  \********************************************************************/
/*! exports provided: MapOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOptionsService", function() { return MapOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MapOptionsService {
    constructor() {
        this.hasLabels = 'off';
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setHasLabels($event) {
        this.hasLabels = $event;
        this.options$.next(true);
    }
}
MapOptionsService.ɵfac = function MapOptionsService_Factory(t) { return new (t || MapOptionsService)(); };
MapOptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapOptionsService, factory: MapOptionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapOptionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home-page/map/map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home-page/map/map.component.ts ***!
  \******************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/municipality-data.service */ "./src/app/core/municipality-data.service.ts");
/* harmony import */ var _core_geo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/geo-data.service */ "./src/app/core/geo-data.service.ts");
/* harmony import */ var _map_options_map_options_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-options/map-options.service */ "./src/app/pages/home-page/map-options/map-options.service.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");









class MapComponent {
    constructor(municipalityDataService, geoDataService, mapOptionsService) {
        this.municipalityDataService = municipalityDataService;
        this.geoDataService = geoDataService;
        this.mapOptionsService = mapOptionsService;
        this.mapboxToken = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g';
        /*
      
          L..addTo(map);
         */
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=' + this.mapboxToken, {
                    tileSize: 512,
                    zoomOffset: -1,
                    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                })
            ],
            zoom: 8,
            zoomControl: false,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(52.2129919, 5.2793703)
        };
        this.labelLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"])();
        this.layers = [
            this.labelLayer
        ];
        this.hasLabels = () => this.mapOptionsService.hasLabels === 'on';
        this.activeKey = () => this.municipalityDataService.selectedFileKey;
        this.init();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.optionSubscription.unsubscribe();
    }
    onMapReady(map) {
        console.log(map);
        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].zoom({
            position: 'topright'
        }).addTo(map);
    }
    resetHighlight(e) {
        const layer = e.target;
        this.borderLayer.resetStyle(layer);
    }
    highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 2,
            opacity: 1,
            dashArray: '3'
        });
        if (!leaflet__WEBPACK_IMPORTED_MODULE_2__["Browser"].ie && !leaflet__WEBPACK_IMPORTED_MODULE_2__["Browser"].opera && !leaflet__WEBPACK_IMPORTED_MODULE_2__["Browser"].edge) {
            layer.bringToFront();
        }
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.municipalityDataService.getFiles();
            yield this.municipalityDataService.selectLastOne();
            this.layers.map((layer) => layer.on('click', (event) => console.log(event)));
            this.borders = yield this.geoDataService.getMunicipalityBorders();
            this.update(true);
            this.optionSubscription = this.mapOptionsService.options$.subscribe(() => this.update());
            this.municipalityDataService.selectedFileKey$.subscribe(() => this.update(true));
        });
    }
    update(load = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (load) {
                const key = this.activeKey();
                yield this.municipalityDataService.getFileByKey(key);
            }
            this.borders.features.map((feature) => {
                feature.properties = Object.assign(Object.assign({}, feature.properties), this.getProperties(feature.properties));
                return feature;
            });
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"](this.labelLayer)) {
                this.labelLayer.clearLayers();
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"](this.borderLayer)) {
                this.borderLayer.clearLayers();
            }
            this.layers.length = 0;
            this.borderLayer = (Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"])(this.borders, {
                style: (feature) => this.style(feature),
                onEachFeature: (feature, layer) => this.onEachFeature(feature, layer)
            }));
            this.layers = this.hasLabels() ? [
                this.labelLayer,
                this.borderLayer
            ] : [this.borderLayer];
        });
    }
    style(e) {
        if (!e.properties) {
            return;
        }
        const value = e.properties.GemiddeldOverBev;
        const data = {
            weight: 1,
            opacity: 0.2,
            fillOpacity: 0,
            fillColor: '#555',
            color: 'white'
        };
        if (value) {
            data.fillColor = this.getColor(value);
            data.fillOpacity = 0.5;
        }
        return data;
    }
    getColor(d) {
        return d > 4096 ? '#800026' :
            d > 1024 ? '#BD0026' :
                d > 256 ? '#E31A1C' :
                    d > 64 ? '#FC4E2A' :
                        d > 16 ? '#FD8D3C' :
                            d > 4 ? '#FEB24C' :
                                d > 1 ? '#FED976' :
                                    '#FFEDA0';
    }
    getProperties(properties) {
        const key = this.activeKey();
        return this.municipalityDataService.cache[key][properties.Code];
    }
    onEachFeature(feature, layer) {
        layer.on({
            mouseover: (feature) => this.highlightFeature(feature),
            mouseout: (feature) => this.resetHighlight(feature)
        });
        if (!feature.properties || !this.hasLabels()) {
            return;
        }
        var aantal = feature.properties.Aantal;
        if (aantal > 0) {
            Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])(layer.getBounds().getCenter(), {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["divIcon"])({
                    className: 'label',
                    html: aantal
                })
            }).addTo(this.labelLayer);
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_municipality_data_service__WEBPACK_IMPORTED_MODULE_4__["MunicipalityDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_options_map_options_service__WEBPACK_IMPORTED_MODULE_6__["MapOptionsService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 1, vars: 2, consts: [["leaflet", "", 1, "map", 3, "leafletOptions", "leafletLayers", "leafletMapReady"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leafletMapReady", function MapComponent_Template_div_leafletMapReady_0_listener($event) { return ctx.onMapReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("leafletOptions", ctx.options)("leafletLayers", ctx.layers);
    } }, directives: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletDirective"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletLayersDirective"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n[_nghost-%COMP%]   .map[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]     .label {\n  font-size: 10px;\n  color: white;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsT0FBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5tYXAge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICA6Om5nLWRlZXAgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAubWFwIHtcbiAgZmxleDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAubGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: _core_municipality_data_service__WEBPACK_IMPORTED_MODULE_4__["MunicipalityDataService"] }, { type: _core_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"] }, { type: _map_options_map_options_service__WEBPACK_IMPORTED_MODULE_6__["MapOptionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /github/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map