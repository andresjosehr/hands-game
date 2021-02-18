(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/proyects/hands-game/app/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
        this.gameScore = 0;
    }
    ngOnChanges(model) {
        console.log(model);
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { gameScore: "gameScore" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 1, consts: [[1, "header"], [1, "header-content"], [1, "game-name"], [1, "score"], [1, "score-box"], [1, "score-title"], [1, "score-number"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ROCK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PAPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SCISSORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LIZARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SPOK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SCORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameScore);
    } }, styles: [".header[_ngcontent-%COMP%] {\n  border: 3px solid #606e85;\n  border-radius: 15px;\n  width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .game-name[_ngcontent-%COMP%] {\n  display: grid;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .game-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 23px;\n  line-height: 0.9;\n  font-weight: 700;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 140px;\n  height: 100px;\n  border-radius: 8px;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .score-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15px;\n  display: grid;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .score-box[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  letter-spacing: 4px;\n  color: #2a46c0;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .score-box[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 700;\n  color: #3b4363;\n}\n@media (max-width: 1000px) {\n  .header[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-bottom: 50px;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .game-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 75px;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .score-box[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .score-box[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFFQSxnQkFBQTtBQVFBLGdCQUFBO0FBTUEsbUJBQUE7QUNkQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFESTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBR1I7QUFEUTtFQUNJLGFBQUE7QUFHWjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVaO0FBQVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUVoQjtBQUFnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNEMUJSO0FDNEJaO0FBQWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0RoQ1Q7QUNrQ1g7QUFLQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBRk47RUFJVTtJQUNJLGVBQUE7RUFGZDtFQUlVO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFGZDtFQUlrQjtJQUNJLGVBQUE7RUFGdEI7RUFJa0I7SUFDSSxlQUFBO0VBRnRCO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyMgQ29sb3JzICovXG5cbi8qICMjIyBQcmltYXJ5ICovXG5cbiRzY2lzc29yc0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzksIDg5JSwgNDklKSAwJSwgaHNsKDQwLCA4NCUsIDUzJSkgMTAwJSk7XG4kcGFwZXJHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDIzMCwgODklLCA2MiUpIDAlLCBoc2woMjMwLCA4OSUsIDY1JSkgMTAwJSk7XG4kcm9ja0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzQ5LCA3MSUsIDUyJSkgMCUsIGhzbCgzNDksIDcwJSwgNTYlKSAxMDAlKTtcbiRsaXphcmRHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDI2MSwgNzMlLCA2MCUpIDAlLCBoc2woMjYxLCA3MiUsIDYzJSkgMTAwJSk7XG4kc3BvY2tHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDE4OSwgNTklLCA1MyUpIDAlLCBoc2woMTg5LCA1OCUsIDU3JSkgMTAwJSk7XG5cbi8qICMjIyBOZXV0cmFsICovXG5cbiRkYXJrVGV4dDogaHNsKDIyOSwgMjUlLCAzMSUpO1xuJHNjb3JlVGV4dDogaHNsKDIyOSwgNjQlLCA0NiUpO1xuJGhlYWRlck91dGxpbmU6IGhzbCgyMTcsIDE2JSwgNDUlKTtcblxuLyogIyMjIEJhY2tncm91bmQgKi9cblxuJHJhZGlhbEdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDMxLDU1LDg2LDEpIDAlLCByZ2JhKDIwLDIxLDU3LDEpIDEwMCUpO1xuIiwiQGltcG9ydCBcIi9zcmMvdmFyaWFibGVzXCI7XG5cbi5oZWFkZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICRoZWFkZXJPdXRsaW5lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgLmhlYWRlci1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuZ2FtZS1uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nYW1lLW5hbWUgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuOTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNjb3Jle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgICAgICAuc2NvcmUtYm94e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgICAgICAgICAgICAgLnNjb3JlLXRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2NvcmVUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2NvcmUtbnVtYmVye1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya1RleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xuICAgIC5oZWFkZXJ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIC5oZWFkZXItY29udGVudHtcbiAgICAgICAgICAgIC5nYW1lLW5hbWUgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2NvcmV7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIC5zY29yZS1ib3h7XG4gICAgICAgICAgICAgICAgICAgIC5zY29yZS10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2NvcmUtbnVtYmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { gameScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../body/body.component */ "NRw/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rules_modal_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules-modal/rules-modal.component */ "M4XZ");






function MainComponent_app_rules_modal_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-rules-modal", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rulesModalEventEmitter", function MainComponent_app_rules_modal_3_Template_app_rules_modal_rulesModalEventEmitter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.rulesModal(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor() {
        this.gameScore = 0;
        this.showRulesModal = false;
    }
    ngOnInit() {
    }
    rulesModal(showModal) {
        this.showRulesModal = showModal;
    }
    getGameScore(gameScore) {
        this.gameScore = gameScore;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 2, consts: [[1, "container"], [3, "gameScore"], [3, "gameScoreEmitter", "rulesModalEventEmitter"], [3, "rulesModalEventEmitter", 4, "ngIf"], [3, "rulesModalEventEmitter"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gameScoreEmitter", function MainComponent_Template_app_body_gameScoreEmitter_2_listener($event) { return ctx.getGameScore($event); })("rulesModalEventEmitter", function MainComponent_Template_app_body_rulesModalEventEmitter_2_listener() { return ctx.rulesModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_app_rules_modal_3_Template, 1, 0, "app-rules-modal", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameScore", ctx.gameScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRulesModal);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _rules_modal_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__["RulesModalComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  padding: 50px 20px;\n  padding-bottom: 0px;\n  margin: auto;\n}\n\n@media (max-width: 750px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGtCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M4XZ":
/*!*****************************************************************!*\
  !*** ./src/app/components/rules-modal/rules-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: RulesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesModalComponent", function() { return RulesModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");



class RulesModalComponent {
    constructor() {
        this.rulesModalEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    rulesModal() {
        this.rulesModalEventEmitter.emit();
    }
}
RulesModalComponent.ɵfac = function RulesModalComponent_Factory(t) { return new (t || RulesModalComponent)(); };
RulesModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesModalComponent, selectors: [["app-rules-modal"]], outputs: { rulesModalEventEmitter: "rulesModalEventEmitter" }, decls: 8, vars: 2, consts: [[1, "modal"], [1, "modal-container", "ani"], [1, "header", "ani"], ["src", "assets/images/icon-close.svg", "alt", "close", 3, "click"], [1, "content"], ["src", "assets/images/image-rules-bonus.svg", "alt", "rules"]], template: function RulesModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RULES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RulesModalComponent_Template_img_click_5_listener() { return ctx.rulesModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInTrigger", undefined)("@fadeOutTrigger", undefined);
    } }, styles: [".modal[_ngcontent-%COMP%] {\n  background: #0000006b;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: white;\n  width: 400px;\n  height: 463px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 10px;\n}\n.modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 40px;\n  padding-bottom: 20px;\n  padding-top: 30px;\n}\n.modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #3b4363;\n  font-weight: 700;\n}\n.modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 18px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 750px) {\n  .modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 0px !important;\n    position: absolute;\n  }\n  .modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n    margin-bottom: 50px;\n  }\n  .modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 50px;\n  }\n  .modal[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcnVsZXMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUVBLGdCQUFBO0FBUUEsZ0JBQUE7QUFNQSxtQkFBQTtBQ2ZBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSUo7QUFGSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJUjtBQUZRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUhZO0VBQ0ksZUFBQTtFQUNBLGNEbEJMO0VDbUJLLGdCQUFBO0FBS2hCO0FBSFk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS2hCO0FBRlE7RUFDSSxrQkFBQTtBQUlaO0FBRUE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxrQkFBQTtFQUFWO0VBQ1U7SUFDSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQUNkO0VBQWM7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUVsQjtFQUVjO0lBQ0ksWUFBQTtFQUFsQjtBQUNGIiwiZmlsZSI6InJ1bGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyMgQ29sb3JzICovXG5cbi8qICMjIyBQcmltYXJ5ICovXG5cbiRzY2lzc29yc0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzksIDg5JSwgNDklKSAwJSwgaHNsKDQwLCA4NCUsIDUzJSkgMTAwJSk7XG4kcGFwZXJHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDIzMCwgODklLCA2MiUpIDAlLCBoc2woMjMwLCA4OSUsIDY1JSkgMTAwJSk7XG4kcm9ja0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzQ5LCA3MSUsIDUyJSkgMCUsIGhzbCgzNDksIDcwJSwgNTYlKSAxMDAlKTtcbiRsaXphcmRHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDI2MSwgNzMlLCA2MCUpIDAlLCBoc2woMjYxLCA3MiUsIDYzJSkgMTAwJSk7XG4kc3BvY2tHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDE4OSwgNTklLCA1MyUpIDAlLCBoc2woMTg5LCA1OCUsIDU3JSkgMTAwJSk7XG5cbi8qICMjIyBOZXV0cmFsICovXG5cbiRkYXJrVGV4dDogaHNsKDIyOSwgMjUlLCAzMSUpO1xuJHNjb3JlVGV4dDogaHNsKDIyOSwgNjQlLCA0NiUpO1xuJGhlYWRlck91dGxpbmU6IGhzbCgyMTcsIDE2JSwgNDUlKTtcblxuLyogIyMjIEJhY2tncm91bmQgKi9cblxuJHJhZGlhbEdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDMxLDU1LDg2LDEpIDAlLCByZ2JhKDIwLDIxLDU3LDEpIDEwMCUpO1xuIiwiQGltcG9ydCBcIi9zcmMvdmFyaWFibGVzXCI7XG4ubW9kYWx7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDZiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgLm1vZGFsLWNvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgaGVpZ2h0OiA0NjNweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrVGV4dDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7XG4gICAgLm1vZGFse1xuICAgICAgICAubW9kYWwtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeInTrigger", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeOutTrigger", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(".ani", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rules-modal',
                templateUrl: './rules-modal.component.html',
                styleUrls: ['./rules-modal.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeInTrigger", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeOutTrigger", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(":leave", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(".ani", [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ])
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { rulesModalEventEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "NRw/":
/*!***************************************************!*\
  !*** ./src/app/components/body/body.component.ts ***!
  \***************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_animations_game_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/animations/game-animations */ "aAzp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BodyComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "YOU LOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BodyComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "YOU WIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BodyComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.restartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PLAY AGAIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BodyComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.restartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "NEXT ROUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class BodyComponent {
    constructor() {
        this.rulesModalEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gameScoreEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gameScore = 0;
        this.gameStep = 0;
        this.win = false;
        this.ramdomClass = "rock";
        this.hands = {
            scissors: {
                state: "initial",
                weakness: ["spock", "rock"],
                strength: ["paper", "lizard"]
            },
            spock: {
                state: "initial",
                weakness: ["lizard", "paper"],
                strength: ["scissors", "rock"]
            },
            paper: {
                state: "initial",
                weakness: ["scissors", "lizard"],
                strength: ["spock", "rock"]
            },
            lizard: {
                state: "initial",
                weakness: ["scissors", "rock"],
                strength: ["spock", "paper"]
            },
            rock: {
                state: "initial",
                weakness: ["spock", "paper"],
                strength: ["lizard", "scissors"]
            }
        };
        this.screenType = "desktop";
    }
    onResize() {
        this.screenType = 'desktop';
        this.screenType = window.innerWidth < 1000 ? "mobile" : "desktop";
    }
    ngOnInit() {
        this.screenType = window.innerWidth < 1000 ? "mobile" : "desktop";
    }
    startCombat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sleep(300);
            const interval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let hand = this.getRandomHand();
                while (hand === this.ramdomClass || hand === this.userPicked)
                    hand = this.getRandomHand();
                this.ramdomClass = hand;
            }), 100);
            yield this.sleep(3000);
            clearInterval(interval);
            yield this.sleep(500);
            this.gameStep = 2;
            this.defineResult();
        });
    }
    sleep(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(""); // ¡Todo salió bien!
            }, ms);
        });
    }
    getRandomHand() {
        return Object.keys(this.hands)[Math.floor(Math.random() * 5)];
    }
    rulesModal() {
        this.rulesModalEventEmitter.emit();
    }
    defineResult() {
        this.win = this.hands[this.userPicked].strength.find(hand => hand == this.ramdomClass) ? true : false;
        if (this.win) {
            this.gameScore++;
            this.gameScoreEmitter.emit(this.gameScore);
        }
    }
    restartGame() {
        this.gameStep = 0;
        if (!this.win) {
            this.gameScore = 0;
            this.gameScoreEmitter.emit(this.gameScore);
        }
    }
    changeHandState(hand) {
        this.userPicked = hand;
        this.gameStep = 1;
        if (this.gameStep == 1) {
            this.startCombat();
        }
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], hostBindings: function BodyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function BodyComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, outputs: { rulesModalEventEmitter: "rulesModalEventEmitter", gameScoreEmitter: "gameScoreEmitter" }, decls: 47, vars: 22, consts: [[1, "game", "initial"], [1, "scissors-box"], [1, "btn-container", "btn-container-scissors", 3, "click"], [1, "btn", "scissors-gradient"], [1, "btn-shadow-inside"], ["src", "assets/images/icon-scissors.svg", "alt", "scissors", 1, "btn-image"], [1, "spock-paper-box"], [1, "btn-container", "btn-container-spock", 3, "click"], [1, "btn", "spock-gradient"], ["src", "assets/images/icon-spock.svg", "alt", "spock", 1, "btn-image"], [1, "btn-container", "btn-container-paper", 3, "click"], [1, "btn", "paper-gradient"], ["src", "assets/images/icon-paper.svg", "alt", "paper", 1, "btn-image"], [1, "lizard-rock-box"], [1, "btn-container", "btn-container-lizard", 3, "click"], [1, "btn", "lizard-gradient"], ["src", "assets/images/icon-lizard.svg", "alt", "lizard", 1, "btn-image"], [1, "btn-container", "btn-container-rock", 3, "click"], [1, "btn", "rock-gradient"], ["src", "assets/images/icon-rock.svg", "alt", "rock", 1, "btn-image"], [1, "game", "combat"], [1, "combat-box"], [1, "picked-text"], [1, "btn-image", 3, "src", "alt"], [1, "result-container"], ["class", "result-text", 4, "ngIf"], ["class", "play-again-btn", 3, "click", 4, "ngIf"], [1, "rules"], [3, "click"], [1, "result-text"], [1, "play-again-btn", 3, "click"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_div_click_3_listener() { return ctx.changeHandState("scissors"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_div_click_8_listener() { return ctx.changeHandState("spock"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_div_click_12_listener() { return ctx.changeHandState("paper"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_div_click_17_listener() { return ctx.changeHandState("lizard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_div_click_21_listener() { return ctx.changeHandState("rock"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "YOU PICKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, BodyComponent_span_34_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BodyComponent_span_35_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, BodyComponent_button_36_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, BodyComponent_button_37_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "RIVAL PICKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_45_listener() { return ctx.rulesModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "RULES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("body " + ctx.screenType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@gameInitial", ctx.gameStep + "-" + ctx.screenType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@gameCombat", ctx.gameStep + "-" + ctx.screenType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@gameCombatResult", ctx.gameStep + "-" + ctx.screenType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-container btn-container-" + ctx.userPicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn " + ctx.userPicked + "-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/icon-" + ctx.userPicked + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.userPicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@gameCombatResultText", ctx.gameStep + "-" + ctx.screenType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-container btn-container-" + ctx.ramdomClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn " + ctx.ramdomClass + "-gradient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/icon-" + ctx.ramdomClass + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.ramdomClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".body[_ngcontent-%COMP%]   .game.initial[_ngcontent-%COMP%] {\n  background: url('bg-pentagon.svg');\n  background-repeat: no-repeat;\n  background-position-x: 50%;\n  background-position-y: 50%;\n  width: 500px;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  transform: translateY(200px);\n  justify-content: space-between;\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%] {\n  display: grid;\n  height: 130px;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .result-text[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 900;\n  color: white;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .play-again-btn[_ngcontent-%COMP%] {\n  background: white;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  height: 46px;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  transform: scale(1.75);\n  margin: initial !important;\n  width: initial !important;\n  padding-left: 16px !important;\n}\n.body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .picked-text[_ngcontent-%COMP%] {\n  transform: translate(0px, -50px);\n  display: block;\n  font-size: 12px;\n  color: white;\n  letter-spacing: 1px;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-spock[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-lizard[_ngcontent-%COMP%] {\n  margin-right: auto;\n  padding-left: 16px;\n  width: 128px;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-paper[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-rock[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding-left: 16px;\n  width: 128px;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-scissors[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 144px;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  height: 133px;\n  padding-top: 16px;\n  transform: translateY(0px);\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  transition: all 0.2s;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-box[_ngcontent-%COMP%] {\n  transform: translateY(-10px);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .spock-paper-box[_ngcontent-%COMP%] {\n  display: flex;\n  transform: translateY(-30px);\n  justify-content: space-between;\n  width: 450px;\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .lizard-rock-box[_ngcontent-%COMP%] {\n  display: flex;\n  transform: translateY(20px);\n  justify-content: space-between;\n  width: 350px;\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-shadow-inside[_ngcontent-%COMP%] {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 111px;\n  height: 106px;\n  border-radius: 69px;\n  margin: auto;\n  border-top: 5px solid #b9bdd6bf;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 50%;\n  width: 111px;\n  height: 111px;\n  position: relative;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-image[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  margin: auto;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -16px;\n  border-radius: inherit;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -2;\n  margin: -16px;\n  border-radius: inherit;\n  margin-bottom: -22px;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-gradient[_ngcontent-%COMP%]:before {\n  background: radial-gradient(circle, #ec9e0e 0%, #eca922 100%);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-gradient[_ngcontent-%COMP%]:after {\n  background: #c16e1f;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .spock-gradient[_ngcontent-%COMP%]:before {\n  background: radial-gradient(circle, #40b9ce 0%, #52bed1 100%);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .spock-gradient[_ngcontent-%COMP%]:after {\n  background: #2d8eae;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .paper-gradient[_ngcontent-%COMP%]:before {\n  background: radial-gradient(circle, #4865f4 0%, #5671f5 100%);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .paper-gradient[_ngcontent-%COMP%]:after {\n  background: #2944bc;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .lizard-gradient[_ngcontent-%COMP%]:before {\n  background: radial-gradient(circle, #834fe3 0%, #8c5de5 100%);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .lizard-gradient[_ngcontent-%COMP%]:after {\n  background: #5e37a9;\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .rock-gradient[_ngcontent-%COMP%]:before {\n  background: radial-gradient(circle, #dc2e4e 0%, #dd405d 100%);\n}\n.body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .rock-gradient[_ngcontent-%COMP%]:after {\n  background: #a11834;\n}\n.body[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 50px;\n  bottom: 0;\n  margin-bottom: 20px;\n}\n.body[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Barlow Semi Condensed\";\n  background-color: transparent;\n  outline: none;\n  border: 1px solid white;\n  padding: 10px 30px;\n  border-radius: 10px;\n  color: white;\n  font-size: 17px;\n  letter-spacing: 3px;\n  text-align: center;\n}\n@media (max-width: 1000px) {\n  .body[_ngcontent-%COMP%]   .game.initial[_ngcontent-%COMP%] {\n    width: 100%;\n    background-size: 200px !important;\n  }\n  .body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%] {\n    transform: translateY(80px);\n  }\n  .body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%] {\n    width: 200px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 150px;\n  }\n  .body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n    transform: scale(1.25);\n  }\n  .body[_ngcontent-%COMP%]   .game.combat[_ngcontent-%COMP%]   .combat-box[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]:nth-of-type(1) {\n    padding-left: 0px !important;\n    padding-right: 16px !important;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%] {\n    width: 100%;\n    background-size: 200px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n    height: 84px;\n    padding-top: 10px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-spock[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-lizard[_ngcontent-%COMP%] {\n    width: 81px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-paper[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-container-rock[_ngcontent-%COMP%] {\n    width: 81px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-box[_ngcontent-%COMP%] {\n    width: 100% !important;\n    transform: translateY(-5px) !important;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .spock-paper-box[_ngcontent-%COMP%] {\n    width: 296px !important;\n    transform: translateY(-15px) !important;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .lizard-rock-box[_ngcontent-%COMP%] {\n    width: 225px !important;\n    transform: translateY(5px) !important;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:before {\n    margin: -10px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:after {\n    margin: -10px;\n    margin-bottom: -14px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .scissors-box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .spock-paper-box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .lizard-rock-box[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-image[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .body[_ngcontent-%COMP%]   .game[_ngcontent-%COMP%]   .btn-shadow-inside[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  .body[_ngcontent-%COMP%]   .rules[_ngcontent-%COMP%] {\n    right: 0;\n    left: 0;\n    margin-left: 0;\n    margin-right: 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBRUEsZ0JBQUE7QUFRQSxnQkFBQTtBQU1BLG1CQUFBO0FDYkk7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBR1o7QUFEWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBR2hCO0FBRmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlwQjtBQUZnQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJcEI7QUFBWTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBRWhCO0FBQWdCO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVwQjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFHUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFHUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRlo7QUFLUTtFQUNJLDJCQUFBO0VBQ0Esb0JBQUE7QUFIWjtBQU1RO0VBQ0ksNEJBQUE7QUFKWjtBQU1ZO0VBQ0ksWUFBQTtBQUpoQjtBQVFRO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU5aO0FBU1E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUFo7QUFVUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQVJaO0FBV1E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVRaO0FBWVk7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVmhCO0FBYVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVhaO0FBYVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBWFo7QUFhUTtFQUNJLDZERGxLTztBQ3VKbkI7QUFhUTtFQUNJLG1CQUFBO0FBWFo7QUFhUTtFQUNJLDZERHBLSTtBQ3lKaEI7QUFhUTtFQUNJLG1CQUFBO0FBWFo7QUFhUTtFQUNJLDZERDdLSTtBQ2tLaEI7QUFhUTtFQUNJLG1CQUFBO0FBWFo7QUFhUTtFQUNJLDZERGpMSztBQ3NLakI7QUFhUTtFQUNJLG1CQUFBO0FBWFo7QUFhUTtFQUNJLDZERHhMRztBQzZLZjtBQWFRO0VBQ0ksbUJBQUE7QUFYWjtBQWVJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWVRO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYlo7QUFtQkE7RUFFUTtJQUNJLFdBQUE7SUFDQSxpQ0FBQTtFQWpCVjtFQXFCVTtJQUNJLDJCQUFBO0VBbkJkO0VBb0JjO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFsQmxCO0VBb0JjO0lBQ0ksc0JBQUE7RUFsQmxCO0VBb0JjO0lBQ0ksNEJBQUE7SUFDQSw4QkFBQTtFQWxCbEI7RUFzQk07SUFDSSxXQUFBO0lBQ0Esc0JBQUE7RUFwQlY7RUFzQlU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7RUFwQmQ7RUF1QlU7SUFDSSxXQUFBO0VBckJkO0VBdUJVO0lBQ0ksV0FBQTtFQXJCZDtFQXdCVTtJQUNJLHNCQUFBO0lBQ0Esc0NBQUE7RUF0QmQ7RUF3QlU7SUFDSSx1QkFBQTtJQUNBLHVDQUFBO0VBdEJkO0VBd0JVO0lBQ0ksdUJBQUE7SUFDQSxxQ0FBQTtFQXRCZDtFQXlCVTtJQUNJLGFBQUE7RUF2QmQ7RUEwQlU7SUFDSSxhQUFBO0lBQ0Esb0JBQUE7RUF4QmQ7RUEyQlU7SUFDSSxVQUFBO0VBekJkO0VBMkJVO0lBQ0ksVUFBQTtFQXpCZDtFQTJCVTtJQUNJLFVBQUE7RUF6QmQ7RUEyQlU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQXpCZDtFQTJCYztJQUNJLFVBQUE7RUF6QmxCO0VBNEJVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUExQmQ7RUE4Qk07SUFDSSxRQUFBO0lBQ0EsT0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUE1QlY7QUFDRiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyMgQ29sb3JzICovXG5cbi8qICMjIyBQcmltYXJ5ICovXG5cbiRzY2lzc29yc0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzksIDg5JSwgNDklKSAwJSwgaHNsKDQwLCA4NCUsIDUzJSkgMTAwJSk7XG4kcGFwZXJHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDIzMCwgODklLCA2MiUpIDAlLCBoc2woMjMwLCA4OSUsIDY1JSkgMTAwJSk7XG4kcm9ja0dyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBoc2woMzQ5LCA3MSUsIDUyJSkgMCUsIGhzbCgzNDksIDcwJSwgNTYlKSAxMDAlKTtcbiRsaXphcmRHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDI2MSwgNzMlLCA2MCUpIDAlLCBoc2woMjYxLCA3MiUsIDYzJSkgMTAwJSk7XG4kc3BvY2tHcmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgaHNsKDE4OSwgNTklLCA1MyUpIDAlLCBoc2woMTg5LCA1OCUsIDU3JSkgMTAwJSk7XG5cbi8qICMjIyBOZXV0cmFsICovXG5cbiRkYXJrVGV4dDogaHNsKDIyOSwgMjUlLCAzMSUpO1xuJHNjb3JlVGV4dDogaHNsKDIyOSwgNjQlLCA0NiUpO1xuJGhlYWRlck91dGxpbmU6IGhzbCgyMTcsIDE2JSwgNDUlKTtcblxuLyogIyMjIEJhY2tncm91bmQgKi9cblxuJHJhZGlhbEdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDMxLDU1LDg2LDEpIDAlLCByZ2JhKDIwLDIxLDU3LDEpIDEwMCUpO1xuIiwiQGltcG9ydCBcIi9zcmMvdmFyaWFibGVzXCI7XG5cbi5ib2R5e1xuICAgIC5nYW1lLmluaXRpYWx7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9iZy1wZW50YWdvbi5zdmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgIH0gICBcbiAgICAuZ2FtZS5jb21iYXR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuY29tYmF0LWJveHtcbiAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgICAgICAucmVzdWx0LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgLnJlc3VsdC10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBsYXktYWdhaW4tYnRue1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC5waWNrZWQtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTBweCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmdhbWV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIC5idG4tY29udGFpbmVyLXNwb2NrLCAuYnRuLWNvbnRhaW5lci1saXphcmR7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1jb250YWluZXItcGFwZXIsIC5idG4tY29udGFpbmVyLXJvY2t7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWNvbnRhaW5lci1zY2lzc29yc3tcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgICAgXG4gICAgICAgICAgICB3aWR0aDogMTQ0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGhlaWdodDogMTMzcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tY29udGFpbmVyOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2lzc29ycy1ib3h7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuXG4gICAgICAgICAgICAuYnRue1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zcG9jay1wYXBlci1ib3h7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXphcmQtcm9jay1ib3h7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi1zaGFkb3ctaW5zaWRle1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogMTExcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjlweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjYjliZGQ2YmY7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDExMXB4OyBcbiAgICAgICAgICAgIGhlaWdodDogMTExcHg7IFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC5idG4taW1hZ2V7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bjpiZWZvcmV7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBtYXJnaW46IC0xNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuOmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0yO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjJweDtcbiAgICAgICAgfVxuICAgICAgICAuc2Npc3NvcnMtZ3JhZGllbnQ6YmVmb3Jle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHNjaXNzb3JzR3JhZGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNjaXNzb3JzLWdyYWRpZW50OmFmdGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsKDI5ZGVnIDcyJSA0NCUpO1xuICAgICAgICB9XG4gICAgICAgIC5zcG9jay1ncmFkaWVudDpiZWZvcmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3BvY2tHcmFkaWVudDtcbiAgICAgICAgfVxuICAgICAgICAuc3BvY2stZ3JhZGllbnQ6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2woMTk1ZGVnIDU5JSA0MyUpO1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1ncmFkaWVudDpiZWZvcmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcGFwZXJHcmFkaWVudDtcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZ3JhZGllbnQ6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2woMjI5ZGVnIDY0JSA0NSUpO1xuICAgICAgICB9XG4gICAgICAgIC5saXphcmQtZ3JhZGllbnQ6YmVmb3Jle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpemFyZEdyYWRpZW50O1xuICAgICAgICB9XG4gICAgICAgIC5saXphcmQtZ3JhZGllbnQ6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWUzN2E5O1xuICAgICAgICB9XG4gICAgICAgIC5yb2NrLWdyYWRpZW50OmJlZm9yZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRyb2NrR3JhZGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnJvY2stZ3JhZGllbnQ6YWZ0ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTExODM0O1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLnJ1bGVze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJCYXJsb3cgU2VtaSBDb25kZW5zZWRcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcbiAgICAuYm9keXtcbiAgICAgICAgLmdhbWUuaW5pdGlhbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZ2FtZS5jb21iYXR7XG4gICAgICAgICAgICAuY29tYmF0LWJveHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODBweCk7XG4gICAgICAgICAgICAgICAgLnJlc3VsdC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idG4tY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuLWNvbnRhaW5lcjpudGgtb2YtdHlwZSgxKXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZ2FtZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcblxuICAgICAgICAgICAgLmJ0bi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWNvbnRhaW5lci1zcG9jaywgLmJ0bi1jb250YWluZXItbGl6YXJke1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bi1jb250YWluZXItcGFwZXIsIC5idG4tY29udGFpbmVyLXJvY2t7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zY2lzc29ycy1ib3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgIWltcG9ydGFudDsgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zcG9jay1wYXBlci1ib3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI5NnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSAhaW1wb3J0YW50OyAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpemFyZC1yb2NrLWJveHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuOmJlZm9yZXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuOmFmdGVye1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2lzc29ycy1ib3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zcG9jay1wYXBlci1ib3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXphcmQtcm9jay1ib3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG57XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuXG4gICAgICAgICAgICAgICAgLmJ0bi1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLXNoYWRvdy1pbnNpZGV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLnJ1bGVze1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59Il19 */"], data: { animation: src_app_animations_game_animations__WEBPACK_IMPORTED_MODULE_2__["gameAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.scss'],
                animations: src_app_animations_game_animations__WEBPACK_IMPORTED_MODULE_2__["gameAnimations"]
            }]
    }], function () { return []; }, { rulesModalEventEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], gameScoreEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/body/body.component */ "NRw/");
/* harmony import */ var _components_rules_modal_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rules-modal/rules-modal.component */ "M4XZ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
        _components_rules_modal_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__["RulesModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_body_body_component__WEBPACK_IMPORTED_MODULE_5__["BodyComponent"],
                    _components_rules_modal_rules_modal_component__WEBPACK_IMPORTED_MODULE_6__["RulesModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aAzp":
/*!***********************************************!*\
  !*** ./src/app/animations/game-animations.ts ***!
  \***********************************************/
/*! exports provided: gameAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameAnimations", function() { return gameAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const gameAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameInitial', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(0px)", display: "block" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0-desktop => 1-desktop", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".btn-container", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2-desktop => 0-desktop", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".btn-container", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("500ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(0px)", display: "block" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0-mobile => 1-mobile", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".btn-container", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("200ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2-mobile => 0-mobile", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".btn-container", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(-20px)", background: "none", display: "none" })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("500ms cubic-bezier(0.35, 0, 0.25, 1)")
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombat', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(1000px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(-50px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(-50px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0-desktop => 1-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("2500ms cubic-bezier(0.35, 0, 0.25, 1)")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2-desktop => 0-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0", pointerEvents: "none", transform: "translateY(1000px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(0px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", pointerEvents: "all", transform: "translateY(0px)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0-mobile => 1-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("2500ms cubic-bezier(0.35, 0, 0.25, 1)")),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2-mobile => 0-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)")),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombatResult', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "750px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "500px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "750px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1-desktop => 2-desktop", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)"),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("0-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "250px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "250px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: "250px" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1-mobile => 2-mobile", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)"),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombatResultText', [
        /* state("0", style({opacity: "0"})), */
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-desktop", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0px)", opacity: "1" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1-desktop => 2-desktop", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)")]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("1-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "0" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("2-mobile", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0px)", opacity: "1" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1-mobile => 2-mobile", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms cubic-bezier(0.35, 0, 0.25, 1)")])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameInitial', []),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombat', []),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombatResult', []),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gameCombatResultText', [
    /* state("0", style({opacity: "0"})), */
    ]),
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map