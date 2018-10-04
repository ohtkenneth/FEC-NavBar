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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/ssr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _app = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/app.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ReactDOM.render(<App />, document.getElementById('navbar'));\n_reactDom2.default.hydrate(_react2.default.createElement(_app2.default, null), document.getElementById('navbar'));\n\n//# sourceURL=webpack:///./client/index.jsx?");

/***/ }),

/***/ "./client/styles.js":
/*!**************************!*\
  !*** ./client/styles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  a {\\n    color: black;\\n    text-decoration: none;\\n  }\\n  p {\\n    font-size: 12pt;\\n  }\\n  h1 {\\n    flex-grow: 2;\\n    text-align: center;\\n  }\\n  .whole-body {\\n    margin: auto;\\n    width: 980px;\\n    font-family: helvetica;\\n  }\\n  .shipping-info{\\n    flex-grow: 2;\\n    font-size: 10pt;\\n  }\\n  .bottomBar {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: row;\\n  }\\n  .StyledBasketBox {\\n    margin-right: 1200px;\\n    margin-left: 30px;\\n    position: absolute;\\n  }\\n  .StyledBasketDropDown {\\n    position: absolute;\\n    display: flex;\\n    flex-direction: column;\\n    width: 400px;\\n    top: 0;\\n    right: 0;\\n    justify-content: center;\\n    background-color: white;\\n    word-wrap: normal;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    padding: 2px 8px 2px 8px;\\n    z-index: 1030;\\n  }\\n  .NavDrops {\\n    position: absolute;\\n    width: 980px;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: row;\\n    z-index: 9999;\\n    justify-content: space-between;\\n    background-color: white;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n  }\\n  .blackbar {\\n    display: flex;\\n    justify-content: center;\\n    background-color: black;\\n    padding: 4px 2px 4px 2px;\\n    color: white;\\n    font-family: Helvetica;\\n    font-size: 12pt;\\n  }\\n  .blackBarText {\\n    color: white;\\n    font-family: Helvetica,\\n    font-size: 122pt;\\n  }\\n  .navs-text {\\n    flex-grow: 1.2;\\n    padding-left: 2em;\\n  }\\n  .titleRow {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: row;\\n    align-items: center;\\n  }\\n  .row{\\n    display: flex;\\n  }\\n  .column{\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  .downArrow {\\n    align-self: center;\\n    width: 0;\\n    height: 0;\\n    border-left: 5px solid transparent;\\n    border-right: 5px solid transparent;\\n    border-top: 5px solid black;\\n  }\\n  .upArrow {\\n    align-self: center;\\n    width: 0;\\n    height: 0;\\n    border-left: 5px solid transparent;\\n    border-right: 5px solid transparent;\\n    border-bottom: 5px solid black;\\n  }\\n  .signup {\\n    display: block;\\n    position: relative,\\n    margin-right: 8px;\\n    width: 180px;\\n    padding: 8px 20px 8px 20px;\\n  }\\n  .spreadFlex {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n  .searchForm {\\n    display: block;\\n    font-family: helvetica;\\n    font-size: 14px;\\n    width: 200px;\\n    height: 40px;\\n    padding-left: 12px;\\n    padding-right: 12px;\\n    color: #000;\\n    background-color: #fff;\\n    border-width: 1px;\\n    border-radius: 4px;\\n    border-color: #ccc;\\n  }\\n  .specificCatEntry {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 1px 50px 1px 50px;\\n    background-color: white;\\n    width: 600px;\\n    z-index: 9999;\\n  }\\n  #searchDrop {\\n    position: absolute;\\n    display: block;\\n    background-color: white;\\n    padding: 8px 16px 8px 16px;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    line-height: 3;\\n    margin-right: 8px;\\n    width: 195px;\\n    z-index: 999;\\n  }\\n  .LovesStyle {\\n    position: absolute;\\n    z-index: 1;\\n    /* top: 100%; */\\n    /* left: 20p; */\\n    font-weight: 700;\\n    font-size: 11px;\\n    color: #fff;\\n    background-color: #000;\\n    /* -webkit-transform: translate(-50%, 8px);\\n    -ms-transform: translate(-50%, 8px);\\n    transform: translate(-50%, 8px); */\\n    /* display: none; */\\n    padding-top: 0.375em;\\n    padding-bottom: 0.375em;\\n    padding-left: 0.75em;\\n    padding-right: 0.75em;\\n    /* white-space: nowrap; */\\n    border-radius: 4px;\\n    font-size: 12px;\\n  }\\n  .StyledNav {\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    z-index: 99999;\\n  }\\n  .shops {\\n    height: 38px;\\n    padding: 22px 28px 0px 28px;\\n    z-index: 9999;\\n    &:hover {\\n      box-shadow: grey 0px 1px 8px;\\n    }\\n  }\\n  .ShopBoxStyled {\\n    height: 38px;\\n    z-index: 9999;\\n  }\\n  .StyledBoxDrop {\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    padding-top: 22px;\\n    z-index: 9999;\\n  }\\n  .shop-flex {\\n    display: flex;\\n    position: absolute;\\n    margin-left: -28px;\\n    margin-right: 28px;\\n    flex-direction: row;\\n    background-color: white;\\n    zIndex: 9999;\\n  }\\n  .CatEntStyled {\\n    padding-bottom: 1em;\\n    padding-left: 50px;\\n    padding-right: 50px;\\n    background-color: white;\\n    zindex: 9999;\\n    &:hover {\\n      font-weight: bold;\\n    }\\n  }\\n  .StyledFlex {\\n    display: flex;\\n    flex: 0 0 auto;\\n  }\\n  .StyledSignup {\\n    display: block;\\n    position: relative;\\n    marginright: 8px;\\n    width: 180px;\\n    padding: 8px 20px 8px 20px;\\n  }\\n  .signup-dropdown {\\n    position: absolute;\\n    display: block;\\n    background-color: white;\\n    padding: 8px 20px 8px 20px;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    margin-right: 0px;\\n    width: 210;\\n    margin-bottom: 2em;\\n    line-height: 1.5em;\\n    font-size: 14;\\n    z-index: 999;\\n  }\\n'], ['\\n  a {\\n    color: black;\\n    text-decoration: none;\\n  }\\n  p {\\n    font-size: 12pt;\\n  }\\n  h1 {\\n    flex-grow: 2;\\n    text-align: center;\\n  }\\n  .whole-body {\\n    margin: auto;\\n    width: 980px;\\n    font-family: helvetica;\\n  }\\n  .shipping-info{\\n    flex-grow: 2;\\n    font-size: 10pt;\\n  }\\n  .bottomBar {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: row;\\n  }\\n  .StyledBasketBox {\\n    margin-right: 1200px;\\n    margin-left: 30px;\\n    position: absolute;\\n  }\\n  .StyledBasketDropDown {\\n    position: absolute;\\n    display: flex;\\n    flex-direction: column;\\n    width: 400px;\\n    top: 0;\\n    right: 0;\\n    justify-content: center;\\n    background-color: white;\\n    word-wrap: normal;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    padding: 2px 8px 2px 8px;\\n    z-index: 1030;\\n  }\\n  .NavDrops {\\n    position: absolute;\\n    width: 980px;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: row;\\n    z-index: 9999;\\n    justify-content: space-between;\\n    background-color: white;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n  }\\n  .blackbar {\\n    display: flex;\\n    justify-content: center;\\n    background-color: black;\\n    padding: 4px 2px 4px 2px;\\n    color: white;\\n    font-family: Helvetica;\\n    font-size: 12pt;\\n  }\\n  .blackBarText {\\n    color: white;\\n    font-family: Helvetica,\\n    font-size: 122pt;\\n  }\\n  .navs-text {\\n    flex-grow: 1.2;\\n    padding-left: 2em;\\n  }\\n  .titleRow {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: row;\\n    align-items: center;\\n  }\\n  .row{\\n    display: flex;\\n  }\\n  .column{\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  .downArrow {\\n    align-self: center;\\n    width: 0;\\n    height: 0;\\n    border-left: 5px solid transparent;\\n    border-right: 5px solid transparent;\\n    border-top: 5px solid black;\\n  }\\n  .upArrow {\\n    align-self: center;\\n    width: 0;\\n    height: 0;\\n    border-left: 5px solid transparent;\\n    border-right: 5px solid transparent;\\n    border-bottom: 5px solid black;\\n  }\\n  .signup {\\n    display: block;\\n    position: relative,\\n    margin-right: 8px;\\n    width: 180px;\\n    padding: 8px 20px 8px 20px;\\n  }\\n  .spreadFlex {\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n  .searchForm {\\n    display: block;\\n    font-family: helvetica;\\n    font-size: 14px;\\n    width: 200px;\\n    height: 40px;\\n    padding-left: 12px;\\n    padding-right: 12px;\\n    color: #000;\\n    background-color: #fff;\\n    border-width: 1px;\\n    border-radius: 4px;\\n    border-color: #ccc;\\n  }\\n  .specificCatEntry {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 1px 50px 1px 50px;\\n    background-color: white;\\n    width: 600px;\\n    z-index: 9999;\\n  }\\n  #searchDrop {\\n    position: absolute;\\n    display: block;\\n    background-color: white;\\n    padding: 8px 16px 8px 16px;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    line-height: 3;\\n    margin-right: 8px;\\n    width: 195px;\\n    z-index: 999;\\n  }\\n  .LovesStyle {\\n    position: absolute;\\n    z-index: 1;\\n    /* top: 100%; */\\n    /* left: 20p; */\\n    font-weight: 700;\\n    font-size: 11px;\\n    color: #fff;\\n    background-color: #000;\\n    /* -webkit-transform: translate(-50%, 8px);\\n    -ms-transform: translate(-50%, 8px);\\n    transform: translate(-50%, 8px); */\\n    /* display: none; */\\n    padding-top: 0.375em;\\n    padding-bottom: 0.375em;\\n    padding-left: 0.75em;\\n    padding-right: 0.75em;\\n    /* white-space: nowrap; */\\n    border-radius: 4px;\\n    font-size: 12px;\\n  }\\n  .StyledNav {\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    z-index: 99999;\\n  }\\n  .shops {\\n    height: 38px;\\n    padding: 22px 28px 0px 28px;\\n    z-index: 9999;\\n    &:hover {\\n      box-shadow: grey 0px 1px 8px;\\n    }\\n  }\\n  .ShopBoxStyled {\\n    height: 38px;\\n    z-index: 9999;\\n  }\\n  .StyledBoxDrop {\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    padding-top: 22px;\\n    z-index: 9999;\\n  }\\n  .shop-flex {\\n    display: flex;\\n    position: absolute;\\n    margin-left: -28px;\\n    margin-right: 28px;\\n    flex-direction: row;\\n    background-color: white;\\n    zIndex: 9999;\\n  }\\n  .CatEntStyled {\\n    padding-bottom: 1em;\\n    padding-left: 50px;\\n    padding-right: 50px;\\n    background-color: white;\\n    zindex: 9999;\\n    &:hover {\\n      font-weight: bold;\\n    }\\n  }\\n  .StyledFlex {\\n    display: flex;\\n    flex: 0 0 auto;\\n  }\\n  .StyledSignup {\\n    display: block;\\n    position: relative;\\n    marginright: 8px;\\n    width: 180px;\\n    padding: 8px 20px 8px 20px;\\n  }\\n  .signup-dropdown {\\n    position: absolute;\\n    display: block;\\n    background-color: white;\\n    padding: 8px 20px 8px 20px;\\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\\n    margin-right: 0px;\\n    width: 210;\\n    margin-bottom: 2em;\\n    line-height: 1.5em;\\n    font-size: 14;\\n    z-index: 999;\\n  }\\n']);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nmodule.exports = _styledComponents2.default.div(_templateObject);\n\n//# sourceURL=webpack:///./client/styles.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = \"development\" || 'dev';\n\nvar dev = {\n  app: {\n    port: process.env.DEV_APP_PORT || 1337,\n    serverIp: process.env.DEV_APP_SERVER_IP || '127.0.0.1'\n  },\n  db: {\n    port: process.env.DEV_DB_PORT || 27017,\n    serverIp: process.env.DEV_DB_HOST || '127.0.0.1',\n    name: process.env.DEV_DB_NAME || 'dev'\n  }\n};\n\nvar test = {\n  app: {\n    port: process.env.TEST_DB_PORT || 1337,\n    serverIp: process.env.TEST_DB_PORT || 'localhost'\n  },\n  db: {\n    port: process.env.TEST_DB_PORT || 27017,\n    serverIp: process.env.TEST_DB_PORT || 'localhost'\n  }\n};\n\nvar config = {\n  dev: dev,\n  test: test\n};\n\nmodule.exports = config[env];\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./server/ssr.js":
