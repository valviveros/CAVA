(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-public-advertise-advertise-module"],{

/***/ "./src/app/pages/public/advertise/advertise-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/public/advertise/advertise-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AdvertiseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiseRoutingModule", function() { return AdvertiseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _advertise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertise.component */ "./src/app/pages/public/advertise/advertise.component.ts");





const routes = [
    {
        path: '',
        component: _advertise_component__WEBPACK_IMPORTED_MODULE_2__["AdvertiseComponent"],
        pathMatch: 'full',
        data: {
            title: 'Anúnciate'
        }
    }
];
class AdvertiseRoutingModule {
}
AdvertiseRoutingModule.ɵfac = function AdvertiseRoutingModule_Factory(t) { return new (t || AdvertiseRoutingModule)(); };
AdvertiseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvertiseRoutingModule });
AdvertiseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvertiseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertiseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/public/advertise/advertise.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/public/advertise/advertise.module.ts ***!
  \************************************************************/
/*! exports provided: AdvertiseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiseModule", function() { return AdvertiseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _advertise_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertise-routing.module */ "./src/app/pages/public/advertise/advertise-routing.module.ts");




class AdvertiseModule {
}
AdvertiseModule.ɵfac = function AdvertiseModule_Factory(t) { return new (t || AdvertiseModule)(); };
AdvertiseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvertiseModule });
AdvertiseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _advertise_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvertiseRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvertiseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _advertise_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvertiseRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertiseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _advertise_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvertiseRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-public-advertise-advertise-module.js.map