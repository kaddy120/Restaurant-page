"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Rectangle 50.png */ "./src/assets/Rectangle 50.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/coffee machine.png */ "./src/assets/coffee machine.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --gray-50: #fafafa;
  --gray-400: #d4d4d8;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-300: #d4d4d8;
  --gray-200: #e4e4e7;
  --gray-100: #f3f4f6;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  /* fonts */
  --step--1: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);
  --step-0: clamp(0.85rem, calc(0.78rem + 0.29vw), 1rem);
  --step-1: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
  --step-2: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.5rem);
  --step-3: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.75rem);
  --step-4: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.5rem);
  --step-5: clamp(2.07rem, calc(1.73rem + 1.7vw), 3rem);

  /* lengths || spacing */

  --lgth-1: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);
  --lgth-2: clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem);
  --lgth-3: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);
  --lgth-4: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);
  --lgth-5: clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem);
  --lgth-6: clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem);
  --lgth-7: clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem);
  --lgth-8: clamp(4rem, calc(3.65rem + 1.74vw), 5rem);
  --lgth-9: clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem);
}

body {
  background: #ece9e3;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1d1c1c;
}

/* || Typography */

h1 {
  font-weight: 300;
  font-size: var(--step-5);
  letter-spacing: -1.5px;
  line-height: 1.3;
}

h2 {
  font-weight: 300;
  font-size: var(--step-4);
  letter-spacing: -0.5px;
}

h3 {
  font-size: var(--step-3);
  font-weight: 400;
  line-height: 1.2;
}

h4 {
  font-size: var(--step-2);
  font-weight: 400;
  letter-spacing: 0.25px;
}

h5 {
  font-size: var(--step-1);
  font-weight: 400;
}

h6 {
  font-size: var(--step-0);
  font-weight: 500;
  letter-spacing: 0.15px;
}

.title {
  margin-bottom: var(--xx);
}

.subtitle-1 {
  font-size: var(--step--2);
  font-weight: 500;
  letter-spacing: 0.1px;
}

p,
li {
  font-size: var(--step-0);
  letter-spacing: 0.5px;
}

.body-2 {
  font-size: var(--step--1);
  max-inline-size: 70ch;
  line-height: 1.5;
  letter-spacing: 0.25px;
}

.section-title {
  margin-bottom: var(--lgth-6);
  font-weight: 500;
  /* max-inline-size: 45ch; */
  text-align: center;
  width: 100%;
}

.menu_ .section-title {
  margin-bottom: var(--lgth-2);
}

.card-title {
  margin-bottom: var(--lgth-2);
  font-weight: 500;
  max-inline-size: 45ch;
}
/* font-size: 1.75rem; /* 28px */

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button:hover {
  cursor: pointer;
  /* background: red; */
  /* color: black; */
}

