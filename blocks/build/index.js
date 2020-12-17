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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_accounting/actions/index.js":
/*!******************************************!*\
  !*** ./src/_accounting/actions/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Accounting Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/accounting-actions', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accounting', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(function (props) {
    var postModifiedDate = props.postModifiedDate; // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/_accounting/table/index.js":
/*!****************************************!*\
  !*** ./src/_accounting/table/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Accounting Table
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var updateTotals;
/**
 * 1. Outer Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/accounting-table', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accounting', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    amountTotalEarnings: {
      type: 'number',
      default: ''
    },
    amountTotalExpenses: {
      type: 'number',
      default: ''
    },
    amountTaxEarnings: {
      type: 'number',
      default: ''
    },
    amountTaxExpenses: {
      type: 'number',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    globalDataBilly.clientId = clientId; // Get child blocks

    var childBlocks = getBlocksByClientId(clientId)[0].innerBlocks; // Sort array based on date attribute

    childBlocks.sort(function (a, b) {
      return new Date(a.attributes.date) - new Date(b.attributes.date);
    });
    return {
      childBlocks: childBlocks
    };
  })(function (props) {
    var className = props.className,
        childBlocks = props.childBlocks,
        _props$attributes = props.attributes,
        currency = _props$attributes.currency,
        locale = _props$attributes.locale,
        amountTotalEarnings = _props$attributes.amountTotalEarnings,
        amountTotalExpenses = _props$attributes.amountTotalExpenses,
        amountTaxEarnings = _props$attributes.amountTaxEarnings,
        amountTaxExpenses = _props$attributes.amountTaxExpenses,
        setAttributes = props.setAttributes; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Calculate values and update attributes

    updateTotals = function updateTotals() {
      var amountEarningsSum = 0,
          amountExpensesSum = 0,
          amountTaxEarningsSum = 0,
          amountTaxExpensesSum = 0;

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.forEach(function (childBlock) {
          amountEarningsSum += Number(childBlock.attributes.earning);
          amountExpensesSum += Number(childBlock.attributes.expense);

          if (childBlock.attributes.earning) {
            amountTaxEarningsSum += Number(childBlock.attributes.tax);
          }

          if (childBlock.attributes.expense) {
            amountTaxExpensesSum += Number(childBlock.attributes.tax);
          }
        });
      }

      setAttributes({
        amountTotalEarnings: amountEarningsSum
      });
      setAttributes({
        amountTotalExpenses: amountExpensesSum
      });
      setAttributes({
        amountTaxEarnings: amountTaxEarningsSum
      });
      setAttributes({
        amountTaxExpenses: amountTaxExpensesSum
      });
    };

    updateTotals(); // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Actions', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Update Totals', 'billy')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'accountingtable-block' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      templateLock: false,
      template: [['billy-blocks/accounting-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/accounting-tablerow']
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "totals"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, amountTotalEarnings > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "earnings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earnings', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalEarnings, locale)))), amountTotalExpenses > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "expenses"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expenses', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "profit"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Profit', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        borderTop: '2px solid'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxes-earnings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Taxes (%s)', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earnings', 'billy'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTaxEarnings, locale)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxes-expenses"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Taxes (%s)', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expenses', 'billy'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTaxExpenses, locale)))))))));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        currency = _props$attributes2.currency,
        locale = _props$attributes2.locale,
        amountTotalEarnings = _props$attributes2.amountTotalEarnings,
        amountTotalExpenses = _props$attributes2.amountTotalExpenses,
        amountTaxEarnings = _props$attributes2.amountTaxEarnings,
        amountTaxExpenses = _props$attributes2.amountTaxExpenses;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "table wp-block-table"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('#', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reference', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earning', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expense', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", {
      className: "list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "4",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s / %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earnings', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expenses', 'billy'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "sum earnings"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalEarnings, locale))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "sum expenses"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "4",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Profit', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      className: "profit"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "4",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s (%2$s / %3$s)', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Taxes', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earnings', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expenses', 'billy'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "sum tax-earnings"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTaxEarnings, locale))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "sum tax-expenses"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTaxExpenses, locale)))))));
  }
});
/**
 * 2. Inner Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/accounting-tablerow', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Accounting', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table Row', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  parent: ['billy-blocks/accounting-table'],
  // Only allow in outer block
  attributes: {
    index: {
      type: 'number',
      default: '0'
    },
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    date: {
      type: 'string',
      default: ''
    },
    quarter: {
      type: 'number',
      default: ''
    },
    reference: {
      type: 'string',
      default: ''
    },
    earning: {
      type: 'number',
      default: ''
    },
    expense: {
      type: 'number',
      default: ''
    },
    tax: {
      type: 'number',
      default: ''
    },
    postUUID: {
      type: 'string',
      default: ''
    },
    postTitle: {
      type: 'string',
      default: ''
    },
    postLink: {
      type: 'string',
      default: ''
    },
    postType: {
      type: 'string',
      default: ''
    }
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref2) {
    var clientId = _ref2.clientId;

    var _select2 = select('core/block-editor'),
        getBlockRootClientId = _select2.getBlockRootClientId,
        getBlockIndex = _select2.getBlockIndex;

    return {
      clientId: clientId,
      rootClientId: getBlockRootClientId(clientId),
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(function (props) {
    var className = props.className,
        clientId = props.clientId,
        rootClientId = props.rootClientId,
        i = props.i,
        _props$attributes3 = props.attributes,
        index = _props$attributes3.index,
        currency = _props$attributes3.currency,
        locale = _props$attributes3.locale,
        description = _props$attributes3.description,
        date = _props$attributes3.date,
        quarter = _props$attributes3.quarter,
        earning = _props$attributes3.earning,
        expense = _props$attributes3.expense,
        tax = _props$attributes3.tax,
        reference = _props$attributes3.reference,
        postUUID = _props$attributes3.postUUID,
        postTitle = _props$attributes3.postTitle,
        postLink = _props$attributes3.postLink,
        postType = _props$attributes3.postType,
        setAttributes = props.setAttributes;
    setAttributes({
      index: i
    });
    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    });

    if ('' === date) {
      setAttributes({
        date: new Date().toISOString().substring(0, 10)
      }); // Current date

      setAttributes({
        quarter: Object(_functions__WEBPACK_IMPORTED_MODULE_6__["getQuarter"])(new Date().toISOString().substring(0, 10))
      }); // Current date
    }

    var reOrder = function reOrder() {
      // Reorder by date (move up/down): see "childBlocks.sort()"
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('core/block-editor').moveBlockToPosition(clientId, rootClientId, rootClientId, i);
    };

    var updateQuarter = function updateQuarter(val) {
      // Get quarter from datestring
      setAttributes({
        quarter: Number(Object(_functions__WEBPACK_IMPORTED_MODULE_6__["getQuarter"])(val))
      });
    };

    var updateDate = function updateDate(val) {
      //console.log( val );
      setAttributes({
        date: val
      }); // Get quarter from datestring

      updateQuarter(val);
      reOrder();
    };

    var updateReference = function updateReference(val) {
      setAttributes({
        reference: val
      });
    };

    var updateEarning = function updateEarning(val) {
      setAttributes({
        expense: ''
      }); // Clear value

      setAttributes({
        earning: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };

    var updateExpense = function updateExpense(val) {
      setAttributes({
        earning: ''
      }); // Clear value

      setAttributes({
        expense: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };

    var updateTax = function updateTax(val) {
      setAttributes({
        tax: val > 0 ? Number(val) : ''
      });
      updateTotals();
    }; // Markup: Backend


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, !postUUID && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["DatePicker"], {
      currentDate: date,
      onChange: updateDate
    })), postUUID && postLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reference: %s', 'billy'), postType ? postType.charAt(0).toUpperCase() + postType.substring(1) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Post', 'billy'))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: postLink
    }, postTitle ? postTitle : postLink)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      className: "index"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "date"
    }, date && new Date(date).toISOString().substring(0, 10), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("sub", null, quarter && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Q%s', 'billy'), quarter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "description",
      style: {
        minWidth: '200px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: [['core/paragraph', {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "reference"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "text",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reference', 'billy'),
      placeholder: "",
      value: reference,
      onChange: updateReference
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount earning"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Earning', 'billy'), currency),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: earning,
      onChange: updateEarning
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount expense"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expense', 'billy'), currency),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: expense,
      onChange: updateExpense
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount tax"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy'), currency),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: tax,
      onChange: updateTax
    }))))));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes4 = props.attributes,
        index = _props$attributes4.index,
        locale = _props$attributes4.locale,
        date = _props$attributes4.date,
        quarter = _props$attributes4.quarter,
        earning = _props$attributes4.earning,
        expense = _props$attributes4.expense,
        tax = _props$attributes4.tax,
        reference = _props$attributes4.reference,
        postLink = _props$attributes4.postLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      className: "index",
      scope: "row"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("sub", null, quarter && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Q%s', 'billy'), quarter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: postLink
    }, reference)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(earning, locale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(expense, locale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "amount tax",
      "data-value": tax > 0 ? tax : null
    }, tax && tax > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(tax, locale)));
  },
  deprecated: [// < v1.2.0 (20200824)
  {
    attributes: {
      index: {
        type: 'number',
        default: '0'
      },
      currency: {
        type: 'string',
        default: ''
      },
      locale: {
        type: 'string',
        default: ''
      },
      date: {
        type: 'string',
        default: ''
      },
      quarter: {
        type: 'number',
        default: ''
      },
      reference: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      earning: {
        type: 'number',
        default: ''
      },
      expense: {
        type: 'number',
        default: ''
      },
      tax: {
        type: 'number',
        default: ''
      },
      postUUID: {
        type: 'string',
        default: ''
      },
      postTitle: {
        type: 'string',
        default: ''
      },
      postLink: {
        type: 'string',
        default: ''
      },
      postType: {
        type: 'string',
        default: ''
      }
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes5 = props.attributes,
          index = _props$attributes5.index,
          locale = _props$attributes5.locale,
          date = _props$attributes5.date,
          quarter = _props$attributes5.quarter,
          description = _props$attributes5.description,
          earning = _props$attributes5.earning,
          expense = _props$attributes5.expense,
          tax = _props$attributes5.tax,
          reference = _props$attributes5.reference,
          postLink = _props$attributes5.postLink;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
        "data-date": date && new Date(date).toISOString().substring(0, 10),
        "data-quarter": quarter && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Q%s', 'billy'), quarter),
        "data-reference": reference && reference,
        "data-earning": earning > 0 ? earning : null,
        "data-expense": expense > 0 ? expense : null,
        "data-tax": tax > 0 ? tax : null
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
        className: "index",
        scope: "row"
      }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "date",
        "data-value": date && new Date(date).toISOString().substring(0, 10)
      }, date && new Date(date).toISOString().substring(0, 10), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("sub", null, quarter && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Q%s', 'billy'), quarter))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "description"
      }, description && description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "reference"
      }, reference && !postLink && reference, reference && postLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
        href: postLink
      }, reference)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "amount earning",
        "data-value": earning > 0 ? earning : null
      }, earning && earning > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(earning, locale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "amount expense",
        "data-value": expense > 0 ? expense : null
      }, expense && expense > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(expense, locale)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        className: "amount tax",
        "data-value": tax > 0 ? tax : null
      }, tax && tax > 0 && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(tax, locale)));
    }
  }]
});

/***/ }),

