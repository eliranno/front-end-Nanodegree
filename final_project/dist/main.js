var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  box-sizing: border-box;\\n  padding: 0;\\n}\\n\\n.header-container {\\n  height: 10vh;\\n  padding: 20px;\\n  background: linear-gradient(to bottom right, #0562f7, #629af5);\\n  color: white;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.top-header-text {\\n  text-align: center;\\n}\\n\\n.search-bar {\\n  padding-top: 10px;\\n  display: flex;\\n  height: 5vh;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  background: linear-gradient(to right, #fff700, #dbd51a);\\n}\\n\\n.search-bar > * {\\n  margin-right: 10px;\\n}\\n\\n.modal {\\n  display: none;\\n  /* Hidden by default */\\n  position: fixed;\\n  /* Stay in place */\\n  z-index: 1;\\n  /* Sit on top */\\n  padding-top: 100px;\\n  /* Location of the box */\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  /* Full width */\\n  height: 100%;\\n  /* Full height */\\n  overflow: auto;\\n  /* Enable scroll if needed */\\n  background-color: black;\\n  /* Fallback color */\\n  background-color: rgba(0, 0, 0, 0.4);\\n  /* Black w/ opacity */\\n}\\n\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n  height: auto;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n.left-modal-pane {\\n  grid-row: 1;\\n  display: block;\\n}\\n\\n.right-modal-pane {\\n  text-align: left;\\n  grid-row: 1;\\n}\\n\\n#modal-city-name {\\n  text-align: center;\\n  margin-top: 10px;\\n  text-transform: uppercase;\\n  color: white;\\n  background-color: black;\\n}\\n\\n.trip-countdown {\\n  margin-top: 5px;\\n}\\n\\n.trip-weather {\\n  margin-top: 10px;\\n}\\n\\n#modal-trip-img {\\n  object-fit: contain;\\n  width: 600px;\\n  max-height: 600px;\\n  margin: 20px;\\n}\\n\\n.modal-controller {\\n  margin-top: 20px;\\n  display: inline-block;\\n}\\n\\n.modal-controller > * {\\n  margin: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Client/./src/client/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Client/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ui */ \"./src/client/js/ui.js\");\n/* harmony import */ var _js_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/requests */ \"./src/client/js/requests.js\");\n\n\n\n\nlet showTripDetailsButton = document.querySelector(\"#show-details-button\");\n\nshowTripDetailsButton.addEventListener(\"click\", async(event) => {\n    console.log(\"showTripDetailsButton was clicked\");\n    let startDate = new Date(document.querySelector(\"#start-date\").value + \"T00:00\");\n    let endDate = new Date(document.querySelector(\"#end-date\").value + \"T00:00\");\n    let isValidRage = Object(_js_ui__WEBPACK_IMPORTED_MODULE_1__[\"checkDates\"])(startDate, endDate);\n    if (!isValidRage) {\n        alert(\"the dates you entered are invalid.\");\n        return;\n    }\n    let city = document.querySelector(\"#city-input\").value;\n    if (city.length < 2) {\n        alert(\"the name of the city is invalid\");\n        return;\n    }\n    let trip = {};\n\n    let geoLocation = await Object(_js_requests__WEBPACK_IMPORTED_MODULE_2__[\"getGeoLocation\"])(city);\n\n    let photo = await Object(_js_requests__WEBPACK_IMPORTED_MODULE_2__[\"getImageURL\"])(city, geoLocation.countryCode);\n\n    trip.latitude = geoLocation.latitude;\n    trip.longitude = geoLocation.longitude;\n    trip.countryCode = geoLocation.countryCode;\n    trip.cityName = city;\n    trip.start = startDate;\n    trip.end = endDate;\n    trip.photo = photo;\n\n    trip.weatherForecast = await Object(_js_requests__WEBPACK_IMPORTED_MODULE_2__[\"getWeatherForecast\"])(geoLocation.latitude, geoLocation.longitude);\n    console.log(trip);\n    Object(_js_ui__WEBPACK_IMPORTED_MODULE_1__[\"showModal\"])(trip);\n});\n\n//# sourceURL=webpack://Client/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/requests.js":
/*!***********************************!*\
  !*** ./src/client/js/requests.js ***!
  \***********************************/
/*! exports provided: getGeoLocation, getWeatherForecast, getImageURL, saveTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGeoLocation\", function() { return getGeoLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherForecast\", function() { return getWeatherForecast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageURL\", function() { return getImageURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTrip\", function() { return saveTrip; });\nconst geonamesUrl = 'http://api.geonames.org/';\nconst geonamesKey = 'eliranno';\nconst geonamesQuery = 'searchJSON?formatted=true&q=';\n\nconst weatherBitUrl = \"http://api.weatherbit.io/v2.0/forecast/daily?\";\nconst weatherBitKey = '03348f4c2814492daa11fe4fa1e19ac1';\n\nconst pixabayURL = 'https://pixabay.com/api/?key=';\nconst pixabayKey = '17633134-cb398b90fe669344f1fd05d5b';\n\n\n\nasync function getGeoLocation(location) {\n    const endpoint = geonamesUrl + geonamesQuery + location + '&username=' + geonamesKey + '&style=full';\n    try {\n        const response = await fetch(endpoint);\n        if (response.ok) {\n            const location = {};\n            const jsonRes = await response.json();\n\n            location.latitude = jsonRes.geonames[0].lat;\n            location.longitude = jsonRes.geonames[0].lng;\n            location.countryCode = jsonRes.geonames[0].countryCode;\n\n            console.log(location);\n            return location;\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n\nasync function getWeatherForecast(latitude, longitude) {\n    console.log(\"getting forecast\");\n    const endpoint = weatherBitUrl + \"key=\" + weatherBitKey + \"&lat=\" + latitude + \"&lon=\" + longitude;\n    try {\n        const response = await fetch('http://localhost:3000/forecast', {\n            method: 'POST',\n            headers: { \"Content-Type\": \"application/json\" },\n            body: JSON.stringify({ endpoint: endpoint })\n        });\n        if (response.ok) {\n            const jsonRes = await response.json();\n            return jsonRes;\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n\nasync function saveTrip(trip) {\n    const endpoint = 'http://localhost:3000/save';\n    try {\n        const response = await fetch(endpoint, {\n            method: 'POST',\n            headers: { \"Content-Type\": \"application/json\" },\n            body: JSON.stringify({ trip })\n        });\n        if (response.ok) {\n            true;\n        } else {\n            return false;\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n\nasync function getImageURL(city, country) {\n    const queryCity = `&q=${city}&image_type=photo&pretty=true&category=places`;\n    const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`\n\n    const cityEndpoint = pixabayURL + pixabayKey + queryCity;\n    const countryEndpoint = pixabayURL + pixabayKey + queryCountry;\n    try {\n        let response = await fetch(cityEndpoint);\n        if (response.ok) {\n            let jsonRes = await response.json();\n            if (jsonRes.totalHits === 0) {\n                // If not, display pictures for the country\n                response = await fetch(countryEndpoint);\n                if (response.ok) {\n                    jsonRes = await response.json();\n                    return jsonRes.hits[0].largeImageURL;\n                }\n            }\n            return jsonRes.hits[0].largeImageURL;\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://Client/./src/client/js/requests.js?");

/***/ }),

/***/ "./src/client/js/ui.js":
/*!*****************************!*\
  !*** ./src/client/js/ui.js ***!
  \*****************************/
/*! exports provided: checkDates, showModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkDates\", function() { return checkDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showModal\", function() { return showModal; });\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ \"./src/client/js/requests.js\");\n\nlet tripDetails = {};\n\nfunction checkDates(startDate, endDate) {\n    startDate.setHours(0, 0, 0, 0);\n    endDate.setHours(0, 0, 0, 0);\n    let date = new Date().setHours(0, 0, 0, 0);\n    return startDate <= endDate && startDate >= date && endDate >= date;\n}\n\n\nfunction showModal(trip) {\n    let modal = document.querySelector(\"#trip-details-modal\");\n    modal.style.display = \"block\"\n    let cityNameElement = document.querySelector(\"#modal-city-name\");\n    cityNameElement.innerHTML = trip.cityName;\n    const daysLeft = countdown(trip.start);\n    document.querySelector('.trip-countdown').innerHTML = `<p\">Your trip to <b>${trip.cityName}</b> is ${daysLeft} days away</p>`;\n\n    // Display weather info\n    const weather = trip.weatherForecast;\n    if (daysLeft > 15) {\n        document.querySelector('.trip-weather').innerHTML = `<p\">The current weather:</p>\n                                                            <p\">High ${weather.data[0].high_temp}&deg;C Low ${weather.data[0].low_temp}&deg;C</p>`;\n    } else {\n        document.querySelector('.trip-weather').innerHTML = `<p\">Weather forecast for then:</p>\n                                                         <p\">High ${weather.data[daysLeft].high_temp}&deg;C Low ${weather.data[daysLeft].low_temp}&deg;C</p>`;\n    }\n\n    let img = document.querySelector(\"#modal-trip-img\");\n    img.setAttribute(\"src\", trip.photo);\n\n    tripDetails = trip;\n\n}\n\n\ndocument.querySelector(\"#save-button\").addEventListener(\"click\", (e) => {\n    Object(_requests__WEBPACK_IMPORTED_MODULE_0__[\"saveTrip\"])(tripDetails);\n    let modal = document.querySelector(\"#trip-details-modal\");\n    modal.style.display = \"none\"\n\n\n});\n\ndocument.querySelector(\"#cancel-button\").addEventListener(\"click\", (e) => {\n    let modal = document.querySelector(\"#trip-details-modal\");\n    modal.style.display = \"none\"\n});\n\nconst countdown = (start) => {\n\n    var date = new Date();\n\n    date.setHours(0, 0, 0, 0);\n\n    var diff = start.getTime() - date.getTime();\n\n    var diffInDays = diff / (1000 * 3600 * 24);\n\n    console.log(diffInDays);\n\n    return diffInDays;\n}\n\n\n\n\n//# sourceURL=webpack://Client/./src/client/js/ui.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Client/./src/client/styles/style.scss?");

/***/ })

/******/ });