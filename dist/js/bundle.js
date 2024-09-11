/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/aside-menu.js":
/*!******************************!*\
  !*** ./src/js/aside-menu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showAside; });
function showAside() {
  var burgerButton = document.querySelector('.burger-button');
  var aside = document.querySelector('.aside');
  var asideBurgerButton = document.querySelector('.aside-header-buttons__burger');
  var header = document.querySelector('.header');
  var main = document.querySelector('.main');
  burgerButton.addEventListener('click', function () {
    aside.classList.toggle('aside--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
  asideBurgerButton.addEventListener('click', function () {
    aside.classList.toggle('aside--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
}
;
showAside();

/***/ }),

/***/ "./src/js/brand-menu-button.js":
/*!*************************************!*\
  !*** ./src/js/brand-menu-button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showAll; });
function showAll() {
  var showAllButton = document.querySelector('.brand-menu__show-all-button');
  var menu = document.querySelector('.brand-menu');
  showAllButton.addEventListener('click', function () {
    if (showAllButton.textContent === 'скрыть') {
      menu.classList.add('brand-menu--hidden');
      showAllButton.classList.remove('show-hidden');
      showAllButton.textContent = 'Показать всё';
    } else {
      menu.classList.remove('brand-menu--hidden');
      showAllButton.textContent = 'скрыть';
      showAllButton.classList.add('show-hidden');
    }
  });
}
showAll();

/***/ }),

/***/ "./src/js/call-menu.js":
/*!*****************************!*\
  !*** ./src/js/call-menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showCall; });
function showCall() {
  var callButton = document.querySelector('.service-btn__call');
  var asideCall = document.querySelector('.call');
  var callCloseButton = document.querySelector('.call-close-button');
  var header = document.querySelector('.header');
  var main = document.querySelector('.main');
  var asideCallButton = document.querySelector('.aside-footer-buttons__call');
  var aside = document.querySelector('.aside');
  callButton.addEventListener('click', function () {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
  callCloseButton.addEventListener('click', function () {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
  asideCallButton.addEventListener('click', function () {
    asideCall.classList.toggle('call--active');
    aside.classList.toggle('aside--active');
  });
}
;
showCall();

/***/ }),

/***/ "./src/js/company-info-button.js":
/*!***************************************!*\
  !*** ./src/js/company-info-button.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showAllText; });
function showAllText() {
  var textFieldButton = document.querySelector('.text-field__button');
  var text = document.querySelector('.text-field__text');
  textFieldButton.addEventListener('click', function () {
    if (textFieldButton.textContent === 'скрыть') {
      text.classList.add('text-field__text--hidden');
      textFieldButton.classList.remove('text-field__button--active');
      textFieldButton.textContent = 'Читать далее';
    } else {
      text.classList.remove('text-field__text--hidden');
      textFieldButton.textContent = 'скрыть';
      textFieldButton.classList.add('text-field__button--active');
    }
  });
}
showAllText();

/***/ }),

/***/ "./src/js/feedback-menu.js":
/*!*********************************!*\
  !*** ./src/js/feedback-menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showFeedback; });
function showFeedback() {
  var feedbackButton = document.querySelector('.service-btn__chat');
  var asideFeedback = document.querySelector('.feedback');
  var feedbackCloseButton = document.querySelector('.feedback-close-button');
  var header = document.querySelector('.header');
  var main = document.querySelector('.main');
  var asideFeedbackButton = document.querySelector('.aside-footer-buttons__feedback');
  var aside = document.querySelector('.aside');
  feedbackButton.addEventListener('click', function () {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
  feedbackCloseButton.addEventListener('click', function () {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });
  asideFeedbackButton.addEventListener('click', function () {
    asideFeedback.classList.toggle('feedback--active');
    aside.classList.toggle('aside--active');
  });
}
;
showFeedback();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _swiper_2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-2.js */ "./src/js/swiper-2.js");
/* harmony import */ var _swiper_3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-3.js */ "./src/js/swiper-3.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _company_info_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-info-button.js */ "./src/js/company-info-button.js");
/* harmony import */ var _brand_menu_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-menu-button.js */ "./src/js/brand-menu-button.js");
/* harmony import */ var _repair_menu_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repair-menu-button.js */ "./src/js/repair-menu-button.js");
/* harmony import */ var _aside_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aside-menu.js */ "./src/js/aside-menu.js");
/* harmony import */ var _feedback_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback-menu.js */ "./src/js/feedback-menu.js");
/* harmony import */ var _call_menu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call-menu.js */ "./src/js/call-menu.js");