/***/ "./src/_header/header/index.js":
/*!*************************************!*\
  !*** ./src/_header/header/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Header
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/header', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Header', 'billy'),
  icon: 'editor-table',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: globalDataBilly.wpAdmin + 'edit.php?post_type=billy-header'
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit the %s layout', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Header', 'billy'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The %s values can be modified in the Theme Customizer.', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Header', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/header"
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_header/theme-mod/index.js":
/*!****************************************!*\
  !*** ./src/_header/theme-mod/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Header: theme_mod
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/theme-mod', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Theme Mod', 'billy'),
  icon: 'admin-generic',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    themeMod: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    var className = props.className,
        themeMod = props.attributes.themeMod,
        setAttributes = props.setAttributes;

    var updateThemeMod = function updateThemeMod(val) {
      setAttributes({
        themeMod: val
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Theme Mod', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Setting', 'billy'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Modify the value in the Theme Customizer.', 'billy'),
      options: globalDataBilly.themeModOptions,
      value: themeMod,
      onChange: updateThemeMod
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/theme-mod",
      attributes: props.attributes
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/actions/index.js":
/*!***************************************!*\
  !*** ./src/_invoice/actions/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Invoice Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-actions', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(function (props) {
    var postModifiedDate = props.postModifiedDate; // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/date/index.js":
/*!************************************!*\
  !*** ./src/_invoice/date/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Invoice Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-date', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice is-warning"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Due to legal requirements in some countries, autogenerated data like %s can\'t be modified anymore after an invoice has been created in the system!', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/invoice-date"
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/duedate/index.js":
/*!***************************************!*\
  !*** ./src/_invoice/duedate/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Due Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-duedate', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Due Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The %s values can be modified in the Theme Customizer.', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Payment due days', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/invoice-duedate"
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/invoice-number/index.js":
/*!**********************************************!*\
  !*** ./src/_invoice/invoice-number/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Invoice Number
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-number', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Number', 'billy')),
  icon: 'editor-ol',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The %s values can be modified in the Theme Customizer.', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice number: Prefix', 'billy')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice is-warning"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Due to legal requirements in some countries, autogenerated data like %s can\'t be modified anymore after an invoice has been created in the system!', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice number', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/invoice-number"
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/meta/index.js":
/*!************************************!*\
  !*** ./src/_invoice/meta/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Meta Field
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-meta', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meta', 'billy')),
  icon: 'editor-textcolor',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    label: {
      type: 'string',
      default: ''
    },
    text: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        label = _props$attributes.label,
        text = _props$attributes.text,
        setAttributes = props.setAttributes;

    var updateLabel = function updateLabel(val) {
      setAttributes({
        label: val
      });
    };

    var updateInput = function updateInput(val) {
      setAttributes({
        text: val
      });
    }; // Markup: Backend


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<strong>%1$s</strong> <span>%2$s</span>', 'billy'), label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy'))));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        label = _props$attributes2.label,
        text = _props$attributes2.text;
    return text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy')));
  },
  deprecated: [// < v1.2.3 (202012)
  {
    attributes: {
      label: {
        type: 'string',
        default: ''
      },
      text: {
        type: 'string',
        default: ''
      }
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes3 = props.attributes,
          label = _props$attributes3.label,
          text = _props$attributes3.text;
      return text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])('<p>' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/_invoice/paymentinformation/index.js":
/*!**************************************************!*\
  !*** ./src/_invoice/paymentinformation/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Invoice Information
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-paymentinformation', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Payment Information', 'billy')),
  icon: 'info',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The %s values can be modified in the Theme Customizer.', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Payment Information', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/invoice-paymentinformation"
    })));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/table/index.js":
/*!*************************************!*\
  !*** ./src/_invoice/table/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Invoice Table
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * 1. Outer Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-table', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    amountSubtotal: {
      type: 'number',
      default: ''
    },
    amountTotal: {
      type: 'number',
      default: ''
    },
    taxRates: {
      type: 'string',
      default: ''
    },
    taxRatesTotal: {
      type: 'number',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    globalDataBilly.clientId = clientId; // Get child blocks

    var childBlocks = getBlocksByClientId(clientId)[0].innerBlocks;
    return {
      childBlocks: childBlocks
    };
  })(function (props) {
    var className = props.className,
        childBlocks = props.childBlocks,
        _props$attributes = props.attributes,
        currency = _props$attributes.currency,
        locale = _props$attributes.locale,
        amountSubtotal = _props$attributes.amountSubtotal,
        amountTotal = _props$attributes.amountTotal,
        taxRates = _props$attributes.taxRates,
        taxRatesTotal = _props$attributes.taxRatesTotal,
        setAttributes = props.setAttributes; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Onload "once": Calculate values and update attributes

    var updateTotals = function updateTotals() {
      var amountSubtotalSum = 0,
          amountTotalSum = 0,
          taxRatesTotalSum = 0,
          taxRatesHolderOutput = [],
          taxRatesMergedOutput = []; // Create values-array of child block attributes

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map(function (childBlock, i) {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount); // 2. Sum of Totals

          amountTotalSum += Number(childBlock.attributes.amount) + Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount); // 3. Sum of Taxrates

          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
          });
        });

        if (taxRatesHolderOutput.length > 0) {
          // Sum up Tax amount
          taxRatesTotalSum = taxRatesHolderOutput.reduce(function (res, value) {
            return res + value.amount;
          }, 0);
          taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2)); // Merge same Taxrates

          taxRatesHolderOutput.reduce(function (res, value) {
            if (!res[value.taxRate]) {
              res[value.taxRate] = {
                taxRate: value.taxRate,
                amount: 0
              };
              taxRatesMergedOutput.push(res[value.taxRate]);
            }

            res[value.taxRate].amount += value.amount;
            return res;
          }, {});
        }

        setAttributes({
          taxRatesTotal: taxRatesTotalSum
        });
        setAttributes({
          taxRates: JSON.stringify(taxRatesMergedOutput)
        });
        setAttributes({
          amountSubtotal: amountSubtotalSum
        });
        setAttributes({
          amountTotal: amountTotalSum
        });
      }
    };

    updateTotals(); // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'invoicetable-block' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      templateLock: false,
      template: [['billy-blocks/invoice-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/invoice-tablerow']
    }), amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "totals"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "subtotal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subtotal', 'billy') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxRates"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort(function (a, b) {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(a.taxRate) - Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(b.taxRate);
    }).map(function (total, i) {
      if (total.amount > 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
          key: i
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s %3$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "total"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotal, locale)))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals,
      style: {
        display: amountSubtotal > 0 ? 'block' : 'none'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Update Totals', 'billy')));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        currency = _props$attributes2.currency,
        locale = _props$attributes2.locale,
        amountSubtotal = _props$attributes2.amountSubtotal,
        amountTotal = _props$attributes2.amountTotal,
        taxRates = _props$attributes2.taxRates,
        taxRatesTotal = _props$attributes2.taxRatesTotal;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "table wp-block-table"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('#', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount', 'billy')), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tfoot", null, amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "subtotal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subtotal', 'billy') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxrates"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort(function (a, b) {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(a.taxRate) - Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(b.taxRate);
    }).map(function (total, i) {
      if (total.amount > 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
          key: i
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s %3$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "total"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotal, locale)))))));
  }
});
/**
 * 2. Inner Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/invoice-tablerow', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invoice', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table Row', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  parent: ['billy-blocks/invoice-table'],
  // Only allow in outer block
  attributes: {
    index: {
      type: 'number',
      default: '0'
    },
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    taxRate: {
      type: 'string',
      default: ''
    },
    amount: {
      type: 'number',
      default: ''
    },
    amountIncl: {
      type: 'number',
      default: ''
    },
    quantity: {
      type: 'number',
      default: ''
    },
    quantityRate: {
      type: 'number',
      default: ''
    }
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref2) {
    var clientId = _ref2.clientId;

    var _select2 = select('core/block-editor'),
        getBlockRootClientId = _select2.getBlockRootClientId,
        getBlockIndex = _select2.getBlockIndex;

    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(function (props) {
    var className = props.className,
        i = props.i,
        _props$attributes3 = props.attributes,
        index = _props$attributes3.index,
        currency = _props$attributes3.currency,
        locale = _props$attributes3.locale,
        description = _props$attributes3.description,
        taxRate = _props$attributes3.taxRate,
        amount = _props$attributes3.amount,
        amountIncl = _props$attributes3.amountIncl,
        quantity = _props$attributes3.quantity,
        quantityRate = _props$attributes3.quantityRate,
        setAttributes = props.setAttributes;
    setAttributes({
      index: i
    });
    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    });

    if ('' === taxRate) {
      setAttributes({
        taxRate: 0 === globalDataBilly.taxOptions.length ? '0%' : globalDataBilly.taxOptions[0].value
      });
    }

    var updateAmountIncl = function updateAmountIncl(val) {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      }); // Recalculate totals on edit

      setTimeout(function () {
        document.getElementById("updatetotals").click();
      }, 1);
    };

    var updateTaxRate = function updateTaxRate(val) {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(val));
    };

    var updateAmount = function updateAmount(val) {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate));
    };

    var updateQuantity = function updateQuantity(val) {
      setAttributes({
        quantity: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(val) * Number(quantityRate));
    };

    var updateQuantityRate = function updateQuantityRate(val) {
      setAttributes({
        quantityRate: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(quantity) * Number(val));
    }; // Markup: Backend


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity/Rate Calculator', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity', 'billy'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate', 'billy'), currency),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      className: "index"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: [['core/paragraph', {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount', 'billy'), currency),
      className: "amount",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      className: "taxrate",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy'), '%'),
      value: taxRate,
      options: 0 !== globalDataBilly.taxOptions.length ? globalDataBilly.taxOptions : '0%' !== taxRate && 0 === globalDataBilly.taxOptions.length ? [{
        label: taxRate,
        value: taxRate
      }, {
        label: '0%',
        value: '0%'
      }] : '',
      onChange: updateTaxRate
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      disabled: "disabled",
      label: currency,
      className: "amount-tax",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: amountIncl
    }))))));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes4 = props.attributes,
        index = _props$attributes4.index,
        locale = _props$attributes4.locale,
        taxRate = _props$attributes4.taxRate,
        amount = _props$attributes4.amount;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "row"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, amount && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amount, locale)), taxRate && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: [// < v1.2.0 (20200824)
  {
    attributes: {
      index: {
        type: 'number',
        default: '0'
      },
      currency: {
        type: 'string',
        default: ''
      },
      locale: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      taxRate: {
        type: 'string',
        default: ''
      },
      amount: {
        type: 'number',
        default: ''
      },
      amountIncl: {
        type: 'number',
        default: ''
      },
      quantity: {
        type: 'number',
        default: ''
      },
      quantityRate: {
        type: 'number',
        default: ''
      }
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes5 = props.attributes,
          index = _props$attributes5.index,
          locale = _props$attributes5.locale,
          description = _props$attributes5.description,
          taxRate = _props$attributes5.taxRate,
          amount = _props$attributes5.amount;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
        scope: "row"
      }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, description && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, amount && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amount, locale)), taxRate && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
    }
  }]
});

/***/ }),

