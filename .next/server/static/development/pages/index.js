module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Block.tsx":
/*!******************************!*\
  !*** ./components/Block.tsx ***!
  \******************************/
/*! exports provided: StyledBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBox", function() { return StyledBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/Block.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const StyledBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"])`
  background: white;
  box-shadow: 0 6px 8px rgba(102,119,136,.03), 0 1px 2px rgba(102,119,136,.3);
  overflow: hidden;
  position: relative;
`;

const Block = (_ref) => {
  let {
    children,
    footer,
    title,
    extraInfo
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "footer", "title", "extraInfo"]);

  return __jsx(StyledBox, _extends({
    borderRadius: 5,
    background: "white"
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    as: "h3",
    pt: 8,
    pb: 0,
    px: 2,
    minHeight: '90px',
    fontWeight: "bold",
    color: "gray.600",
    fontSize: "1.3em",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, title), children, footer && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    py: 5,
    px: 2,
    m: 0,
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "#f8f9fa",
    borderTop: "solid 1px rgba(102,119,136,.15)",
    fontFamily: "Space Mono",
    fontSize: "0.8em",
    color: "gray.700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: footer
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/Copyright.tsx":
/*!**********************************!*\
  !*** ./components/Copyright.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/Copyright.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Copyright = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  mb: "20px",
  my: 5,
  px: 5,
  fontSize: "1em",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Based on this GitHub project: ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  href: "https://github.com/valstu/korona-info",
  isExternal: true,
  color: "teal.500",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "https://github.com/valstu/korona-info"), " "), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  p: 5,
  color: "gray.500",
  m: 0,
  fontSize: "sm",
  mb: 10,
  mt: 0,
  textAlign: "center",
  maxWidth: "1040px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  title: "CDC/ Alissa Eckert, MS; Dan Higgins, MAM / Public domain",
  href: "https://commons.wikimedia.org/wiki/File:2019-nCoV-CDC-23312_without_background.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Corona virus image is a work of the Centers for Disease Control and Prevention, part of the United States Department of Health and Human Services, taken or made as part of an employee's official duties. As a work of the U.S. federal government, the image is in the public domain.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), " ", __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Author: CDC/ Alissa Eckert, MS; Dan Higgins, MAM (Public Domain)"))), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "MIT License")), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Copyright (c) 2020 Helsingin Sanomat"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.")));

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "57x57",
  href: "/images/apple-touch-icon-57x57.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "114x114",
  href: "/images/apple-touch-icon-114x114.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "72x72",
  href: "/images/apple-touch-icon-72x72.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "144x144",
  href: "/images/apple-touch-icon-144x144.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "60x60",
  href: "/images/apple-touch-icon-60x60.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "120x120",
  href: "/images/apple-touch-icon-120x120.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "76x76",
  href: "/images/apple-touch-icon-76x76.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  sizes: "152x152",
  href: "/images/apple-touch-icon-152x152.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/images/favicon-196x196.png",
  sizes: "196x196",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/images/favicon-96x96.png",
  sizes: "96x96",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/images/favicon-32x32.png",
  sizes: "32x32",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/images/favicon-16x16.png",
  sizes: "16x16",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/images/favicon-128.png",
  sizes: "128x128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("meta", {
  name: "application-name",
  content: "korona.kans.io",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#000000",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-TileImage",
  content: "/images/mstile-144x144.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-square70x70logo",
  content: "/images/mstile-70x70.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-square150x150logo",
  content: "/images/mstile-150x150.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-wide310x150logo",
  content: "/images/mstile-310x150.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-square310x310logo",
  content: "/images/mstile-310x310.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-title",
  content: "korona.kans.io",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  p: [2, 4, 5],
  width: ['100%', '100%', 2 / 3, 2 / 3],
  textAlign: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Image"], {
  src: "/images/corona-virus-small.png",
  mb: 0,
  title: "CDC/ Alissa Eckert, MS; Dan Higgins, MAM / Public domain",
  alt: "Kuvituskuva koronaviruksesta",
  borderWidth: "0px",
  width: "90px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
  as: "h1",
  color: "rgb(51, 68, 85)",
  mb: [3, 3, 5],
  mt: [3, 3, 2],
  textAlign: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Coronavirus infection in Algeria"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  mb: 5,
  fontFamily: "Space Mono",
  color: "rgb(51, 68, 85, 0.8)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "The information on this page is based on information gathered from Media. Data is updated every time new information becomes available.")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customTheme = _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"], {
  fonts: {
    heading: '"Space Grotesk Regular", sans-serif',
    body: '"Space Grotesk Regular", sans-serif',
    mono: 'Space Mono", Menlo, monospace'
  }
});

const Index = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: customTheme,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["CSSReset"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("div", {
  style: {
    flex: 1
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/NetworkGraph.js":
/*!************************************!*\
  !*** ./components/NetworkGraph.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_graph_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-graph-vis */ "react-graph-vis");