.current-page {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

nav a.active {
  font-weight: bold;
  color: var(--light-primary-c);
}

header,
footer {
  background: #1d1c1c;
  color: #fff;
}

footer .container {
  padding-block: 32px;
}

.menu_ .container,
.contact .container {
  padding-block: var(--lgth-6);
}

nav {
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  padding-block: 24px;
}

svg {
  fill: #f4e6e6;
}

.log {
  font-size: var(--step-3);
}

nav ul {
  display: flex;
}

.list-space {
}

nav li {
  margin-top: auto;
}

nav li + li {
  margin-left: 24px;
}

li {
  list-style: none;
}

nav a {
  text-decoration: none;
  color: #fff;
}

.container {
  max-width: 1400px;
  margin-inline: auto;
}

.menu_ .container {
  /* height: 100vh; */
}

footer ul {
  display: inline-flex;
}

footer .container {
  display: flex;
  justify-content: center;
}

footer p {
  margin-right: 24px;
}

footer li:first-of-type {
  margin-right: 12px;
}

.hero {
  display: grid;
}

.home .hero-bg_img {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.menu_ .hero-bg_img {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.hero-bg_img {
  /* background-image: url(../assets/coffee-beans.jpeg); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 530px;
  grid-area: 1/-1;
}

.hero-tagline {
  max-inline-size: 52ch;
  color: #e4e3e3;
  font-size: var(--step-2);
  text-align: center;
}

.hero-intro {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgba(18, 16, 16, 0.6);
  grid-area: 1/-1;
}

.title {
  color: #fefefe;
  font-weight: 700;
  text-align: center;
  margin-bottom: 14px;
}

.menu {
  display: grid;
  grid-template-columns: minmax(350px, 450px) minmax(350px, 655px);
  column-gap: 40px;
  justify-content: center;
  margin-inline: auto;
  padding-block: var(--lgth-7);
}

.menu img {
  width: 100%;
}
.menu-img {
  flex-shrink: 1;
}

.menu-about {
  padding: var(--lgth-6);
  background: #d9d9d9;
  flex-shrink: 2;
}

.menu p {
  color: #000;
  margin-bottom: 42px;
  letter-spacing: 1.2;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: 166.188%; /* 33.238px */
}

.menu h3 {
  margin-bottom: var(--lgth-5);
  color: #e5a162;
  font-weight: 700;
}

button {
  font-size: var(--step-0);
  font-weight: 500;
  padding-inline: var(--lgth-4);
  padding-block: var(--lgth-2);;
  border: 2px solid #000;
}

.info {
  margin-bottom: 65px;
}

.info .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info .container > * {
  /* min-width: 500px; */
  display: flex;
  min-width: fit-cotent;
}

@media (max-width: 930px) {
  .info .container > * {
    /* min-width: 500px; */
    width: 100%;
  }
}

.info .container > *:first-of-type {
  margin-right: 93px;
}

.info h4 {
  font-size: 20px;
  margin-bottom: 8px;
}

.info-icon {
  box-sizing: border-box;
  width: 83px;
  height: 83px;
  background: #1d1c1c;
  border-radius: 50%;
  padding: 16px;
  margin-right: 24px;
}

.info-operating_time .info-icon {
  padding: 19px;
}

.cup-icon {
  height: 28px;
}

.drinks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

hr {
  margin-bottom: var(--lgth-4);
}

.drink {
  margin-bottom: var(--lgth-2);
  padding-block: var(--lgth-4);
  padding-inline: var(--lgth-4);
  width: 450px;
}

.drink-disc {
  max-inline-size: 40ch;
  margin-bottom: var(--lgth-1);
}

.contact li {
  margin-bottom: var(--lgth-1);
}

.contact_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contanct_list_item {
  min-width: 400px;
  padding: var(--lgth-5);
  margin-bottom: var(--lgth-5);
  background: #fcfcfb;
}

@media (max-width: 1450px) {
  nav, .hero-intro > *, .menu, .info .container{
    margin-inline: var(--lgth-4);
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --gray-50: #fafafa;\n  --gray-400: #d4d4d8;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-300: #d4d4d8;\n  --gray-200: #e4e4e7;\n  --gray-100: #f3f4f6;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n\n  /* fonts */\n  --step--1: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem);\n  --step-0: clamp(0.85rem, calc(0.78rem + 0.29vw), 1rem);\n  --step-1: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --step-2: clamp(1.2rem, calc(1.07rem + 0.63vw), 1.5rem);\n  --step-3: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.75rem);\n  --step-4: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.5rem);\n  --step-5: clamp(2.07rem, calc(1.73rem + 1.7vw), 3rem);\n\n  /* lengths || spacing */\n\n  --lgth-1: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);\n  --lgth-2: clamp(0.5rem, calc(0.46rem + 0.22vw), 0.63rem);\n  --lgth-3: clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem);\n  --lgth-4: clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem);\n  --lgth-5: clamp(1.5rem, calc(1.37rem + 0.65vw), 1.88rem);\n  --lgth-6: clamp(2rem, calc(1.83rem + 0.87vw), 2.5rem);\n  --lgth-7: clamp(3rem, calc(2.74rem + 1.3vw), 3.75rem);\n  --lgth-8: clamp(4rem, calc(3.65rem + 1.74vw), 5rem);\n  --lgth-9: clamp(6rem, calc(5.48rem + 2.61vw), 7.5rem);\n}\n\nbody {\n  background: #ece9e3;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #1d1c1c;\n}\n\n/* || Typography */\n\nh1 {\n  font-weight: 300;\n  font-size: var(--step-5);\n  letter-spacing: -1.5px;\n  line-height: 1.3;\n}\n\nh2 {\n  font-weight: 300;\n  font-size: var(--step-4);\n  letter-spacing: -0.5px;\n}\n\nh3 {\n  font-size: var(--step-3);\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh4 {\n  font-size: var(--step-2);\n  font-weight: 400;\n  letter-spacing: 0.25px;\n}\n\nh5 {\n  font-size: var(--step-1);\n  font-weight: 400;\n}\n\nh6 {\n  font-size: var(--step-0);\n  font-weight: 500;\n  letter-spacing: 0.15px;\n}\n\n.title {\n  margin-bottom: var(--xx);\n}\n\n.subtitle-1 {\n  font-size: var(--step--2);\n  font-weight: 500;\n  letter-spacing: 0.1px;\n}\n\np,\nli {\n  font-size: var(--step-0);\n  letter-spacing: 0.5px;\n}\n\n.body-2 {\n  font-size: var(--step--1);\n  max-inline-size: 70ch;\n  line-height: 1.5;\n  letter-spacing: 0.25px;\n}\n\n.section-title {\n  margin-bottom: var(--lgth-6);\n  font-weight: 500;\n  /* max-inline-size: 45ch; */\n  text-align: center;\n  width: 100%;\n}\n\n.menu_ .section-title {\n  margin-bottom: var(--lgth-2);\n}\n\n.card-title {\n  margin-bottom: var(--lgth-2);\n  font-weight: 500;\n  max-inline-size: 45ch;\n}\n/* font-size: 1.75rem; /* 28px */\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nbutton:hover {\n  cursor: pointer;\n  /* background: red; */\n  /* color: black; */\n}\n\n.current-page {\n  text-decoration: underline;\n}\n\na:active {\n  text-decoration: underline;\n}\n\nnav a.active {\n  font-weight: bold;\n  color: var(--light-primary-c);\n}\n\nheader,\nfooter {\n  background: #1d1c1c;\n  color: #fff;\n}\n\nfooter .container {\n  padding-block: 32px;\n}\n\n.menu_ .container,\n.contact .container {\n  padding-block: var(--lgth-6);\n}\n\nnav {\n  max-width: 1400px;\n  display: flex;\n  justify-content: space-between;\n  margin-inline: auto;\n  padding-block: 24px;\n}\n\nsvg {\n  fill: #f4e6e6;\n}\n\n.log {\n  font-size: var(--step-3);\n}\n\nnav ul {\n  display: flex;\n}\n\n.list-space {\n}\n\nnav li {\n  margin-top: auto;\n}\n\nnav li + li {\n  margin-left: 24px;\n}\n\nli {\n  list-style: none;\n}\n\nnav a {\n  text-decoration: none;\n  color: #fff;\n}\n\n.container {\n  max-width: 1400px;\n  margin-inline: auto;\n}\n\n.menu_ .container {\n  /* height: 100vh; */\n}\n\nfooter ul {\n  display: inline-flex;\n}\n\nfooter .container {\n  display: flex;\n  justify-content: center;\n}\n\nfooter p {\n  margin-right: 24px;\n}\n\nfooter li:first-of-type {\n  margin-right: 12px;\n}\n\n.hero {\n  display: grid;\n}\n\n.home .hero-bg_img {\n  background-image: url(../assets/Rectangle\\ 50.png);\n}\n\n.menu_ .hero-bg_img {\n  background-image: url(../assets/coffee\\ machine.png);\n}\n\n.hero-bg_img {\n  /* background-image: url(../assets/coffee-beans.jpeg); */\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 530px;\n  grid-area: 1/-1;\n}\n\n.hero-tagline {\n  max-inline-size: 52ch;\n  color: #e4e3e3;\n  font-size: var(--step-2);\n  text-align: center;\n}\n\n.hero-intro {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(18, 16, 16, 0.6);\n  grid-area: 1/-1;\n}\n\n.title {\n  color: #fefefe;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 14px;\n}\n\n.menu {\n  display: grid;\n  grid-template-columns: minmax(350px, 450px) minmax(350px, 655px);\n  column-gap: 40px;\n  justify-content: center;\n  margin-inline: auto;\n  padding-block: var(--lgth-7);\n}\n\n.menu img {\n  width: 100%;\n}\n.menu-img {\n  flex-shrink: 1;\n}\n\n.menu-about {\n  padding: var(--lgth-6);\n  background: #d9d9d9;\n  flex-shrink: 2;\n}\n\n.menu p {\n  color: #000;\n  margin-bottom: 42px;\n  letter-spacing: 1.2;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 166.188%; /* 33.238px */\n}\n\n.menu h3 {\n  margin-bottom: var(--lgth-5);\n  color: #e5a162;\n  font-weight: 700;\n}\n\nbutton {\n  font-size: var(--step-0);\n  font-weight: 500;\n  padding-inline: var(--lgth-4);\n  padding-block: var(--lgth-2);;\n  border: 2px solid #000;\n}\n\n.info {\n  margin-bottom: 65px;\n}\n\n.info .container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.info .container > * {\n  /* min-width: 500px; */\n  display: flex;\n  min-width: fit-cotent;\n}\n\n@media (max-width: 930px) {\n  .info .container > * {\n    /* min-width: 500px; */\n    width: 100%;\n  }\n}\n\n.info .container > *:first-of-type {\n  margin-right: 93px;\n}\n\n.info h4 {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n\n.info-icon {\n  box-sizing: border-box;\n  width: 83px;\n  height: 83px;\n  background: #1d1c1c;\n  border-radius: 50%;\n  padding: 16px;\n  margin-right: 24px;\n}\n\n.info-operating_time .info-icon {\n  padding: 19px;\n}\n\n.cup-icon {\n  height: 28px;\n}\n\n.drinks {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\nhr {\n  margin-bottom: var(--lgth-4);\n}\n\n.drink {\n  margin-bottom: var(--lgth-2);\n  padding-block: var(--lgth-4);\n  padding-inline: var(--lgth-4);\n  width: 450px;\n}\n\n.drink-disc {\n  max-inline-size: 40ch;\n  margin-bottom: var(--lgth-1);\n}\n\n.contact li {\n  margin-bottom: var(--lgth-1);\n}\n\n.contact_list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contanct_list_item {\n  min-width: 400px;\n  padding: var(--lgth-5);\n  margin-bottom: var(--lgth-5);\n  background: #fcfcfb;\n}\n\n@media (max-width: 1450px) {\n  nav, .hero-intro > *, .menu, .info .container{\n    margin-inline: var(--lgth-4);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/socials.js":
/*!***********************************!*\
  !*** ./src/components/socials.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   socialsList: () => (/* binding */ socialsList)
/* harmony export */ });
const socialsList = `
      <li>
        <a href="https://github.com/kaddy120/Restaurant-page"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 496 512"
          >
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            /></svg
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/KaddyDev"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            /></svg
        ></a>
      </li>
    `


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home */ "./src/views/home.js");
/* harmony import */ var _views_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/menu */ "./src/views/menu.js");
/* harmony import */ var _views_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/about */ "./src/views/about.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/router */ "./src/utils/router.js");
/* harmony import */ var _components_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/socials */ "./src/components/socials.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");