/***/ "./src/_quote/actions/index.js":
/*!*************************************!*\
  !*** ./src/_quote/actions/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Quote Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-actions', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(function (props) {
    var postModifiedDate = props.postModifiedDate; // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/date/index.js":
/*!**********************************!*\
  !*** ./src/_quote/date/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Quote Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-date', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: "billy-blocks/quote-date"
    });
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/information/index.js":
/*!*****************************************!*\
  !*** ./src/_quote/information/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Quote Information
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-information', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Information', 'billy')),
  icon: 'info',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-notice__content"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The %s values can be modified in the Theme Customizer.', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote Information', 'billy')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: "billy-blocks/quote-information"
    }));
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/meta/index.js":
/*!**********************************!*\
  !*** ./src/_quote/meta/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Meta Field
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-meta', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meta', 'billy')),
  icon: 'editor-textcolor',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    label: {
      type: 'string',
      default: ''
    },
    text: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        label = _props$attributes.label,
        text = _props$attributes.text,
        setAttributes = props.setAttributes;

    var updateLabel = function updateLabel(val) {
      setAttributes({
        label: val
      });
    };

    var updateInput = function updateInput(val) {
      setAttributes({
        text: val
      });
    }; // Markup: Backend


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<strong>%1$s</strong> <span>%2$s</span>', 'billy'), label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy'))));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        label = _props$attributes2.label,
        text = _props$attributes2.text;
    return text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy')));
  },
  deprecated: [// < v1.2.3 (202012)
  {
    attributes: {
      label: {
        type: 'string',
        default: ''
      },
      text: {
        type: 'string',
        default: ''
      }
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes3 = props.attributes,
          label = _props$attributes3.label,
          text = _props$attributes3.text;
      return text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])('<p>' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/_quote/table/index.js":
/*!***********************************!*\
  !*** ./src/_quote/table/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Quote Table
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * 1. Outer Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-table', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  attributes: {
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    amountSubtotal: {
      type: 'number',
      default: ''
    },
    amountTotal: {
      type: 'number',
      default: ''
    },
    taxRates: {
      type: 'string',
      default: ''
    },
    taxRatesTotal: {
      type: 'number',
      default: ''
    }
  },
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref) {
    var clientId = _ref.clientId;

    var _select = select('core/block-editor'),
        getBlocksByClientId = _select.getBlocksByClientId;

    globalDataBilly.clientId = clientId; // Get child blocks

    var childBlocks = getBlocksByClientId(clientId)[0].innerBlocks;
    return {
      childBlocks: childBlocks
    };
  })(function (props) {
    var className = props.className,
        childBlocks = props.childBlocks,
        _props$attributes = props.attributes,
        currency = _props$attributes.currency,
        locale = _props$attributes.locale,
        amountSubtotal = _props$attributes.amountSubtotal,
        amountTotal = _props$attributes.amountTotal,
        taxRates = _props$attributes.taxRates,
        taxRatesTotal = _props$attributes.taxRatesTotal,
        setAttributes = props.setAttributes; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Onload "once": Calculate values and update attributes

    var updateTotals = function updateTotals() {
      var amountSubtotalSum = 0,
          amountTotalSum = 0,
          taxRatesTotalSum = 0,
          taxRatesHolderOutput = [],
          taxRatesMergedOutput = []; // Create values-array of child block attributes

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map(function (childBlock, i) {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount); // 2. Sum of Totals

          amountTotalSum += Number(childBlock.attributes.amount) + Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount); // 3. Sum of Taxrates

          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
          });
        });

        if (taxRatesHolderOutput.length > 0) {
          // Sum up Tax amount
          taxRatesTotalSum = taxRatesHolderOutput.reduce(function (res, value) {
            return res + value.amount;
          }, 0);
          taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2)); // Merge same Taxrates

          taxRatesHolderOutput.reduce(function (res, value) {
            if (!res[value.taxRate]) {
              res[value.taxRate] = {
                taxRate: value.taxRate,
                amount: 0
              };
              taxRatesMergedOutput.push(res[value.taxRate]);
            }

            res[value.taxRate].amount += value.amount;
            return res;
          }, {});
        }

        setAttributes({
          taxRatesTotal: taxRatesTotalSum
        });
        setAttributes({
          taxRates: JSON.stringify(taxRatesMergedOutput)
        });
        setAttributes({
          amountSubtotal: amountSubtotalSum
        });
        setAttributes({
          amountTotal: amountTotalSum
        });
      }
    };

    updateTotals(); // Markup: Backend

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'quotetable-block' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      templateLock: false,
      template: [['billy-blocks/quote-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/quote-tablerow']
    }), amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "totals"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "subtotal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subtotal', 'billy') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxRates"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort(function (a, b) {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(a.taxRate) - Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(b.taxRate);
    }).map(function (total, i) {
      if (total.amount > 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
          key: i
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s %3$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "total"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '50%'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotal, locale)))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals,
      style: {
        display: amountSubtotal > 0 ? 'block' : 'none'
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Update Totals', 'billy')));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        currency = _props$attributes2.currency,
        locale = _props$attributes2.locale,
        amountSubtotal = _props$attributes2.amountSubtotal,
        amountTotal = _props$attributes2.amountTotal,
        taxRates = _props$attributes2.taxRates,
        taxRatesTotal = _props$attributes2.taxRatesTotal;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
      className: "table wp-block-table"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('#', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount', 'billy')), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "col"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tfoot", null, amountSubtotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "subtotal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Subtotal', 'billy') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "taxrates"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort(function (a, b) {
      return Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(a.taxRate) - Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(b.taxRate);
    }).map(function (total, i) {
      if (total.amount > 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
          key: i
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s %3$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      className: "total"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      colSpan: "2",
      align: "right"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'billy')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), currency, Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amountTotal, locale)))))));
  }
});
/**
 * 2. Inner Block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-tablerow', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Table Row', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  parent: ['billy-blocks/quote-table'],
  // Only allow in outer block
  attributes: {
    index: {
      type: 'number',
      default: '0'
    },
    currency: {
      type: 'string',
      default: ''
    },
    locale: {
      type: 'string',
      default: ''
    },
    taxRate: {
      type: 'string',
      default: ''
    },
    amount: {
      type: 'number',
      default: ''
    },
    amountIncl: {
      type: 'number',
      default: ''
    },
    quantity: {
      type: 'number',
      default: ''
    },
    quantityRate: {
      type: 'number',
      default: ''
    }
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, _ref2) {
    var clientId = _ref2.clientId;

    var _select2 = select('core/block-editor'),
        getBlockRootClientId = _select2.getBlockRootClientId,
        getBlockIndex = _select2.getBlockIndex;

    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(function (props) {
    var className = props.className,
        i = props.i,
        _props$attributes3 = props.attributes,
        index = _props$attributes3.index,
        currency = _props$attributes3.currency,
        locale = _props$attributes3.locale,
        description = _props$attributes3.description,
        taxRate = _props$attributes3.taxRate,
        amount = _props$attributes3.amount,
        amountIncl = _props$attributes3.amountIncl,
        quantity = _props$attributes3.quantity,
        quantityRate = _props$attributes3.quantityRate,
        setAttributes = props.setAttributes;
    setAttributes({
      index: i
    });
    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    });

    if ('' === taxRate) {
      setAttributes({
        taxRate: 0 === globalDataBilly.taxOptions.length ? '0%' : globalDataBilly.taxOptions[0].value
      });
    }

    var updateAmountIncl = function updateAmountIncl(val) {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      }); // Recalculate totals on edit

      setTimeout(function () {
        document.getElementById("updatetotals").click();
      }, 1);
    };

    var updateTaxRate = function updateTaxRate(val) {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(val));
    };

    var updateAmount = function updateAmount(val) {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate));
    };

    var updateQuantity = function updateQuantity(val) {
      setAttributes({
        quantity: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(val) * Number(quantityRate));
    };

    var updateQuantityRate = function updateQuantityRate(val) {
      setAttributes({
        quantityRate: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(quantity) * Number(val));
    }; // Markup: Backend


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity/Rate Calculator', 'billy')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quantity', 'billy'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate', 'billy'), currency),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      className: "index"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: [['core/paragraph', {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount', 'billy'), currency),
      className: "amount",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      className: "taxrate",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s in %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax', 'billy'), '%'),
      value: taxRate,
      options: 0 !== globalDataBilly.taxOptions.length ? globalDataBilly.taxOptions : '0%' !== taxRate && 0 === globalDataBilly.taxOptions.length ? [{
        label: taxRate,
        value: taxRate
      }, {
        label: '0%',
        value: '0%'
      }] : '',
      onChange: updateTaxRate
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      type: "number",
      disabled: "disabled",
      label: currency,
      className: "amount-tax",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('0', 'billy'),
      value: amountIncl
    }))))));
  }),
  save: function save(props) {
    var className = props.className,
        _props$attributes4 = props.attributes,
        index = _props$attributes4.index,
        locale = _props$attributes4.locale,
        taxRate = _props$attributes4.taxRate,
        amount = _props$attributes4.amount;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      scope: "row"
    }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, amount && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amount, locale)), taxRate && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: [// < v1.2.0 (20200824)
  {
    attributes: {
      index: {
        type: 'number',
        default: '0'
      },
      currency: {
        type: 'string',
        default: ''
      },
      locale: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      taxRate: {
        type: 'string',
        default: ''
      },
      amount: {
        type: 'number',
        default: ''
      },
      amountIncl: {
        type: 'number',
        default: ''
      },
      quantity: {
        type: 'number',
        default: ''
      },
      quantityRate: {
        type: 'number',
        default: ''
      }
    },
    save: function save(props) {
      var className = props.className,
          _props$attributes5 = props.attributes,
          index = _props$attributes5.index,
          locale = _props$attributes5.locale,
          description = _props$attributes5.description,
          taxRate = _props$attributes5.taxRate,
          amount = _props$attributes5.amount;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
        scope: "row"
      }, index && index), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, description && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, amount && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(amount, locale)), taxRate && Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s %2$s', 'billy'), Object(_functions__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(Object(_functions__WEBPACK_IMPORTED_MODULE_6__["percentToDecimal"])(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
    }
  }]
});

/***/ }),

