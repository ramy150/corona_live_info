webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TableColumns.ts":
/*!************************************!*\
  !*** ./components/TableColumns.ts ***!
  \************************************/
/*! exports provided: infectionColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infectionColumns", function() { return infectionColumns; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var infectionColumns = [{
  Header: 'Index',
  accessor: 'index',
  Cell: function Cell(_ref) {
    var value = _ref.cell.value;
    return value;
  }
}, {
  Header: 'Id',
  accessor: 'id',
  Cell: function Cell(_ref2) {
    var cell = _ref2.cell;
    return "#0".concat(cell.value);
  }
}, {
  Header: 'Date',
  accessor: 'date',
  minWidth: '20%',
  Cell: function Cell(_ref3) {
    var value = _ref3.cell.value;
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(value), 'dd.MM.yyyy - HH:mm');
  }
}, {
  Header: 'Wilaya',
  accessor: 'wilaya'
}, {
  Header: 'Source',
  accessor: 'infection_source_country'
}, {
  Header: 'Source of infection',
  accessor: 'infection_source',
  Cell: function Cell(_ref4) {
    var value = _ref4.cell.value;

    if (value === 'unknown') {
      return 'Not known';
    }

    if (value === 'related to earlier') {
      return 'related to earlier';
    }

    return "#0".concat(value);
  }
}];

/***/ })

})
//# sourceMappingURL=index.js.9d5c1aec63e17413553f.hot-update.js.map