/***/ }),

/***/ "./src/js/repair-menu-button.js":
/*!**************************************!*\
  !*** ./src/js/repair-menu-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showAllItems; });
function showAllItems() {
  var repairMenuButton = document.querySelector('.repair-menu__show-all-button');
  var repairMenu = document.querySelector('.repair-menu');
  repairMenuButton.addEventListener('click', function () {
    if (repairMenuButton.textContent === 'скрыть') {
      repairMenu.classList.add('repair-menu--hidden');
      repairMenuButton.classList.remove('show-hidden');
      repairMenuButton.textContent = 'Показать всё';
    } else {
      repairMenu.classList.remove('repair-menu--hidden');
      repairMenuButton.textContent = 'скрыть';
      repairMenuButton.classList.add('show-hidden');
    }
  });
}
showAllItems();

/***/ }),

/***/ "./src/js/swiper-2.js":
/*!****************************!*\
  !*** ./src/js/swiper-2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return swiper3Enabled; });
function swiper3Enabled() {
  var screenWidth = window.innerWidth;

  if (screenWidth < 767) {
    var swiperInstance3 = new Swiper('.swiper-2', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'bullets'
      },
      spaceBetween: 30,
      loop: true,
      autoHeight: true,
      width: 200,
      centerInsufficientSlides: true,
      breakpoints: {
        768: {
          enabled: false
        }
      }
    });
    swiper3Enabled.swiperInstance3 = swiperInstance3;
  } else {
    if (swiper3Enabled.swiperInstance3) {
      swiper3Enabled.swiperInstance3.destroy(true, true);
      swiper3Enabled.swiperInstance3 = null;
    }
  }
}
window.addEventListener("resize", swiper3Enabled);
swiper3Enabled();

/***/ }),

/***/ "./src/js/swiper-3.js":
/*!****************************!*\
  !*** ./src/js/swiper-3.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return swiper3Enabled; });
function swiper3Enabled() {
  var screenWidth = window.innerWidth;

  if (screenWidth < 767) {
    var swiperInstance3 = new Swiper('.swiper-3', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'bullets'
      },
      spaceBetween: 30,
      loop: true,
      height: 100,
      width: 200,
      centerInsufficientSlides: true,
      breakpoints: {
        768: {
          enabled: false
        }
      }
    });
    swiper3Enabled.swiperInstance3 = swiperInstance3;
  } else {
    if (swiper3Enabled.swiperInstance3) {
      swiper3Enabled.swiperInstance3.destroy(true, true);
      swiper3Enabled.swiperInstance3 = null;
    }
  }
}
window.addEventListener("resize", swiper3Enabled);
swiper3Enabled();

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return swiperEnabled; });
function swiperEnabled() {
  var screenWidth = window.innerWidth;

  if (screenWidth < 767) {
    var swiperInstance = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      spaceBetween: 30,
      loop: true,
      width: 200,
      height: 50,
      breakpoints: {
        768: {
          enabled: false
        }
      }
    });
    swiperEnabled.swiperInstance = swiperInstance;
  } else {
    if (swiperEnabled.swiperInstance) {
      swiperEnabled.swiperInstance.destroy(true, true);
      swiperEnabled.swiperInstance = null;
    }
  }
}
window.addEventListener("resize", swiperEnabled);
swiperEnabled();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map