/***/ "./src/_quote/validuntildate/index.js":
/*!********************************************!*\
  !*** ./src/_quote/validuntildate/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Quote Valid Until Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('billy-blocks/quote-validuntildate', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('%1$s: %2$s', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quote', 'billy'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Valid Until', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: function edit(props) {
    // Markup: Backend
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: "billy-blocks/quote-validuntildate"
    });
  },
  save: function save(props) {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getCurrency, formatNumber, percentToDecimal, getQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentToDecimal", function() { return percentToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuarter", function() { return getQuarter; });
var getCurrency = function getCurrency() {
  return globalDataBilly.currency;
};
var formatNumber = function formatNumber(val) {
  var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return val.toLocaleString(l, {
    'minimumFractionDigits': 2,
    'maximumFractionDigits': 2
  });
};
var percentToDecimal = function percentToDecimal(val) {
  return parseFloat(val) / 100;
};
var getQuarter = function getQuarter(d) {
  d = new Date(d) || new Date();
  var q = [1, 2, 3, 4];
  return q[Math.floor(d.getMonth() / 3)];
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_header/header/index */ "./src/_header/header/index.js");
/* harmony import */ var _header_theme_mod_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_header/theme-mod/index */ "./src/_header/theme-mod/index.js");
/* harmony import */ var _invoice_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_invoice/actions/index */ "./src/_invoice/actions/index.js");
/* harmony import */ var _invoice_meta_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_invoice/meta/index */ "./src/_invoice/meta/index.js");
/* harmony import */ var _invoice_date_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_invoice/date/index */ "./src/_invoice/date/index.js");
/* harmony import */ var _invoice_duedate_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_invoice/duedate/index */ "./src/_invoice/duedate/index.js");
/* harmony import */ var _invoice_invoice_number_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_invoice/invoice-number/index */ "./src/_invoice/invoice-number/index.js");
/* harmony import */ var _invoice_paymentinformation_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_invoice/paymentinformation/index */ "./src/_invoice/paymentinformation/index.js");
/* harmony import */ var _invoice_table_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_invoice/table/index */ "./src/_invoice/table/index.js");
/* harmony import */ var _quote_actions_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_quote/actions/index */ "./src/_quote/actions/index.js");
/* harmony import */ var _quote_meta_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_quote/meta/index */ "./src/_quote/meta/index.js");
/* harmony import */ var _quote_date_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_quote/date/index */ "./src/_quote/date/index.js");
/* harmony import */ var _quote_information_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_quote/information/index */ "./src/_quote/information/index.js");
/* harmony import */ var _quote_table_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_quote/table/index */ "./src/_quote/table/index.js");
/* harmony import */ var _quote_validuntildate_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_quote/validuntildate/index */ "./src/_quote/validuntildate/index.js");
/* harmony import */ var _accounting_table_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_accounting/table/index */ "./src/_accounting/table/index.js");
/* harmony import */ var _accounting_actions_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_accounting/actions/index */ "./src/_accounting/actions/index.js");
/**
 * Import blocks
 */
// Basic


















/***/ }),

/***/ "@wordpress/blockEditor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map