const route = {
  '/': { title: 'Home', render: _views_home__WEBPACK_IMPORTED_MODULE_0__["default"] },
  '/contact': { title: 'Contact', render: _views_about__WEBPACK_IMPORTED_MODULE_2__["default"] },
  '/menu': { title: 'Menu', render: _views_menu__WEBPACK_IMPORTED_MODULE_1__["default"] },
};

function App() {
  (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Routes)(route);
  return `<header>
  <nav>
    <div class="log">
      <h3>Rindi's</h3>
    </div>
    <ul>
      <li>${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Link)('/', 'Home')}</li>
      <li>${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Link)('/menu', 'Menu')}</li>

      <li>${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Link)('/contact', 'Contact')}</li>
      <li class='list-space'></li>
      ${_components_socials__WEBPACK_IMPORTED_MODULE_4__.socialsList}
    </ul>
  </nav>
</header>
<main id="page">
  ${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.ServePage)()}
</main>
<footer>
  <div class="container">
    <p>Copyright &copy; 2023 kaddy120</p>
    <ul>${_components_socials__WEBPACK_IMPORTED_MODULE_4__.socialsList}</ul>
  </div>
</footer>`;
}
const content = document.querySelector('#content');
content.innerHTML = App();


/***/ }),

/***/ "./src/utils/router.js":
/*!*****************************!*\
  !*** ./src/utils/router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   ServePage: () => (/* binding */ ServePage),
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* import { Routes } from "./navigation"; */

function Router() {
  let routes;

  const Routes = (route) => {
    routes = route
  }

  const serving = () => {
    let view = routes[location.pathname];
    if (view) {
      return location.pathname;
    } else {
      history.pushState('', '', '/');
      return '/';
    }
  };

  const ServePage = () => {
    let view = routes[serving()];
    document.title = view.title;
    const content = view.render();
    if (content instanceof HTMLElement) {
      return content.outerHTML;
    } else if (typeof content === 'string') {
      return content;
    }
  };

  const router = () => {
    let view = routes[location.pathname];
    if (view) {
    } else {
      history.pushState('', '', '/');
      router();
    }
  };

  window.addEventListener('click', (e) => {
    const page = document.querySelector('#page');
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState('', '', e.target.href);
      page.innerHTML = ServePage();
    }
  });

  window.addEventListener('DOMContentLoaded', router);

  const Link = (href, name, page) => {
    /* routes[href] = { title: name, render: page }; */
    return `<a href="${href}" data-link>${name}</a>`;
  };

  return {Link, ServePage, Routes};
}

const {Link, ServePage, Routes} = Router()


/***/ }),

/***/ "./src/views/about.js":
/*!****************************!*\
  !*** ./src/views/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* Contact */

const contacts = [
  {
    title: 'Pysical address',
    details: ['478 Songozwi Street', 'Louis Trichardt', 'Limpopo'],
  },
  {
    title: 'Kaddy Marindi',
    details: ['Manager', '086 162 7000', 'kaddy_marindi@marindicafe.co.za'],
  },
  {
    title: 'Tebogo Ramalapa',
    details: ['Sr. Manager', '086 162 7111', 'Tebo.Ramalapa@marindicafe.co.za'],
  },
];

function Contact() {
  let contactList = '';

  for (let contact of contacts) {
    contactList += contactItem(contact);
  }
  return `
<section class='contact'>
  <div class='container'>
    <h3 class='section-title'>Contact us</h3>
    <div class='contact_list'>
      ${contactList}
    </div>
  </div>
</section>
`;
}

function contactItem(contact) {
  const detailsList = (details) => {
    let list = '';
    for (let item of details) {
      list += `<li>${item}</li>`;
    }
    return list;
  };

  return `<div class='contanct_list_item'>
      <h4 class='card-title'>${contact.title}</h4>
      <ul>
         ${detailsList(contact.details)}
      </ul> 
     </div>`;
}


/***/ }),

/***/ "./src/views/home.js":
/*!***************************!*\
  !*** ./src/views/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _assets_barista_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/barista.png */ "./src/assets/barista.png");
/* harmony import */ var _assets_Location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Location.svg */ "./src/assets/Location.svg");
/* harmony import */ var _assets_Group_42_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Group 42.svg */ "./src/assets/Group 42.svg");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/router */ "./src/utils/router.js");





function Home() {
  const myIcon = new Image();
  myIcon.src = _assets_barista_png__WEBPACK_IMPORTED_MODULE_0__;

  const locationIcon = new Image();
  locationIcon.src = _assets_Location_svg__WEBPACK_IMPORTED_MODULE_1__;

  const timeIcon = new Image();
  timeIcon.src = _assets_Group_42_svg__WEBPACK_IMPORTED_MODULE_2__;

  const home = `
        <section class="home">
          <article class="hero">
            <div class='hero-bg_img'></div>
            <div class='hero-intro'>
              <h1 class="title">Rindi's Coffee Shop</h1>
              <p class="hero-tagline">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
          </article>
          <div class='menu'>
             <div class='menu-img'>${myIcon.outerHTML}</div>
             <div class='menu-about'>
                <h3>Our Menu</h3>
                <p>
                    Our diverse menu boasts a fusion of classic brunch favorites and innovative dishes. Whether you're craving the timeless perfection of a stack fluffy pancakes drizzled in real maple syrup or tempted by our signature avocado toast topped with poached eggs, every bite is an experience to remember.
                </p>
                ${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Link)('/menu', '<button>View Menu</button>')}
                
           </div>
          </div>
          <section class='info'> 
             <div class='container'>
               <div>
                 <div class="info-icon">
                    ${locationIcon.outerHTML}  
                 </div>
                 <div>
                   <h4>Locate Us</h4> 
                    <p> Ravele 22, Thsilwavhusiku, Limpopo</> 
                 </div>
               </div>
               <div class="info-operating_time">
                 <div class="info-icon">
                    ${timeIcon.outerHTML}  
                 </div>
                 <div>
                   <h4>Open hours</h4> 
                    <p>Mon to Fri 9:00 AM - 9:00 PM </p> 
                 </div>
               </div>
             </div>
           </section>
          </div>
        </section>
`;
  return home;
}


/***/ }),

/***/ "./src/views/menu.js":
/*!***************************!*\
  !*** ./src/views/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _assets_Vector_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Vector.svg */ "./src/assets/Vector.svg");


const drinks = [
  {
    name: 'Expresso',
    discription: 'Single shot of espresso.',
    cup: [{ price: 'R35', size: '394 kj' }],
  },
  {
    name: 'Flat White',
    discription: 'Double shot of espresso with texturised milk.',
    cup: [{ price: 'R35', size: '394 kj' }],
  },
  {
    name: 'CAFFÈ LATTE',
    discription: 'Single shot of espresso with texturised milk.',
    cup: [{ price: 'R39', size: '705 kj' }],
  },
  {
    name: 'CAFFÈ MOCHA',
    discription: 'Hot chocolate & a shot of espresso with texturised milk.',
    cup: [{ price: 'R42', size: '705 kj' }],
  },
  {
    name: 'AMERICANO',
    discription: 'Double shot of espresso with hot water.',
    cup: [{ price: 'R32', size: '151 kj' }],
  },
  {
    name: 'CAPPUCCINO',
    discription: 'Double shot of espresso with texturised milk.',
    cup: [
      { price: 'R33', size: '366 kj: Short (single shot)' },
      { price: 'R36', size: '479 kj: Easy (double shot)' },
      { price: 'R42', size: '769 kj: Serious (double shot)' },
    ],
  },
];

