(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/material"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/material", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ng2-float-btn"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/material"), require("@angular/platform-browser"));
	else
		root["ng2-float-btn"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/material"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Ng2FloatBtnComponent = (function () {
    function Ng2FloatBtnComponent() {
        this.showBtns = false;
    }
    Ng2FloatBtnComponent.prototype.ngOnInit = function () {
        if (!this.mainButton)
            throw "mainButton is required.";
        if (!this.buttons || this.buttons.length == 0)
            throw "buttons is required.";
        if (!this.direction || this.direction == '')
            this.direction = "right";
    };
    Ng2FloatBtnComponent.prototype.triggerBtnMenu = function () {
        this.showBtns = !this.showBtns;
    };
    Ng2FloatBtnComponent.prototype.fireAction = function ($event, action) {
        if (action)
            action($event);
    };
    return Ng2FloatBtnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Ng2FloatBtnComponent.prototype, "buttons", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2FloatBtnComponent.prototype, "mainButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng2FloatBtnComponent.prototype, "direction", void 0);
Ng2FloatBtnComponent = __decorate([
    core_1.Component({
        selector: 'ng2-float-btn',
        styles: [
            "ul {\n\t\t\tlist-style-type: none; \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\toverflow: hidden;\n\t\t\tdisplay:flex;\n\t\t}",
            "button {\n\t\t\tmargin: 8px;\n\t\t}"
        ],
        animations: [
            core_1.trigger('rightAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('leftAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('downAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('upAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
                ])
            ])
        ],
        template: "\n\t\t<ul ng2-float-btn-direction [btnDirection]=\"direction\">\n\t\t\t<li>\n\t\t\t\t<button md-fab (click)=\"triggerBtnMenu()\">\n\t\t\t\t\t<md-icon>{{mainButton.iconName}}</md-icon>\n\t\t\t\t</button>\t\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let btn of buttons\">\n\t\t\t\t<ng-container [ngSwitch]=\"direction\">\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'right'\" >\n\t\t\t\t\t\t<button md-fab [@rightAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'left'\" >\n\t\t\t\t\t\t<button md-fab [@leftAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'down'\" >\n\t\t\t\t\t\t<button md-fab [@downAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'up'\" >\n\t\t\t\t\t\t<button md-fab [@upAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t\n\t\t\t\t\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n  "
    }),
    __metadata("design:paramtypes", [])
], Ng2FloatBtnComponent);
exports.Ng2FloatBtnComponent = Ng2FloatBtnComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = __webpack_require__(6);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var material_1 = __webpack_require__(5);
var ng2_float_btn_component_1 = __webpack_require__(1);
var ng2_float_btn_direction_directive_1 = __webpack_require__(3);
var Ng2FloatBtnModule = (function () {
    function Ng2FloatBtnModule() {
    }
    return Ng2FloatBtnModule;
}());
Ng2FloatBtnModule = __decorate([
    core_1.NgModule({
        declarations: [
            ng2_float_btn_component_1.Ng2FloatBtnComponent,
            ng2_float_btn_direction_directive_1.Ng2FloatBtnDirectionDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            material_1.MaterialModule
        ],
        providers: [],
        exports: [ng2_float_btn_component_1.Ng2FloatBtnComponent]
    })
], Ng2FloatBtnModule);
exports.Ng2FloatBtnModule = Ng2FloatBtnModule;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Ng2FloatBtnDirectionDirective = (function () {
    function Ng2FloatBtnDirectionDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnDirectionDirective.prototype.ngOnInit = function () {
        switch (this.btnDirection) {
            case 'right':
                this.setJustifyContent('flex-start');
                this.setDirection('row');
                break;
            case 'left':
                this.setJustifyContent('flex-start');
                this.setDirection('row-reverse');
                break;
            case 'down':
                this.setJustifyContent('flex-start');
                this.setDirection('column');
                break;
            case 'up':
                this.setJustifyContent('flex-end');
                this.setDirection('column-reverse');
                break;
            default:
                throw 'invalid direction.';
        }
    };
    Ng2FloatBtnDirectionDirective.prototype.setJustifyContent = function (position) {
        this.el.nativeElement.style.justifyContent = position;
    };
    Ng2FloatBtnDirectionDirective.prototype.setDirection = function (flexDirection) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    };
    return Ng2FloatBtnDirectionDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng2FloatBtnDirectionDirective.prototype, "btnDirection", void 0);
Ng2FloatBtnDirectionDirective = __decorate([
    core_1.Directive({
        selector: '[ng2-float-btn-direction]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Ng2FloatBtnDirectionDirective);
exports.Ng2FloatBtnDirectionDirective = Ng2FloatBtnDirectionDirective;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1));
__export(__webpack_require__(2));


/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-float-btn.umd.js.map