/* harmony import */ var react_graph_vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_graph_vis__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/NetworkGraph.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NetworkGraph = ({
  data
}) => {
  const {
    0: isComponentMounted,
    1: setIsComponentMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => setIsComponentMounted(true), []);

  if (!isComponentMounted) {
    return null;
  }

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000",
      width: 2,
      smooth: true
    },
    height: "600px",
    nodes: {
      // shape: "dot",
      size: 30,
      font: {
        size: 22,
        face: 'Space Mono',
        color: "#fff"
      },
      borderWidth: 2
    },
    autoResize: true,
    layout: {
      improvedLayout: true,
      clusterThreshold: 150
    }
  };
  const events = {
    select: function (event) {
      var {
        nodes,
        edges
      } = event;
    }
  };
  return __jsx(react_graph_vis__WEBPACK_IMPORTED_MODULE_1___default.a, {
    graph: data,
    options: options,
    events: events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NetworkGraph);

/***/ }),

/***/ "./components/StatBlock.tsx":
/*!**********************************!*\
  !*** ./components/StatBlock.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/StatBlock.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StatBlock = ({
  count,
  helpText
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stat"], {
  m: 0,
  p: 0,
  textAlign: "center",
  marginTop: "-20px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["StatNumber"], {
  bg: "white",
  pt: 0,
  pb: 0,
  fontSize: 70,
  mb: 0,
  fontFamily: "Space Mono",
  fontWeight: "normal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, count), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["StatHelpText"], {
  mb: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "\xA0", helpText, "\xA0"));

/* harmony default export */ __webpack_exports__["default"] = (StatBlock);

/***/ }),

/***/ "./components/Table.tsx":
/*!******************************!*\
  !*** ./components/Table.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/components/Table.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Styles = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /* padding: 1rem; */
  -webkit-overflow-scrolling: touch;
  table {
    border-spacing: 0;
    border-bottom: solid 1px rgba(102,119,136,.15);
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      border-top: solid 1px white;
      position: sticky;
      top: -1px;
      background: white;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem 1rem;
      text-align: left;
      border-bottom: solid 1px rgba(102,119,136,.15);
      border-right: 0px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Table = ({
  columns,
  data,
  height
}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns,
    data
  }); // Render the UI for your table

  return __jsx(Styles, {
    style: {
      height: `${height}px`,
      overflowY: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("table", _extends({}, getTableProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, headerGroups.map(headerGroup => __jsx("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), headerGroup.headers.map(column => __jsx("th", _extends({}, column.getHeaderProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), column.render('Header')))))), __jsx("tbody", _extends({}, getTableBodyProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), rows.map((row, i) => {
    prepareRow(row);
    return __jsx("tr", _extends({}, row.getRowProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }), row.cells.map(cell => {
      return __jsx("td", _extends({}, cell.getCellProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: undefined
      }), cell.render('Cell'));
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/TableColumns.ts":
/*!************************************!*\
  !*** ./components/TableColumns.ts ***!
  \************************************/
/*! exports provided: infectionColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infectionColumns", function() { return infectionColumns; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

const infectionColumns = [{
  Header: 'Index',
  accessor: 'index',
  Cell: ({
    cell: {
      value
    }
  }) => {
    return value;
  }
}, {
  Header: 'Id',
  accessor: 'id',
  Cell: ({
    cell
  }) => {
    return `#0${cell.value}`;
  }
}, {
  Header: 'Date',
  accessor: 'date',
  minWidth: '20%',
  Cell: ({
    cell: {
      value
    }
  }) => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(value), 'dd.MM.yyyy - HH:mm')
}, {
  Header: 'Wilaya',
  accessor: 'wilaya'
}, {
  Header: 'Source',
  accessor: 'infection_source_country'
}, {
  Header: 'Source of infection',
  accessor: 'infection_source',
  Cell: ({
    cell: {
      value
    }
  }) => {
    if (value === 'unknown') {
      return 'Not known';
    }

    if (value === 'related to earlier') {
      return 'related to earlier';
    }

    return `#0${value}`;
  }
}];

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: InfectionSourceEnum, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfectionSourceEnum", function() { return InfectionSourceEnum; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns-tz */ "date-fns-tz");
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_StatBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/StatBlock */ "./components/StatBlock.tsx");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Block */ "./components/Block.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Copyright */ "./components/Copyright.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_NetworkGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NetworkGraph */ "./components/NetworkGraph.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableColumns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TableColumns */ "./components/TableColumns.ts");
/* harmony import */ var _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/chartDataHelper */ "./utils/chartDataHelper.ts");
var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















let InfectionSourceEnum;

(function (InfectionSourceEnum) {
  InfectionSourceEnum["RelatedToEarlier"] = "related to earlier";
  InfectionSourceEnum["Unknown"] = "unknown";
})(InfectionSourceEnum || (InfectionSourceEnum = {}));

const CustomizedAxisTick = props => {
  const {
    x,
    y,
    stroke,
    payload,
    isDate
  } = props;
  return __jsx("g", {
    transform: `translate(${x},${y})`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("text", {
    x: 0,
    y: 0,
    dy: 14,
    fontSize: 12,
    textAnchor: "end",
    fill: "#666",
    transform: "rotate(-35)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, isDate ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(payload.value), 'd.M.') : payload.value));
};

const timeZone = 'Europe/Helsinki';

const Index = ({
  confirmed,
  deaths,
  recovered
}) => {
  // Map some data for stats blocks
  const date = new Date('2018-09-01Z16:01:36.386Z');
  const latestInfection = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["utcToZonedTime"])(new Date(confirmed[confirmed.length - 1].date), timeZone), 'dd.MM.yyyy - HH:mm', {
    timeZone
  });
  const latestInfectionDistrict = confirmed[confirmed.length - 1].healthCareDistrict;
  const latestDeath = deaths.length ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["utcToZonedTime"])(new Date(deaths[deaths.length - 1].date), timeZone), 'd.M.yyyy') : null;
  const latestDeathDistrict = deaths.length ? deaths[deaths.length - 1].healthCareDistrict : null;
  const latestRecoveredDistrict = recovered.length ? recovered[recovered.length - 1].healthCareDistrict : null;
  const latestRecovered = recovered.length ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["utcToZonedTime"])(new Date(recovered[recovered.length - 1].date), timeZone), 'd.M.yyyy') : null;
  const infectionsToday = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getInfectionsToday"])(confirmed);
  const {
    0: cumulativeChartScale,
    1: setCumulativeChartScale
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('linear');
  const {
    0: forecastChartScale,
    1: setForecaseChartScale
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('linear'); // Map data to show development of infections

  const {
    infectionDevelopmentData,
    infectionDevelopmentData30Days
  } = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getTimeSeriesData"])(confirmed, recovered, deaths);
  const {
    prediction60Days,
    today
  } = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getPredictionData"])(confirmed, deaths, recovered);
  const maxValues = infectionDevelopmentData30Days[infectionDevelopmentData30Days.length - 1];
  const dataMaxValue = Math.max(maxValues.deaths, maxValues.infections, maxValues.infections);
  const {
    infectionsByDistrict,
    infectionsByDistrictPercentage,
    areas
  } = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getTnfectionsByDistrict"])(confirmed);
  const {
    infectionsBySourceCountry
  } = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getInfectionsBySourceCountry"])(confirmed);
  const networkGraphData = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["getNetworkGraphData"])(confirmed);
  const reversedConfirmed = confirmed.map((i, index) => _objectSpread({
    index: index + 1
  }, i)).reverse();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Coronavirus infection in Finland \u2013 infections: ", confirmed.length || 0, " - recovered: ", recovered.length || 0, " - died: ", deaths.length || 0), __jsx("meta", {
    name: "description",
    content: `Suomen koronavirus-tartuntatilanne – tartunnat: ${confirmed.length || 0} - parantuneet: ${recovered.length || 0} - menehtyneet: ${deaths.length || 0}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:title",
    content: `Suomen koronavirus-tartuntatilanne`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:description",
    content: `Tartuntoja tällä hetkellä: ${confirmed.length || 0} - parantuneet: ${recovered.length || 0} - menehtyneet: ${deaths.length || 0}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Suomen koronavirus-tartuntatilanne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:locale",
    content: "fi_FI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image",
    content: "/images/corona-virus.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image:height",
    content: "1928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:url",
    content: "https://korona.kans.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    alignItems: "center",
    flexDirection: "column",
    flex: "1",
    width: "100%",
    maxWidth: "1440px",
    margin: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    flex: "1",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Infections",
    textAlign: "center",
    extraInfo: `New infections today ${infectionsToday}`,
    footer: `Latest infection ${latestInfection} (${latestInfectionDistrict || 'unknown'})`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    count: confirmed.length,
    helpText: `New infections today: ${infectionsToday}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Died",
    footer: latestDeath ? `Latest death ${latestDeath} (${latestDeathDistrict || 'unknown'})` : 'No death',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    count: deaths.length || 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Recovered",
    footer: latestRecovered ? `Latest recovery ${latestRecovered} (${latestRecoveredDistrict || 'unknown'})` : ' ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    count: recovered.length || 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%'],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Cumulative evolution (30 days)",
    footer: "Cumulative evolution of infections, heals and deaths in the last 30 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], {
    spacing: 0,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: "-15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "xs",
    fontFamily: "Space Grotesk Regular",
    px: 3,
    letterSpacing: "1px",
    borderRadius: "4px 0px 0px 4px",
    borderWidth: "0px",
    isActive: cumulativeChartScale === 'linear',
    onClick: () => setCumulativeChartScale('linear'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Linear"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "xs",
    fontFamily: "Space Grotesk Regular",
    px: 3,
    letterSpacing: "1px",
    borderRadius: "0px 4px 4px 0px",
    borderWidth: "0px",
    isActive: cumulativeChartScale === 'log',
    onClick: () => setCumulativeChartScale('log'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "Logarithmic")), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["ResponsiveContainer"], {
    width: '100%',
    height: 380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["ComposedChart"], {
    data: infectionDevelopmentData30Days,
    margin: {
      top: 20,
      right: 30,
      left: 0,
      bottom: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "colorInfection",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][8],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][8],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "colorRecovered",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][7],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][7],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "colorDeaths",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][0],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][0],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    tickFormatter: d => Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(d), 'd.M.'),
    tick: __jsx(CustomizedAxisTick, {
      isDate: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: undefined
    }),
    dataKey: "date",
    domain: ['dataMin', 'dataMax'],
    type: "number",
    scale: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    scale: cumulativeChartScale,
    dataKey: "infections",
    domain: ['dataMin', dataMaxValue + 10],
    unit: " person",
    tick: {
      fontSize: 12
    },
    name: "Tartunnat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["CartesianGrid"], {
    opacity: 0.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    labelFormatter: v => Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(v), 'dd.MM.yyyy'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][1],
    opacity: 0.4,
    dataKey: "infectionsDaily",
    name: "Today's infections",
    unit: " person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total infections",
    dataKey: "infections",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][8],
    fillOpacity: 1,
    fill: "url(#colorInfection)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total recovered",
    dataKey: "recovered",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][7],
    fillOpacity: 1,
    fill: "url(#colorRecovered)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total deaths",
    dataKey: "deaths",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][0],
    fillOpacity: 1,
    fill: "url(#colorDeaths)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Legend"], {
    wrapperStyle: {
      bottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Infections by hospital district",
    footer: "Infections by hospital district",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["BarChart"], {
    data: infectionsByDistrict,
    margin: {
      top: 20,
      right: 30,
      left: 0,
      bottom: 85
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    yAxisId: "left",
    unit: " person",
    dataKey: "infections",
    tick: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    dataKey: "infections",
    name: "Tartunnat",
    unit: " person",
    yAxisId: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, areas.map((area, index) => __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
    key: area,
    fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"].length],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["LabelList"], {
    dataKey: "infections",
    position: "top",
    formatter: e => e,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Infections by hospital district / Size of the hospital district",
    footer: "Infections by hospital district / Size of the hospital district",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["BarChart"], {
    data: infectionsByDistrictPercentage,
    margin: {
      top: 20,
      right: 30,
      left: 0,
      bottom: 85
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    unit: " %",
    dataKey: "perDistrict",
    tick: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    dataKey: "perDistrict",
    name: "%-osuus v\xE4est\xF6st\xE4",
    unit: " %",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, areas.map((area, index) => __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
    key: area,
    fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"].length],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["LabelList"], {
    dataKey: "perDistict",
    position: "top",
    formatter: e => e,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Countries of origin of infections",
    footer: "Number of infections by country of origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["BarChart"], {
    data: infectionsBySourceCountry,
    margin: {
      top: 20,
      right: 30,
      left: 0,
      bottom: 85
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
    unit: " person",
    dataKey: "infections",
    tick: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
    dataKey: "infections",
    name: "Tartunnat",
    unit: " person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, areas.map((area, index) => __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
    key: area,
    fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_14__["colors"].length],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  })), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["LabelList"], {
    dataKey: "infections",
    position: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Log of infections",
    footer: "All infections in Algeria are listed, most recent first. Some id may be missing in the middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }, __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
    height: 350,
    data: reversedConfirmed,
    columns: Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _components_TableColumns__WEBPACK_IMPORTED_MODULE_13__["infectionColumns"], []),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: ['100%'],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Infections' Networks",
    footer: "The figure shows the infections as a network. The number is the serial number of the infection. If the direct vector is not known, the link will be linked to the country of origin. Infections for which the direct cause or the country of origin is not known are excluded. Infections marked in Algeria are most likely to be linked to other infection networks. The color of the cell indicates the country where the infection is likely to have occurred.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx(_components_NetworkGraph__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: networkGraphData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  })))), __jsx(_components_Copyright__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  })));
};

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://raw.githubusercontent.com/stodi1/corona_virus_open_data/master/data.json');
  const data = await res.json();
  const confirmed = data.confirmed.map(i => _objectSpread({}, i, {
    infectionSourceCountry: i.infectionSourceCountry === "" ? null : i.infectionSourceCountry
  }));
  return _objectSpread({}, data, {
    confirmed
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/chartDataHelper.ts":
/*!**********************************!*\
  !*** ./utils/chartDataHelper.ts ***!
  \**********************************/
/*! exports provided: colors, healtCareDistricts, getTimeSeriesData, getPredictionData, getTnfectionsByDistrict, getInfectionsBySourceCountry, getInfectionsToday, getNetworkGraphData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healtCareDistricts", function() { return healtCareDistricts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeSeriesData", function() { return getTimeSeriesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPredictionData", function() { return getPredictionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTnfectionsByDistrict", function() { return getTnfectionsByDistrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfectionsBySourceCountry", function() { return getInfectionsBySourceCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfectionsToday", function() { return getInfectionsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkGraphData", function() { return getNetworkGraphData; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_groupby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.groupby */ "lodash.groupby");
/* harmony import */ var lodash_groupby__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_groupby__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.sortby */ "lodash.sortby");
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortby__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ml-regression-exponential */ "ml-regression-exponential");
/* harmony import */ var ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





// Map data to show development of infections
const colors = ['#003f5c', '#2fab8e', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600', '#ee2320'];
const healtCareDistricts = [{
  name: 'HUS',
  people: 1651715
}, {
  name: 'Etelä-Karjala',
  people: 129865
}, {
  name: 'Kymenlaakso',
  people: 168691
}, {
  name: 'Päijät-Häme',
  people: 211957
}, {
  name: 'Pohjois-Savo',
  people: 246653
}, {
  name: 'Etelä-Savo',
  people: 101518
}, {
  name: 'Itä-Savo',
  people: 42221
}, {
  name: 'Keski-Suomi',
  people: 252902
}, {
  name: 'Pohjois-Karjala',
  people: 166441
}, {
  name: 'Pohjois-Pohjanmaa',
  people: 409043
}, {
  name: 'Kainuu',
  people: 73959
}, {
  name: 'Keski-Pohjanmaa',
  people: 78124
}, {
  name: 'Lappi',
  people: 117447
}, {
  name: 'Länsi-Pohja',
  people: 61776
}, {
  name: 'Pirkanmaa',
  people: 532261
}, {
  name: 'Etelä-Pohjanmaa',
  people: 195583
}, {
  name: 'Kanta-Häme',
  people: 172720
}, {
  name: 'Varsinais-Suomi',
  people: 480626
}, {
  name: 'Satakunta',
  people: 220398
}, {
  name: 'Vaasa',
  people: 169741
}];
const peopleTotal = healtCareDistricts.reduce((acc, curr) => curr.people + acc, 0);
;
;
const getTimeSeriesData = (confirmed, recovered, deaths) => {
  const sortedData = lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default()(confirmed, 'date').map(item => _objectSpread({}, item, {
    dateString: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(item.date), 'yyyy-MM-dd')
  }));
  const sortedDataRecoverd = lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default()(recovered, 'date').map(item => _objectSpread({}, item, {
    dateString: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(item.date), 'yyyy-MM-dd')
  }));
  const sortedDataDeaths = lodash_sortby__WEBPACK_IMPORTED_MODULE_2___default()(deaths, 'date').map(item => _objectSpread({}, item, {
    dateString: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(item.date), 'yyyy-MM-dd')
  }));
  const daysIntervalSinceFirstInfection = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["eachDayOfInterval"])({
    start: new Date(sortedData[0].date),
    end: new Date(sortedData[sortedData.length - 1].date)
  });
  const infectionDevelopmentData = [];
  daysIntervalSinceFirstInfection.reduce((acc, curr) => {
    const items = sortedData.filter(item => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(new Date(item.date), curr));
    const itemsRecovered = sortedDataRecoverd.filter(item => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(new Date(item.date), curr));
    const itemsDeaths = sortedDataDeaths.filter(item => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(new Date(item.date), curr));
    acc.deaths = acc.deaths + itemsDeaths.length;
    acc.infections = acc.infections + items.length;
    acc.recovered = acc.recovered + itemsRecovered.length;
    infectionDevelopmentData.push(_objectSpread({
      date: curr.getTime(),
      infectionsDaily: items.length
    }, acc));
    return acc;
  }, {
    infections: 0,
    deaths: 0,
    recovered: 0
  });
  const thirtyDaysAgo = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["sub"])(new Date(), {
    days: 30
  });
  const infectionDevelopmentData30Days = infectionDevelopmentData.filter(item => item.date > thirtyDaysAgo.getTime());
  return {
    infectionDevelopmentData,
    infectionDevelopmentData30Days
  };
};
const getPredictionData = (confirmed, deaths, recovered) => {
  const currentData30Days = getTimeSeriesData(confirmed, recovered, deaths).infectionDevelopmentData30Days;
  const indexes = currentData30Days.map((d, i) => i + 1);
  const infections = currentData30Days.map(d => d.infections);
  const x = indexes;
  const y = infections;
  const regression = new ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3___default.a(x, y);
  const prediction60Days = Array.from(new Array(60)).map((x, i) => {
    const date = new Date(currentData30Days[0].date);
    date.setDate(date.getDate() + i);
    return {
      date: date.getTime(),
      infections: Math.round(regression.predict(i)) === 0 ? null : Math.round(regression.predict(i))
    };
  });
  return {
    prediction60Days,
    today: prediction60Days[29].date
  };
};
const getTnfectionsByDistrict = confirmed => {
  const groupedData = lodash_groupby__WEBPACK_IMPORTED_MODULE_1___default()(confirmed, 'healthCareDistrict');
  const infectionsByDistrict = Object.entries(groupedData).map(value => {
    var _healtCareDistricts$f;

    return {
      name: value[0],
      infections: value[1].length,
      // @ts-ignore
      people: Math.round(((_healtCareDistricts$f = healtCareDistricts.find(i => i.name === value[0])) === null || _healtCareDistricts$f === void 0 ? void 0 : _healtCareDistricts$f.people) / peopleTotal * 100)
    };
  });
  const infectionsByDistrictPercentage = Object.entries(groupedData).map(value => {
    var _healtCareDistricts$f2, _healtCareDistricts$f3;

    return {
      name: value[0],
      infections: Math.round(value[1].length / confirmed.length * 100),
      // @ts-ignore
      people: Math.round(((_healtCareDistricts$f2 = healtCareDistricts.find(i => i.name === value[0])) === null || _healtCareDistricts$f2 === void 0 ? void 0 : _healtCareDistricts$f2.people) / peopleTotal * 100),
      // @ts-ignore
      perDistrict: Math.round(value[1].length / ((_healtCareDistricts$f3 = healtCareDistricts.find(i => i.name === value[0])) === null || _healtCareDistricts$f3 === void 0 ? void 0 : _healtCareDistricts$f3.people) * 100 * 10000) / 10000
    };
  });
  const areas = Object.entries(groupedData).map(value => value[0]);
  return {
    infectionsByDistrict,
    infectionsByDistrictPercentage,
    areas
  };
};
const getInfectionsBySourceCountry = confirmed => {
  const groupedData = lodash_groupby__WEBPACK_IMPORTED_MODULE_1___default()(confirmed, 'infectionSourceCountry');
  const infectionsBySourceCountry = Object.entries(groupedData).map(value => ({
    name: value[0] === 'null' ? 'Ei tiedossa' : value[0],
    infections: value[1].length
  }));
  const areas = Object.entries(groupedData).map(value => value[0]);
  return {
    infectionsBySourceCountry,
    areas
  };
};

const getGroup = (infection, confirmed) => {
  if (typeof infection.infectionSource === 'number') {
    const item = confirmed.find(i => Number(i.id) === infection.infectionSource);

    if (item) {
      if (typeof item.infectionSource === 'number') {
        return getGroup(item, confirmed);
      }

      if (item.infectionSourceCountry) {
        return item.infectionSourceCountry;
      }

      return null;
    }
  }

  return infection.infectionSourceCountry;
};

const getInfectionsToday = confirmed => {
  const infectionsToday = confirmed.filter(infection => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isToday"])(new Date(infection.date)));
  return infectionsToday.length || 0;
};
const getNetworkGraphData = confirmed => {
  const infectionSources = Array.from(new Set(confirmed.filter(i => typeof i.infectionSource === 'number').map(inf => inf.infectionSource)));
  const uniqueCountries = Array.from(new Set(confirmed.filter(i => !!i.infectionSourceCountry).map(inff => inff.infectionSourceCountry)));
  const allNodes = confirmed.map((infection, index) => _objectSpread({
    index: index + 1
  }, infection, {
    id: Number(infection.id),
    label: `#0${index + 1}`,
    // group: getGroup(infection, confirmed),
    color: `${colors[uniqueCountries.indexOf(infection.infectionSourceCountry)]}`
  }));
  const nodes = allNodes.filter(i => infectionSources.includes(i.id) || typeof i.infectionSource === 'number'); // @ts-ignore

  const edges = allNodes.map(i => ({
    from: typeof i.infectionSource === 'number' ? i.infectionSource : i.infectionSourceCountry,
    to: i.id
  }));
  const filteredNodes = allNodes.filter(i => !!i.infectionSourceCountry || typeof i.infectionSource === 'number'); // @ts-ignore

  uniqueCountries.map((country, index) => filteredNodes.push({
    id: country,
    label: country,
    color: `${colors[uniqueCountries.indexOf(country)]}`
  }));
  return {
    nodes: filteredNodes,
    edges
  };
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Disk/works/react/corona_live_info/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns-tz":
/*!******************************!*\
  !*** external "date-fns-tz" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns-tz");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash.groupby":
/*!*********************************!*\
  !*** external "lodash.groupby" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.groupby");

/***/ }),

/***/ "lodash.sortby":
/*!********************************!*\
  !*** external "lodash.sortby" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.sortby");

/***/ }),

/***/ "ml-regression-exponential":
/*!********************************************!*\
  !*** external "ml-regression-exponential" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ml-regression-exponential");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-graph-vis":
/*!**********************************!*\
  !*** external "react-graph-vis" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-graph-vis");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map