function Menu() {
  let menu = '';

  const cupIcon = new Image();
  cupIcon.src = _assets_Vector_svg__WEBPACK_IMPORTED_MODULE_0__;
  cupIcon.classList.add('cup-icon');

  const priceList = (cups) => {
    let list = '';
    for (let cup of cups) {
      list += `<li><span class='price'>${cup.price}</span> | <span class='size'>${cup.size}</span></li>`;
    }
    return list;
  };

  for (let drink of drinks) {
    menu += `<div class="drink"> 
       <h5 class='card-title'>${drink.name}</h5>
       <p class='drink-disc'>${drink.discription}</p>
       <ul class='drink-sizes'>${priceList(drink.cup)}
    </div>`;
  }

  return `
<section class='menu_'>
   <article class="hero">
      <div class='hero-bg_img'></div>
      <div class='hero-intro'>
        <h1 class="title">Our Menu</h1>
      </div>
    </article>
    <div class="container">
       <div class="menu_drinks">
            <h3 class='section-title'><span>${cupIcon.outerHTML}<span> Drinks</h3> 
            <hr>
            <div class='drinks'>
              ${menu}
            </div>
       </div>
    </div>
</section>`;
}


/***/ }),

/***/ "./src/assets/Group 42.svg":
/*!*********************************!*\
  !*** ./src/assets/Group 42.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6cc967d9e43b408432.svg";

/***/ }),

/***/ "./src/assets/Location.svg":
/*!*********************************!*\
  !*** ./src/assets/Location.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46a6111e601f68e6252a.svg";

/***/ }),

/***/ "./src/assets/Rectangle 50.png":
/*!*************************************!*\
  !*** ./src/assets/Rectangle 50.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bc1b11800180c8555de.png";

/***/ }),

/***/ "./src/assets/Vector.svg":
/*!*******************************!*\
  !*** ./src/assets/Vector.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "555ca3557e27756c0a58.svg";

/***/ }),

/***/ "./src/assets/barista.png":
/*!********************************!*\
  !*** ./src/assets/barista.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0303ec5c97a92b3d018.png";

/***/ }),

/***/ "./src/assets/coffee machine.png":
/*!***************************************!*\
  !*** ./src/assets/coffee machine.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd8e26d18593d1cf8a1b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdB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Q0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0QwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBbUQ7QUFDM0QsUUFBUSxrREFBa0Q7QUFDMUQsUUFBUSxxREFBcUQ7QUFDN0Q7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjs7QUFFQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVSwrQkFBK0IsU0FBUztBQUMzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDLCtCQUErQixrQkFBa0I7QUFDakQsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3V0aWxzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy92aWV3cy9hYm91dC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy92aWV3cy9ob21lLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3ZpZXdzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9SZWN0YW5nbGUgNTAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2NvZmZlZSBtYWNoaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLWdyYXktNTA6ICNmYWZhZmE7XG4gIC0tZ3JheS00MDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XG4gIC0tZ3JheS0zMDA6ICNkNGQ0ZDg7XG4gIC0tZ3JheS0yMDA6ICNlNGU0ZTc7XG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XG5cbiAgLyogZm9udHMgKi9cbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjY5cmVtLCBjYWxjKDAuNjZyZW0gKyAwLjE4dncpLCAwLjhyZW0pO1xuICAtLXN0ZXAtMDogY2xhbXAoMC44NXJlbSwgY2FsYygwLjc4cmVtICsgMC4yOXZ3KSwgMXJlbSk7XG4gIC0tc3RlcC0xOiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcbiAgLS1zdGVwLTI6IGNsYW1wKDEuMnJlbSwgY2FsYygxLjA3cmVtICsgMC42M3Z3KSwgMS41cmVtKTtcbiAgLS1zdGVwLTM6IGNsYW1wKDEuNDRyZW0sIGNhbGMoMS4yNnJlbSArIDAuODl2dyksIDEuNzVyZW0pO1xuICAtLXN0ZXAtNDogY2xhbXAoMS43M3JlbSwgY2FsYygxLjQ4cmVtICsgMS4yNHZ3KSwgMi41cmVtKTtcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgM3JlbSk7XG5cbiAgLyogbGVuZ3RocyB8fCBzcGFjaW5nICovXG5cbiAgLS1sZ3RoLTE6IGNsYW1wKDAuMjVyZW0sIGNhbGMoMC4yM3JlbSArIDAuMTF2dyksIDAuMzFyZW0pO1xuICAtLWxndGgtMjogY2xhbXAoMC41cmVtLCBjYWxjKDAuNDZyZW0gKyAwLjIydncpLCAwLjYzcmVtKTtcbiAgLS1sZ3RoLTM6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC42OHJlbSArIDAuMzN2dyksIDAuOTRyZW0pO1xuICAtLWxndGgtNDogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XG4gIC0tbGd0aC01OiBjbGFtcCgxLjVyZW0sIGNhbGMoMS4zN3JlbSArIDAuNjV2dyksIDEuODhyZW0pO1xuICAtLWxndGgtNjogY2xhbXAoMnJlbSwgY2FsYygxLjgzcmVtICsgMC44N3Z3KSwgMi41cmVtKTtcbiAgLS1sZ3RoLTc6IGNsYW1wKDNyZW0sIGNhbGMoMi43NHJlbSArIDEuM3Z3KSwgMy43NXJlbSk7XG4gIC0tbGd0aC04OiBjbGFtcCg0cmVtLCBjYWxjKDMuNjVyZW0gKyAxLjc0dncpLCA1cmVtKTtcbiAgLS1sZ3RoLTk6IGNsYW1wKDZyZW0sIGNhbGMoNS40OHJlbSArIDIuNjF2dyksIDcuNXJlbSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWNlOWUzO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMxZDFjMWM7XG59XG5cbi8qIHx8IFR5cG9ncmFwaHkgKi9cblxuaDEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNSk7XG4gIGxldHRlci1zcGFjaW5nOiAtMS41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaDQge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0teHgpO1xufVxuXG4uc3VidGl0bGUtMSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbn1cblxucCxcbmxpIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5ib2R5LTIge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTEpO1xuICBtYXgtaW5saW5lLXNpemU6IDcwY2g7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC02KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLyogbWF4LWlubGluZS1zaXplOiA0NWNoOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudV8gLnNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTIpO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1heC1pbmxpbmUtc2l6ZTogNDVjaDtcbn1cbi8qIGZvbnQtc2l6ZTogMS43NXJlbTsgLyogMjhweCAqL1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi5jdXJyZW50LXBhZ2Uge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubmF2IGEuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWMpO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWQxYzFjO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuZm9vdGVyIC5jb250YWluZXIge1xuICBwYWRkaW5nLWJsb2NrOiAzMnB4O1xufVxuXG4ubWVudV8gLmNvbnRhaW5lcixcbi5jb250YWN0IC5jb250YWluZXIge1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTYpO1xufVxuXG5uYXYge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWJsb2NrOiAyNHB4O1xufVxuXG5zdmcge1xuICBmaWxsOiAjZjRlNmU2O1xufVxuXG4ubG9nIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xufVxuXG5uYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGlzdC1zcGFjZSB7XG59XG5cbm5hdiBsaSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbm5hdiBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubmF2IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5tZW51XyAuY29udGFpbmVyIHtcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbn1cblxuZm9vdGVyIHVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmZvb3RlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmZvb3RlciBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG5mb290ZXIgbGk6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uaG9tZSAuaGVyby1iZ19pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5tZW51XyAuaGVyby1iZ19pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5oZXJvLWJnX2ltZyB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvY29mZmVlLWJlYW5zLmpwZWcpOyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDUzMHB4O1xuICBncmlkLWFyZWE6IDEvLTE7XG59XG5cbi5oZXJvLXRhZ2xpbmUge1xuICBtYXgtaW5saW5lLXNpemU6IDUyY2g7XG4gIGNvbG9yOiAjZTRlM2UzO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlcm8taW50cm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTYsIDE2LCAwLjYpO1xuICBncmlkLWFyZWE6IDEvLTE7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjZmVmZWZlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzUwcHgsIDQ1MHB4KSBtaW5tYXgoMzUwcHgsIDY1NXB4KTtcbiAgY29sdW1uLWdhcDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XG59XG5cbi5tZW51IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lbnUtaW1nIHtcbiAgZmxleC1zaHJpbms6IDE7XG59XG5cbi5tZW51LWFib3V0IHtcbiAgcGFkZGluZzogdmFyKC0tbGd0aC02KTtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgZmxleC1zaHJpbms6IDI7XG59XG5cbi5tZW51IHAge1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTY2LjE4OCU7IC8qIDMzLjIzOHB4ICovXG59XG5cbi5tZW51IGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC01KTtcbiAgY29sb3I6ICNlNWExNjI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtMik7O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG5cbi5pbmZvIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5mbyAuY29udGFpbmVyID4gKiB7XG4gIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogZml0LWNvdGVudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5pbmZvIC5jb250YWluZXIgPiAqIHtcbiAgICAvKiBtaW4td2lkdGg6IDUwMHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbmZvIC5jb250YWluZXIgPiAqOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDkzcHg7XG59XG5cbi5pbmZvIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5pbmZvLWljb24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogODNweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBiYWNrZ3JvdW5kOiAjMWQxYzFjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuLmluZm8tb3BlcmF0aW5nX3RpbWUgLmluZm8taWNvbiB7XG4gIHBhZGRpbmc6IDE5cHg7XG59XG5cbi5jdXAtaWNvbiB7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmRyaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmhyIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC00KTtcbn1cblxuLmRyaW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0yKTtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC00KTtcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XG4gIHdpZHRoOiA0NTBweDtcbn1cblxuLmRyaW5rLWRpc2Mge1xuICBtYXgtaW5saW5lLXNpemU6IDQwY2g7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtMSk7XG59XG5cbi5jb250YWN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0xKTtcbn1cblxuLmNvbnRhY3RfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFuY3RfbGlzdF9pdGVtIHtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogdmFyKC0tbGd0aC01KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC01KTtcbiAgYmFja2dyb3VuZDogI2ZjZmNmYjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCkge1xuICBuYXYsIC5oZXJvLWludHJvID4gKiwgLm1lbnUsIC5pbmZvIC5jb250YWluZXJ7XG4gICAgbWFyZ2luLWlubGluZTogdmFyKC0tbGd0aC00KTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixVQUFVO0VBQ1YseURBQXlEO0VBQ3pELHNEQUFzRDtFQUN0RCxzREFBc0Q7RUFDdEQsdURBQXVEO0VBQ3ZELHlEQUF5RDtFQUN6RCx3REFBd0Q7RUFDeEQscURBQXFEOztFQUVyRCx1QkFBdUI7O0VBRXZCLHlEQUF5RDtFQUN6RCx3REFBd0Q7RUFDeEQseURBQXlEO0VBQ3pELHNEQUFzRDtFQUN0RCx3REFBd0Q7RUFDeEQscURBQXFEO0VBQ3JELHFEQUFxRDtFQUNyRCxtREFBbUQ7RUFDbkQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO3dFQUNzRTtFQUN0RSxjQUFjO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VB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NUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWdyYXktNTA6ICNmYWZhZmE7XFxuICAtLWdyYXktNDAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcXG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XFxuICAtLWdyYXktMzAwOiAjZDRkNGQ4O1xcbiAgLS1ncmF5LTIwMDogI2U0ZTRlNztcXG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XFxuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcXG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XFxuXFxuICAvKiBmb250cyAqL1xcbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjY5cmVtLCBjYWxjKDAuNjZyZW0gKyAwLjE4dncpLCAwLjhyZW0pO1xcbiAgLS1zdGVwLTA6IGNsYW1wKDAuODVyZW0sIGNhbGMoMC43OHJlbSArIDAuMjl2dyksIDFyZW0pO1xcbiAgLS1zdGVwLTE6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xcbiAgLS1zdGVwLTI6IGNsYW1wKDEuMnJlbSwgY2FsYygxLjA3cmVtICsgMC42M3Z3KSwgMS41cmVtKTtcXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjQ0cmVtLCBjYWxjKDEuMjZyZW0gKyAwLjg5dncpLCAxLjc1cmVtKTtcXG4gIC0tc3RlcC00OiBjbGFtcCgxLjczcmVtLCBjYWxjKDEuNDhyZW0gKyAxLjI0dncpLCAyLjVyZW0pO1xcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMDdyZW0sIGNhbGMoMS43M3JlbSArIDEuN3Z3KSwgM3JlbSk7XFxuXFxuICAvKiBsZW5ndGhzIHx8IHNwYWNpbmcgKi9cXG5cXG4gIC0tbGd0aC0xOiBjbGFtcCgwLjI1cmVtLCBjYWxjKDAuMjNyZW0gKyAwLjExdncpLCAwLjMxcmVtKTtcXG4gIC0tbGd0aC0yOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC40NnJlbSArIDAuMjJ2dyksIDAuNjNyZW0pO1xcbiAgLS1sZ3RoLTM6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC42OHJlbSArIDAuMzN2dyksIDAuOTRyZW0pO1xcbiAgLS1sZ3RoLTQ6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xcbiAgLS1sZ3RoLTU6IGNsYW1wKDEuNXJlbSwgY2FsYygxLjM3cmVtICsgMC42NXZ3KSwgMS44OHJlbSk7XFxuICAtLWxndGgtNjogY2xhbXAoMnJlbSwgY2FsYygxLjgzcmVtICsgMC44N3Z3KSwgMi41cmVtKTtcXG4gIC0tbGd0aC03OiBjbGFtcCgzcmVtLCBjYWxjKDIuNzRyZW0gKyAxLjN2dyksIDMuNzVyZW0pO1xcbiAgLS1sZ3RoLTg6IGNsYW1wKDRyZW0sIGNhbGMoMy42NXJlbSArIDEuNzR2dyksIDVyZW0pO1xcbiAgLS1sZ3RoLTk6IGNsYW1wKDZyZW0sIGNhbGMoNS40OHJlbSArIDIuNjF2dyksIDcuNXJlbSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2VjZTllMztcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMWQxYzFjO1xcbn1cXG5cXG4vKiB8fCBUeXBvZ3JhcGh5ICovXFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC01KTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMS41cHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oNiB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXh4KTtcXG59XFxuXFxuLnN1YnRpdGxlLTEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxufVxcblxcbnAsXFxubGkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uYm9keS0yIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XFxuICBtYXgtaW5saW5lLXNpemU6IDcwY2g7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC02KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAvKiBtYXgtaW5saW5lLXNpemU6IDQ1Y2g7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnVfIC5zZWN0aW9uLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtMik7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtMik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWF4LWlubGluZS1zaXplOiA0NWNoO1xcbn1cXG4vKiBmb250LXNpemU6IDEuNzVyZW07IC8qIDI4cHggKi9cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLmN1cnJlbnQtcGFnZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbm5hdiBhLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWMpO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICMxZDFjMWM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuZm9vdGVyIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1ibG9jazogMzJweDtcXG59XFxuXFxuLm1lbnVfIC5jb250YWluZXIsXFxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTYpO1xcbn1cXG5cXG5uYXYge1xcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XFxufVxcblxcbnN2ZyB7XFxuICBmaWxsOiAjZjRlNmU2O1xcbn1cXG5cXG4ubG9nIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LXNwYWNlIHtcXG59XFxuXFxubmF2IGxpIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbm5hdiBsaSArIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5tZW51XyAuY29udGFpbmVyIHtcXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXFxufVxcblxcbmZvb3RlciB1bCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuZm9vdGVyIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcblxcbmZvb3RlciBsaTpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhvbWUgLmhlcm8tYmdfaW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvUmVjdGFuZ2xlXFxcXCA1MC5wbmcpO1xcbn1cXG5cXG4ubWVudV8gLmhlcm8tYmdfaW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvY29mZmVlXFxcXCBtYWNoaW5lLnBuZyk7XFxufVxcblxcbi5oZXJvLWJnX2ltZyB7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2NvZmZlZS1iZWFucy5qcGVnKTsgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA1MzBweDtcXG4gIGdyaWQtYXJlYTogMS8tMTtcXG59XFxuXFxuLmhlcm8tdGFnbGluZSB7XFxuICBtYXgtaW5saW5lLXNpemU6IDUyY2g7XFxuICBjb2xvcjogI2U0ZTNlMztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8taW50cm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxNiwgMTYsIDAuNik7XFxuICBncmlkLWFyZWE6IDEvLTE7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzUwcHgsIDQ1MHB4KSBtaW5tYXgoMzUwcHgsIDY1NXB4KTtcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTcpO1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZW51LWltZyB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuLm1lbnUtYWJvdXQge1xcbiAgcGFkZGluZzogdmFyKC0tbGd0aC02KTtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBmbGV4LXNocmluazogMjtcXG59XFxuXFxuLm1lbnUgcCB7XFxuICBjb2xvcjogIzAwMDtcXG4gIG1hcmdpbi1ib3R0b206IDQycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4yO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMTY2LjE4OCU7IC8qIDMzLjIzOHB4ICovXFxufVxcblxcbi5tZW51IGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNSk7XFxuICBjb2xvcjogI2U1YTE2MjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWxndGgtNCk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTIpOztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5pbmZvIHtcXG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XFxufVxcblxcbi5pbmZvIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyAuY29udGFpbmVyID4gKiB7XFxuICAvKiBtaW4td2lkdGg6IDUwMHB4OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi13aWR0aDogZml0LWNvdGVudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSB7XFxuICAuaW5mbyAuY29udGFpbmVyID4gKiB7XFxuICAgIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uaW5mbyAuY29udGFpbmVyID4gKjpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogOTNweDtcXG59XFxuXFxuLmluZm8gaDQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uaW5mby1pY29uIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogODNweDtcXG4gIGhlaWdodDogODNweDtcXG4gIGJhY2tncm91bmQ6ICMxZDFjMWM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaW5mby1vcGVyYXRpbmdfdGltZSAuaW5mby1pY29uIHtcXG4gIHBhZGRpbmc6IDE5cHg7XFxufVxcblxcbi5jdXAtaWNvbiB7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5kcmlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5ociB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTQpO1xcbn1cXG5cXG4uZHJpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0yKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNCk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcXG4gIHdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmRyaW5rLWRpc2Mge1xcbiAgbWF4LWlubGluZS1zaXplOiA0MGNoO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0xKTtcXG59XFxuXFxuLmNvbnRhY3QgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0xKTtcXG59XFxuXFxuLmNvbnRhY3RfbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhbmN0X2xpc3RfaXRlbSB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tbGd0aC01KTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNSk7XFxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZiO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KSB7XFxuICBuYXYsIC5oZXJvLWludHJvID4gKiwgLm1lbnUsIC5pbmZvIC5jb250YWluZXJ7XFxuICAgIG1hcmdpbi1pbmxpbmU6IHZhcigtLWxndGgtNCk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3Qgc29jaWFsc0xpc3QgPSBgXG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2FkZHkxMjAvUmVzdGF1cmFudC1wYWdlXCJcbiAgICAgICAgICA+PHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OTYgNTEyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTE2NS45IDM5Ny40YzAgMi0yLjMgMy42LTUuMiAzLjYtMy4zLjMtNS42LTEuMy01LjYtMy42IDAtMiAyLjMtMy42IDUuMi0zLjYgMy0uMyA1LjYgMS4zIDUuNiAzLjZ6bS0zMS4xLTQuNWMtLjcgMiAxLjMgNC4zIDQuMyA0LjkgMi42IDEgNS42IDAgNi4yLTJzLTEuMy00LjMtNC4zLTUuMmMtMi42LS43LTUuNS4zLTYuMiAyLjN6bTQ0LjItMS43Yy0yLjkuNy00LjkgMi42LTQuNiA0LjkuMyAyIDIuOSAzLjMgNS45IDIuNiAyLjktLjcgNC45LTIuNiA0LjYtNC42LS4zLTEuOS0zLTMuMi01LjktMi45ek0yNDQuOCA4QzEwNi4xIDggMCAxMTMuMyAwIDI1MmMwIDExMC45IDY5LjggMjA1LjggMTY5LjUgMjM5LjIgMTIuOCAyLjMgMTcuMy01LjYgMTcuMy0xMi4xIDAtNi4yLS4zLTQwLjQtLjMtNjEuNCAwIDAtNzAgMTUtODQuNy0yOS44IDAgMC0xMS40LTI5LjEtMjcuOC0zNi42IDAgMC0yMi45LTE1LjcgMS42LTE1LjQgMCAwIDI0LjkgMiAzOC42IDI1LjggMjEuOSAzOC42IDU4LjYgMjcuNSA3Mi45IDIwLjkgMi4zLTE2IDguOC0yNy4xIDE2LTMzLjctNTUuOS02LjItMTEyLjMtMTQuMy0xMTIuMy0xMTAuNSAwLTI3LjUgNy42LTQxLjMgMjMuNi01OC45LTIuNi02LjUtMTEuMS0zMy4zIDIuNi02Ny45IDIwLjktNi41IDY5IDI3IDY5IDI3IDIwLTUuNiA0MS41LTguNSA2Mi44LTguNXM0Mi44IDIuOSA2Mi44IDguNWMwIDAgNDguMS0zMy42IDY5LTI3IDEzLjcgMzQuNyA1LjIgNjEuNCAyLjYgNjcuOSAxNiAxNy43IDI1LjggMzEuNSAyNS44IDU4LjkgMCA5Ni41LTU4LjkgMTA0LjItMTE0LjggMTEwLjUgOS4yIDcuOSAxNyAyMi45IDE3IDQ2LjQgMCAzMy43LS4zIDc1LjQtLjMgODMuNiAwIDYuNSA0LjYgMTQuNCAxNy4zIDEyLjFDNDI4LjIgNDU3LjggNDk2IDM2Mi45IDQ5NiAyNTIgNDk2IDExMy4zIDM4My41IDggMjQ0LjggOHpNOTcuMiAzNTIuOWMtMS4zIDEtMSAzLjMuNyA1LjIgMS42IDEuNiAzLjkgMi4zIDUuMiAxIDEuMy0xIDEtMy4zLS43LTUuMi0xLjYtMS42LTMuOS0yLjMtNS4yLTF6bS0xMC44LTguMWMtLjcgMS4zLjMgMi45IDIuMyAzLjkgMS42IDEgMy42LjcgNC4zLS43LjctMS4zLS4zLTIuOS0yLjMtMy45LTItLjYtMy42LS4zLTQuMy43em0zMi40IDM1LjZjLTEuNiAxLjMtMSA0LjMgMS4zIDYuMiAyLjMgMi4zIDUuMiAyLjYgNi41IDEgMS4zLTEuMy43LTQuMy0xLjMtNi4yLTIuMi0yLjMtNS4yLTIuNi02LjUtMXptLTExLjQtMTQuN2MtMS42IDEtMS42IDMuNiAwIDUuOSAxLjYgMi4zIDQuMyAzLjMgNS42IDIuMyAxLjYtMS4zIDEuNi0zLjkgMC02LjItMS40LTIuMy00LTMuMy01LjYtMnpcIlxuICAgICAgICAgICAgLz48L3N2Z1xuICAgICAgICA+PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vS2FkZHlEZXZcIlxuICAgICAgICAgID48c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzelwiXG4gICAgICAgICAgICAvPjwvc3ZnXG4gICAgICAgID48L2E+XG4gICAgICA8L2xpPlxuICAgIGBcbiIsImltcG9ydCBIb21lIGZyb20gJy4vdmlld3MvaG9tZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3ZpZXdzL21lbnUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi92aWV3cy9hYm91dCc7XG5pbXBvcnQgeyBMaW5rLCBTZXJ2ZVBhZ2UsIFJvdXRlcyB9IGZyb20gJy4vdXRpbHMvcm91dGVyJztcbmltcG9ydCB7IHNvY2lhbHNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvY2lhbHMnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuY29uc3Qgcm91dGUgPSB7XG4gICcvJzogeyB0aXRsZTogJ0hvbWUnLCByZW5kZXI6IEhvbWUgfSxcbiAgJy9jb250YWN0JzogeyB0aXRsZTogJ0NvbnRhY3QnLCByZW5kZXI6IENvbnRhY3QgfSxcbiAgJy9tZW51JzogeyB0aXRsZTogJ01lbnUnLCByZW5kZXI6IE1lbnUgfSxcbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgUm91dGVzKHJvdXRlKTtcbiAgcmV0dXJuIGA8aGVhZGVyPlxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dcIj5cbiAgICAgIDxoMz5SaW5kaSdzPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+JHtMaW5rKCcvJywgJ0hvbWUnKX08L2xpPlxuICAgICAgPGxpPiR7TGluaygnL21lbnUnLCAnTWVudScpfTwvbGk+XG5cbiAgICAgIDxsaT4ke0xpbmsoJy9jb250YWN0JywgJ0NvbnRhY3QnKX08L2xpPlxuICAgICAgPGxpIGNsYXNzPSdsaXN0LXNwYWNlJz48L2xpPlxuICAgICAgJHtzb2NpYWxzTGlzdH1cbiAgICA8L3VsPlxuICA8L25hdj5cbjwvaGVhZGVyPlxuPG1haW4gaWQ9XCJwYWdlXCI+XG4gICR7U2VydmVQYWdlKCl9XG48L21haW4+XG48Zm9vdGVyPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDIzIGthZGR5MTIwPC9wPlxuICAgIDx1bD4ke3NvY2lhbHNMaXN0fTwvdWw+XG4gIDwvZGl2PlxuPC9mb290ZXI+YDtcbn1cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5pbm5lckhUTUwgPSBBcHAoKTtcbiIsIi8qIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCIuL25hdmlnYXRpb25cIjsgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyKCkge1xuICBsZXQgcm91dGVzO1xuXG4gIGNvbnN0IFJvdXRlcyA9IChyb3V0ZSkgPT4ge1xuICAgIHJvdXRlcyA9IHJvdXRlXG4gIH1cblxuICBjb25zdCBzZXJ2aW5nID0gKCkgPT4ge1xuICAgIGxldCB2aWV3ID0gcm91dGVzW2xvY2F0aW9uLnBhdGhuYW1lXTtcbiAgICBpZiAodmlldykge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsICcvJyk7XG4gICAgICByZXR1cm4gJy8nO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBTZXJ2ZVBhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXcgPSByb3V0ZXNbc2VydmluZygpXTtcbiAgICBkb2N1bWVudC50aXRsZSA9IHZpZXcudGl0bGU7XG4gICAgY29uc3QgY29udGVudCA9IHZpZXcucmVuZGVyKCk7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNvbnRlbnQub3V0ZXJIVE1MO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gKCkgPT4ge1xuICAgIGxldCB2aWV3ID0gcm91dGVzW2xvY2F0aW9uLnBhdGhuYW1lXTtcbiAgICBpZiAodmlldykge1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsICcvJyk7XG4gICAgICByb3V0ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UnKTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnW2RhdGEtbGlua10nKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBlLnRhcmdldC5ocmVmKTtcbiAgICAgIHBhZ2UuaW5uZXJIVE1MID0gU2VydmVQYWdlKCk7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJvdXRlcik7XG5cbiAgY29uc3QgTGluayA9IChocmVmLCBuYW1lLCBwYWdlKSA9PiB7XG4gICAgLyogcm91dGVzW2hyZWZdID0geyB0aXRsZTogbmFtZSwgcmVuZGVyOiBwYWdlIH07ICovXG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtocmVmfVwiIGRhdGEtbGluaz4ke25hbWV9PC9hPmA7XG4gIH07XG5cbiAgcmV0dXJuIHtMaW5rLCBTZXJ2ZVBhZ2UsIFJvdXRlc307XG59XG5cbmV4cG9ydCBjb25zdCB7TGluaywgU2VydmVQYWdlLCBSb3V0ZXN9ID0gUm91dGVyKClcbiIsIi8qIENvbnRhY3QgKi9cblxuY29uc3QgY29udGFjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1B5c2ljYWwgYWRkcmVzcycsXG4gICAgZGV0YWlsczogWyc0NzggU29uZ296d2kgU3RyZWV0JywgJ0xvdWlzIFRyaWNoYXJkdCcsICdMaW1wb3BvJ10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0thZGR5IE1hcmluZGknLFxuICAgIGRldGFpbHM6IFsnTWFuYWdlcicsICcwODYgMTYyIDcwMDAnLCAna2FkZHlfbWFyaW5kaUBtYXJpbmRpY2FmZS5jby56YSddLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUZWJvZ28gUmFtYWxhcGEnLFxuICAgIGRldGFpbHM6IFsnU3IuIE1hbmFnZXInLCAnMDg2IDE2MiA3MTExJywgJ1RlYm8uUmFtYWxhcGFAbWFyaW5kaWNhZmUuY28uemEnXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGxldCBjb250YWN0TGlzdCA9ICcnO1xuXG4gIGZvciAobGV0IGNvbnRhY3Qgb2YgY29udGFjdHMpIHtcbiAgICBjb250YWN0TGlzdCArPSBjb250YWN0SXRlbShjb250YWN0KTtcbiAgfVxuICByZXR1cm4gYFxuPHNlY3Rpb24gY2xhc3M9J2NvbnRhY3QnPlxuICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxuICAgIDxoMyBjbGFzcz0nc2VjdGlvbi10aXRsZSc+Q29udGFjdCB1czwvaDM+XG4gICAgPGRpdiBjbGFzcz0nY29udGFjdF9saXN0Jz5cbiAgICAgICR7Y29udGFjdExpc3R9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuYDtcbn1cblxuZnVuY3Rpb24gY29udGFjdEl0ZW0oY29udGFjdCkge1xuICBjb25zdCBkZXRhaWxzTGlzdCA9IChkZXRhaWxzKSA9PiB7XG4gICAgbGV0IGxpc3QgPSAnJztcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRldGFpbHMpIHtcbiAgICAgIGxpc3QgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9J2NvbnRhbmN0X2xpc3RfaXRlbSc+XG4gICAgICA8aDQgY2xhc3M9J2NhcmQtdGl0bGUnPiR7Y29udGFjdC50aXRsZX08L2g0PlxuICAgICAgPHVsPlxuICAgICAgICAgJHtkZXRhaWxzTGlzdChjb250YWN0LmRldGFpbHMpfVxuICAgICAgPC91bD4gXG4gICAgIDwvZGl2PmA7XG59XG4iLCJpbXBvcnQgYmFyaXN0YUltZyBmcm9tICcuLi9hc3NldHMvYmFyaXN0YS5wbmcnO1xuaW1wb3J0IGxvY2F0aW9uIGZyb20gJy4uL2Fzc2V0cy9Mb2NhdGlvbi5zdmcnO1xuaW1wb3J0IHRpbWUgZnJvbSAnLi4vYXNzZXRzL0dyb3VwIDQyLnN2Zyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vdXRpbHMvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBiYXJpc3RhSW1nO1xuXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBsb2NhdGlvbkljb24uc3JjID0gbG9jYXRpb247XG5cbiAgY29uc3QgdGltZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGltZUljb24uc3JjID0gdGltZTtcblxuICBjb25zdCBob21lID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImhvbWVcIj5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImhlcm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2hlcm8tYmdfaW1nJz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2hlcm8taW50cm8nPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlJpbmRpJ3MgQ29mZmVlIFNob3A8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlcm8tdGFnbGluZVwiPkxvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbWVudSc+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pbWcnPiR7bXlJY29uLm91dGVySFRNTH08L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWFib3V0Jz5cbiAgICAgICAgICAgICAgICA8aDM+T3VyIE1lbnU8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBPdXIgZGl2ZXJzZSBtZW51IGJvYXN0cyBhIGZ1c2lvbiBvZiBjbGFzc2ljIGJydW5jaCBmYXZvcml0ZXMgYW5kIGlubm92YXRpdmUgZGlzaGVzLiBXaGV0aGVyIHlvdSdyZSBjcmF2aW5nIHRoZSB0aW1lbGVzcyBwZXJmZWN0aW9uIG9mIGEgc3RhY2sgZmx1ZmZ5IHBhbmNha2VzIGRyaXp6bGVkIGluIHJlYWwgbWFwbGUgc3lydXAgb3IgdGVtcHRlZCBieSBvdXIgc2lnbmF0dXJlIGF2b2NhZG8gdG9hc3QgdG9wcGVkIHdpdGggcG9hY2hlZCBlZ2dzLCBldmVyeSBiaXRlIGlzIGFuIGV4cGVyaWVuY2UgdG8gcmVtZW1iZXIuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICR7TGluaygnL21lbnUnLCAnPGJ1dHRvbj5WaWV3IE1lbnU8L2J1dHRvbj4nKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J2luZm8nPiBcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAke2xvY2F0aW9uSWNvbi5vdXRlckhUTUx9ICBcbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgPGg0PkxvY2F0ZSBVczwvaDQ+IFxuICAgICAgICAgICAgICAgICAgICA8cD4gUmF2ZWxlIDIyLCBUaHNpbHdhdmh1c2lrdSwgTGltcG9wbzwvPiBcbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLW9wZXJhdGluZ190aW1lXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aW1lSWNvbi5vdXRlckhUTUx9ICBcbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgPGg0Pk9wZW4gaG91cnM8L2g0PiBcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9uIHRvIEZyaSA5OjAwIEFNIC0gOTowMCBQTSA8L3A+IFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbmA7XG4gIHJldHVybiBob21lO1xufVxuIiwiaW1wb3J0IGN1cEltZyBmcm9tICcuLi9hc3NldHMvVmVjdG9yLnN2Zyc7XG5cbmNvbnN0IGRyaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6ICdFeHByZXNzbycsXG4gICAgZGlzY3JpcHRpb246ICdTaW5nbGUgc2hvdCBvZiBlc3ByZXNzby4nLFxuICAgIGN1cDogW3sgcHJpY2U6ICdSMzUnLCBzaXplOiAnMzk0IGtqJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGbGF0IFdoaXRlJyxcbiAgICBkaXNjcmlwdGlvbjogJ0RvdWJsZSBzaG90IG9mIGVzcHJlc3NvIHdpdGggdGV4dHVyaXNlZCBtaWxrLicsXG4gICAgY3VwOiBbeyBwcmljZTogJ1IzNScsIHNpemU6ICczOTQga2onIH1dLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NBRkbDiCBMQVRURScsXG4gICAgZGlzY3JpcHRpb246ICdTaW5nbGUgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIHRleHR1cmlzZWQgbWlsay4nLFxuICAgIGN1cDogW3sgcHJpY2U6ICdSMzknLCBzaXplOiAnNzA1IGtqJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDQUZGw4ggTU9DSEEnLFxuICAgIGRpc2NyaXB0aW9uOiAnSG90IGNob2NvbGF0ZSAmIGEgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIHRleHR1cmlzZWQgbWlsay4nLFxuICAgIGN1cDogW3sgcHJpY2U6ICdSNDInLCBzaXplOiAnNzA1IGtqJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBTUVSSUNBTk8nLFxuICAgIGRpc2NyaXB0aW9uOiAnRG91YmxlIHNob3Qgb2YgZXNwcmVzc28gd2l0aCBob3Qgd2F0ZXIuJyxcbiAgICBjdXA6IFt7IHByaWNlOiAnUjMyJywgc2l6ZTogJzE1MSBraicgfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ0FQUFVDQ0lOTycsXG4gICAgZGlzY3JpcHRpb246ICdEb3VibGUgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIHRleHR1cmlzZWQgbWlsay4nLFxuICAgIGN1cDogW1xuICAgICAgeyBwcmljZTogJ1IzMycsIHNpemU6ICczNjYga2o6IFNob3J0IChzaW5nbGUgc2hvdCknIH0sXG4gICAgICB7IHByaWNlOiAnUjM2Jywgc2l6ZTogJzQ3OSBrajogRWFzeSAoZG91YmxlIHNob3QpJyB9LFxuICAgICAgeyBwcmljZTogJ1I0MicsIHNpemU6ICc3Njkga2o6IFNlcmlvdXMgKGRvdWJsZSBzaG90KScgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgbGV0IG1lbnUgPSAnJztcblxuICBjb25zdCBjdXBJY29uID0gbmV3IEltYWdlKCk7XG4gIGN1cEljb24uc3JjID0gY3VwSW1nO1xuICBjdXBJY29uLmNsYXNzTGlzdC5hZGQoJ2N1cC1pY29uJyk7XG5cbiAgY29uc3QgcHJpY2VMaXN0ID0gKGN1cHMpID0+IHtcbiAgICBsZXQgbGlzdCA9ICcnO1xuICAgIGZvciAobGV0IGN1cCBvZiBjdXBzKSB7XG4gICAgICBsaXN0ICs9IGA8bGk+PHNwYW4gY2xhc3M9J3ByaWNlJz4ke2N1cC5wcmljZX08L3NwYW4+IHwgPHNwYW4gY2xhc3M9J3NpemUnPiR7Y3VwLnNpemV9PC9zcGFuPjwvbGk+YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgZm9yIChsZXQgZHJpbmsgb2YgZHJpbmtzKSB7XG4gICAgbWVudSArPSBgPGRpdiBjbGFzcz1cImRyaW5rXCI+IFxuICAgICAgIDxoNSBjbGFzcz0nY2FyZC10aXRsZSc+JHtkcmluay5uYW1lfTwvaDU+XG4gICAgICAgPHAgY2xhc3M9J2RyaW5rLWRpc2MnPiR7ZHJpbmsuZGlzY3JpcHRpb259PC9wPlxuICAgICAgIDx1bCBjbGFzcz0nZHJpbmstc2l6ZXMnPiR7cHJpY2VMaXN0KGRyaW5rLmN1cCl9XG4gICAgPC9kaXY+YDtcbiAgfVxuXG4gIHJldHVybiBgXG48c2VjdGlvbiBjbGFzcz0nbWVudV8nPlxuICAgPGFydGljbGUgY2xhc3M9XCJoZXJvXCI+XG4gICAgICA8ZGl2IGNsYXNzPSdoZXJvLWJnX2ltZyc+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdoZXJvLWludHJvJz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5PdXIgTWVudTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJtZW51X2RyaW5rc1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPSdzZWN0aW9uLXRpdGxlJz48c3Bhbj4ke2N1cEljb24ub3V0ZXJIVE1MfTxzcGFuPiBEcmlua3M8L2gzPiBcbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RyaW5rcyc+XG4gICAgICAgICAgICAgICR7bWVudX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPmA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=