/*!***********************!*\
  !*** ./server/ssr.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _config = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _styles = __webpack_require__(/*! ../client/styles.js */ \"./client/styles.js\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _index = __webpack_require__(/*! ../client/index.jsx */ \"./client/index.jsx\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// styles for client\nvar PORT = _config2.default.app.port;\n// client index\n\nvar app = (0, _express2.default)();\n// const app = require('./index');\n\n// css stuff\nvar sheet = new _styledComponents.ServerStyleSheet();\nvar jsxStyles = sheet.collectStyles(_styles2.default);\nvar styleStream = sheet.interleaveWithNodeStream((0, _server.renderToNodeStream)(jsxStyles));\n\napp.get('/*', function (req, res) {\n  // app is client App\n  var appClient = _server2.default.renderToString(_react2.default.createElement(_index2.default, null));\n\n  // file path to transpiled index.js to serve in bundle\n  var indexFilePath = _path2.default.resolve('../server-build/index.js');\n  _fs2.default.readFile(indexFilePath, 'utf8', function (err, data) {\n    if (err) {\n      console.log('ERROR from fs.readFile', err);\n      return res.status(500).send('Opps');\n    }\n    styleStream.pipe(res, { end: false });\n    return res.send(\n    // replace navbar tag in index.html with bundle contents from\n    // ReactDOMServer.renderToString\n    data.replace('<div id=\"navbar\"></div>', '<div id=\"navbar\">' + appClient + '</div>'));\n  });\n});\n\napp.listen(PORT, function () {\n  console.log('SSR listening on port ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/ssr.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });