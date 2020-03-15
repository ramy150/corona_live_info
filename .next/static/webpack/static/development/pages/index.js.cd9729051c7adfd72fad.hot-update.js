webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: InfectionSourceEnum, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfectionSourceEnum", function() { return InfectionSourceEnum; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns-tz */ "./node_modules/date-fns-tz/esm/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_StatBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/StatBlock */ "./components/StatBlock.tsx");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Block */ "./components/Block.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Copyright */ "./components/Copyright.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_NetworkGraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/NetworkGraph */ "./components/NetworkGraph.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Table */ "./components/Table.tsx");
/* harmony import */ var _components_TableColumns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TableColumns */ "./components/TableColumns.ts");
/* harmony import */ var _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/chartDataHelper */ "./utils/chartDataHelper.ts");


var _jsxFileName = "/Volumes/Disk/works/react/corona_live_info/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var InfectionSourceEnum;

(function (InfectionSourceEnum) {
  InfectionSourceEnum["RelatedToEarlier"] = "related to earlier";
  InfectionSourceEnum["Unknown"] = "unknown";
})(InfectionSourceEnum || (InfectionSourceEnum = {}));

var CustomizedAxisTick = function CustomizedAxisTick(props) {
  var x = props.x,
      y = props.y,
      stroke = props.stroke,
      payload = props.payload,
      isDate = props.isDate;
  return __jsx("g", {
    transform: "translate(".concat(x, ",").concat(y, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
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
    __self: this
  }, isDate ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(payload.value), 'd.M.') : payload.value));
};

var timeZone = 'Europe/Helsinki';

var Index = function Index(_ref) {
  var confirmed = _ref.confirmed,
      deaths = _ref.deaths,
      recovered = _ref.recovered;
  // Map some data for stats blocks
  var date = new Date('2018-09-01Z16:01:36.386Z');
  var latestInfection = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["utcToZonedTime"])(new Date(confirmed[confirmed.length - 1].date), timeZone), 'dd.MM.yyyy - HH:mm', {
    timeZone: timeZone
  });
  var latestInfectionDistrict = confirmed[confirmed.length - 1].healthCareDistrict;
  var latestDeath = deaths.length ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["utcToZonedTime"])(new Date(deaths[deaths.length - 1].date), timeZone), 'd.M.yyyy') : null;
  var latestDeathDistrict = deaths.length ? deaths[deaths.length - 1].healthCareDistrict : null;
  var latestRecoveredDistrict = recovered.length ? recovered[recovered.length - 1].healthCareDistrict : null;
  var latestRecovered = recovered.length ? Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["utcToZonedTime"])(new Date(recovered[recovered.length - 1].date), timeZone), 'd.M.yyyy') : null;
  var infectionsToday = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getInfectionsToday"])(confirmed);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('linear'),
      cumulativeChartScale = _useState[0],
      setCumulativeChartScale = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('linear'),
      forecastChartScale = _useState2[0],
      setForecaseChartScale = _useState2[1]; // Map data to show development of infections


  var _getTimeSeriesData = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getTimeSeriesData"])(confirmed, recovered, deaths),
      infectionDevelopmentData = _getTimeSeriesData.infectionDevelopmentData,
      infectionDevelopmentData30Days = _getTimeSeriesData.infectionDevelopmentData30Days;

  var _getPredictionData = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getPredictionData"])(confirmed, deaths, recovered),
      prediction60Days = _getPredictionData.prediction60Days,
      today = _getPredictionData.today;

  var maxValues = infectionDevelopmentData30Days[infectionDevelopmentData30Days.length - 1];
  var dataMaxValue = Math.max(maxValues.deaths, maxValues.infections, maxValues.infections);

  var _getTnfectionsByDistr = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getTnfectionsByDistrict"])(confirmed),
      infectionsByDistrict = _getTnfectionsByDistr.infectionsByDistrict,
      infectionsByDistrictPercentage = _getTnfectionsByDistr.infectionsByDistrictPercentage,
      areas = _getTnfectionsByDistr.areas;

  var _getInfectionsBySourc = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getInfectionsBySourceCountry"])(confirmed),
      infectionsBySourceCountry = _getInfectionsBySourc.infectionsBySourceCountry;

  var networkGraphData = Object(_utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["getNetworkGraphData"])(confirmed);
  var reversedConfirmed = confirmed.map(function (i, index) {
    return _objectSpread({
      index: index + 1
    }, i);
  }).reverse();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Coronavirus infection in Finland \u2013 infections: ", confirmed.length || 0, " - recovered: ", recovered.length || 0, " - died: ", deaths.length || 0), __jsx("meta", {
    name: "description",
    content: "Suomen koronavirus-tartuntatilanne \u2013 tartunnat: ".concat(confirmed.length || 0, " - parantuneet: ").concat(recovered.length || 0, " - menehtyneet: ").concat(deaths.length || 0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "Suomen koronavirus-tartuntatilanne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "Tartuntoja t\xE4ll\xE4 hetkell\xE4: ".concat(confirmed.length || 0, " - parantuneet: ").concat(recovered.length || 0, " - menehtyneet: ").concat(deaths.length || 0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Suomen koronavirus-tartuntatilanne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "fi_FI",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "/images/corona-virus.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "1928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://korona.kans.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
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
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
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
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Infections",
    textAlign: "center",
    extraInfo: "New infections today ".concat(infectionsToday),
    footer: "Latest infection ".concat(latestInfection, " (").concat(latestInfectionDistrict || 'unknown', ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    count: confirmed.length,
    helpText: "New infections today: ".concat(infectionsToday),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Died",
    footer: latestDeath ? "Latest death ".concat(latestDeath, " (").concat(latestDeathDistrict || 'unknown', ")") : 'No death',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    count: deaths.length || 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', 1 / 3, 1 / 3],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Recovered",
    footer: latestRecovered ? "Latest recovery ".concat(latestRecovered, " (").concat(latestRecoveredDistrict || 'unknown', ")") : ' ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_components_StatBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    count: recovered.length || 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%'],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Cumulative evolution (30 days)",
    footer: "Cumulative evolution of infections, heals and deaths in the last 30 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    spacing: 0,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: "-15px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "xs",
    fontFamily: "Space Grotesk Regular",
    px: 3,
    letterSpacing: "1px",
    borderRadius: "4px 0px 0px 4px",
    borderWidth: "0px",
    isActive: cumulativeChartScale === 'linear',
    onClick: function onClick() {
      return setCumulativeChartScale('linear');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Linear"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "xs",
    fontFamily: "Space Grotesk Regular",
    px: 3,
    letterSpacing: "1px",
    borderRadius: "0px 4px 4px 0px",
    borderWidth: "0px",
    isActive: cumulativeChartScale === 'log',
    onClick: function onClick() {
      return setCumulativeChartScale('log');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Logarithmic")), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ResponsiveContainer"], {
    width: '100%',
    height: 380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ComposedChart"], {
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
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
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
    __self: this
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][8],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][8],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
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
    __self: this
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][7],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][7],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
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
    __self: this
  }, __jsx("stop", {
    offset: "5%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][0],
    stopOpacity: 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("stop", {
    offset: "95%",
    stopColor: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][0],
    stopOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
    tickFormatter: function tickFormatter(d) {
      return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(d), 'd.M.');
    },
    tick: __jsx(CustomizedAxisTick, {
      isDate: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }),
    dataKey: "date",
    domain: ['dataMin', 'dataMax'],
    type: "number",
    scale: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
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
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["CartesianGrid"], {
    opacity: 0.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    labelFormatter: function labelFormatter(v) {
      return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(v), 'dd.MM.yyyy');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][1],
    opacity: 0.4,
    dataKey: "infectionsDaily",
    name: "Today's infections",
    unit: " person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total infections",
    dataKey: "infections",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][8],
    fillOpacity: 1,
    fill: "url(#colorInfection)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total recovered",
    dataKey: "recovered",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][7],
    fillOpacity: 1,
    fill: "url(#colorRecovered)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Area"], {
    type: "monotone",
    unit: " person",
    name: "Total deaths",
    dataKey: "deaths",
    stroke: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][0],
    fillOpacity: 1,
    fill: "url(#colorDeaths)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Legend"], {
    wrapperStyle: {
      bottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Infections by hospital district",
    footer: "Infections by hospital district",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["BarChart"], {
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
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
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
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "infections",
    name: "Tartunnat",
    unit: " person",
    yAxisId: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, areas.map(function (area, index) {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
      key: area,
      fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"].length],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    });
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["LabelList"], {
    dataKey: "infections",
    position: "top",
    formatter: function formatter(e) {
      return e;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Infections by hospital district / Size of the hospital district",
    footer: "Infections by hospital district / Size of the hospital district",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["BarChart"], {
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
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
    unit: " %",
    dataKey: "perDistrict",
    tick: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "perDistrict",
    name: "%-osuus v\xE4est\xF6st\xE4",
    unit: " %",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, areas.map(function (area, index) {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
      key: area,
      fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"].length],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    });
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["LabelList"], {
    dataKey: "perDistict",
    position: "top",
    formatter: function formatter(e) {
      return e;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Countries of origin of infections",
    footer: "Number of infections by country of origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["ResponsiveContainer"], {
    width: '100%',
    height: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["BarChart"], {
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
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
    interval: 0,
    dataKey: "name",
    tick: __jsx(CustomizedAxisTick, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
    unit: " person",
    dataKey: "infections",
    tick: {
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
    dataKey: "infections",
    name: "Tartunnat",
    unit: " person",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, areas.map(function (area, index) {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
      key: area,
      fill: _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"][index % _utils_chartDataHelper__WEBPACK_IMPORTED_MODULE_16__["colors"].length],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    });
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_6__["LabelList"], {
    dataKey: "infections",
    position: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%', '100%', '100%', '100%', 1 / 2],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Log of infections",
    footer: "All infections in Algeria are listed, most recent first. Some id may be missing in the middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_14__["default"], {
    height: 350,
    data: reversedConfirmed,
    columns: Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
      return _components_TableColumns__WEBPACK_IMPORTED_MODULE_15__["infectionColumns"];
    }, []),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: ['100%'],
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Infections' Networks",
    footer: "The figure shows the infections as a network. The number is the serial number of the infection. If the direct vector is not known, the link will be linked to the country of origin. Infections for which the direct cause or the country of origin is not known are excluded. Infections marked in Algeria are most likely to be linked to other infection networks. The color of the cell indicates the country where the infection is likely to have occurred.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx(_components_NetworkGraph__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: networkGraphData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  })))), __jsx(_components_Copyright__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  })));
};

Index.getInitialProps = function _callee() {
  var res, data, confirmed;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/stodi1/corona_virus_open_data/master/data.json'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          confirmed = data.confirmed.map(function (i) {
            return _objectSpread({}, i, {
              infectionSourceCountry: i.infectionSourceCountry === "" ? null : i.infectionSourceCountry
            });
          });
          return _context.abrupt("return", _objectSpread({}, data, {
            confirmed: confirmed
          }));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cd9729051c7adfd72fad.hot-update.js.map