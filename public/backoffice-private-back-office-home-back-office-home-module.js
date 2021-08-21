(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backoffice-private-back-office-home-back-office-home-module"],{

/***/ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgDropdownPanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgItemLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) { return { searchTerm: a0 }; };
function NgDropdownPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
} }
function NgDropdownPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
} }
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.unselect(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
} }
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { item: a0, clear: a1, label: a2 }; };
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
} }
function NgSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) { }
const _c7 = function (a0, a1) { return { items: a0, clear: a1 }; };
function NgSelectComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
} }
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
} }
function NgSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) { }
const _c8 = function (a0, a1, a2, a3) { return { item: a0, item$: a1, index: a2, searchTerm: a3 }; };
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleItem(item_r24); })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onItemHover(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.itemsList.unmarkItem(); })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.selectTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.viewPortItems = $event; })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.scroll.emit($event); })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.scrollToEnd.emit($event); })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
} }
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) :
        string;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
    return value instanceof Promise;
}
function isFunction(value) {
    return value instanceof Function;
}

class NgItemLabelDirective {
    constructor(element) {
        this.element = element;
        this.escape = true;
    }
    ngOnChanges(changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) { return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgItemLabelDirective, selectors: [["", "ngItemLabel", ""]], inputs: { escape: "escape", ngItemLabel: "ngItemLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
NgItemLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgItemLabelDirective.propDecorators = {
    ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngItemLabel]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class NgOptionTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) { return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptionTemplateDirective, selectors: [["", "ng-option-tmp", ""]] });
NgOptionTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-option-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgOptgroupTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) { return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptgroupTemplateDirective, selectors: [["", "ng-optgroup-tmp", ""]] });
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-optgroup-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) { return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLabelTemplateDirective, selectors: [["", "ng-label-tmp", ""]] });
NgLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgMultiLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) { return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgMultiLabelTemplateDirective, selectors: [["", "ng-multi-label-tmp", ""]] });
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-multi-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) { return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgHeaderTemplateDirective, selectors: [["", "ng-header-tmp", ""]] });
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-header-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) { return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFooterTemplateDirective, selectors: [["", "ng-footer-tmp", ""]] });
NgFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-footer-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgNotFoundTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) { return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgNotFoundTemplateDirective, selectors: [["", "ng-notfound-tmp", ""]] });
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-notfound-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgTypeToSearchTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) { return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTypeToSearchTemplateDirective, selectors: [["", "ng-typetosearch-tmp", ""]] });
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-typetosearch-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgLoadingTextTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) { return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingTextTemplateDirective, selectors: [["", "ng-loadingtext-tmp", ""]] });
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-loadingtext-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgTagTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) { return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTagTemplateDirective, selectors: [["", "ng-tag-tmp", ""]] });
NgTagTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-tag-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
class NgLoadingSpinnerTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) { return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingSpinnerTemplateDirective, selectors: [["", "ng-loadingspinner-tmp", ""]] });
NgLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-loadingspinner-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();

class ConsoleService {
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(); };
ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();

function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        // tslint:disable-next-line:no-bitwise
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
    const match = (a) => {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

class ItemsList {
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    get items() {
        return this._items;
    }
    get filteredItems() {
        return this._filteredItems;
    }
    get markedIndex() {
        return this._markedIndex;
    }
    get selectedItems() {
        return this._selectionModel.value;
    }
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    get lastSelectedItem() {
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    setItems(items) {
        this._items = items.map((item, index) => this.mapItem(item, index));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    findItem(value) {
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = item => this._ngSelect.compareWith(item.value, value);
        }
        else if (this._ngSelect.bindValue) {
            findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
        }
        else {
            findBy = item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
        }
        return this._items.find(item => findBy(item));
    }
    addItem(item) {
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach(item => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(item => {
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    }
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    const head = this._items.find(x => x === last.parent);
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(x => !x.selected);
        }
        else {
            this._filteredItems = this._items;
        }
    }
    unmarkItem() {
        this._markedIndex = -1;
    }
    markNextItem() {
        this._stepToItem(+1);
    }
    markPreviousItem() {
        this._stepToItem(-1);
    }
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        const lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
        }
    }
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            let keys = key.split('.');
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    mapItem(item, index) {
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${index}`,
        };
    }
    mapSelectedItems() {
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
            const item = isDefined(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
        }
    }
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            const parent = item.parent;
            const parentExists = this._filteredItems.find(x => x === parent);
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((a, b) => (a.index - b.index))];
    }
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter(x => x !== item);
        if (item.parent) {
            const children = item.parent.children;
            if (children.every(x => x.selected)) {
                this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
        }
    }
    _defaultSearchFn(search, opt) {
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex >= this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    _getLastMarkedIndex() {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    }
    _groupBy(items, prop) {
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[prop])) {
            for (const item of items) {
                const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
                groups.set(item, children);
            }
            return groups;
        }
        const isFnKey = isFunction(this._ngSelect.groupBy);
        const keyFn = (item) => {
            let key = isFnKey ? prop(item.value) : item.value[prop];
            return isDefined(key) ? key : undefined;
        };
        // Group items by key.
        for (const item of items) {
            let key = keyFn(item);
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    _flatten(groups) {
        const isGroupByFn = isFunction(this._ngSelect.groupBy);
        const items = [];
        for (const key of Array.from(groups.keys())) {
            let i = items.length;
            if (key === undefined) {
                const withoutGroup = groups.get(undefined) || [];
                items.push(...withoutGroup.map(x => {
                    x.index = i++;
                    return x;
                }));
                continue;
            }
            const isObjectKey = isObject(key);
            const parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
            const groupValue = this._ngSelect.groupValue || (() => {
                if (isObjectKey) {
                    return key.value;
                }
                return { [groupKey]: key };
            });
            const children = groups.get(key).map(x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(x => x.value));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}

var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Esc"] = 27] = "Esc";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
    KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));

class NgDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    get dimensions() {
        return this._dimensions;
    }
    calculateItems(scrollPos, itemsLength, buffer) {
        const d = this._dimensions;
        const scrollHeight = d.itemHeight * itemsLength;
        const scrollTop = Math.max(0, scrollPos);
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        const maxStartEnd = end;
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    setDimensions(itemHeight, panelHeight) {
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        const itemBottom = itemTop + itemHeight;
        const top = lastScroll;
        const bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) { return new (t || NgDropdownPanelService)(); };
NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgDropdownPanelService, factory: NgDropdownPanelService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

const TOP_CSS_CLASS = 'ng-select-top';
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];
class NgDropdownPanelComponent {
    constructor(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    get currentPosition() {
        return this._currentPosition;
    }
    get itemsLength() {
        return this._itemsLength;
    }
    set itemsLength(value) {
        if (value !== this._itemsLength) {
            this._itemsLength = value;
            this._onItemsLengthChanged();
        }
    }
    get _startOffset() {
        if (this.markedItem) {
            const { itemHeight, panelHeight } = this._panelService.dimensions;
            const offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
        }
        return 0;
    }
    handleMousedown($event) {
        const target = $event.target;
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    }
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    }
    ngOnChanges(changes) {
        if (changes.items) {
            const change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    scrollTo(option, startFromOption = false) {
        if (!option) {
            return;
        }
        const index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        let scrollTo;
        if (this.virtualScroll) {
            const itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            const item = this._dropdown.querySelector(`#${option.htmlId}`);
            const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    }
    scrollToTag() {
        const panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    adjustPosition() {
        this._updateYPosition();
    }
    _handleDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateYPosition();
        }
        this._dropdown.style.opacity = '1';
    }
    _handleScroll() {
        this._zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.scrollElementRef.nativeElement, 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((e) => {
                const path = e.path || (e.composedPath && e.composedPath());
                const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
                this._onContentScrolled(scrollTop);
            });
        });
    }
    _handleOutsideClick() {
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mousedown', { capture: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$))
                .subscribe($event => this._checkToClose($event));
        });
    }
    _checkToClose($event) {
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run(() => this.outsideClick.emit());
    }
    _onItemsChange(items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._setVirtualHeight();
            this._updateItems(firstChange);
        }
    }
    _updateItems(firstChange) {
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            Promise.resolve().then(() => {
                const panelHeight = this._scrollablePanel.clientHeight;
                this._panelService.setDimensions(0, panelHeight);
                this._handleDropdownPosition();
                this.scrollTo(this.markedItem, firstChange);
            });
        });
    }
    _updateItemsRange(firstChange) {
        this._zone.runOutsideAngular(() => {
            this._measureDimensions().then(() => {
                if (firstChange) {
                    this._renderItemsRange(this._startOffset);
                    this._handleDropdownPosition();
                }
                else {
                    this._renderItemsRange();
                }
            });
        });
    }
    _onContentScrolled(scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    }
    _updateVirtualHeight(height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = `${height}px`;
            this._updateScrollHeight = false;
        }
    }
    _setVirtualHeight() {
        if (!this._virtualPadding) {
            return;
        }
        this._virtualPadding.style.height = `0px`;
    }
    _onItemsLengthChanged() {
        this._updateScrollHeight = true;
    }
    _renderItemsRange(scrollTop = null) {
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
        this._zone.run(() => {
            this.update.emit(this.items.slice(range.start, range.end));
            this.scroll.emit({ start: range.start, end: range.end });
        });
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    }
    _measureDimensions() {
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        const [first] = this.items;
        this.update.emit([first]);
        return Promise.resolve().then(() => {
            const option = this._dropdown.querySelector(`#${first.htmlId}`);
            const optionHeight = option.clientHeight;
            this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
            const panelHeight = this._scrollablePanel.clientHeight;
            this._panelService.setDimensions(optionHeight, panelHeight);
            return this._panelService.dimensions;
        });
    }
    _fireScrollToEnd(scrollTop) {
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        const padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run(() => this.scrollToEnd.emit());
            this._scrollToEndFired = true;
        }
    }
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        const selectRect = this._select.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const offsetTop = selectRect.top + window.pageYOffset;
        const height = selectRect.height;
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    _appendDropdown() {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!this._parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        this._updateXPosition();
        this._parent.appendChild(this._dropdown);
    }
    _updateXPosition() {
        const select = this._select.getBoundingClientRect();
        const parent = this._parent.getBoundingClientRect();
        const offsetLeft = select.left - parent.left;
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    }
    _updateYPosition() {
        const select = this._select.getBoundingClientRect();
        const parent = this._parent.getBoundingClientRect();
        const delta = select.height;
        if (this._currentPosition === 'top') {
            const offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            const offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) { return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8)); };
NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgDropdownPanelComponent, selectors: [["ng-dropdown-panel"]], viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    } }, hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) { return ctx.handleMousedown($event); });
    } }, inputs: { items: "items", position: "position", virtualScroll: "virtualScroll", filterValue: "filterValue", markedItem: "markedItem", appendTo: "appendTo", bufferAmount: "bufferAmount", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate" }, outputs: { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 9, vars: 6, consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]], template: function NgDropdownPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NgDropdownPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: NgDropdownPanelService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: NgDropdownPanelService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();

class NgOptionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._disabled = false;
    }
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = this._isDisabled(value); }
    get label() {
        return (this.elementRef.nativeElement.textContent || '').trim();
    }
    ngOnChanges(changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    ngAfterViewChecked() {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    }
    ngOnDestroy() {
        this.stateChange$.complete();
    }
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) { return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOptionComponent, selectors: [["ng-option"]], inputs: { disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 1, vars: 0, template: function NgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NgOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgOptionComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `<ng-content></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgSelectConfig {
    constructor() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) { return new (t || NgSelectConfig)(); };
NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');
class NgSelectComponent {
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (_) => true;
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this.clearItem = (item) => {
            const option = this.selectedItems.find(x => x.value === item);
            this.unselect(option);
        };
        this.trackByOption = (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    get items() { return this._items; }
    ;
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        if (fn !== undefined && fn !== null && !isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    get disabled() { return this.readonly || this._disabled; }
    ;
    get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing); }
    ;
    get _editableSearchTerm() {
        return this.editableSearchTerm && !this.multiple;
    }
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    get selectedValues() {
        return this.selectedItems.map(x => x.value);
    }
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    ngOnInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
    }
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    handleKeyDown($event) {
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    handleKeyCode($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    handleMousedown($event) {
        const target = $event.target;
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(state) {
        this._disabled = state;
        this._cd.markForCheck();
    }
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._isComposing = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    }
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    focus() {
        this.searchInput.nativeElement.focus();
    }
    blur() {
        this.searchInput.nativeElement.blur();
    }
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    selectTag() {
        let tag;
        if (isFunction(this.addTag)) {
            tag = this.addTag(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }
        const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
        if (isPromise(tag)) {
            tag.then(item => this.select(handleTag(item))).catch(() => { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }
        const term = this.searchTerm.toLowerCase().trim();
        return this.addTag &&
            (!this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term))) &&
            !this.loading;
    }
    showNoItemsFound() {
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    }
    showTypeToSearch() {
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    onCompositionStart() {
        this._isComposing = true;
    }
    onCompositionEnd(term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    }
    filter(term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map(x => x.value) });
        this.open();
    }
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    }
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    detectChanges() {
        if (!this._cd.destroyed) {
            this._cd.detectChanges();
        }
    }
    _setSearchTermFromItems() {
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }
    _setItems(items) {
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    _setItemsFromNgOptions() {
        const mapNgOptions = (options) => {
            this.items = options.map(option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };
        const handleOptionChange = () => {
            const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.ngOptions.changes, this._destroy$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...this.ngOptions.map(option => option.stateChange$))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed))
                .subscribe(option => {
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                this._cd.detectChanges();
            });
        };
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$))
            .subscribe(options => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        });
    }
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        const validateBinding = (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(item => validateBinding(item));
        }
        else {
            return validateBinding(value);
        }
    }
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        const select = (val) => {
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                const isValObject = isObject(val);
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            ngModel.forEach(item => select(item));
        }
        else {
            select(ngModel);
        }
    }
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(letter => this._pressedKeys.push(letter)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => this._pressedKeys.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this._pressedKeys.join('')))
            .subscribe(term => {
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._scrollToMarked();
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        });
    }
    _setInputAttributes() {
        const input = this.searchInput.nativeElement;
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    _updateNgModel() {
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                let value = null;
                if (item.children) {
                    const groupKey = this.groupValue ? this.bindValue : this.groupBy;
                    value = item.value[groupKey || this.groupBy];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        const selected = this.selectedItems.map(x => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    _nextItemIsTag(nextStep) {
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    get _validTerm() {
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.bindLabel = this.bindLabel || config.bindLabel;
        this.appearance = this.appearance || config.appearance;
    }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) { return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService)); };
NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSelectComponent, selectors: [["ng-select"]], contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    } }, viewQuery: function NgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostVars: 20, hostBindings: function NgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    } }, inputs: { markFirst: "markFirst", dropdownPosition: "dropdownPosition", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", bufferAmount: "bufferAmount", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", trackByFn: "trackByFn", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", inputAttrs: "inputAttrs", readonly: "readonly", searchWhileComposing: "searchWhileComposing", minTermLength: "minTermLength", editableSearchTerm: "editableSearchTerm", keyDownFn: "keyDownFn", multiple: "multiple", addTag: "addTag", searchable: "searchable", clearable: "clearable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd", bindLabel: "bindLabel", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", virtualScroll: "virtualScroll", openOnEnter: "openOnEnter", appendTo: "appendTo", bindValue: "bindValue", appearance: "appearance", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", tabIndex: "tabIndex", typeahead: "typeahead" }, outputs: { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgSelectComponent),
                multi: true
            }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 19, consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]], template: function NgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.filter(_r2.value); })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() { return ctx.onCompositionStart(); })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onCompositionEnd(_r2.value); })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) { return ctx.onInputFocus($event); })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) { return ctx.onInputBlur($event); })("change", function NgSelectComponent_Template_input_change_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"], encapsulation: 2, changeDetection: 0 });
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['class',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-multiple',] }],
    addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-taggable',] }],
    searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-searchable',] }],
    clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-clearable',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-opened',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] }],
    openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['open',] }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['close',] }],
    searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['search',] }],
    clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['clear',] }],
    addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['add',] }],
    removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['remove',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollToEnd',] }],
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgDropdownPanelComponent),] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput', { static: true },] }],
    ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-disabled',] }],
    filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-select',
                template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgSelectComponent),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.ng-select]': 'useDefaultClass',
                    '[class.ng-select-single]': '!multiple'
                },
                styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['class']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['autofocus']
            }] }, { type: NgSelectConfig }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SELECTION_MODEL_FACTORY]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ConsoleService }]; }, { markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-multiple']
        }], addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-taggable']
        }], searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-searchable']
        }], clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-clearable']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-opened']
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['change']
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['open']
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['close']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['search']
        }], clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['clear']
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['add']
        }], removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['remove']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scroll']
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollToEnd']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-disabled']
        }], filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-filtered']
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-typeahead']
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgDropdownPanelComponent)]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', { static: true }]
        }], ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgOptionComponent, { descendants: true }]
        }] }); })();

function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    get value() {
        return this._selected;
    }
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                const childrenCount = item.parent.children.length;
                const selectedCount = item.parent.children.filter(x => x.selected).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = [...this._selected.filter(x => x.parent !== item), item];
                }
                else {
                    this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
                }
            }
        }
    }
    unselect(item, multiple) {
        this._selected = this._selected.filter(x => x !== item);
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter(x => x !== item && !x.disabled));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
    }
    _setChildrenSelectedState(children, selected) {
        for (const child of children) {
            if (child.disabled) {
                continue;
            }
            child.selected = selected;
        }
        ;
    }
    _removeChildren(parent) {
        this._selected = [
            ...this._selected.filter(x => x.parent !== parent),
            ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)
        ];
    }
    _removeParent(parent) {
        this._selected = this._selected.filter(x => x !== parent);
    }
    _activeChildren(item) {
        return item.children.every(x => !x.disabled || x.selected);
    }
}

const ɵ0 = DefaultSelectionModelFactory;
class NgSelectModule {
}
NgSelectModule.ɵfac = function NgSelectModule_Factory(t) { return new (t || NgSelectModule)(); };
NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSelectModule });
NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, { declarations: function () { return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective,
                    NgItemLabelDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-select-ng-select.js.map

/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/back-office-home-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/back-office-home-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BackOfficeHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeHomeRoutingModule", function() { return BackOfficeHomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _back_office_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-office-home.component */ "./src/app/backoffice/private/back-office-home/back-office-home.component.ts");
/* harmony import */ var _sections_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/add-info/add-info.component */ "./src/app/backoffice/private/back-office-home/sections/add-info/add-info.component.ts");
/* harmony import */ var _sections_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/add-product/add-product.component */ "./src/app/backoffice/private/back-office-home/sections/add-product/add-product.component.ts");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/contact/contact.component */ "./src/app/backoffice/private/back-office-home/sections/contact/contact.component.ts");
/* harmony import */ var _sections_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/my-profile/my-profile.component */ "./src/app/backoffice/private/back-office-home/sections/my-profile/my-profile.component.ts");
/* harmony import */ var _sections_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/products/products.component */ "./src/app/backoffice/private/back-office-home/sections/products/products.component.ts");
/* harmony import */ var _sections_shop_info_shop_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/shop-info/shop-info.component */ "./src/app/backoffice/private/back-office-home/sections/shop-info/shop-info.component.ts");












const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['login']);
const routes = [
    {
        path: '',
        component: _back_office_home_component__WEBPACK_IMPORTED_MODULE_3__["BackOfficeHomeComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]],
        pathMatch: 'full',
        data: {
            title: 'Back office',
            authGuardPipe: redirectUnauthorizedToLogin
        }
    },
    {
        path: 'myprofile',
        component: _sections_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"]
    },
    {
        path: 'shopinfo',
        children: [
            {
                path: '',
                component: _sections_shop_info_shop_info_component__WEBPACK_IMPORTED_MODULE_9__["ShopInfoComponent"]
            },
            {
                path: 'add',
                component: _sections_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_4__["AddInfoComponent"]
            }
        ]
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: _sections_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"]
            },
            {
                path: 'add',
                component: _sections_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"]
            }
        ]
    },
    {
        path: 'contact',
        component: _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    },
];
class BackOfficeHomeRoutingModule {
}
BackOfficeHomeRoutingModule.ɵfac = function BackOfficeHomeRoutingModule_Factory(t) { return new (t || BackOfficeHomeRoutingModule)(); };
BackOfficeHomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackOfficeHomeRoutingModule });
BackOfficeHomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackOfficeHomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackOfficeHomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/back-office-home.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/back-office-home.module.ts ***!
  \********************************************************************************/
/*! exports provided: BackOfficeHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeHomeModule", function() { return BackOfficeHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _back_office_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-office-home-routing.module */ "./src/app/backoffice/private/back-office-home/back-office-home-routing.module.ts");
/* harmony import */ var _sections_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/my-profile/my-profile.component */ "./src/app/backoffice/private/back-office-home/sections/my-profile/my-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sections_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/add-product/add-product.component */ "./src/app/backoffice/private/back-office-home/sections/add-product/add-product.component.ts");
/* harmony import */ var _sections_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/products/products.component */ "./src/app/backoffice/private/back-office-home/sections/products/products.component.ts");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/contact/contact.component */ "./src/app/backoffice/private/back-office-home/sections/contact/contact.component.ts");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-responsive-carousel */ "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
/* harmony import */ var _sections_shop_info_shop_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/shop-info/shop-info.component */ "./src/app/backoffice/private/back-office-home/sections/shop-info/shop-info.component.ts");
/* harmony import */ var _sections_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/add-info/add-info.component */ "./src/app/backoffice/private/back-office-home/sections/add-info/add-info.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-functions.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
















class BackOfficeHomeModule {
}
BackOfficeHomeModule.ɵfac = function BackOfficeHomeModule_Factory(t) { return new (t || BackOfficeHomeModule)(); };
BackOfficeHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackOfficeHomeModule });
BackOfficeHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            _back_office_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["BackOfficeHomeRoutingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _angular_fire_functions__WEBPACK_IMPORTED_MODULE_12__["AngularFireFunctionsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackOfficeHomeModule, { declarations: [_sections_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
        _sections_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"],
        _sections_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _sections_shop_info_shop_info_component__WEBPACK_IMPORTED_MODULE_9__["ShopInfoComponent"],
        _sections_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_10__["AddInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
        _back_office_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["BackOfficeHomeRoutingModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
        _angular_fire_functions__WEBPACK_IMPORTED_MODULE_12__["AngularFireFunctionsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackOfficeHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _sections_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
                    _sections_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"],
                    _sections_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                    _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _sections_shop_info_shop_info_component__WEBPACK_IMPORTED_MODULE_9__["ShopInfoComponent"],
                    _sections_add_info_add_info_component__WEBPACK_IMPORTED_MODULE_10__["AddInfoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                    _back_office_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["BackOfficeHomeRoutingModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                    _angular_fire_functions__WEBPACK_IMPORTED_MODULE_12__["AngularFireFunctionsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/add-info/add-info.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/add-info/add-info.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInfoComponent", function() { return AddInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");












function AddInfoComponent_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", categoryItem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", categoryItem_r2.name, " ");
} }
function AddInfoComponent_ng_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.name);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddInfoComponent {
    constructor(authService, router, firebaseAuth, firebase, firebaseStorage, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.firebaseStorage = firebaseStorage;
        this.formBuilder = formBuilder;
        this.items = [
            { id: 1, name: 'Emprendimiento' },
            { id: 2, name: 'Empresa' }
        ];
        this.selected = [
            { id: 1, name: 'Emprendimiento' },
        ];
        this.categoryItems = [
            { id: 1, name: 'Belleza' },
            { id: 2, name: 'Moda' },
            { id: 3, name: 'Tecnología' },
            { id: 4, name: 'Hogar' },
        ];
        this.categorySelected = [
            { id: 1, name: 'Belleza' },
        ];
        this.sellersName = '';
        this.sellersLName = '';
        this.path = '';
        this.path2 = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.companyName = '';
        this.companyDescription = '';
        this.infoForm = this.createProfileForm();
        this.loadSellersInfo();
    }
    ngOnInit() {
        $('.sideMenuBtn').on('click', function () {
            var hasOptions = $(this).hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
            }
            else {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
                $('.sideMenuInnerBtn').removeClass('active');
            }
        });
        $('.sideMenuInnerBtn').on('click', function () {
            var hasOptions = $('.sideMenuBtn').hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $('.sideMenuBtn.options').addClass('active');
            }
            $('.sideMenuInnerBtn').removeClass('active');
            $(this).addClass('active');
        });
        this.resetForm();
    }
    loadSellersInfo() {
        let Key;
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            yield this.firebase.database.ref('users').once('value', (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.Email) {
                        Key = childKey;
                        user.forEach((company => {
                            const companyChildKey = company.key;
                            const companyChildData = company.val();
                            company.forEach((data => {
                                const dataChildKey = data.key;
                                if (dataChildKey == 'info') {
                                    data.forEach((info => {
                                        const infoChildKey = info.key;
                                        const infoChildData = info.val();
                                        if (infoChildKey == 'name') {
                                            this.companyName = infoChildData;
                                        }
                                        if (infoChildKey == 'description') {
                                            this.companyDescription = infoChildData;
                                        }
                                        if (infoChildKey == 'category') {
                                            this.categorySelected = [
                                                { id: 1, name: infoChildData },
                                            ];
                                        }
                                        if (infoChildKey == 'type') {
                                            this.selected = [
                                                { id: 1, name: infoChildData },
                                            ];
                                        }
                                    }));
                                }
                            }));
                            if (companyChildKey == 'name') {
                                this.sellersName = companyChildData;
                                this.user.updateProfile({
                                    displayName: this.sellersName
                                });
                            }
                        }));
                    }
                });
            });
            this.infoForm.controls.name.setValue(this.companyName);
            this.infoForm.controls.description.setValue(this.companyDescription);
        })));
    }
    sideMenuOptionClicked() {
        var icon = $('.options').find('i.fas');
        var btnOptionsContainer = $('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            $('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    getPath(event) {
        this.path = event.target.files[0];
    }
    getPath2(event) {
        this.path2 = event.target.files[0];
    }
    createProfileForm() {
        return this.formBuilder.group({
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35)
                ])
            ],
            description: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(335)
                ])
            ],
            category: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            type: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            logo: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required
                ])
            ],
            banner: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required
                ])
            ],
        });
    }
    onSubmit() {
        let Key;
        if (this.infoForm.valid) {
            this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = data;
                this.Email = this.user['email'];
                yield this.firebase.database.ref('users').once('value', (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.Email) {
                            Key = childKey;
                        }
                    });
                });
                const companyId = this.infoForm.controls.name.value + Key;
                this.firebase.database.ref(`users/${Key}/company`).update({
                    id: companyId
                });
                this.firebase.database.ref(`companies/${Key}`).update({
                    id: companyId
                });
                const fileName = '/info/' + Date.now() + 'logo';
                const fileName2 = '/info/' + Date.now() + 'background';
                let url;
                let url2;
                if (this.path && this.path2) {
                    let uploadTask = yield this.firebaseStorage.upload(fileName, this.path);
                    let uploadTask2 = yield this.firebaseStorage.upload(fileName2, this.path2);
                    url = yield uploadTask.ref.getDownloadURL();
                    url2 = yield uploadTask2.ref.getDownloadURL();
                    this.firebase.database.ref(`users/${Key}/company/info`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        logo: url,
                        banner: url2
                    });
                    this.firebase.database.ref(`companies/${Key}`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        logo: url,
                        banner: url2
                    });
                }
                else if (this.path) {
                    let uploadTask = yield this.firebaseStorage.upload(fileName, this.path);
                    url = yield uploadTask.ref.getDownloadURL();
                    this.firebase.database.ref(`users/${Key}/company/info`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        logo: url
                    });
                    this.firebase.database.ref(`companies/${Key}`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        logo: url
                    });
                }
                else if (this.path2) {
                    let uploadTask2 = yield this.firebaseStorage.upload(fileName2, this.path2);
                    url2 = yield uploadTask2.ref.getDownloadURL();
                    this.firebase.database.ref(`users/${Key}/company/info`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        banner: url2
                    });
                    this.firebase.database.ref(`companies/${Key}`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value,
                        banner: url2
                    });
                }
                else {
                    this.firebase.database.ref(`users/${Key}/company/info`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value
                    });
                    this.firebase.database.ref(`companies/${Key}`).update({
                        name: this.infoForm.controls.name.value,
                        description: this.infoForm.controls.description.value,
                        category: this.infoForm.controls.category.value,
                        type: this.infoForm.controls.type.value
                    });
                }
                this.loadSellersInfo();
                const query = '.wrapper #successMessage';
                const successMessage = document.querySelector(query);
                successMessage.style.display = 'flex';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    this.router.navigate(['/sellers/shopinfo']);
                }, 1000);
            })));
        }
        else {
            const query = '.wrapper #failureMessage';
            const failureMessage = document.querySelector(query);
            failureMessage.style.display = 'flex';
            setTimeout(() => {
                failureMessage.style.display = 'none';
            }, 3000);
        }
    }
    resetForm(registerForm) {
        if (registerForm != null) {
            registerForm.reset();
        }
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
    validateField(controlName) {
        let control = this.infoForm.controls[controlName];
        return control.invalid && control.touched;
    }
}
AddInfoComponent.ɵfac = function AddInfoComponent_Factory(t) { return new (t || AddInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AddInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddInfoComponent, selectors: [["app-add-info"]], inputs: { sellersName: "sellersName" }, decls: 80, vars: 25, consts: [[1, "wrapper"], [1, "addProductContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", "active", 3, "click"], [1, "sideMenuBtn", "options", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "myProfileInfoContainer"], [1, "myProfileTitle"], [1, "myProfileForm"], [1, "myProfileMessage"], ["id", "successMessage", 1, "successMessage"], ["id", "failureMessage", 1, "failureMessage"], [1, "myProfileFields"], [3, "formGroup"], [1, "field"], [1, "control"], ["type", "text", "placeholder", "Nombre negocio", "formControlName", "name", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Descripci\u00F3n", "formControlName", "description", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Categor\u00EDa", "formControlName", "category", 1, "button", 3, "ngClass", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Tipo de negocio", "formControlName", "type", 1, "button", 3, "ngClass", "ngModel", "ngModelChange"], [1, "file"], [1, "file-label"], ["type", "file", "placeholder", "Imagen", "formControlName", "logo", "accept", "image/png, image/gif, image/jpeg", 1, "file-input", 3, "change"], [1, "file-cta", 3, "ngClass"], [1, "file-icon"], [1, "fas", "fa-upload"], ["type", "file", "placeholder", "Imagen", "formControlName", "banner", "accept", "image/png, image/gif, image/jpeg", 1, "file-input", 3, "change"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"], [3, "value"]], template: function AddInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "A\u00D1ADIR INFORMACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Se han guardado los datos correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Verifique que los campos est\u00E9n completos y correctos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ng-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddInfoComponent_Template_ng_select_ngModelChange_53_listener($event) { return ctx.categorySelected[0].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AddInfoComponent_ng_option_54_Template, 2, 2, "ng-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ng-select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddInfoComponent_Template_ng_select_ngModelChange_56_listener($event) { return ctx.selected[0].name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AddInfoComponent_ng_option_57_Template, 2, 2, "ng-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddInfoComponent_Template_input_change_61_listener($event) { return ctx.getPath($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Subir foto logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddInfoComponent_Template_input_change_70_listener($event) { return ctx.getPath2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Subir foto fondo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddInfoComponent_Template_button_click_78_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.infoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.validateField("name")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.validateField("description")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.validateField("category")))("ngModel", ctx.categorySelected[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.validateField("type")))("ngModel", ctx.selected[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.validateField("logo")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.validateField("banner")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.infoForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.addProductContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 555px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 10%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #03d755;\n  background: rgba(3, 215, 85, 0.3);\n  border-radius: 5px;\n  border: 1px solid #03d755;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .failureMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #dd3444;\n  background: rgba(221, 52, 68, 0.3);\n  border-radius: 5px;\n  border: 1px solid #dd3444;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n  padding-top: 7px;\n  height: 150px;\n  resize: none;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  padding: 0.375rem 1rem !important;\n}\n.file-cta[_ngcontent-%COMP%], .file-name[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 0.5em 1em !important;\n}\n.file-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em !important;\n}\n  .ng-select .ng-select-container {\n  min-height: 40px !important;\n}\n  .ng-select .ng-select-container:after {\n  border-bottom: 0 !important;\n}\n  .ng-select .ng-select-container .ng-value-container {\n  padding: 0.4375em !important;\n  border-top: 0em !important;\n}\n  .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: 0 !important;\n}\n  .ng-select .ng-select-container .ng-value-container .ng-input > input {\n  padding: 0.4375em !important;\n}\n  .ng-dropdown-panel.ng-select-bottom {\n  top: 40px !important;\n}\n  .ng-dropdown-panel.ng-select-top {\n  bottom: -195px !important;\n}\n  .ng-dropdown-panel.ng-select-bottom {\n  border-radius: 4px !important;\n}\n  .ng-dropdown-panel .ng-dropdown-panel-items {\n  border-radius: 4px !important;\n}\n  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected {\n  background: white !important;\n  color: #000000 !important;\n}\n  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background: #f0f5fa !important;\n}\n  .ng-select.ng-select-focused .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  color: rgba(0, 0, 0, 0.54) !important;\n}\n  .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  color: #C2C2C2 !important;\n}\n  .ng-select .ng-has-value .ng-placeholder, .ng-select.ng-select-opened[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  transform: translateY(-2em) scale(0.75) perspective(100px) translateZ(0.001px) !important;\n  color: #C2C2C2 !important;\n}\n  .ng-select.ng-select-focused .ng-select-container .ng-value-container .ng-placeholder {\n  transform: translateY(-2em) scale(0.75) perspective(100px) translateZ(0.001px) !important;\n  color: #C2C2C2 !important;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9hZGQtaW5mby9hZGQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja29mZmljZS9wcml2YXRlL2JhY2stb2ZmaWNlLWhvbWUvc2VjdGlvbnMvYWRkLWluZm8vYWRkLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBO0VBQ0ksd0JBQUE7RUFDQSw4Q0FBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0VBQ0EsK0NBQUE7QUNyQko7QUR3QkE7RUFDSSx3QkFBQTtFQUNBLGtEQUFBO0FDdEJKO0FEeUJBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBeENjO0VBeUNkLHVCQUFBO0FDdkJKO0FEeUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFoQ087RUFpQ1AsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBdkRTO0VBd0RULGNBdERRO0FDZ0NaO0FEdUJJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkEzRFU7QUNzQ2xCO0FEc0JRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNwQlo7QURxQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNuQmhCO0FEc0JRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3BCWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXJGRTtFQXNGRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLHNDQUFBO0FDakJ4QjtBRG9CZ0I7RUFDSSxZQWpHTDtFQWtHSyxtQkFyR1I7QUNtRlo7QURxQlk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXBIRjtFQXFIRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksWUF4SFQ7RUF5SFMsbUJBQUE7QUNqQnhCO0FEdUJJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFySVU7RUFzSVYsK0JBQUE7QUNyQlI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkEvSU07RUFnSk4sZ0NBQUE7QUNwQlo7QURxQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDbkJoQjtBRG9CZ0I7RUFDSSx3QkEzSlI7RUE0SlEsaUJBakpHO0FDK0h2QjtBRG9CZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQnhCO0FEbUJvQjtFQUNJLHdCQXpLWjtFQTBLWSxlQTVKUDtBQzJJakI7QURtQm9CO0VBQ0ksY0EzS047RUE0S00sYUE1S047RUE2S00sMEJBQUE7QUNqQnhCO0FEcUJZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQXhMRDtFQXlMQyx3QkEvTEo7RUFnTUksZUFsTEM7RUFtTEQsa0JBQUE7RUFDQSw2RUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDakJ4QjtBRGtCd0I7RUFDSSxtQkE5TVY7QUM4TGxCO0FEa0J3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ2hCNUI7QURpQjRCO0VBQ0ksaUJBQUE7QUNmaEM7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QURxQlk7RUFDSSxxQkFBQTtFQUNBLGVBNU5EO0VBNk5DLHdCQXRPSjtBQ21OWjtBRHFCWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFoT0k7RUFpT0osaUJBN09EO0FDME5mO0FEb0JnQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQXpQUDtFQTBQTyxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqQnhCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FsUVA7RUFtUU8sa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDakJ4QjtBRG9CZ0I7RUFDSSxVQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0FDakJ4QjtBRG9CZ0M7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNsQnBDO0FEb0JnQztFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNsQnBDO0FEc0JnQztFQUNJLFlBQUE7RUFDQSxtQkFsU3hCO0VBbVN3Qix5QkFyU3ZCO0FDaVJiO0FEc0JnQztFQUNJLFlBQUE7RUFDQSxtQkF0U2xCO0VBdVNrQix5QkExU3ZCO0FDc1JiO0FEOEJBO0VBQ0ksMEJBQUE7RUFDQSxpQ0FBQTtBQzNCSjtBRDZCQTs7O0VBR0ksNkJBQUE7QUMxQko7QUQ0QkE7RUFDSSw4QkFBQTtBQ3pCSjtBRDJCQTtFQUNJLDJCQUFBO0FDeEJKO0FEMEJBO0VBQ0ksMkJBQUE7QUN2Qko7QUR5QkE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FDdEJKO0FEd0JBO0VBQ0ksaUJBQUE7QUNyQko7QUR1QkE7RUFDSSw0QkFBQTtBQ3BCSjtBRHNCQTtFQUNJLG9CQUFBO0FDbkJKO0FEcUJBO0VBQ0kseUJBQUE7QUNsQko7QURvQkE7RUFDSSw2QkFBQTtBQ2pCSjtBRG1CQTtFQUNJLDZCQUFBO0FDaEJKO0FEa0JBO0VBQ0MsNEJBQUE7RUFDQSx5QkFBQTtBQ2ZEO0FEaUJBO0VBQ0ksOEJBQUE7QUNkSjtBRGdCQTtFQUNJLHFDQUFBO0FDYko7QURlQTtFQUNJLHlCQUFBO0FDWko7QURjQTtFQUNJLHlGQUFBO0VBQ0EseUJBQUE7QUNYSjtBRGFBO0VBQ0kseUZBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEWUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDVEo7QURXQTs7RUFFSSx3QkFBQTtFQUNBLFNBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL2FkZC1pbmZvL2FkZC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0Rm9udDogYXZlbmlyTGlnaHQ7XG4kbWVkaXVtRm9udDogYXZlbmlyTWVkaXVtO1xuJGJsYWNrRm9udDogYXZlbmlyQmxhY2s7XG4kZm9udENvbG9yOiAjMDAwMDAwO1xuJGFjdGl2ZUZvbnRDb2xvcjogIzZjYTdiNjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmMGY1ZmE7XG4kY2FyZHNCR0NvbG9yOiB3aGl0ZTtcbiRzdWNjZXNzTWVzc2FnZTogIzAzZDc1NTtcbiRmYWlsdXJlTWVzc2FnZTogI2RkMzQ0NDtcbiR0aXRsZVNpemU6IDE1MHB4O1xuJHNlYXJjaEJhckZvbnRTaXplOiA0OHB4O1xuJHN1YnRpdGxlU2l6ZTogNDNweDtcbiRjYXJkc0ZvbnRTaXplOiAzMHB4O1xuJGNhdGVnb3J5Q2FyZEZvbnRTaXplOiAyMy43cHg7XG4kZmlsdGVyRm9udFNpemU6IDIxcHg7XG4kaW5mb0NhcmRGb250U2l6ZTogMTlweDtcbiRuYXZiYXJGb250U2l6ZTogMTVweDtcbiRmb290ZXJGb250U2l6ZTogMTJweDtcbiRib3JkZXJSYWRpdXNDYXJkczogMzJweDtcbiRtYXhXaWR0aDogMTIwMHB4O1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXZlbmlyTGlnaHQ7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAubGVmdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgIC50b3BCYXJMZWZ0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAubmF2QmFyTG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY4LjM1MnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDEuMDkxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlTWVudSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIC5zaWRlTWVudUJ0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGkuZmFzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bk9wdGlvbnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLnNpZGVNZW51SW5uZXJCdG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgICAgICAgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgLnRvcEJhclJpZ2h0SW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgLnNlbGxlcnNUaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXRlZ29yeUNhcmRGb250U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2ZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGxlcnNOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbGlnaHRGb250O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZpbHRlckZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKGJsYWNrLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAucHJvZmlsZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uTGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25UZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5teVByb2ZpbGVUaXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgNDBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHN1YnRpdGxlU2l6ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGJsYWNrRm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5teVByb2ZpbGVGb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTU1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXNDYXJkcztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIC5teVByb2ZpbGVNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3NNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc3VjY2Vzc01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRzdWNjZXNzTWVzc2FnZSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzdWNjZXNzTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZmFpbHVyZU1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRmYWlsdXJlTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGZhaWx1cmVNZXNzYWdlLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGZhaWx1cmVNZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5teVByb2ZpbGVGaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW0gIWltcG9ydGFudDtcbn1cbi5maWxlLWN0YSxcbi5maWxlLW5hbWUsXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAhaW1wb3J0YW50O1xufVxuLmZpbGUtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmFmdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAuNDM3NWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcDogMGVtICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0IHtcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0PmlucHV0IHtcbiAgICBwYWRkaW5nOiAuNDM3NWVtICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b20ge1xuICAgIHRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIHtcbiAgICBib3R0b206IC0xOTVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIHtcbiBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yICFpbXBvcnRhbnQ7XG4gY29sb3I6ICRmb250Q29sb3IgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93IHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzJDMkMyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlciwgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNDMkMyQzIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0MyQzJDMiAhaW1wb3J0YW50O1xufVxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkUHJvZHVjdENvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGY1ZmE7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnRvcEJhckxlZnRDb250YWluZXIgLm5hdkJhckxvZ28ge1xuICB3aWR0aDogNjguMzUycHg7XG4gIGhlaWdodDogNDEuMDkxNHB4O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiBpLmZhcyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciAuc2lkZU1lbnVJbm5lckJ0bi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnNlbGxlcnNUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAyMy43cHg7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lciAucHJvZmlsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIC5zZWxsZXJzTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiAjNmNhN2I2O1xuICBmaWxsOiAjNmNhN2I2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyBsaSAub3B0aW9uTGluZSB7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICMwMDAwMDA7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIC5vcHRpb25UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlVGl0bGUge1xuICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogNDNweDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlTWVzc2FnZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVNZXNzYWdlIC5zdWNjZXNzTWVzc2FnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwM2Q3NTU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMjE1LCA4NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDNkNzU1O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlTWVzc2FnZSAuZmFpbHVyZU1lc3NhZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMSU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGQzNDQ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgNTIsIDY4LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZDM0NDQ7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMge1xuICB3aWR0aDogODAlO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuY29udHJvbCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIGZvcm0gLmZpZWxkIC5jb250cm9sIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuYnV0dG9ucyAuaXMtaW5mbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuYnV0dG9ucyAuaXMtc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZmlsZS1jdGEsXG4uZmlsZS1uYW1lLFxuYnV0dG9uIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcjphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuNDM3NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDBlbSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0IHtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0ID4gaW5wdXQge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b20ge1xuICB0b3A6IDQwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIHtcbiAgYm90dG9tOiAtMTk1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tbWFya2VkIHtcbiAgYmFja2dyb3VuZDogI2YwZjVmYSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3ctd3JhcHBlciAubmctYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQzJDMkMyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVyLCAubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgLm5nLXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQzJDMkMyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQzJDMkMyICFpbXBvcnRhbnQ7XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-info',
                templateUrl: './add-info.component.html',
                styleUrls: ['./add-info.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/add-product/add-product.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/add-product/add-product.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddProductComponent {
    constructor(authService, router, firebaseAuth, firebase, firebaseStorage, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.firebaseStorage = firebaseStorage;
        this.formBuilder = formBuilder;
        this.sellersName = '';
        this.path = '';
        this.sellersLName = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.productForm = this.createProfileForm();
        this.loadSellersInfo();
    }
    ngOnInit() {
        $('.sideMenuBtn').on('click', function () {
            var hasOptions = $(this).hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
            }
            else {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
                $('.sideMenuInnerBtn').removeClass('active');
            }
        });
        $('.sideMenuInnerBtn').on('click', function () {
            var hasOptions = $('.sideMenuBtn').hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $('.sideMenuBtn.options').addClass('active');
            }
            $('.sideMenuInnerBtn').removeClass('active');
            $(this).addClass('active');
        });
        this.resetForm();
    }
    loadSellersInfo() {
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            this.sellersName = this.user['displayName'];
        })));
    }
    sideMenuOptionClicked() {
        var icon = $('.options').find('i.fas');
        var btnOptionsContainer = $('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            $('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    getPath(event) {
        this.path = event.target.files[0];
    }
    createProfileForm() {
        return this.formBuilder.group({
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35)
                ])
            ],
            description: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ])
            ],
            price: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            image: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
        });
    }
    onSubmit() {
        let Key;
        if (this.productForm.valid) {
            this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = data;
                this.Email = this.user['email'];
                yield this.firebase.database.ref('users').once('value', (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.Email) {
                            Key = childKey;
                        }
                    });
                });
                const fileName = '/products/' + Date.now();
                let uploadTask = yield this.firebaseStorage.upload(fileName, this.path);
                let url = yield uploadTask.ref.getDownloadURL();
                this.firebase.database.ref(`users/${Key}/company/products`).push({
                    name: this.productForm.controls.name.value,
                    description: this.productForm.controls.description.value,
                    price: this.productForm.controls.price.value,
                    image: url
                });
                this.firebase.database.ref(`companies/${Key}/products`).push({
                    name: this.productForm.controls.name.value,
                    description: this.productForm.controls.description.value,
                    price: this.productForm.controls.price.value,
                    image: url
                });
                const query = '.wrapper #successMessage';
                const successMessage = document.querySelector(query);
                successMessage.style.display = 'flex';
                this.resetForm();
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    this.router.navigate(['/sellers/products']);
                }, 1000);
            })));
        }
        else {
            const query = '.wrapper #failureMessage';
            const failureMessage = document.querySelector(query);
            failureMessage.style.display = 'flex';
            setTimeout(() => {
                failureMessage.style.display = 'none';
            }, 3000);
        }
    }
    resetForm(registerForm) {
        if (registerForm != null) {
            registerForm.reset();
        }
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
    validateField(controlName) {
        let control = this.productForm.controls[controlName];
        return control.invalid && control.touched;
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], inputs: { sellersName: "sellersName" }, decls: 68, vars: 15, consts: [[1, "wrapper"], [1, "addProductContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", 3, "click"], [1, "sideMenuBtn", "options", "active", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", 3, "click"], [1, "sideMenuInnerBtn", "active", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "myProfileInfoContainer"], [1, "myProfileTitle"], [1, "myProfileForm"], [1, "myProfileMessage"], ["id", "successMessage", 1, "successMessage"], ["id", "failureMessage", 1, "failureMessage"], [1, "myProfileFields"], [3, "formGroup"], [1, "field"], [1, "control"], ["type", "text", "placeholder", "Nombre", "formControlName", "name", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Descripci\u00F3n", "formControlName", "description", 1, "input", 3, "ngClass"], ["type", "number", "placeholder", "Precio", "formControlName", "price", 1, "input", 3, "ngClass"], [1, "file"], [1, "file-label"], ["type", "file", "placeholder", "Imagen", "formControlName", "image", "accept", "image/png, image/gif, image/jpeg", 1, "file-input", 3, "change"], [1, "file-cta", 3, "ngClass"], [1, "file-icon"], [1, "fas", "fa-upload"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "A\u00D1ADIR PRODUCTO/SERVICIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Se han guardado los datos correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Verifique que los campos est\u00E9n completos y correctos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_58_listener($event) { return ctx.getPath($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Subir foto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_66_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.validateField("name")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.validateField("description")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.validateField("price")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.validateField("image")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.productForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.addProductContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 515px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 10%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #03d755;\n  background: rgba(3, 215, 85, 0.3);\n  border-radius: 5px;\n  border: 1px solid #03d755;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .failureMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #dd3444;\n  background: rgba(221, 52, 68, 0.3);\n  border-radius: 5px;\n  border: 1px solid #dd3444;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n  padding-top: 7px;\n  height: 150px;\n  resize: none;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.addProductContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.file-cta[_ngcontent-%COMP%], .file-name[_ngcontent-%COMP%] {\n  padding: 0.5em 1em !important;\n}\n.file-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em !important;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja29mZmljZS9wcml2YXRlL2JhY2stb2ZmaWNlLWhvbWUvc2VjdGlvbnMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBO0VBQ0ksd0JBQUE7RUFDQSw4Q0FBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0VBQ0EsK0NBQUE7QUNyQko7QUR3QkE7RUFDSSx3QkFBQTtFQUNBLGtEQUFBO0FDdEJKO0FEeUJBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBeENjO0VBeUNkLHVCQUFBO0FDdkJKO0FEeUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFoQ087RUFpQ1AsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBdkRTO0VBd0RULGNBdERRO0FDZ0NaO0FEdUJJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkEzRFU7QUNzQ2xCO0FEc0JRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNwQlo7QURxQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNuQmhCO0FEc0JRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3BCWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXJGRTtFQXNGRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLHNDQUFBO0FDakJ4QjtBRG9CZ0I7RUFDSSxZQWpHTDtFQWtHSyxtQkFyR1I7QUNtRlo7QURxQlk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXBIRjtFQXFIRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksWUF4SFQ7RUF5SFMsbUJBQUE7QUNqQnhCO0FEdUJJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFySVU7RUFzSVYsK0JBQUE7QUNyQlI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkEvSU07RUFnSk4sZ0NBQUE7QUNwQlo7QURxQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDbkJoQjtBRG9CZ0I7RUFDSSx3QkEzSlI7RUE0SlEsaUJBakpHO0FDK0h2QjtBRG9CZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQnhCO0FEbUJvQjtFQUNJLHdCQXpLWjtFQTBLWSxlQTVKUDtBQzJJakI7QURtQm9CO0VBQ0ksY0EzS047RUE0S00sYUE1S047RUE2S00sMEJBQUE7QUNqQnhCO0FEcUJZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQXhMRDtFQXlMQyx3QkEvTEo7RUFnTUksZUFsTEM7RUFtTEQsa0JBQUE7RUFDQSw2RUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDakJ4QjtBRGtCd0I7RUFDSSxtQkE5TVY7QUM4TGxCO0FEa0J3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ2hCNUI7QURpQjRCO0VBQ0ksaUJBQUE7QUNmaEM7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QURxQlk7RUFDSSxxQkFBQTtFQUNBLGVBNU5EO0VBNk5DLHdCQXRPSjtBQ21OWjtBRHFCWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFoT0k7RUFpT0osaUJBN09EO0FDME5mO0FEb0JnQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQXpQUDtFQTBQTyxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqQnhCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FsUVA7RUFtUU8sa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDakJ4QjtBRG9CZ0I7RUFDSSxVQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0FDakJ4QjtBRG9CZ0M7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNsQnBDO0FEb0JnQztFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNsQnBDO0FEc0JnQztFQUNJLFlBQUE7RUFDQSxtQkFsU3hCO0VBbVN3Qix5QkFyU3ZCO0FDaVJiO0FEc0JnQztFQUNJLFlBQUE7RUFDQSxtQkF0U2xCO0VBdVNrQix5QkExU3ZCO0FDc1JiO0FEOEJBOztFQUVJLDZCQUFBO0FDM0JKO0FENkJBO0VBQ0ksOEJBQUE7QUMxQko7QUQ0QkE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDekJKO0FEMkJBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0Rm9udDogYXZlbmlyTGlnaHQ7XG4kbWVkaXVtRm9udDogYXZlbmlyTWVkaXVtO1xuJGJsYWNrRm9udDogYXZlbmlyQmxhY2s7XG4kZm9udENvbG9yOiAjMDAwMDAwO1xuJGFjdGl2ZUZvbnRDb2xvcjogIzZjYTdiNjtcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmMGY1ZmE7XG4kY2FyZHNCR0NvbG9yOiB3aGl0ZTtcbiRzdWNjZXNzTWVzc2FnZTogIzAzZDc1NTtcbiRmYWlsdXJlTWVzc2FnZTogI2RkMzQ0NDtcbiR0aXRsZVNpemU6IDE1MHB4O1xuJHNlYXJjaEJhckZvbnRTaXplOiA0OHB4O1xuJHN1YnRpdGxlU2l6ZTogNDNweDtcbiRjYXJkc0ZvbnRTaXplOiAzMHB4O1xuJGNhdGVnb3J5Q2FyZEZvbnRTaXplOiAyMy43cHg7XG4kZmlsdGVyRm9udFNpemU6IDIxcHg7XG4kaW5mb0NhcmRGb250U2l6ZTogMTlweDtcbiRuYXZiYXJGb250U2l6ZTogMTVweDtcbiRmb290ZXJGb250U2l6ZTogMTJweDtcbiRib3JkZXJSYWRpdXNDYXJkczogMzJweDtcbiRtYXhXaWR0aDogMTIwMHB4O1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXZlbmlyTGlnaHQ7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAubGVmdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgIC50b3BCYXJMZWZ0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAubmF2QmFyTG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY4LjM1MnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDEuMDkxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlTWVudSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIC5zaWRlTWVudUJ0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGkuZmFzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bk9wdGlvbnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLnNpZGVNZW51SW5uZXJCdG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgICAgICAgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgLnRvcEJhclJpZ2h0SW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgLnNlbGxlcnNUaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXRlZ29yeUNhcmRGb250U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2ZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGxlcnNOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbGlnaHRGb250O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZpbHRlckZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKGJsYWNrLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAucHJvZmlsZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uTGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25UZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5teVByb2ZpbGVUaXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgNDBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHN1YnRpdGxlU2l6ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGJsYWNrRm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5teVByb2ZpbGVGb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXNDYXJkcztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIC5teVByb2ZpbGVNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3NNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc3VjY2Vzc01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRzdWNjZXNzTWVzc2FnZSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzdWNjZXNzTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZmFpbHVyZU1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRmYWlsdXJlTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGZhaWx1cmVNZXNzYWdlLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGZhaWx1cmVNZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5teVByb2ZpbGVGaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5maWxlLWN0YSxcbi5maWxlLW5hbWUge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAhaW1wb3J0YW50O1xufVxuLmZpbGUtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xufVxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkUHJvZHVjdENvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGY1ZmE7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnRvcEJhckxlZnRDb250YWluZXIgLm5hdkJhckxvZ28ge1xuICB3aWR0aDogNjguMzUycHg7XG4gIGhlaWdodDogNDEuMDkxNHB4O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiBpLmZhcyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciAuc2lkZU1lbnVJbm5lckJ0bi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnNlbGxlcnNUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAyMy43cHg7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lciAucHJvZmlsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIC5zZWxsZXJzTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiAjNmNhN2I2O1xuICBmaWxsOiAjNmNhN2I2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyBsaSAub3B0aW9uTGluZSB7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICMwMDAwMDA7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIC5vcHRpb25UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlVGl0bGUge1xuICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogNDNweDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlTWVzc2FnZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVNZXNzYWdlIC5zdWNjZXNzTWVzc2FnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwM2Q3NTU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMjE1LCA4NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDNkNzU1O1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlTWVzc2FnZSAuZmFpbHVyZU1lc3NhZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMSU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGQzNDQ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgNTIsIDY4LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZDM0NDQ7XG59XG4uYWRkUHJvZHVjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMge1xuICB3aWR0aDogODAlO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuY29udHJvbCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuLmFkZFByb2R1Y3RDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIGZvcm0gLmZpZWxkIC5jb250cm9sIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuYnV0dG9ucyAuaXMtaW5mbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbn1cbi5hZGRQcm9kdWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyBmb3JtIC5maWVsZCAuYnV0dG9ucyAuaXMtc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbn1cblxuLmZpbGUtY3RhLFxuLmZpbGUtbmFtZSB7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbSAhaW1wb3J0YW50O1xufVxuXG4uZmlsZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbSAhaW1wb3J0YW50O1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/contact/contact.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/contact/contact.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactComponent {
    constructor(authService, router, firebaseAuth, firebase, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.formBuilder = formBuilder;
        this.sellersName = '';
        this.sellersLName = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.contactWebpage = '';
        this.contactWhatsapp = '';
        this.contactInstagram = '';
        this.contactFacebook = '';
        this.contactEmail = '';
        this.contactForm = this.createContactForm();
        this.loadSellersInfo();
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').on('click', function () {
            var hasOptions = jquery__WEBPACK_IMPORTED_MODULE_3__(this).hasClass('options');
            if (hasOptions) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').removeClass('active');
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').on('click', function () {
            var hasOptions = jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').hasClass('options');
            if (hasOptions) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn.options').addClass('active');
            }
            jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
        });
    }
    loadSellersInfo() {
        let Key;
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            this.sellersName = this.user['displayName'];
            yield this.firebase.database.ref('users').once('value', (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.Email) {
                        Key = childKey;
                        user.forEach((info => {
                            info.forEach((key => {
                                const keyChildKey = key.key;
                                if (keyChildKey == 'contact') {
                                    key.forEach((contactInfo => {
                                        const contactInfoChildKey = contactInfo.key;
                                        const contactInfoChildData = contactInfo.val();
                                        if (contactInfoChildKey == 'cellphoneNumber') {
                                            this.cellphoneNumber = contactInfoChildData;
                                        }
                                        if (contactInfoChildKey == 'website') {
                                            this.contactWebpage = contactInfoChildData;
                                        }
                                        if (contactInfoChildKey == 'email') {
                                            this.contactEmail = contactInfoChildData;
                                        }
                                        if (contactInfoChildKey == 'whatsapp') {
                                            this.contactWhatsapp = contactInfoChildData;
                                        }
                                        if (contactInfoChildKey == 'instagram') {
                                            this.contactInstagram = contactInfoChildData;
                                        }
                                        if (contactInfoChildKey == 'facebook') {
                                            this.contactFacebook = contactInfoChildData;
                                        }
                                    }));
                                }
                            }));
                        }));
                    }
                });
                this.contactForm.controls.cellphoneNumber.setValue(this.cellphoneNumber);
                this.contactForm.controls.email.setValue(this.contactEmail);
                this.contactForm.controls.website.setValue(this.contactWebpage);
                this.contactForm.controls.whatsapp.setValue(this.contactWhatsapp);
                this.contactForm.controls.instagram.setValue(this.contactInstagram);
                this.contactForm.controls.facebook.setValue(this.contactFacebook);
            });
        })));
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    createContactForm() {
        return this.formBuilder.group({
            cellphoneNumber: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9]/g),
                ])
            ],
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])
            ],
            website: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])
            ],
            whatsapp: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9]/g),
                ])
            ],
            instagram: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])
            ],
            facebook: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])
            ],
        });
    }
    sideMenuOptionClicked() {
        var icon = jquery__WEBPACK_IMPORTED_MODULE_3__('.options').find('i.fas');
        var btnOptionsContainer = jquery__WEBPACK_IMPORTED_MODULE_3__('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    onSubmit() {
        let Key;
        if (this.contactForm.valid) {
            this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = data;
                this.Email = this.user['email'];
                yield this.firebase.database.ref('users').once('value', (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.Email) {
                            Key = childKey;
                        }
                    });
                });
                this.firebase.database.ref(`users/${Key}/company/contact`).update({
                    cellphoneNumber: this.contactForm.controls.cellphoneNumber.value,
                    email: this.contactForm.controls.email.value,
                    website: this.contactForm.controls.website.value,
                    whatsapp: this.contactForm.controls.whatsapp.value,
                    instagram: this.contactForm.controls.instagram.value,
                    facebook: this.contactForm.controls.facebook.value,
                });
                this.firebase.database.ref(`companies/${Key}`).update({
                    cellphoneNumber: this.contactForm.controls.cellphoneNumber.value,
                    email: this.contactForm.controls.email.value,
                    website: this.contactForm.controls.website.value,
                    whatsapp: this.contactForm.controls.whatsapp.value,
                    instagram: this.contactForm.controls.instagram.value,
                    facebook: this.contactForm.controls.facebook.value,
                });
                this.loadSellersInfo();
                const query = '.wrapper #successMessage';
                const successMessage = document.querySelector(query);
                successMessage.style.display = 'flex';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            })));
        }
        else {
            const query = '.wrapper #failureMessage';
            const failureMessage = document.querySelector(query);
            failureMessage.style.display = 'flex';
            setTimeout(() => {
                failureMessage.style.display = 'none';
            }, 3000);
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
    validateField(controlName) {
        let control = this.contactForm.controls[controlName];
        return control.invalid && control.touched;
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], inputs: { sellersName: "sellersName" }, decls: 68, vars: 21, consts: [[1, "wrapper"], [1, "contactContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", 3, "click"], [1, "sideMenuBtn", "options", "active", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", 3, "click"], [1, "sideMenuInnerBtn", "active", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "contactInfoContainer"], [1, "contactTitle"], [1, "contactForm"], [1, "contactMessage"], ["id", "successMessage", 1, "successMessage"], ["id", "failureMessage", 1, "failureMessage"], [1, "contactFields"], [3, "formGroup"], [1, "field"], [1, "control"], ["type", "text", "placeholder", "Celular: 3101234567", "formControlName", "cellphoneNumber", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Correo electr\u00F3nico: cavaruvi@gmail.com", "formControlName", "email", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "P\u00E1gina web: www.cavaruvi.com", "formControlName", "website", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "WhatsApp: 3101234567", "formControlName", "whatsapp", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Instagram: cavaruvi", "formControlName", "instagram", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Facebook: cavaruvi", "formControlName", "facebook", 1, "input", 3, "ngClass"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "CONTACTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Se han guardado los datos correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Verifique que los campos est\u00E9n completos y correctos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_66_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.validateField("cellphoneNumber")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.validateField("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.validateField("website")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.validateField("whatsapp")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.validateField("instagram")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.validateField("facebook")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.contactContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.contactContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 515px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactMessage[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 10%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactMessage[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #03d755;\n  background: rgba(3, 215, 85, 0.3);\n  border-radius: 5px;\n  border: 1px solid #03d755;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactMessage[_ngcontent-%COMP%]   .failureMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #dd3444;\n  background: rgba(221, 52, 68, 0.3);\n  border-radius: 5px;\n  border: 1px solid #dd3444;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactFields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.contactContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .contactInfoContainer[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .contactFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSx3QkFBQTtFQUNBLDhDQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtBQ3JCSjtBRHdCQTtFQUNJLHdCQUFBO0VBQ0Esa0RBQUE7QUN0Qko7QUR5QkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDdkJKO0FEMEJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkF4Q2M7RUF5Q2QsdUJBQUE7QUN2Qko7QUR5QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQWhDTztFQWlDUCxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkF2RFM7RUF3RFQsY0F0RFE7QUNnQ1o7QUR1Qkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQTNEVTtBQ3NDbEI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ3BCWjtBRHFCWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ25CaEI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDcEJaO0FEcUJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBckZFO0VBc0ZGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbkJoQjtBRG9CZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksc0NBQUE7QUNqQnhCO0FEb0JnQjtFQUNJLFlBakdMO0VBa0dLLG1CQXJHUjtBQ21GWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcEhGO0VBcUhFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxZQXhIVDtFQXlIUyxtQkFBQTtBQ2pCeEI7QUR1Qkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQXJJVTtFQXNJViwrQkFBQTtBQ3JCUjtBRHNCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQS9JTTtFQWdKTixnQ0FBQTtBQ3BCWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLHdCQTNKUjtFQTRKUSxpQkFqSkc7QUMrSHZCO0FEb0JnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pCeEI7QURtQm9CO0VBQ0ksd0JBektaO0VBMEtZLGVBNUpQO0FDMklqQjtBRG1Cb0I7RUFDSSxjQTNLTjtFQTRLTSxhQTVLTjtFQTZLTSwwQkFBQTtBQ2pCeEI7QURxQlk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBeExEO0VBeUxDLHdCQS9MSjtFQWdNSSxlQWxMQztFQW1MRCxrQkFBQTtFQUNBLDZFQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNqQnhCO0FEa0J3QjtFQUNJLG1CQTlNVjtBQzhMbEI7QURrQndCO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDaEI1QjtBRGlCNEI7RUFDSSxpQkFBQTtBQ2ZoQztBRHNCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDcEJaO0FEcUJZO0VBQ0kscUJBQUE7RUFDQSxlQTdORDtFQThOQyx3QkF2T0o7QUNvTlo7QURxQlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWhPSTtFQWlPSixpQkE3T0Q7QUMwTmY7QURvQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBelBQO0VBMFBPLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2pCeEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWxRUDtFQW1RTyxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqQnhCO0FEb0JnQjtFQUNJLFVBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7QUNqQnhCO0FEb0JnQztFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ2xCcEM7QURzQmdDO0VBQ0ksWUFBQTtFQUNBLG1CQTNSeEI7RUE0UndCLHlCQTlSdkI7QUMwUWI7QURzQmdDO0VBQ0ksWUFBQTtFQUNBLG1CQS9SbEI7RUFnU2tCLHlCQW5TdkI7QUMrUWI7QUQ4QkE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDM0JKO0FENkJBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodEZvbnQ6IGF2ZW5pckxpZ2h0O1xuJG1lZGl1bUZvbnQ6IGF2ZW5pck1lZGl1bTtcbiRibGFja0ZvbnQ6IGF2ZW5pckJsYWNrO1xuJGZvbnRDb2xvcjogIzAwMDAwMDtcbiRhY3RpdmVGb250Q29sb3I6ICM2Y2E3YjY7XG4kYmFja2dyb3VuZENvbG9yOiAjZjBmNWZhO1xuJGNhcmRzQkdDb2xvcjogd2hpdGU7XG4kc3VjY2Vzc01lc3NhZ2U6ICMwM2Q3NTU7XG4kZmFpbHVyZU1lc3NhZ2U6ICNkZDM0NDQ7XG4kdGl0bGVTaXplOiAxNTBweDtcbiRzZWFyY2hCYXJGb250U2l6ZTogNDhweDtcbiRzdWJ0aXRsZVNpemU6IDQzcHg7XG4kY2FyZHNGb250U2l6ZTogMzBweDtcbiRjYXRlZ29yeUNhcmRGb250U2l6ZTogMjMuN3B4O1xuJGZpbHRlckZvbnRTaXplOiAyMXB4O1xuJGluZm9DYXJkRm9udFNpemU6IDE5cHg7XG4kbmF2YmFyRm9udFNpemU6IDE1cHg7XG4kZm9vdGVyRm9udFNpemU6IDEycHg7XG4kYm9yZGVyUmFkaXVzQ2FyZHM6IDMycHg7XG4kbWF4V2lkdGg6IDEyMDBweDtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTM1LWxpZ2h0LnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtNjUtbWVkaXVtLnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC1zdGQtOTUtYmxhY2sub3RmKTtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFjdENvbnRlbnQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogJG1heFdpZHRoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgY29sb3I6ICRmb250Q29sb3I7XG4gICAgLmxlZnRDb250YWluZXIge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAudG9wQmFyTGVmdENvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgLm5hdkJhckxvZ28ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2OC4zNTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQxLjA5MTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2lkZU1lbnUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICAuc2lkZU1lbnVCdG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICAgICAgICAgICAgICBpLmZhcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4zcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG5PcHRpb25zQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC5zaWRlTWVudUlubmVyQnRuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWY0YmI2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICM2Y2E3YjY7XG4gICAgICAgIC50b3BCYXJSaWdodENvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgIC50b3BCYXJSaWdodEluZm8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIC5zZWxsZXJzVGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGJsYWNrRm9udDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkY2F0ZWdvcnlDYXJkRm9udFNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWxsZXJzTmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGJsYWNrRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG5hdmJhckZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZmlsZU9wdGlvbnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGxpZ2h0Rm9udDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmaWx0ZXJGb250U2l6ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYShibGFjaywgMC4yNiksIDAgMnB4IDEwcHggMCByZ2JhKGJsYWNrLCAwLjE2KTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLnByb2ZpbGVPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbkxpbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdEluZm9Db250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAuY29udGFjdFRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkc3VidGl0bGVTaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RGb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXNDYXJkcztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIC5jb250YWN0TWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzTWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHN1Y2Nlc3NNZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkc3VjY2Vzc01lc3NhZ2UsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc3VjY2Vzc01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZhaWx1cmVNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmFpbHVyZU1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRmYWlsdXJlTWVzc2FnZSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmYWlsdXJlTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFjdEZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdENvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhY3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbn1cbi5jb250YWN0Q29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGY1ZmE7XG59XG4uY29udGFjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnRvcEJhckxlZnRDb250YWluZXIgLm5hdkJhckxvZ28ge1xuICB3aWR0aDogNjguMzUycHg7XG4gIGhlaWdodDogNDEuMDkxNHB4O1xufVxuLmNvbnRhY3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG4uY29udGFjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4uY29udGFjdENvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiBpLmZhcyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xufVxuLmNvbnRhY3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmNvbnRhY3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb250YWN0Q29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3RDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciAuc2lkZU1lbnVJbm5lckJ0bi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLmNvbnRhY3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnNlbGxlcnNUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAyMy43cHg7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lciAucHJvZmlsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIC5zZWxsZXJzTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbnRhY3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiAjNmNhN2I2O1xuICBmaWxsOiAjNmNhN2I2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xufVxuLmNvbnRhY3RDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyBsaSAub3B0aW9uTGluZSB7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItbGVmdDogc29saWQgMnB4ICMwMDAwMDA7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIC5vcHRpb25UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdFRpdGxlIHtcbiAgbWFyZ2luOiAyNXB4IDAgNDBweCAwO1xuICBmb250LXNpemU6IDQzcHg7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLmNvbnRhY3RJbmZvQ29udGFpbmVyIC5jb250YWN0Rm9ybSB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdEZvcm0gLmNvbnRhY3RNZXNzYWdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLmNvbnRhY3RJbmZvQ29udGFpbmVyIC5jb250YWN0Rm9ybSAuY29udGFjdE1lc3NhZ2UgLnN1Y2Nlc3NNZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDElO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAzZDc1NTtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAyMTUsIDg1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2Q3NTU7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdEZvcm0gLmNvbnRhY3RNZXNzYWdlIC5mYWlsdXJlTWVzc2FnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNkZDM0NDQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIxLCA1MiwgNjgsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkMzQ0NDtcbn1cbi5jb250YWN0Q29udGVudCAucmlnaHRDb250YWluZXIgLmNvbnRhY3RJbmZvQ29udGFpbmVyIC5jb250YWN0Rm9ybSAuY29udGFjdEZpZWxkcyB7XG4gIHdpZHRoOiA4MCU7XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdEZvcm0gLmNvbnRhY3RGaWVsZHMgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3RDb250ZW50IC5yaWdodENvbnRhaW5lciAuY29udGFjdEluZm9Db250YWluZXIgLmNvbnRhY3RGb3JtIC5jb250YWN0RmllbGRzIGZvcm0gLmZpZWxkIC5jb250cm9sIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdEZvcm0gLmNvbnRhY3RGaWVsZHMgZm9ybSAuZmllbGQgLmJ1dHRvbnMgLmlzLWluZm8ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG59XG4uY29udGFjdENvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5jb250YWN0SW5mb0NvbnRhaW5lciAuY29udGFjdEZvcm0gLmNvbnRhY3RGaWVsZHMgZm9ybSAuZmllbGQgLmJ1dHRvbnMgLmlzLXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM2Y2E3YjY7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/my-profile/my-profile.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/my-profile/my-profile.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = function (a0) { return { "is-invalid": a0 }; };
class MyProfileComponent {
    constructor(authService, router, firebaseAuth, firebase, formBuilder, userService) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.sellersName = '';
        this.sellersLName = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.myProfileInfoForm = this.createProfileForm();
        this.loadSellersInfo();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(await this.userService.getUsers().toPromise());
            jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').on('click', function () {
                var hasOptions = jquery__WEBPACK_IMPORTED_MODULE_3__(this).hasClass('options');
                if (hasOptions) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').removeClass('active');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').on('click', function () {
                var hasOptions = jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').hasClass('options');
                if (hasOptions) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn').removeClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuBtn.options').addClass('active');
                }
                jquery__WEBPACK_IMPORTED_MODULE_3__('.sideMenuInnerBtn').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
            });
        });
    }
    loadSellersInfo() {
        let Key;
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            yield this.firebase.database.ref('users').once('value', (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.Email) {
                        Key = childKey;
                        user.forEach((info => {
                            const infoChildKey = info.key;
                            const infoChildData = info.val();
                            if (infoChildKey == 'name') {
                                this.sellersName = infoChildData;
                                this.user.updateProfile({
                                    displayName: this.sellersName
                                });
                            }
                            if (infoChildKey == 'lname') {
                                this.sellersLName = infoChildData;
                            }
                            if (infoChildKey == 'id') {
                                this.id = infoChildData;
                            }
                            if (infoChildKey == 'cellphoneNumber') {
                                this.cellphoneNumber = infoChildData;
                            }
                            if (infoChildKey == 'password') {
                                this.password = infoChildData;
                            }
                        }));
                    }
                });
                this.myProfileInfoForm.controls.email.setValue(this.Email);
                this.myProfileInfoForm.controls.name.setValue(this.sellersName);
                this.myProfileInfoForm.controls.lname.setValue(this.sellersLName);
                this.myProfileInfoForm.controls.id.setValue(this.id);
                this.myProfileInfoForm.controls.cellphoneNumber.setValue(this.cellphoneNumber);
            });
        })));
    }
    sideMenuOptionClicked() {
        var icon = jquery__WEBPACK_IMPORTED_MODULE_3__('.options').find('i.fas');
        var btnOptionsContainer = jquery__WEBPACK_IMPORTED_MODULE_3__('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    createProfileForm() {
        return this.formBuilder.group({
            email: [
                {
                    value: '',
                    disabled: true
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            lname: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ],
            id: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9]/g)
                ])
            ],
            cellphoneNumber: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9]/g)
                ])
            ]
        });
    }
    onSubmit() {
        let Key;
        if (this.myProfileInfoForm.valid) {
            this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = data;
                this.Email = this.user['email'];
                yield this.firebase.database.ref('users').once('value', (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.Email) {
                            Key = childKey;
                            this.firebase.database.ref(`users/${Key}`).update({
                                name: this.myProfileInfoForm.controls.name.value,
                                lname: this.myProfileInfoForm.controls.lname.value,
                                id: this.myProfileInfoForm.controls.id.value,
                                cellphoneNumber: this.myProfileInfoForm.controls.cellphoneNumber.value
                            });
                        }
                    });
                });
            })));
            this.loadSellersInfo();
            const query = '.wrapper #successMessage';
            const successMessage = document.querySelector(query);
            successMessage.style.display = 'flex';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
        else {
            const query = '.wrapper #failureMessage';
            const failureMessage = document.querySelector(query);
            failureMessage.style.display = 'flex';
            setTimeout(() => {
                failureMessage.style.display = 'none';
            }, 3000);
        }
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
    validateField(controlName) {
        let control = this.myProfileInfoForm.controls[controlName];
        return control.invalid && control.touched;
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], inputs: { sellersName: "sellersName" }, decls: 65, vars: 18, consts: [[1, "wrapper"], [1, "myProfileContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", "active", 3, "click"], [1, "sideMenuBtn", "options", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "myProfileInfoContainer"], [1, "myProfileTitle"], [1, "myProfileForm"], [1, "myProfileMessage"], ["id", "successMessage", 1, "successMessage"], ["id", "failureMessage", 1, "failureMessage"], [1, "myProfileFields"], [3, "formGroup"], [1, "field"], [1, "control"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Nombre", "formControlName", "name", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Apellido", "formControlName", "lname", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "C\u00E9dula", "formControlName", "id", 1, "input", 3, "ngClass"], ["type", "text", "placeholder", "Celular", "formControlName", "cellphoneNumber", 1, "input", 3, "ngClass"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "MI PERFIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Se han guardado los datos correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Verifique que los campos est\u00E9n completos y correctos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_63_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myProfileInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.validateField("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.validateField("name")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.validateField("lname")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.validateField("id")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx.validateField("cellphoneNumber")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.myProfileInfoForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.myProfileContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.myProfileContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 455px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 10%;\n  margin-bottom: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #03d755;\n  background: rgba(3, 215, 85, 0.3);\n  border-radius: 5px;\n  border: 1px solid #03d755;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileMessage[_ngcontent-%COMP%]   .failureMessage[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 1%;\n  display: none;\n  align-items: center;\n  color: #dd3444;\n  background: rgba(221, 52, 68, 0.3);\n  border-radius: 5px;\n  border: 1px solid #dd3444;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.myProfileContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSx3QkFBQTtFQUNBLDhDQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtBQ3JCSjtBRHdCQTtFQUNJLHdCQUFBO0VBQ0Esa0RBQUE7QUN0Qko7QUR5QkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDdkJKO0FEMEJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkF4Q2M7RUF5Q2QsdUJBQUE7QUN2Qko7QUR5QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQWhDTztFQWlDUCxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkF2RFM7RUF3RFQsY0F0RFE7QUNnQ1o7QUR1Qkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQTNEVTtBQ3NDbEI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ3BCWjtBRHFCWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ25CaEI7QURzQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDcEJaO0FEcUJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBckZFO0VBc0ZGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbkJoQjtBRG9CZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksc0NBQUE7QUNqQnhCO0FEb0JnQjtFQUNJLFlBakdMO0VBa0dLLG1CQXJHUjtBQ21GWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBcEhGO0VBcUhFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxZQXhIVDtFQXlIUyxtQkFBQTtBQ2pCeEI7QUR1Qkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQXJJVTtFQXNJViwrQkFBQTtBQ3JCUjtBRHNCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQS9JTTtFQWdKTixnQ0FBQTtBQ3BCWjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNuQmhCO0FEb0JnQjtFQUNJLHdCQTNKUjtFQTRKUSxpQkFqSkc7QUMrSHZCO0FEb0JnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pCeEI7QURtQm9CO0VBQ0ksd0JBektaO0VBMEtZLGVBNUpQO0FDMklqQjtBRG1Cb0I7RUFDSSxjQTNLTjtFQTRLTSxhQTVLTjtFQTZLTSwwQkFBQTtBQ2pCeEI7QURxQlk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBeExEO0VBeUxDLHdCQS9MSjtFQWdNSSxlQWxMQztFQW1MRCxrQkFBQTtFQUNBLDZFQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ25CaEI7QURvQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNqQnhCO0FEa0J3QjtFQUNJLG1CQTlNVjtBQzhMbEI7QURrQndCO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDaEI1QjtBRGlCNEI7RUFDSSxpQkFBQTtBQ2ZoQztBRHNCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDcEJaO0FEcUJZO0VBQ0kscUJBQUE7RUFDQSxlQTdORDtFQThOQyx3QkF2T0o7QUNvTlo7QURxQlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWhPSTtFQWlPSixpQkE3T0Q7QUMwTmY7QURvQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbEJwQjtBRG1Cb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBelBQO0VBMFBPLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2pCeEI7QURtQm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWxRUDtFQW1RTyxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNqQnhCO0FEb0JnQjtFQUNJLFVBQUE7QUNsQnBCO0FEbUJvQjtFQUNJLFdBQUE7QUNqQnhCO0FEb0JnQztFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ2xCcEM7QURzQmdDO0VBQ0ksWUFBQTtFQUNBLG1CQTNSeEI7RUE0UndCLHlCQTlSdkI7QUMwUWI7QURzQmdDO0VBQ0ksWUFBQTtFQUNBLG1CQS9SbEI7RUFnU2tCLHlCQW5TdkI7QUMrUWI7QUQ4QkE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDM0JKO0FENkJBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodEZvbnQ6IGF2ZW5pckxpZ2h0O1xuJG1lZGl1bUZvbnQ6IGF2ZW5pck1lZGl1bTtcbiRibGFja0ZvbnQ6IGF2ZW5pckJsYWNrO1xuJGZvbnRDb2xvcjogIzAwMDAwMDtcbiRhY3RpdmVGb250Q29sb3I6ICM2Y2E3YjY7XG4kYmFja2dyb3VuZENvbG9yOiAjZjBmNWZhO1xuJGNhcmRzQkdDb2xvcjogd2hpdGU7XG4kc3VjY2Vzc01lc3NhZ2U6ICMwM2Q3NTU7XG4kZmFpbHVyZU1lc3NhZ2U6ICNkZDM0NDQ7XG4kdGl0bGVTaXplOiAxNTBweDtcbiRzZWFyY2hCYXJGb250U2l6ZTogNDhweDtcbiRzdWJ0aXRsZVNpemU6IDQzcHg7XG4kY2FyZHNGb250U2l6ZTogMzBweDtcbiRjYXRlZ29yeUNhcmRGb250U2l6ZTogMjMuN3B4O1xuJGZpbHRlckZvbnRTaXplOiAyMXB4O1xuJGluZm9DYXJkRm9udFNpemU6IDE5cHg7XG4kbmF2YmFyRm9udFNpemU6IDE1cHg7XG4kZm9vdGVyRm9udFNpemU6IDEycHg7XG4kYm9yZGVyUmFkaXVzQ2FyZHM6IDMycHg7XG4kbWF4V2lkdGg6IDEyMDBweDtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTM1LWxpZ2h0LnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtNjUtbWVkaXVtLnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC1zdGQtOTUtYmxhY2sub3RmKTtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubXlQcm9maWxlQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAubGVmdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgIC50b3BCYXJMZWZ0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAubmF2QmFyTG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY4LjM1MnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDEuMDkxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlTWVudSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIC5zaWRlTWVudUJ0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGkuZmFzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bk9wdGlvbnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLnNpZGVNZW51SW5uZXJCdG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgICAgICAgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgLnRvcEJhclJpZ2h0SW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgLnNlbGxlcnNUaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXRlZ29yeUNhcmRGb250U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2ZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGxlcnNOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbGlnaHRGb250O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZpbHRlckZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKGJsYWNrLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAucHJvZmlsZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uTGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25UZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLm15UHJvZmlsZVRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkc3VidGl0bGVTaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm15UHJvZmlsZUZvcm0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c0NhcmRzO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgLm15UHJvZmlsZU1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAuc3VjY2Vzc01lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzdWNjZXNzTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHN1Y2Nlc3NNZXNzYWdlLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHN1Y2Nlc3NNZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mYWlsdXJlTWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZhaWx1cmVNZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZmFpbHVyZU1lc3NhZ2UsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZmFpbHVyZU1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm15UHJvZmlsZUZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtMzUtbGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC02NS1tZWRpdW0udHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LXN0ZC05NS1ibGFjay5vdGYpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubXlQcm9maWxlQ29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubXlQcm9maWxlQ29udGVudCAubGVmdENvbnRhaW5lciB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICM2Y2E3YjY7XG59XG4ubXlQcm9maWxlQ29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMGY1ZmE7XG59XG4ubXlQcm9maWxlQ29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciAubmF2QmFyTG9nbyB7XG4gIHdpZHRoOiA2OC4zNTJweDtcbiAgaGVpZ2h0OiA0MS4wOTE0cHg7XG59XG4ubXlQcm9maWxlQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubXlQcm9maWxlQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLnNpZGVNZW51QnRuIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4gLmljb24gaS5mYXMge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMC4zcztcbn1cbi5teVByb2ZpbGVDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5idG5PcHRpb25zQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5idG5PcHRpb25zQ29udGFpbmVyIC5zaWRlTWVudUlubmVyQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuYnRuT3B0aW9uc0NvbnRhaW5lciAuc2lkZU1lbnVJbm5lckJ0bi5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzZjYTdiNjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAuc2VsbGVyc1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDIzLjdweDtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lciAucHJvZmlsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXIgLnNlbGxlcnNOYW1lIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXI6aG92ZXIge1xuICBjb2xvcjogIzZjYTdiNjtcbiAgZmlsbDogIzZjYTdiNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDI0cHggMCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciAucHJvZmlsZU9wdGlvbnMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIHtcbiAgaGVpZ2h0OiA2NSU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzAwMDAwMDtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyBsaSAub3B0aW9uTGluZSAub3B0aW9uVGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlVGl0bGUge1xuICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogNDNweDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA0NTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlTWVzc2FnZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZU1lc3NhZ2UgLnN1Y2Nlc3NNZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDElO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAzZDc1NTtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAyMTUsIDg1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2Q3NTU7XG59XG4ubXlQcm9maWxlQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZU1lc3NhZ2UgLmZhaWx1cmVNZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDElO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2RkMzQ0NDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjEsIDUyLCA2OCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGQzNDQ0O1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMge1xuICB3aWR0aDogODAlO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgZm9ybSAuZmllbGQgLmNvbnRyb2wgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbn1cbi5teVByb2ZpbGVDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIGZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1pbmZvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuLm15UHJvZmlsZUNvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgZm9ybSAuZmllbGQgLmJ1dHRvbnMgLmlzLXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM2Y2E3YjY7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/products/products.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/products/products.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-responsive-carousel */ "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");












function ProductsComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 4, product_r4.price, "COP", "symbol", "1.0-0"), " ");
} }
function ProductsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "carousel", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_div_41_div_2_Template, 10, 9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arrows", true)("arrowsOutside", true)("margin", 5)("cellsToShow", 3)("height", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
function ProductsComponent_ng_template_42_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](10, 4, product_r7.price, "COP", "symbol", "1.0-0"), " ");
} }
function ProductsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "carousel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_ng_template_42_div_2_Template, 11, 9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arrows", false)("margin", 5)("cellsToShow", 3)("height", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.products);
} }
class ProductsComponent {
    constructor(authService, router, firebaseAuth, firebase, firebaseStorage, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.firebaseStorage = firebaseStorage;
        this.formBuilder = formBuilder;
        this.sellersName = '';
        this.path = '';
        this.sellersLName = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.active = 0;
        this.products = [];
        this.myProfileInfoForm = this.createProfileForm();
        this.loadProductsInfo();
    }
    ngOnInit() {
        $('.sideMenuBtn').on('click', function () {
            var hasOptions = $(this).hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
            }
            else {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
                $('.sideMenuInnerBtn').removeClass('active');
            }
        });
        $('.sideMenuInnerBtn').on('click', function () {
            var hasOptions = $('.sideMenuBtn').hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $('.sideMenuBtn.options').addClass('active');
            }
            $('.sideMenuInnerBtn').removeClass('active');
            $(this).addClass('active');
        });
    }
    loadProductsInfo() {
        let Key;
        let products;
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            this.sellersName = this.user['displayName'];
            yield this.firebase.database.ref('users').once('value', (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.Email) {
                        Key = childKey;
                        user.forEach((info => {
                            const infoChildKey = info.key;
                            if (infoChildKey == 'company') {
                                info.forEach((company => {
                                    const companyKey = company.key;
                                    if (companyKey == 'products') {
                                        const productsData = company.val();
                                        this.products = Object.entries(productsData).map((pair) => {
                                            let key = pair[0];
                                            let product = pair[1];
                                            return {
                                                id: key,
                                                image: product.image,
                                                name: product.name,
                                                description: product.description,
                                                price: product.price
                                            };
                                        });
                                    }
                                }));
                            }
                            const infoChildData = info.val();
                        }));
                    }
                });
            });
        })));
    }
    sideMenuOptionClicked() {
        var icon = $('.options').find('i.fas');
        var btnOptionsContainer = $('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            $('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToAddProducts() {
        this.router.navigate(['/sellers/products/add']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    getPath(event) {
        this.path = event.target.files[0];
    }
    createProfileForm() {
        return this.formBuilder.group({
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            description: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            price: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
            image: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])
            ],
        });
    }
    onSubmit() {
        let Key;
        if (this.myProfileInfoForm.valid) {
            this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = data;
                this.Email = this.user['email'];
                yield this.firebase.database.ref('users').once('value', (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.Email) {
                            Key = childKey;
                        }
                    });
                });
                const fileName = '/file' + Math.random() + this.user['email'];
                this.firebaseStorage.upload(fileName, this.path).then(() => {
                    this.firebase.database.ref(`users/${Key}/company/products`).push({
                        name: this.myProfileInfoForm.controls.name.value,
                        description: this.myProfileInfoForm.controls.description.value,
                        price: this.myProfileInfoForm.controls.price.value,
                        image: fileName
                    });
                });
            })));
            const query = '.wrapper #successMessage';
            const successMessage = document.querySelector(query);
            successMessage.style.display = 'flex';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
        else {
            const query = '.wrapper #failureMessage';
            const failureMessage = document.querySelector(query);
            failureMessage.style.display = 'flex';
            setTimeout(() => {
                failureMessage.style.display = 'none';
            }, 3000);
        }
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
    validateField(controlName) {
        let control = this.myProfileInfoForm.controls[controlName];
        return control.invalid && control.touched;
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { sellersName: "sellersName" }, decls: 48, vars: 3, consts: [[1, "wrapper"], [1, "productsContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", 3, "click"], [1, "sideMenuBtn", "options", "active", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", 3, "click"], [1, "sideMenuInnerBtn", "active", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "myProfileInfoContainer"], [1, "myProfileTitle"], [1, "myProfileForm"], [1, "myProfileFields"], [1, "productsContainer"], ["class", "if", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "field"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "click"], [1, "if"], [3, "arrows", "arrowsOutside", "margin", "cellsToShow", "height"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], [1, "productCards"], ["alt", "", "srcset", "", 3, "src"], [1, "overlay"], [1, "productInfo"], [3, "arrows", "margin", "cellsToShow", "height"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "PRODUCTOS/SERVICIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProductsComponent_div_41_Template, 3, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ProductsComponent_ng_template_42_Template, 3, 5, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_46_listener() { return ctx.goToAddProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.productsContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 385px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  float: left;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 225px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 100%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%] {\n  width: 225px;\n  height: 225px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%] {\n  width: 215px;\n  height: 215px;\n  background-color: #edeef0;\n  border-radius: 32px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n  width: 100%;\n  border-radius: 32px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.9;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 215px;\n  height: 215px;\n  opacity: 0;\n  transition: 0.5s ease;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #6ca7b6;\n  text-align: center;\n  font-size: 20px;\n  font-family: avenirMedium;\n  font-weight: bold;\n  color: #000000;\n  border-radius: 32px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: avenirLight;\n  font-weight: bold;\n  color: #000000;\n  width: 80%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .productsContainer[_ngcontent-%COMP%]   .if[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .productCards[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: avenirMedium;\n  font-weight: bold;\n  color: #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n  padding-top: 7px;\n  height: 150px;\n  resize: none;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja29mZmljZS9wcml2YXRlL2JhY2stb2ZmaWNlLWhvbWUvc2VjdGlvbnMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBO0VBQ0ksd0JBQUE7RUFDQSw4Q0FBQTtBQ3JCSjtBRHdCQTtFQUNJLHlCQUFBO0VBQ0EsK0NBQUE7QUN0Qko7QUR5QkE7RUFDSSx3QkFBQTtFQUNBLGtEQUFBO0FDdkJKO0FEMEJBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ3hCSjtBRDJCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBekNjO0VBMENkLHVCQUFBO0FDeEJKO0FEMEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFoQ087RUFpQ1AsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBeERTO0VBeURULGNBdkRRO0FDZ0NaO0FEd0JJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkE1RFU7QUNzQ2xCO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNyQlo7QURzQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNwQmhCO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3JCWjtBRHNCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXRGRTtFQXVGRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCaEI7QURxQmdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLHNDQUFBO0FDbEJ4QjtBRHFCZ0I7RUFDSSxZQWxHTDtFQW1HSyxtQkF0R1I7QUNtRlo7QURzQlk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNwQmhCO0FEcUJnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQXJIRjtFQXNIRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CcEI7QURvQm9CO0VBQ0ksWUF6SFQ7RUEwSFMsbUJBQUE7QUNsQnhCO0FEd0JJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkF0SVU7RUF1SVYsK0JBQUE7QUN0QlI7QUR1QlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFoSk07RUFpSk4sZ0NBQUE7QUNyQlo7QURzQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDcEJoQjtBRHFCZ0I7RUFDSSx3QkE1SlI7RUE2SlEsaUJBakpHO0FDOEh2QjtBRHFCZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbkJwQjtBRG9Cb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNsQnhCO0FEb0JvQjtFQUNJLHdCQTFLWjtFQTJLWSxlQTVKUDtBQzBJakI7QURvQm9CO0VBQ0ksY0E1S047RUE2S00sYUE3S047RUE4S00sMEJBQUE7QUNsQnhCO0FEc0JZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQXpMRDtFQTBMQyx3QkFoTUo7RUFpTUksZUFsTEM7RUFtTEQsa0JBQUE7RUFDQSw2RUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNwQmhCO0FEcUJnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDbEJ4QjtBRG1Cd0I7RUFDSSxtQkEvTVY7QUM4TGxCO0FEbUJ3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtBQ2pCNUI7QURrQjRCO0VBQ0ksaUJBQUE7QUNoQmhDO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDckJaO0FEc0JZO0VBQ0kscUJBQUE7RUFDQSxlQTVORDtFQTZOQyx3QkF2T0o7QUNtTlo7QURzQlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBaE9JO0VBaU9KLGlCQTlPRDtBQzBOZjtBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ25CeEI7QURvQndCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2xCNUI7QURtQjRCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNqQmhDO0FEbUJnQztFQUNJLFlBQUE7RUFDQSxhQUFBO0FDakJwQztBRGtCb0M7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQXhRMUI7RUF5UTBCLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNoQnhDO0FEaUJ3QztFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDZjVDO0FEa0I0QztFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNoQmhEO0FEbUJ3QztFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFuVDFCO0VBb1QwQixrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkF6VC9CO0VBMFQrQixpQkFBQTtFQUNBLGNBelRoQztFQTBUZ0MsbUJBQUE7QUNqQjVDO0FEbUI0QztFQUNJLGVBL1MvQjtFQWdUK0Isd0JBalVwQztFQWtVb0MsaUJBQUE7RUFDQSxjQWhVcEM7RUFpVW9DLFVBQUE7QUNqQmhEO0FEb0I0QztFQUNJLGVBdlQvQjtFQXdUK0IseUJBeFVuQztFQXlVbUMsaUJBQUE7RUFDQSxjQXhVcEM7QUNzVFo7QUQ2QndCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDM0I1QjtBRDZCd0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDM0I1QjtBRCtCd0I7RUFDSSxZQUFBO0VBQ0EsbUJBbFdoQjtFQW1XZ0IseUJBcldmO0FDd1ViO0FEK0J3QjtFQUNJLFlBQUE7RUFDQSxtQkF0V1Y7RUF1V1UseUJBMVdmO0FDNlViO0FEcUNBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQ2xDSjtBRG9DQTs7RUFFSSx3QkFBQTtFQUNBLFNBQUE7QUNqQ0oiLCJmaWxlIjoic3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaWdodEZvbnQ6IGF2ZW5pckxpZ2h0O1xuJG1lZGl1bUZvbnQ6IGF2ZW5pck1lZGl1bTtcbiRibGFja0ZvbnQ6IGF2ZW5pckJsYWNrO1xuJGZvbnRDb2xvcjogIzAwMDAwMDtcbiRhY3RpdmVGb250Q29sb3I6ICM2Y2E3YjY7XG4kYmFja2dyb3VuZENvbG9yOiAjZjBmNWZhO1xuJGNhcmRzQkdDb2xvcjogd2hpdGU7XG4kc3VjY2Vzc01lc3NhZ2U6ICMwM2Q3NTU7XG4kZmFpbHVyZU1lc3NhZ2U6ICNkZDM0NDQ7XG4kcHJvZHVjdENhcmQ6ICNlZGVlZjA7XG4kdGl0bGVTaXplOiAxNTBweDtcbiRzZWFyY2hCYXJGb250U2l6ZTogNDhweDtcbiRzdWJ0aXRsZVNpemU6IDQzcHg7XG4kY2FyZHNGb250U2l6ZTogMzBweDtcbiRjYXRlZ29yeUNhcmRGb250U2l6ZTogMjMuN3B4O1xuJGZpbHRlckZvbnRTaXplOiAyMXB4O1xuJGluZm9DYXJkRm9udFNpemU6IDE5cHg7XG4kbmF2YmFyRm9udFNpemU6IDE1cHg7XG4kZm9vdGVyRm9udFNpemU6IDEycHg7XG4kYm9yZGVyUmFkaXVzQ2FyZHM6IDMycHg7XG4kbWF4V2lkdGg6IDEyMDBweDtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGF2ZW5pckxpZ2h0O1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTM1LWxpZ2h0LnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtNjUtbWVkaXVtLnR0Zik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJCbGFjaztcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC1zdGQtOTUtYmxhY2sub3RmKTtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgIGNvbG9yOiAkZm9udENvbG9yO1xuICAgIC5sZWZ0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgLnRvcEJhckxlZnRDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIC5uYXZCYXJMb2dvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjguMzUycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MS4wOTE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGVNZW51IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgLnNpZGVNZW51QnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgICAgaS5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDAuM3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuT3B0aW9uc0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAuc2lkZU1lbnVJbm5lckJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVmNGJiNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHRDb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjNmNhN2I2O1xuICAgICAgICAudG9wQmFyUmlnaHRDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAudG9wQmFyUmlnaHRJbmZvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAuc2VsbGVyc1RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRibGFja0ZvbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGNhdGVnb3J5Q2FyZEZvbnRTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZmlsZUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbGVyc05hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRibGFja0ZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRuYXZiYXJGb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRsaWdodEZvbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZmlsdGVyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoYmxhY2ssIDAuMjYpLCAwIDJweCAxMHB4IDAgcmdiYShibGFjaywgMC4xNik7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC5wcm9maWxlT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI0cHggMCAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25MaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvblRleHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm15UHJvZmlsZUluZm9Db250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLm15UHJvZmlsZVRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMCA0MHB4IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkc3VidGl0bGVTaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm15UHJvZmlsZUZvcm0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzODVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c0NhcmRzO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgLm15UHJvZmlsZUZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RzQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pZntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy96LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtY2VsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyNXB4OyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0Q2FyZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcm9kdWN0Q2FyZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGl0dWxvIG1heGltbyAzNSBjYXJhY3RlcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0SW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRuYXZiYXJGb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbGlnaHRGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01heGltbyAxMDAgY2FyYWN0ZXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXMtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmlzLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgNnB4IHJlZDtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTGlnaHQ7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTM1LWxpZ2h0LnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtNjUtbWVkaXVtLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC1zdGQtOTUtYmxhY2sub3RmKTtcbn1cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3RzQ29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnRvcEJhckxlZnRDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICM2Y2E3YjY7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjBmNWZhO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciAubmF2QmFyTG9nbyB7XG4gIHdpZHRoOiA2OC4zNTJweDtcbiAgaGVpZ2h0OiA0MS4wOTE0cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLnNpZGVNZW51QnRuIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiBpLmZhcyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLnNpZGVNZW51QnRuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5idG5PcHRpb25zQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNWY0YmI2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAuc2VsbGVyc1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDIzLjdweDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXIgLnByb2ZpbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXIgLnNlbGxlcnNOYW1lIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiAjNmNhN2I2O1xuICBmaWxsOiAjNmNhN2I2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIHtcbiAgaGVpZ2h0OiA2NSU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzAwMDAwMDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIC5vcHRpb25UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVUaXRsZSB7XG4gIG1hcmdpbjogMjVweCAwIDQwcHggMDtcbiAgZm9udC1zaXplOiA0M3B4O1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMzg1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYgY2Fyb3VzZWwge1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGwge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMjI1cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGwgLnByb2R1Y3RDYXJkcyB7XG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGwgLnByb2R1Y3RDYXJkcyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgLnByb2R1Y3RzQ29udGFpbmVyIC5pZiBjYXJvdXNlbCAuY2Fyb3VzZWwtY2VsbCAucHJvZHVjdENhcmRzOmhvdmVyIC5vdmVybGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgLnByb2R1Y3RzQ29udGFpbmVyIC5pZiBjYXJvdXNlbCAuY2Fyb3VzZWwtY2VsbCAucHJvZHVjdENhcmRzIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Y2E3YjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5wcm9kdWN0c0NvbnRhaW5lciAuaWYgY2Fyb3VzZWwgLmNhcm91c2VsLWNlbGwgLnByb2R1Y3RDYXJkcyAub3ZlcmxheSAucHJvZHVjdEluZm8ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogODAlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAucHJvZHVjdHNDb250YWluZXIgLmlmIGNhcm91c2VsIC5jYXJvdXNlbC1jZWxsIC5wcm9kdWN0Q2FyZHMgLm92ZXJsYXkgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5jb250cm9sIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAuZmllbGQgLmNvbnRyb2wgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcmVzaXplOiBub25lO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1pbmZvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1zdWNjZXNzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNmNhN2I2O1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/backoffice/private/back-office-home/sections/shop-info/shop-info.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/backoffice/private/back-office-home/sections/shop-info/shop-info.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ShopInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopInfoComponent", function() { return ShopInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ShopInfoComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.logoImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ShopInfoComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 50);
} }
class ShopInfoComponent {
    constructor(authService, router, firebaseAuth, firebase, firebaseStorage, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.firebaseStorage = firebaseStorage;
        this.formBuilder = formBuilder;
        this.companyName = 'Nombre negocio';
        this.companyDescription = '';
        this.categorySelected = [
            { id: 1, name: 'Categoría' },
        ];
        this.selected = [
            { id: 1, name: 'Tipo negocio' },
        ];
        this.logoImage = '';
        this.backgImage = '';
        this.sellersName = '';
        this.path = '';
        this.sellersLName = '';
        this.password = '';
        this.countMore = 0;
        this.clicked = 0;
        this.active = 0;
        this.products = [];
        this.loadCompanyInfo();
    }
    ngOnInit() {
        $('.sideMenuBtn').on('click', function () {
            var hasOptions = $(this).hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
            }
            else {
                $('.sideMenuBtn').removeClass('active');
                $(this).addClass('active');
                $('.sideMenuInnerBtn').removeClass('active');
            }
        });
        $('.sideMenuInnerBtn').on('click', function () {
            var hasOptions = $('.sideMenuBtn').hasClass('options');
            if (hasOptions) {
                $('.sideMenuBtn').removeClass('active');
                $('.sideMenuBtn.options').addClass('active');
            }
            $('.sideMenuInnerBtn').removeClass('active');
            $(this).addClass('active');
        });
    }
    loadCompanyInfo() {
        let Key;
        let products;
        this.firebaseAuth.user.subscribe(((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = data;
            this.Email = this.user['email'];
            yield this.firebase.database.ref('users').once('value', (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.Email) {
                        Key = childKey;
                        user.forEach((company => {
                            const companyChildKey = company.key;
                            const companyChildData = company.val();
                            company.forEach((data => {
                                const dataChildKey = data.key;
                                if (dataChildKey == 'info') {
                                    data.forEach((info => {
                                        const infoChildKey = info.key;
                                        const infoChildData = info.val();
                                        if (infoChildKey == 'name') {
                                            this.companyName = infoChildData;
                                        }
                                        if (infoChildKey == 'description') {
                                            this.companyDescription = infoChildData;
                                        }
                                        if (infoChildKey == 'category') {
                                            this.categorySelected = [
                                                { id: 1, name: infoChildData },
                                            ];
                                        }
                                        if (infoChildKey == 'type') {
                                            this.selected = [
                                                { id: 1, name: infoChildData },
                                            ];
                                        }
                                        if (infoChildKey == 'logo') {
                                            this.logoImage = infoChildData;
                                        }
                                        if (infoChildKey == 'banner') {
                                            this.backgImage = infoChildData;
                                        }
                                    }));
                                }
                            }));
                            if (companyChildKey == 'name') {
                                this.sellersName = companyChildData;
                                this.user.updateProfile({
                                    displayName: this.sellersName
                                });
                            }
                        }));
                    }
                });
            });
        })));
    }
    sideMenuOptionClicked() {
        var icon = $('.options').find('i.fas');
        var btnOptionsContainer = $('.btnOptionsContainer');
        if (this.clicked == 0) {
            icon.css('transform', 'rotate(-90deg)');
            btnOptionsContainer.css('transform', 'scaleY(1)');
            btnOptionsContainer.css('opacity', '1');
            this.clicked = 1;
        }
        else {
            $('i.fas').css('transform', 'rotate(0deg)');
            btnOptionsContainer.css('transform', 'scaleY(0)');
            btnOptionsContainer.css('opacity', '0');
            this.clicked = 0;
        }
    }
    goToMyProfile() {
        this.router.navigate(['/sellers/myprofile']);
    }
    goToShopInfo() {
        this.router.navigate(['/sellers/shopinfo']);
    }
    goToMyProducts() {
        this.router.navigate(['/sellers/products']);
    }
    goToAddInfo() {
        this.router.navigate(['/sellers/shopinfo/add']);
    }
    goToContact() {
        this.router.navigate(['/sellers/contact']);
    }
    getPath(event) {
        this.path = event.target.files[0];
    }
    dropDownOptions() {
        const query = '.wrapper .profileOptionsContainer';
        const sellersName = document.querySelector(query);
        if (this.countMore == 0) {
            this.countMore = 1;
            sellersName.style.transform = 'scale(1)';
            sellersName.style.opacity = 1;
        }
        else {
            this.countMore = 0;
            sellersName.style.transform = 'scale(0)';
            sellersName.style.opacity = 0;
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/login']);
        });
    }
}
ShopInfoComponent.ɵfac = function ShopInfoComponent_Factory(t) { return new (t || ShopInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
ShopInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShopInfoComponent, selectors: [["app-shop-info"]], inputs: { sellersName: "sellersName" }, decls: 70, vars: 8, consts: [[1, "wrapper"], [1, "productsContent"], [1, "leftContainer"], [1, "topBarLeftContainer"], ["src", "/assets/img/cavaNavBarLogo.svg", "alt", "", "srcset", "", 1, "navBarLogo"], [1, "sideMenu"], [1, "sideMenuBtn", 3, "click"], [1, "sideMenuBtn", "options", "active", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-left"], [1, "btnOptionsContainer"], [1, "sideMenuInnerBtn", "active", 3, "click"], [1, "sideMenuInnerBtn", 3, "click"], [1, "rightContainer"], [1, "topBarRightContainer"], [1, "topBarRightInfo"], [1, "sellersTitle"], [1, "profileContainer", 3, "click"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "profile"], ["d", "m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"], [1, "sellersName"], [1, "profileOptionsContainer"], [1, "profileOptions"], [1, "logOut", 3, "click"], [1, "optionLine"], [1, "optionText"], [1, "myProfileInfoContainer"], [1, "myProfileTitle"], [1, "myProfileForm"], [1, "myProfileFields"], [1, "leftMain"], [1, "main"], [1, "backg"], ["alt", "", "srcset", "", 3, "src"], [1, "frontinfo"], [1, "information"], ["class", "logo", 4, "ngIf"], ["class", "logo", "style", "display: none", 4, "ngIf"], [1, "rightMain"], [1, "myShopInfoContainer"], [1, "myShopInfoForm"], [1, "myShopInfoFields"], [1, "field"], [1, "control"], ["placeholder", "Nombre negocio", "disabled", "", 1, "input", 3, "value"], ["type", "text", "placeholder", "Descripci\u00F3n", "disabled", "", 1, "input"], ["type", "text", "disabled", "", 1, "input", 3, "value"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "click"], [1, "logo"], [1, "logo", 2, "display", "none"]], template: function ShopInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_6_listener() { return ctx.goToMyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mi perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_8_listener() { return ctx.sideMenuOptionClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Negocio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_13_listener() { return ctx.goToShopInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informaci\u00F3n negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_15_listener() { return ctx.goToMyProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Productos/Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_17_listener() { return ctx.goToContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00C1rea de vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_div_click_24_listener() { return ctx.dropDownOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_li_click_31_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "INFORMACI\u00D3N NEGOCIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ShopInfoComponent_div_46_Template, 2, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ShopInfoComponent_div_47_Template, 1, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopInfoComponent_Template_button_click_68_listener() { return ctx.goToAddInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sellersName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.backgImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logoImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.logoImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("value", "", ctx.companyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.companyDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.categorySelected[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.selected[0].name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]], styles: ["@font-face {\n  font-family: avenirLight;\n  src: url(/assets/fonts/avenir-lt-35-light.ttf);\n}\n@font-face {\n  font-family: avenirMedium;\n  src: url(/assets/fonts/avenir-lt-65-medium.ttf);\n}\n@font-face {\n  font-family: avenirBlack;\n  src: url(/assets/fonts/avenir-lt-std-95-black.otf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  background: #f0f5fa;\n  justify-content: center;\n}\n.productsContent[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  font-family: avenirMedium;\n  color: #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: solid 1px #6ca7b6;\n  border-bottom: solid 1px #f0f5fa;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .topBarLeftContainer[_ngcontent-%COMP%]   .navBarLogo[_ngcontent-%COMP%] {\n  width: 68.352px;\n  height: 41.0914px;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 5%;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  transition: transform ease-in-out 0.3s;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .sideMenuBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: all 0.3s ease;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f5fa;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .leftContainer[_ngcontent-%COMP%]   .sideMenu[_ngcontent-%COMP%]   .btnOptionsContainer[_ngcontent-%COMP%]   .sideMenuInnerBtn.active[_ngcontent-%COMP%] {\n  color: white;\n  background: #5f4bb6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background: #f0f5fa;\n  border-right: solid 1px #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px;\n  background: #f0f5fa;\n  border-bottom: solid 1px #6ca7b6;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .sellersTitle[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 23.7px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .sellersName[_ngcontent-%COMP%] {\n  font-family: avenirBlack;\n  font-size: 15px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .topBarRightInfo[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]:hover {\n  color: #6ca7b6;\n  fill: #6ca7b6;\n  text-decoration: underline;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 60px;\n  position: absolute;\n  top: 100px;\n  right: 20px;\n  display: flex;\n  flex-flow: column;\n  padding: 15px 0;\n  background: white;\n  font-family: avenirLight;\n  font-size: 21px;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  transform-origin: right top;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  padding: 0px 24px 0 24px;\n  cursor: pointer;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f5fa;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%] {\n  height: 65%;\n  border-left: solid 2px #000000;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .topBarRightContainer[_ngcontent-%COMP%]   .profileOptionsContainer[_ngcontent-%COMP%]   .profileOptions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .optionLine[_ngcontent-%COMP%]   .optionText[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileTitle[_ngcontent-%COMP%] {\n  margin: 25px 0 40px 0;\n  font-size: 43px;\n  font-family: avenirBlack;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 550px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%] {\n  height: 85%;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 100%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%] {\n  width: 370px;\n  max-height: 240px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 240px;\n  width: 370px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100.5%;\n  width: 100.5%;\n  background-image: url(\"/assets/img/gradiente.svg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 233px;\n  width: 415px;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 76.1%;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-height: 30%;\n  max-width: 30%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin-top: 15%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .leftMain[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .backg[_ngcontent-%COMP%]   .frontinfo[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .companyinfo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  width: 80%;\n  color: #000000;\n  font-family: avenirMedium;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%] {\n  width: 49%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoTitle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-family: avenirBlack;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2%;\n  border-radius: 32px;\n  background: white;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n  padding-top: 7px;\n  height: 150px;\n  resize: none;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .myProfileFields[_ngcontent-%COMP%]   .rightMain[_ngcontent-%COMP%]   .myShopInfoContainer[_ngcontent-%COMP%]   .myShopInfoForm[_ngcontent-%COMP%]   .myShopInfoFields[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0.5em;\n  padding-top: 7px;\n  height: 150px;\n  resize: none;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #000000;\n  font-family: avenirMedium;\n}\n.productsContent[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .myProfileInfoContainer[_ngcontent-%COMP%]   .myProfileForm[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #6ca7b6;\n  font-family: avenirMedium;\n}\n  .input[disabled], .select[_ngcontent-%COMP%]   fieldset[disabled][_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]   select[disabled][_ngcontent-%COMP%], .textarea[disabled][_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  color: #C1C1C1;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n  border-color: #dc3545;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWxlbnRpbmF2aXZlcm9zL0RvY3VtZW50cy9Xb3Jrc3BhY2UvRGlwbG9tYWRvL2NhdmEvc3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9zaG9wLWluZm8vc2hvcC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYWNrb2ZmaWNlL3ByaXZhdGUvYmFjay1vZmZpY2UtaG9tZS9zZWN0aW9ucy9zaG9wLWluZm8vc2hvcC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUNJLHdCQUFBO0VBQ0EsOENBQUE7QUNyQko7QUR3QkE7RUFDSSx5QkFBQTtFQUNBLCtDQUFBO0FDdEJKO0FEeUJBO0VBQ0ksd0JBQUE7RUFDQSxrREFBQTtBQ3ZCSjtBRDBCQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUN4Qko7QUQyQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQXpDYztFQTBDZCx1QkFBQTtBQ3hCSjtBRDBCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBaENPO0VBaUNQLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQXhEUztFQXlEVCxjQXZEUTtBQ2dDWjtBRHdCSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBNURVO0FDc0NsQjtBRHVCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDckJaO0FEc0JZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDcEJoQjtBRHVCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNyQlo7QURzQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkF0RkU7RUF1RkYsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNwQmhCO0FEcUJnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDbkJwQjtBRG9Cb0I7RUFDSSxzQ0FBQTtBQ2xCeEI7QURxQmdCO0VBQ0ksWUFsR0w7RUFtR0ssbUJBdEdSO0FDbUZaO0FEc0JZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDcEJoQjtBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFySEY7RUFzSEUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFlBekhUO0VBMEhTLG1CQUFBO0FDbEJ4QjtBRHdCSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBdElVO0VBdUlWLCtCQUFBO0FDdEJSO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBaEpNO0VBaUpOLGdDQUFBO0FDckJaO0FEc0JZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ3BCaEI7QURxQmdCO0VBQ0ksd0JBNUpSO0VBNkpRLGlCQWpKRztBQzhIdkI7QURxQmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ25CcEI7QURvQm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbEJ4QjtBRG9Cb0I7RUFDSSx3QkExS1o7RUEyS1ksZUE1SlA7QUMwSWpCO0FEb0JvQjtFQUNJLGNBNUtOO0VBNktNLGFBN0tOO0VBOEtNLDBCQUFBO0FDbEJ4QjtBRHNCWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkF6TEQ7RUEwTEMsd0JBaE1KO0VBaU1JLGVBbExDO0VBbUxELGtCQUFBO0VBQ0EsNkVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDcEJoQjtBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDbkJwQjtBRG9Cb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ2xCeEI7QURtQndCO0VBQ0ksbUJBL01WO0FDOExsQjtBRG1Cd0I7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUNqQjVCO0FEa0I0QjtFQUNJLGlCQUFBO0FDaEJoQztBRHVCUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3JCWjtBRHNCWTtFQUNJLHFCQUFBO0VBQ0EsZUE1TkQ7RUE2TkMsd0JBdk9KO0FDbU5aO0FEc0JZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQWhPSTtFQWlPSixpQkE5T0Q7QUMwTmY7QURxQmdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNwQnBCO0FEcUJvQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDbkJ4QjtBRG9Cd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2xCNUI7QURtQjRCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2pCaEM7QURrQmdDO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDaEJwQztBRG1CZ0M7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUNsQnBDO0FEbUJvQztFQUNJLGFBQUE7RUFDQSxZQUFBO0FDakJ4QztBRG1Cb0M7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ2pCeEM7QURvQndDO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDbEI1QztBRG1CNEM7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2pCaEQ7QURvQndDO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxjQXBUaEM7RUFxVGdDLHlCQXZUL0I7QUNxU2I7QUQwQm9CO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN4QnhCO0FEeUJ3QjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3ZCNUI7QUR3QjRCO0VBQ0ksZUEzVGI7RUE0VGEsd0JBMVVwQjtBQ29UWjtBRHdCNEI7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFsVVo7RUFtVVksaUJBaFZqQjtBQzBUZjtBRHVCZ0M7RUFDSSxVQUFBO0FDckJwQztBRHNCb0M7RUFDSSxXQUFBO0FDcEJ4QztBRHVCZ0Q7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNyQnBEO0FEdUJnRDtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNyQnBEO0FEeUJnRDtFQUNJLFlBQUE7RUFDQSxtQkF6V3hDO0VBMFd3Qyx5QkE1V3ZDO0FDcVZiO0FEeUJnRDtFQUNJLFlBQUE7RUFDQSxtQkE3V2xDO0VBOFdrQyx5QkFqWHZDO0FDMFZiO0FEcUN3QjtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ25DNUI7QURxQ3dCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ25DNUI7QUR1Q3dCO0VBQ0ksWUFBQTtFQUNBLG1CQTVZaEI7RUE2WWdCLHlCQS9ZZjtBQzBXYjtBRHVDd0I7RUFDSSxZQUFBO0VBQ0EsbUJBaFpWO0VBaVpVLHlCQXBaZjtBQytXYjtBRDZDQTtFQUNJLGNBQUE7QUMxQ0o7QUQ0Q0E7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDekNKO0FEMkNBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQ3hDSiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvcHJpdmF0ZS9iYWNrLW9mZmljZS1ob21lL3NlY3Rpb25zL3Nob3AtaW5mby9zaG9wLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHRGb250OiBhdmVuaXJMaWdodDtcbiRtZWRpdW1Gb250OiBhdmVuaXJNZWRpdW07XG4kYmxhY2tGb250OiBhdmVuaXJCbGFjaztcbiRmb250Q29sb3I6ICMwMDAwMDA7XG4kYWN0aXZlRm9udENvbG9yOiAjNmNhN2I2O1xuJGJhY2tncm91bmRDb2xvcjogI2YwZjVmYTtcbiRjYXJkc0JHQ29sb3I6IHdoaXRlO1xuJHN1Y2Nlc3NNZXNzYWdlOiAjMDNkNzU1O1xuJGZhaWx1cmVNZXNzYWdlOiAjZGQzNDQ0O1xuJHByb2R1Y3RDYXJkOiAjZWRlZWYwO1xuJHRpdGxlU2l6ZTogMTUwcHg7XG4kc2VhcmNoQmFyRm9udFNpemU6IDQ4cHg7XG4kc3VidGl0bGVTaXplOiA0M3B4O1xuJGNhcmRzRm9udFNpemU6IDMwcHg7XG4kY2F0ZWdvcnlDYXJkRm9udFNpemU6IDIzLjdweDtcbiRmaWx0ZXJGb250U2l6ZTogMjFweDtcbiRpbmZvQ2FyZEZvbnRTaXplOiAxOXB4O1xuJG5hdmJhckZvbnRTaXplOiAxNXB4O1xuJGZvb3RlckZvbnRTaXplOiAxMnB4O1xuJGJvcmRlclJhZGl1c0NhcmRzOiAzMnB4O1xuJG1heFdpZHRoOiAxMjAwcHg7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC0zNS1saWdodC50dGYpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTY1LW1lZGl1bS50dGYpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtc3RkLTk1LWJsYWNrLm90Zik7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkbWVkaXVtRm9udDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAubGVmdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgIC50b3BCYXJMZWZ0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAubmF2QmFyTG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY4LjM1MnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDEuMDkxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlTWVudSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIC5zaWRlTWVudUJ0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGkuZmFzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjYXJkc0JHQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb250Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bk9wdGlvbnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLnNpZGVNZW51SW5uZXJCdG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNhcmRzQkdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjRiYjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggIzZjYTdiNjtcbiAgICAgICAgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYWN0aXZlRm9udENvbG9yO1xuICAgICAgICAgICAgLnRvcEJhclJpZ2h0SW5mbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgLnNlbGxlcnNUaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXRlZ29yeUNhcmRGb250U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb2ZpbGVDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGxlcnNOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbmF2YmFyRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZUZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlT3B0aW9uc0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkbGlnaHRGb250O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZpbHRlckZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKGJsYWNrLCAwLjI2KSwgMCAycHggMTBweCAwIHJnYmEoYmxhY2ssIDAuMTYpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAucHJvZmlsZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4IDAgMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uTGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRpb25UZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5teVByb2ZpbGVUaXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgNDBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHN1YnRpdGxlU2l6ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGJsYWNrRm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5teVByb2ZpbGVGb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXNDYXJkcztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgIC5teVByb2ZpbGVGaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAvL292ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgLmxlZnRNYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYWNrZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9udGluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAuNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvZ3JhZGllbnRlLnN2Z1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQwLCAyNDUsIDI1MCwgMSkgMiUsIHJnYmEoMjQ5LCAyMTksIDY5LCAwKSA4MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2LjElO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhZGRpbmctdG9wOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29tcGFueWluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZm9udENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0TWFpbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5teVNob3BJbmZvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm15U2hvcEluZm9UaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGluZm9DYXJkRm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYmxhY2tGb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXlTaG9wSW5mb0Zvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c0NhcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2FyZHNCR0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXlTaG9wSW5mb0ZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZvbnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG1lZGl1bUZvbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVGb250Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRtZWRpdW1Gb250O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuOjpuZy1kZWVwIC5pbnB1dFtkaXNhYmxlZF0sIC5zZWxlY3QgZmllbGRzZXRbZGlzYWJsZWRdIHNlbGVjdCwgLnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdLCAudGV4dGFyZWFbZGlzYWJsZWRdLCBmaWVsZHNldFtkaXNhYmxlZF0gLmlucHV0LCBmaWVsZHNldFtkaXNhYmxlZF0gLnNlbGVjdCBzZWxlY3QsIGZpZWxkc2V0W2Rpc2FibGVkXSAudGV4dGFyZWEge1xuICAgIGNvbG9yOiAjQzFDMUMxO1xufVxuLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYXZlbmlyTGlnaHQ7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udHMvYXZlbmlyLWx0LTM1LWxpZ2h0LnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9hdmVuaXItbHQtNjUtbWVkaXVtLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL2F2ZW5pci1sdC1zdGQtOTUtYmxhY2sub3RmKTtcbn1cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3RzQ29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pck1lZGl1bTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzZjYTdiNjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnRvcEJhckxlZnRDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICM2Y2E3YjY7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjBmNWZhO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAudG9wQmFyTGVmdENvbnRhaW5lciAubmF2QmFyTG9nbyB7XG4gIHdpZHRoOiA2OC4zNTJweDtcbiAgaGVpZ2h0OiA0MS4wOTE0cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5sZWZ0Q29udGFpbmVyIC5zaWRlTWVudSAuc2lkZU1lbnVCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLnNpZGVNZW51QnRuIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5zaWRlTWVudUJ0biAuaWNvbiBpLmZhcyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dCAwLjNzO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLnNpZGVNZW51QnRuLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLmxlZnRDb250YWluZXIgLnNpZGVNZW51IC5idG5PcHRpb25zQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAubGVmdENvbnRhaW5lciAuc2lkZU1lbnUgLmJ0bk9wdGlvbnNDb250YWluZXIgLnNpZGVNZW51SW5uZXJCdG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNWY0YmI2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZjBmNWZhO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMGY1ZmE7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmNhN2I2O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAuc2VsbGVyc1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDIzLjdweDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRJbmZvIC5wcm9maWxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXIgLnByb2ZpbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodEluZm8gLnByb2ZpbGVDb250YWluZXIgLnNlbGxlcnNOYW1lIHtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnRvcEJhclJpZ2h0SW5mbyAucHJvZmlsZUNvbnRhaW5lcjpob3ZlciB7XG4gIGNvbG9yOiAjNmNhN2I2O1xuICBmaWxsOiAjNmNhN2I2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJMaWdodDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAudG9wQmFyUmlnaHRDb250YWluZXIgLnByb2ZpbGVPcHRpb25zQ29udGFpbmVyIC5wcm9maWxlT3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMjRweCAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjVmYTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIHtcbiAgaGVpZ2h0OiA2NSU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzAwMDAwMDtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC50b3BCYXJSaWdodENvbnRhaW5lciAucHJvZmlsZU9wdGlvbnNDb250YWluZXIgLnByb2ZpbGVPcHRpb25zIGxpIC5vcHRpb25MaW5lIC5vcHRpb25UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVUaXRsZSB7XG4gIG1hcmdpbjogMjVweCAwIDQwcHggMDtcbiAgZm9udC1zaXplOiA0M3B4O1xuICBmb250LWZhbWlseTogYXZlbmlyQmxhY2s7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyB7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAubGVmdE1haW4ge1xuICB3aWR0aDogNDglO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5sZWZ0TWFpbiAubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5sZWZ0TWFpbiAubWFpbiAuYmFja2cge1xuICB3aWR0aDogMzcwcHg7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAubGVmdE1haW4gLm1haW4gLmJhY2tnIGltZyB7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICB3aWR0aDogMzcwcHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5sZWZ0TWFpbiAubWFpbiAuYmFja2cgLmZyb250aW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAuNSU7XG4gIHdpZHRoOiAxMDAuNSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2dyYWRpZW50ZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5sZWZ0TWFpbiAubWFpbiAuYmFja2cgLmZyb250aW5mbyBpbWcge1xuICBoZWlnaHQ6IDIzM3B4O1xuICB3aWR0aDogNDE1cHg7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5sZWZ0TWFpbiAubWFpbiAuYmFja2cgLmZyb250aW5mbyAuaW5mb3JtYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3Ni4xJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAubGVmdE1haW4gLm1haW4gLmJhY2tnIC5mcm9udGluZm8gLmluZm9ybWF0aW9uIC5sb2dvIHtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgLmxlZnRNYWluIC5tYWluIC5iYWNrZyAuZnJvbnRpbmZvIC5pbmZvcm1hdGlvbiAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAubGVmdE1haW4gLm1haW4gLmJhY2tnIC5mcm9udGluZm8gLmluZm9ybWF0aW9uIC5jb21wYW55aW5mbyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4ge1xuICB3aWR0aDogNDklO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4gLm15U2hvcEluZm9Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4gLm15U2hvcEluZm9Db250YWluZXIgLm15U2hvcEluZm9UaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IGF2ZW5pckJsYWNrO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAucmlnaHRNYWluIC5teVNob3BJbmZvQ29udGFpbmVyIC5teVNob3BJbmZvRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgLnJpZ2h0TWFpbiAubXlTaG9wSW5mb0NvbnRhaW5lciAubXlTaG9wSW5mb0Zvcm0gLm15U2hvcEluZm9GaWVsZHMge1xuICB3aWR0aDogODAlO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLm15UHJvZmlsZUZpZWxkcyAucmlnaHRNYWluIC5teVNob3BJbmZvQ29udGFpbmVyIC5teVNob3BJbmZvRm9ybSAubXlTaG9wSW5mb0ZpZWxkcyBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4gLm15U2hvcEluZm9Db250YWluZXIgLm15U2hvcEluZm9Gb3JtIC5teVNob3BJbmZvRmllbGRzIGZvcm0gLmZpZWxkIC5jb250cm9sIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4gLm15U2hvcEluZm9Db250YWluZXIgLm15U2hvcEluZm9Gb3JtIC5teVNob3BJbmZvRmllbGRzIGZvcm0gLmZpZWxkIC5jb250cm9sIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5wcm9kdWN0c0NvbnRlbnQgLnJpZ2h0Q29udGFpbmVyIC5teVByb2ZpbGVJbmZvQ29udGFpbmVyIC5teVByb2ZpbGVGb3JtIC5teVByb2ZpbGVGaWVsZHMgLnJpZ2h0TWFpbiAubXlTaG9wSW5mb0NvbnRhaW5lciAubXlTaG9wSW5mb0Zvcm0gLm15U2hvcEluZm9GaWVsZHMgZm9ybSAuZmllbGQgLmJ1dHRvbnMgLmlzLWluZm8ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBhdmVuaXJNZWRpdW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAubXlQcm9maWxlRmllbGRzIC5yaWdodE1haW4gLm15U2hvcEluZm9Db250YWluZXIgLm15U2hvcEluZm9Gb3JtIC5teVNob3BJbmZvRmllbGRzIGZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1zdWNjZXNzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNmNhN2I2O1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5jb250cm9sIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG4ucHJvZHVjdHNDb250ZW50IC5yaWdodENvbnRhaW5lciAubXlQcm9maWxlSW5mb0NvbnRhaW5lciAubXlQcm9maWxlRm9ybSAuZmllbGQgLmNvbnRyb2wgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcmVzaXplOiBub25lO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1pbmZvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuLnByb2R1Y3RzQ29udGVudCAucmlnaHRDb250YWluZXIgLm15UHJvZmlsZUluZm9Db250YWluZXIgLm15UHJvZmlsZUZvcm0gLmZpZWxkIC5idXR0b25zIC5pcy1zdWNjZXNzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNmNhN2I2O1xuICBmb250LWZhbWlseTogYXZlbmlyTWVkaXVtO1xufVxuXG46Om5nLWRlZXAgLmlucHV0W2Rpc2FibGVkXSwgLnNlbGVjdCBmaWVsZHNldFtkaXNhYmxlZF0gc2VsZWN0LCAuc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF0sIC50ZXh0YXJlYVtkaXNhYmxlZF0sIGZpZWxkc2V0W2Rpc2FibGVkXSAuaW5wdXQsIGZpZWxkc2V0W2Rpc2FibGVkXSAuc2VsZWN0IHNlbGVjdCwgZmllbGRzZXRbZGlzYWJsZWRdIC50ZXh0YXJlYSB7XG4gIGNvbG9yOiAjQzFDMUMxO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA2cHggcmVkO1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-shop-info',
                templateUrl: './shop-info.component.html',
                styleUrls: ['./shop-info.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, { sellersName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('http://localhost:5001/cava-ruvi/us-central1/api/users');
    }
    getUserInfo() {
        return this.http.get('http://localhost:5001/cava-ruvi/us-central1/api/users/userinfo');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=backoffice-private-back-office-home-back-office-home-module.js.map