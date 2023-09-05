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
      <li>${(0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.Link)('/menu', 'Menu')}</li>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSx1QkFBdUIsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFtRDtBQUMzRCxRQUFRLGtEQUFrRDtBQUMxRCxRQUFRLHFEQUFxRDtBQUM3RDtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmOztBQUVBO0FBQ0EsZ0JBQWdCLCtDQUFNO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVLCtCQUErQixTQUFTO0FBQzNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0MsK0JBQStCLGtCQUFrQjtBQUNqRCxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvdXRpbHMvcm91dGVyLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3ZpZXdzL2Fib3V0LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3ZpZXdzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvdmlld3MvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL1JlY3RhbmdsZSA1MC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY29mZmVlIG1hY2hpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIC0tZ3JheS01MDogI2ZhZmFmYTtcbiAgLS1ncmF5LTQwMDogI2Q0ZDRkODtcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcbiAgLS1ncmF5LTYwMDogIzRiNTU2MztcbiAgLS1ncmF5LTMwMDogI2Q0ZDRkODtcbiAgLS1ncmF5LTIwMDogI2U0ZTRlNztcbiAgLS1ncmF5LTEwMDogI2YzZjRmNjtcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcblxuICAvKiBmb250cyAqL1xuICAtLXN0ZXAtLTE6IGNsYW1wKDAuNjlyZW0sIGNhbGMoMC42NnJlbSArIDAuMTh2dyksIDAuOHJlbSk7XG4gIC0tc3RlcC0wOiBjbGFtcCgwLjg1cmVtLCBjYWxjKDAuNzhyZW0gKyAwLjI5dncpLCAxcmVtKTtcbiAgLS1zdGVwLTE6IGNsYW1wKDFyZW0sIGNhbGMoMC45MXJlbSArIDAuNDN2dyksIDEuMjVyZW0pO1xuICAtLXN0ZXAtMjogY2xhbXAoMS4ycmVtLCBjYWxjKDEuMDdyZW0gKyAwLjYzdncpLCAxLjVyZW0pO1xuICAtLXN0ZXAtMzogY2xhbXAoMS40NHJlbSwgY2FsYygxLjI2cmVtICsgMC44OXZ3KSwgMS43NXJlbSk7XG4gIC0tc3RlcC00OiBjbGFtcCgxLjczcmVtLCBjYWxjKDEuNDhyZW0gKyAxLjI0dncpLCAyLjVyZW0pO1xuICAtLXN0ZXAtNTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzcmVtKTtcblxuICAvKiBsZW5ndGhzIHx8IHNwYWNpbmcgKi9cblxuICAtLWxndGgtMTogY2xhbXAoMC4yNXJlbSwgY2FsYygwLjIzcmVtICsgMC4xMXZ3KSwgMC4zMXJlbSk7XG4gIC0tbGd0aC0yOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC40NnJlbSArIDAuMjJ2dyksIDAuNjNyZW0pO1xuICAtLWxndGgtMzogY2xhbXAoMC43NXJlbSwgY2FsYygwLjY4cmVtICsgMC4zM3Z3KSwgMC45NHJlbSk7XG4gIC0tbGd0aC00OiBjbGFtcCgxcmVtLCBjYWxjKDAuOTFyZW0gKyAwLjQzdncpLCAxLjI1cmVtKTtcbiAgLS1sZ3RoLTU6IGNsYW1wKDEuNXJlbSwgY2FsYygxLjM3cmVtICsgMC42NXZ3KSwgMS44OHJlbSk7XG4gIC0tbGd0aC02OiBjbGFtcCgycmVtLCBjYWxjKDEuODNyZW0gKyAwLjg3dncpLCAyLjVyZW0pO1xuICAtLWxndGgtNzogY2xhbXAoM3JlbSwgY2FsYygyLjc0cmVtICsgMS4zdncpLCAzLjc1cmVtKTtcbiAgLS1sZ3RoLTg6IGNsYW1wKDRyZW0sIGNhbGMoMy42NXJlbSArIDEuNzR2dyksIDVyZW0pO1xuICAtLWxndGgtOTogY2xhbXAoNnJlbSwgY2FsYyg1LjQ4cmVtICsgMi42MXZ3KSwgNy41cmVtKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlY2U5ZTM7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzFkMWMxYztcbn1cblxuLyogfHwgVHlwb2dyYXBoeSAqL1xuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC01KTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS14eCk7XG59XG5cbi5zdWJ0aXRsZS0xIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xufVxuXG5wLFxubGkge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJvZHktMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0tMSk7XG4gIG1heC1pbmxpbmUtc2l6ZTogNzBjaDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTYpO1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKiBtYXgtaW5saW5lLXNpemU6IDQ1Y2g7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51XyAuc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtMik7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWF4LWlubGluZS1zaXplOiA0NWNoO1xufVxuLyogZm9udC1zaXplOiAxLjc1cmVtOyAvKiAyOHB4ICovXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cbn1cblxuLmN1cnJlbnQtcGFnZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5uYXYgYS5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktYyk7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxZDFjMWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYmxvY2s6IDMycHg7XG59XG5cbi5tZW51XyAuY29udGFpbmVyLFxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNik7XG59XG5cbm5hdiB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmctYmxvY2s6IDI0cHg7XG59XG5cbnN2ZyB7XG4gIGZpbGw6ICNmNGU2ZTY7XG59XG5cbi5sb2cge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG59XG5cbm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5saXN0LXNwYWNlIHtcbn1cblxubmF2IGxpIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxubmF2IGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5uYXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLm1lbnVfIC5jb250YWluZXIge1xuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuZm9vdGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZm9vdGVyIHAge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbmZvb3RlciBsaTpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5ob21lIC5oZXJvLWJnX2ltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLm1lbnVfIC5oZXJvLWJnX2ltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmhlcm8tYmdfaW1nIHtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9jb2ZmZWUtYmVhbnMuanBlZyk7ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTMwcHg7XG4gIGdyaWQtYXJlYTogMS8tMTtcbn1cblxuLmhlcm8tdGFnbGluZSB7XG4gIG1heC1pbmxpbmUtc2l6ZTogNTJjaDtcbiAgY29sb3I6ICNlNGUzZTM7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVyby1pbnRybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxNiwgMTYsIDAuNik7XG4gIGdyaWQtYXJlYTogMS8tMTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICNmZWZlZmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNTBweCwgNDUwcHgpIG1pbm1heCgzNTBweCwgNjU1cHgpO1xuICBjb2x1bW4tZ2FwOiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC03KTtcbn1cblxuLm1lbnUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVudS1pbWcge1xuICBmbGV4LXNocmluazogMTtcbn1cblxuLm1lbnUtYWJvdXQge1xuICBwYWRkaW5nOiB2YXIoLS1sZ3RoLTYpO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBmbGV4LXNocmluazogMjtcbn1cblxuLm1lbnUgcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xuICBsZXR0ZXItc3BhY2luZzogMS4yO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjYuMTg4JTsgLyogMzMuMjM4cHggKi9cbn1cblxuLm1lbnUgaDMge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTUpO1xuICBjb2xvcjogI2U1YTE2MjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC0yKTs7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLmluZm8gLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmZvIC5jb250YWluZXIgPiAqIHtcbiAgLyogbWluLXdpZHRoOiA1MDBweDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiBmaXQtY290ZW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLmluZm8gLmNvbnRhaW5lciA+ICoge1xuICAgIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmluZm8gLmNvbnRhaW5lciA+ICo6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogOTNweDtcbn1cblxuLmluZm8gaDQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmluZm8taWNvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA4M3B4O1xuICBoZWlnaHQ6IDgzcHg7XG4gIGJhY2tncm91bmQ6ICMxZDFjMWM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4uaW5mby1vcGVyYXRpbmdfdGltZSAuaW5mby1pY29uIHtcbiAgcGFkZGluZzogMTlweDtcbn1cblxuLmN1cC1pY29uIHtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uZHJpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuaHIge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTQpO1xufVxuXG4uZHJpbmsge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTIpO1xuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1sZ3RoLTQpO1xuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuXG4uZHJpbmstZGlzYyB7XG4gIG1heC1pbmxpbmUtc2l6ZTogNDBjaDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0xKTtcbn1cblxuLmNvbnRhY3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTEpO1xufVxuXG4uY29udGFjdF9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YW5jdF9saXN0X2l0ZW0ge1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1sZ3RoLTUpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTUpO1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZiO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KSB7XG4gIG5hdiwgLmhlcm8taW50cm8gPiAqLCAubWVudSwgLmluZm8gLmNvbnRhaW5lcntcbiAgICBtYXJnaW4taW5saW5lOiB2YXIoLS1sZ3RoLTQpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLFVBQVU7RUFDVix5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELHNEQUFzRDtFQUN0RCx1REFBdUQ7RUFDdkQseURBQXlEO0VBQ3pELHdEQUF3RDtFQUN4RCxxREFBcUQ7O0VBRXJELHVCQUF1Qjs7RUFFdkIseURBQXlEO0VBQ3pELHdEQUF3RDtFQUN4RCx5REFBeUQ7RUFDekQsc0RBQXNEO0VBQ3RELHdEQUF3RDtFQUN4RCxxREFBcUQ7RUFDckQscURBQXFEO0VBQ3JELG1EQUFtRDtFQUNuRCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7d0VBQ3NFO0VBQ3RFLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4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NkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZ3JheS01MDogI2ZhZmFmYTtcXG4gIC0tZ3JheS00MDA6ICNkNGQ0ZDg7XFxuICAtLWdyYXktNTAwOiAjNmI3MjgwO1xcbiAgLS1ncmF5LTYwMDogIzRiNTU2MztcXG4gIC0tZ3JheS0zMDA6ICNkNGQ0ZDg7XFxuICAtLWdyYXktMjAwOiAjZTRlNGU3O1xcbiAgLS1ncmF5LTEwMDogI2YzZjRmNjtcXG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XFxuICAtLWdyYXktODAwOiAjMWYyOTM3O1xcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcXG5cXG4gIC8qIGZvbnRzICovXFxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuNjlyZW0sIGNhbGMoMC42NnJlbSArIDAuMTh2dyksIDAuOHJlbSk7XFxuICAtLXN0ZXAtMDogY2xhbXAoMC44NXJlbSwgY2FsYygwLjc4cmVtICsgMC4yOXZ3KSwgMXJlbSk7XFxuICAtLXN0ZXAtMTogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XFxuICAtLXN0ZXAtMjogY2xhbXAoMS4ycmVtLCBjYWxjKDEuMDdyZW0gKyAwLjYzdncpLCAxLjVyZW0pO1xcbiAgLS1zdGVwLTM6IGNsYW1wKDEuNDRyZW0sIGNhbGMoMS4yNnJlbSArIDAuODl2dyksIDEuNzVyZW0pO1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDEuNzNyZW0sIGNhbGMoMS40OHJlbSArIDEuMjR2dyksIDIuNXJlbSk7XFxuICAtLXN0ZXAtNTogY2xhbXAoMi4wN3JlbSwgY2FsYygxLjczcmVtICsgMS43dncpLCAzcmVtKTtcXG5cXG4gIC8qIGxlbmd0aHMgfHwgc3BhY2luZyAqL1xcblxcbiAgLS1sZ3RoLTE6IGNsYW1wKDAuMjVyZW0sIGNhbGMoMC4yM3JlbSArIDAuMTF2dyksIDAuMzFyZW0pO1xcbiAgLS1sZ3RoLTI6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjQ2cmVtICsgMC4yMnZ3KSwgMC42M3JlbSk7XFxuICAtLWxndGgtMzogY2xhbXAoMC43NXJlbSwgY2FsYygwLjY4cmVtICsgMC4zM3Z3KSwgMC45NHJlbSk7XFxuICAtLWxndGgtNDogY2xhbXAoMXJlbSwgY2FsYygwLjkxcmVtICsgMC40M3Z3KSwgMS4yNXJlbSk7XFxuICAtLWxndGgtNTogY2xhbXAoMS41cmVtLCBjYWxjKDEuMzdyZW0gKyAwLjY1dncpLCAxLjg4cmVtKTtcXG4gIC0tbGd0aC02OiBjbGFtcCgycmVtLCBjYWxjKDEuODNyZW0gKyAwLjg3dncpLCAyLjVyZW0pO1xcbiAgLS1sZ3RoLTc6IGNsYW1wKDNyZW0sIGNhbGMoMi43NHJlbSArIDEuM3Z3KSwgMy43NXJlbSk7XFxuICAtLWxndGgtODogY2xhbXAoNHJlbSwgY2FsYygzLjY1cmVtICsgMS43NHZ3KSwgNXJlbSk7XFxuICAtLWxndGgtOTogY2xhbXAoNnJlbSwgY2FsYyg1LjQ4cmVtICsgMi42MXZ3KSwgNy41cmVtKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlOWUzO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxZDFjMWM7XFxufVxcblxcbi8qIHx8IFR5cG9ncmFwaHkgKi9cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0teHgpO1xcbn1cXG5cXG4uc3VidGl0bGUtMSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtLTIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcXG59XFxuXFxucCxcXG5saSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5ib2R5LTIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLS0xKTtcXG4gIG1heC1pbmxpbmUtc2l6ZTogNzBjaDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIC8qIG1heC1pbmxpbmUtc2l6ZTogNDVjaDsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudV8gLnNlY3Rpb24tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0yKTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC0yKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXgtaW5saW5lLXNpemU6IDQ1Y2g7XFxufVxcbi8qIGZvbnQtc2l6ZTogMS43NXJlbTsgLyogMjhweCAqL1xcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uY3VycmVudC1wYWdlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubmF2IGEuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktYyk7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogIzFkMWMxYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5mb290ZXIgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWJsb2NrOiAzMnB4O1xcbn1cXG5cXG4ubWVudV8gLmNvbnRhaW5lcixcXG4uY29udGFjdCAuY29udGFpbmVyIHtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNik7XFxufVxcblxcbm5hdiB7XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZy1ibG9jazogMjRweDtcXG59XFxuXFxuc3ZnIHtcXG4gIGZpbGw6ICNmNGU2ZTY7XFxufVxcblxcbi5sb2cge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3Qtc3BhY2Uge1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxubmF2IGxpICsgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLm1lbnVfIC5jb250YWluZXIge1xcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG59XFxuXFxuZm9vdGVyIHVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG5mb290ZXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIG1hcmdpbi1yaWdodDogMjRweDtcXG59XFxuXFxuZm9vdGVyIGxpOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaG9tZSAuaGVyby1iZ19pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9SZWN0YW5nbGVcXFxcIDUwLnBuZyk7XFxufVxcblxcbi5tZW51XyAuaGVyby1iZ19pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9jb2ZmZWVcXFxcIG1hY2hpbmUucG5nKTtcXG59XFxuXFxuLmhlcm8tYmdfaW1nIHtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvY29mZmVlLWJlYW5zLmpwZWcpOyAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDUzMHB4O1xcbiAgZ3JpZC1hcmVhOiAxLy0xO1xcbn1cXG5cXG4uaGVyby10YWdsaW5lIHtcXG4gIG1heC1pbmxpbmUtc2l6ZTogNTJjaDtcXG4gIGNvbG9yOiAjZTRlM2UzO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1pbnRybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE2LCAxNiwgMC42KTtcXG4gIGdyaWQtYXJlYTogMS8tMTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiAjZmVmZWZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNTBweCwgNDUwcHgpIG1pbm1heCgzNTBweCwgNjU1cHgpO1xcbiAgY29sdW1uLWdhcDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtNyk7XFxufVxcblxcbi5tZW51IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lbnUtaW1nIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5cXG4ubWVudS1hYm91dCB7XFxuICBwYWRkaW5nOiB2YXIoLS1sZ3RoLTYpO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGZsZXgtc2hyaW5rOiAyO1xcbn1cXG5cXG4ubWVudSBwIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjI7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNjYuMTg4JTsgLyogMzMuMjM4cHggKi9cXG59XFxuXFxuLm1lbnUgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC01KTtcXG4gIGNvbG9yOiAjZTVhMTYyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tbGd0aC00KTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWxndGgtMik7O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcXG59XFxuXFxuLmluZm8gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pbmZvIC5jb250YWluZXIgPiAqIHtcXG4gIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiBmaXQtY290ZW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcXG4gIC5pbmZvIC5jb250YWluZXIgPiAqIHtcXG4gICAgLyogbWluLXdpZHRoOiA1MDBweDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5pbmZvIC5jb250YWluZXIgPiAqOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXJpZ2h0OiA5M3B4O1xcbn1cXG5cXG4uaW5mbyBoNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5pbmZvLWljb24ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA4M3B4O1xcbiAgaGVpZ2h0OiA4M3B4O1xcbiAgYmFja2dyb3VuZDogIzFkMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcblxcbi5pbmZvLW9wZXJhdGluZ190aW1lIC5pbmZvLWljb24ge1xcbiAgcGFkZGluZzogMTlweDtcXG59XFxuXFxuLmN1cC1pY29uIHtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuXFxuLmRyaW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhyIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxndGgtNCk7XFxufVxcblxcbi5kcmluayB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTIpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tbGd0aC00KTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1sZ3RoLTQpO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4uZHJpbmstZGlzYyB7XFxuICBtYXgtaW5saW5lLXNpemU6IDQwY2g7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTEpO1xcbn1cXG5cXG4uY29udGFjdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1sZ3RoLTEpO1xcbn1cXG5cXG4uY29udGFjdF9saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFuY3RfbGlzdF9pdGVtIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1sZ3RoLTUpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGd0aC01KTtcXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpIHtcXG4gIG5hdiwgLmhlcm8taW50cm8gPiAqLCAubWVudSwgLmluZm8gLmNvbnRhaW5lcntcXG4gICAgbWFyZ2luLWlubGluZTogdmFyKC0tbGd0aC00KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBzb2NpYWxzTGlzdCA9IGBcbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rYWRkeTEyMC9SZXN0YXVyYW50LXBhZ2VcIlxuICAgICAgICAgID48c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yelwiXG4gICAgICAgICAgICAvPjwvc3ZnXG4gICAgICAgID48L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9LYWRkeURldlwiXG4gICAgICAgICAgPjxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk00NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6XCJcbiAgICAgICAgICAgIC8+PC9zdmdcbiAgICAgICAgPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgYFxuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9ob21lJztcbmltcG9ydCBNZW51IGZyb20gJy4vdmlld3MvbWVudSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL3ZpZXdzL2Fib3V0JztcbmltcG9ydCB7IExpbmssIFNlcnZlUGFnZSwgUm91dGVzIH0gZnJvbSAnLi91dGlscy9yb3V0ZXInO1xuaW1wb3J0IHsgc29jaWFsc0xpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFscyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCByb3V0ZSA9IHtcbiAgJy8nOiB7IHRpdGxlOiAnSG9tZScsIHJlbmRlcjogSG9tZSB9LFxuICAnL2NvbnRhY3QnOiB7IHRpdGxlOiAnQ29udGFjdCcsIHJlbmRlcjogQ29udGFjdCB9LFxuICAnL21lbnUnOiB7IHRpdGxlOiAnTWVudScsIHJlbmRlcjogTWVudSB9LFxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBSb3V0ZXMocm91dGUpO1xuICByZXR1cm4gYDxoZWFkZXI+XG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzcz1cImxvZ1wiPlxuICAgICAgPGgzPlJpbmRpJ3M8L2gzPlxuICAgIDwvZGl2PlxuICAgIDx1bD5cbiAgICAgIDxsaT4ke0xpbmsoJy8nLCAnSG9tZScpfTwvbGk+XG4gICAgICA8bGk+JHtMaW5rKCcvbWVudScsICdNZW51Jyl9PC9saT5cbiAgICAgIDxsaT4ke0xpbmsoJy9jb250YWN0JywgJ0NvbnRhY3QnKX08L2xpPlxuICAgICAgPGxpPiR7TGluaygnL21lbnUnLCAnTWVudScpfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9J2xpc3Qtc3BhY2UnPjwvbGk+XG4gICAgICAke3NvY2lhbHNMaXN0fVxuICAgIDwvdWw+XG4gIDwvbmF2PlxuPC9oZWFkZXI+XG48bWFpbiBpZD1cInBhZ2VcIj5cbiAgJHtTZXJ2ZVBhZ2UoKX1cbjwvbWFpbj5cbjxmb290ZXI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjMga2FkZHkxMjA8L3A+XG4gICAgPHVsPiR7c29jaWFsc0xpc3R9PC91bD5cbiAgPC9kaXY+XG48L2Zvb3Rlcj5gO1xufVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmlubmVySFRNTCA9IEFwcCgpO1xuIiwiLyogaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIi4vbmF2aWdhdGlvblwiOyAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIGxldCByb3V0ZXM7XG5cbiAgY29uc3QgUm91dGVzID0gKHJvdXRlKSA9PiB7XG4gICAgcm91dGVzID0gcm91dGVcbiAgfVxuXG4gIGNvbnN0IHNlcnZpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXcgPSByb3V0ZXNbbG9jYXRpb24ucGF0aG5hbWVdO1xuICAgIGlmICh2aWV3KSB7XG4gICAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgJy8nKTtcbiAgICAgIHJldHVybiAnLyc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFNlcnZlUGFnZSA9ICgpID0+IHtcbiAgICBsZXQgdmlldyA9IHJvdXRlc1tzZXJ2aW5nKCldO1xuICAgIGRvY3VtZW50LnRpdGxlID0gdmlldy50aXRsZTtcbiAgICBjb25zdCBjb250ZW50ID0gdmlldy5yZW5kZXIoKTtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY29udGVudC5vdXRlckhUTUw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXcgPSByb3V0ZXNbbG9jYXRpb24ucGF0aG5hbWVdO1xuICAgIGlmICh2aWV3KSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgJy8nKTtcbiAgICAgIHJvdXRlcigpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZScpO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdbZGF0YS1saW5rXScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIGUudGFyZ2V0LmhyZWYpO1xuICAgICAgcGFnZS5pbm5lckhUTUwgPSBTZXJ2ZVBhZ2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcm91dGVyKTtcblxuICBjb25zdCBMaW5rID0gKGhyZWYsIG5hbWUsIHBhZ2UpID0+IHtcbiAgICAvKiByb3V0ZXNbaHJlZl0gPSB7IHRpdGxlOiBuYW1lLCByZW5kZXI6IHBhZ2UgfTsgKi9cbiAgICByZXR1cm4gYDxhIGhyZWY9XCIke2hyZWZ9XCIgZGF0YS1saW5rPiR7bmFtZX08L2E+YDtcbiAgfTtcblxuICByZXR1cm4ge0xpbmssIFNlcnZlUGFnZSwgUm91dGVzfTtcbn1cblxuZXhwb3J0IGNvbnN0IHtMaW5rLCBTZXJ2ZVBhZ2UsIFJvdXRlc30gPSBSb3V0ZXIoKVxuIiwiLyogQ29udGFjdCAqL1xuXG5jb25zdCBjb250YWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUHlzaWNhbCBhZGRyZXNzJyxcbiAgICBkZXRhaWxzOiBbJzQ3OCBTb25nb3p3aSBTdHJlZXQnLCAnTG91aXMgVHJpY2hhcmR0JywgJ0xpbXBvcG8nXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnS2FkZHkgTWFyaW5kaScsXG4gICAgZGV0YWlsczogWydNYW5hZ2VyJywgJzA4NiAxNjIgNzAwMCcsICdrYWRkeV9tYXJpbmRpQG1hcmluZGljYWZlLmNvLnphJ10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RlYm9nbyBSYW1hbGFwYScsXG4gICAgZGV0YWlsczogWydTci4gTWFuYWdlcicsICcwODYgMTYyIDcxMTEnLCAnVGViby5SYW1hbGFwYUBtYXJpbmRpY2FmZS5jby56YSddLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgbGV0IGNvbnRhY3RMaXN0ID0gJyc7XG5cbiAgZm9yIChsZXQgY29udGFjdCBvZiBjb250YWN0cykge1xuICAgIGNvbnRhY3RMaXN0ICs9IGNvbnRhY3RJdGVtKGNvbnRhY3QpO1xuICB9XG4gIHJldHVybiBgXG48c2VjdGlvbiBjbGFzcz0nY29udGFjdCc+XG4gIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XG4gICAgPGgzIGNsYXNzPSdzZWN0aW9uLXRpdGxlJz5Db250YWN0IHVzPC9oMz5cbiAgICA8ZGl2IGNsYXNzPSdjb250YWN0X2xpc3QnPlxuICAgICAgJHtjb250YWN0TGlzdH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5gO1xufVxuXG5mdW5jdGlvbiBjb250YWN0SXRlbShjb250YWN0KSB7XG4gIGNvbnN0IGRldGFpbHNMaXN0ID0gKGRldGFpbHMpID0+IHtcbiAgICBsZXQgbGlzdCA9ICcnO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZGV0YWlscykge1xuICAgICAgbGlzdCArPSBgPGxpPiR7aXRlbX08L2xpPmA7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIHJldHVybiBgPGRpdiBjbGFzcz0nY29udGFuY3RfbGlzdF9pdGVtJz5cbiAgICAgIDxoNCBjbGFzcz0nY2FyZC10aXRsZSc+JHtjb250YWN0LnRpdGxlfTwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgICAke2RldGFpbHNMaXN0KGNvbnRhY3QuZGV0YWlscyl9XG4gICAgICA8L3VsPiBcbiAgICAgPC9kaXY+YDtcbn1cbiIsImltcG9ydCBiYXJpc3RhSW1nIGZyb20gJy4uL2Fzc2V0cy9iYXJpc3RhLnBuZyc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi4vYXNzZXRzL0xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgdGltZSBmcm9tICcuLi9hc3NldHMvR3JvdXAgNDIuc3ZnJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi91dGlscy9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLnNyYyA9IGJhcmlzdGFJbWc7XG5cbiAgY29uc3QgbG9jYXRpb25JY29uID0gbmV3IEltYWdlKCk7XG4gIGxvY2F0aW9uSWNvbi5zcmMgPSBsb2NhdGlvbjtcblxuICBjb25zdCB0aW1lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0aW1lSWNvbi5zcmMgPSB0aW1lO1xuXG4gIGNvbnN0IGhvbWUgPSBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaG9tZVwiPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiaGVyb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naGVyby1iZ19pbWcnPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naGVyby1pbnRybyc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UmluZGkncyBDb2ZmZWUgU2hvcDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVyby10YWdsaW5lXCI+TG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51Jz5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWltZyc+JHtteUljb24ub3V0ZXJIVE1MfTwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtYWJvdXQnPlxuICAgICAgICAgICAgICAgIDxoMz5PdXIgTWVudTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIE91ciBkaXZlcnNlIG1lbnUgYm9hc3RzIGEgZnVzaW9uIG9mIGNsYXNzaWMgYnJ1bmNoIGZhdm9yaXRlcyBhbmQgaW5ub3ZhdGl2ZSBkaXNoZXMuIFdoZXRoZXIgeW91J3JlIGNyYXZpbmcgdGhlIHRpbWVsZXNzIHBlcmZlY3Rpb24gb2YgYSBzdGFjayBmbHVmZnkgcGFuY2FrZXMgZHJpenpsZWQgaW4gcmVhbCBtYXBsZSBzeXJ1cCBvciB0ZW1wdGVkIGJ5IG91ciBzaWduYXR1cmUgYXZvY2FkbyB0b2FzdCB0b3BwZWQgd2l0aCBwb2FjaGVkIGVnZ3MsIGV2ZXJ5IGJpdGUgaXMgYW4gZXhwZXJpZW5jZSB0byByZW1lbWJlci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgJHtMaW5rKCcvbWVudScsICc8YnV0dG9uPlZpZXcgTWVudTwvYnV0dG9uPicpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0naW5mbyc+IFxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bG9jYXRpb25JY29uLm91dGVySFRNTH0gIFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICA8aDQ+TG9jYXRlIFVzPC9oND4gXG4gICAgICAgICAgICAgICAgICAgIDxwPiBSYXZlbGUgMjIsIFRoc2lsd2F2aHVzaWt1LCBMaW1wb3BvPC8+IFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tb3BlcmF0aW5nX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAke3RpbWVJY29uLm91dGVySFRNTH0gIFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICA8aDQ+T3BlbiBob3VyczwvaDQ+IFxuICAgICAgICAgICAgICAgICAgICA8cD5Nb24gdG8gRnJpIDk6MDAgQU0gLSA5OjAwIFBNIDwvcD4gXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuYDtcbiAgcmV0dXJuIGhvbWU7XG59XG4iLCJpbXBvcnQgY3VwSW1nIGZyb20gJy4uL2Fzc2V0cy9WZWN0b3Iuc3ZnJztcblxuY29uc3QgZHJpbmtzID0gW1xuICB7XG4gICAgbmFtZTogJ0V4cHJlc3NvJyxcbiAgICBkaXNjcmlwdGlvbjogJ1NpbmdsZSBzaG90IG9mIGVzcHJlc3NvLicsXG4gICAgY3VwOiBbeyBwcmljZTogJ1IzNScsIHNpemU6ICczOTQga2onIH1dLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZsYXQgV2hpdGUnLFxuICAgIGRpc2NyaXB0aW9uOiAnRG91YmxlIHNob3Qgb2YgZXNwcmVzc28gd2l0aCB0ZXh0dXJpc2VkIG1pbGsuJyxcbiAgICBjdXA6IFt7IHByaWNlOiAnUjM1Jywgc2l6ZTogJzM5NCBraicgfV0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ0FGRsOIIExBVFRFJyxcbiAgICBkaXNjcmlwdGlvbjogJ1NpbmdsZSBzaG90IG9mIGVzcHJlc3NvIHdpdGggdGV4dHVyaXNlZCBtaWxrLicsXG4gICAgY3VwOiBbeyBwcmljZTogJ1IzOScsIHNpemU6ICc3MDUga2onIH1dLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NBRkbDiCBNT0NIQScsXG4gICAgZGlzY3JpcHRpb246ICdIb3QgY2hvY29sYXRlICYgYSBzaG90IG9mIGVzcHJlc3NvIHdpdGggdGV4dHVyaXNlZCBtaWxrLicsXG4gICAgY3VwOiBbeyBwcmljZTogJ1I0MicsIHNpemU6ICc3MDUga2onIH1dLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FNRVJJQ0FOTycsXG4gICAgZGlzY3JpcHRpb246ICdEb3VibGUgc2hvdCBvZiBlc3ByZXNzbyB3aXRoIGhvdCB3YXRlci4nLFxuICAgIGN1cDogW3sgcHJpY2U6ICdSMzInLCBzaXplOiAnMTUxIGtqJyB9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDQVBQVUNDSU5PJyxcbiAgICBkaXNjcmlwdGlvbjogJ0RvdWJsZSBzaG90IG9mIGVzcHJlc3NvIHdpdGggdGV4dHVyaXNlZCBtaWxrLicsXG4gICAgY3VwOiBbXG4gICAgICB7IHByaWNlOiAnUjMzJywgc2l6ZTogJzM2NiBrajogU2hvcnQgKHNpbmdsZSBzaG90KScgfSxcbiAgICAgIHsgcHJpY2U6ICdSMzYnLCBzaXplOiAnNDc5IGtqOiBFYXN5IChkb3VibGUgc2hvdCknIH0sXG4gICAgICB7IHByaWNlOiAnUjQyJywgc2l6ZTogJzc2OSBrajogU2VyaW91cyAoZG91YmxlIHNob3QpJyB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICBsZXQgbWVudSA9ICcnO1xuXG4gIGNvbnN0IGN1cEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY3VwSWNvbi5zcmMgPSBjdXBJbWc7XG4gIGN1cEljb24uY2xhc3NMaXN0LmFkZCgnY3VwLWljb24nKTtcblxuICBjb25zdCBwcmljZUxpc3QgPSAoY3VwcykgPT4ge1xuICAgIGxldCBsaXN0ID0gJyc7XG4gICAgZm9yIChsZXQgY3VwIG9mIGN1cHMpIHtcbiAgICAgIGxpc3QgKz0gYDxsaT48c3BhbiBjbGFzcz0ncHJpY2UnPiR7Y3VwLnByaWNlfTwvc3Bhbj4gfCA8c3BhbiBjbGFzcz0nc2l6ZSc+JHtjdXAuc2l6ZX08L3NwYW4+PC9saT5gO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBmb3IgKGxldCBkcmluayBvZiBkcmlua3MpIHtcbiAgICBtZW51ICs9IGA8ZGl2IGNsYXNzPVwiZHJpbmtcIj4gXG4gICAgICAgPGg1IGNsYXNzPSdjYXJkLXRpdGxlJz4ke2RyaW5rLm5hbWV9PC9oNT5cbiAgICAgICA8cCBjbGFzcz0nZHJpbmstZGlzYyc+JHtkcmluay5kaXNjcmlwdGlvbn08L3A+XG4gICAgICAgPHVsIGNsYXNzPSdkcmluay1zaXplcyc+JHtwcmljZUxpc3QoZHJpbmsuY3VwKX1cbiAgICA8L2Rpdj5gO1xuICB9XG5cbiAgcmV0dXJuIGBcbjxzZWN0aW9uIGNsYXNzPSdtZW51Xyc+XG4gICA8YXJ0aWNsZSBjbGFzcz1cImhlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3M9J2hlcm8tYmdfaW1nJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2hlcm8taW50cm8nPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPk91ciBNZW51PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfZHJpbmtzXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9J3NlY3Rpb24tdGl0bGUnPjxzcGFuPiR7Y3VwSWNvbi5vdXRlckhUTUx9PHNwYW4+IERyaW5rczwvaDM+IFxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZHJpbmtzJz5cbiAgICAgICAgICAgICAgJHttZW51fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+YDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==