/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_accounting/actions/index.js":
/*!******************************************!*\
  !*** ./src/_accounting/actions/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/accounting-actions', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accounting', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props; // Markup: Backend

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: props => {
    return null;
  }
});

/***/ }),

/***/ "./src/_accounting/table/deprecatedInner.js":
/*!**************************************************!*\
  !*** ./src/_accounting/table/deprecatedInner.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Accounting Table (Inner): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const deprecatedAccountingInner = [// < v1.2.0 (20200824)
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
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        date,
        quarter,
        description,
        earning,
        expense,
        tax,
        reference,
        postLink
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, description && description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(earning, locale)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(expense, locale)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax > 0 ? tax : null
    }, tax && tax > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(tax, locale)));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedAccountingInner);

/***/ }),

/***/ "./src/_accounting/table/deprecatedOuter.js":
/*!**************************************************!*\
  !*** ./src/_accounting/table/deprecatedOuter.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Accounting Table (Outer): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const deprecatedAccountingOuter = [// < v1.3 (202102)
{
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
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountTotalEarnings,
        amountTotalExpenses,
        amountTaxEarnings,
        amountTaxExpenses
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
}, // < v1.2.4 (202012)
{
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
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountTotalEarnings,
        amountTotalExpenses,
        amountTaxEarnings,
        amountTaxExpenses
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earning', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expense', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedAccountingOuter);

/***/ }),

/***/ "./src/_accounting/table/index.js":
/*!****************************************!*\
  !*** ./src/_accounting/table/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/_accounting/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedInner */ "./src/_accounting/table/deprecatedInner.js");


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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/accounting-table', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accounting', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref) => {
    let {
      clientId
    } = _ref;
    const {
      getBlocksByClientId
    } = select('core/block-editor');
    globalDataBilly.clientId = clientId; // Get child blocks

    const childBlocks = getBlocksByClientId(clientId)[0].innerBlocks; // Sort array based on date attribute

    childBlocks.sort((a, b) => {
      return new Date(a.attributes.date) - new Date(b.attributes.date);
    });
    return {
      childBlocks: childBlocks
    };
  })(props => {
    const {
      className,
      childBlocks,
      attributes: {
        currency,
        locale,
        amountTotalEarnings,
        amountTotalExpenses,
        amountTaxEarnings,
        amountTaxExpenses
      },
      setAttributes
    } = props; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Calculate values and update attributes

    updateTotals = () => {
      var amountEarningsSum = 0,
          amountExpensesSum = 0,
          amountTaxEarningsSum = 0,
          amountTaxExpensesSum = 0;

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.forEach(childBlock => {
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'accountingtable-block' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/accounting-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/accounting-tablerow']
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountTotalEarnings > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "earnings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalEarnings, locale)))), amountTotalExpenses > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "expenses"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "profit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Profit', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        borderTop: '2px solid'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxes-earnings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes (%s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTaxEarnings, locale)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxes-expenses"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes (%s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTaxExpenses, locale)))))))));
  }),
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountTotalEarnings,
        amountTotalExpenses,
        amountTaxEarnings,
        amountTaxExpenses
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Profit', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTaxEarnings, locale))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTaxExpenses, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/accounting-tablerow', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accounting', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table Row', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref2) => {
    let {
      clientId
    } = _ref2;
    const {
      getBlockRootClientId,
      getBlockIndex
    } = select('core/block-editor');
    return {
      clientId: clientId,
      rootClientId: getBlockRootClientId(clientId),
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(props => {
    const {
      className,
      clientId,
      rootClientId,
      i,
      attributes: {
        index,
        currency,
        locale,
        description,
        // < v1.2.0
        date,
        quarter,
        earning,
        expense,
        tax,
        reference,
        postUUID,
        postTitle,
        postLink,
        postType
      },
      setAttributes
    } = props;
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
        quarter: (0,_functions__WEBPACK_IMPORTED_MODULE_6__.getQuarter)(new Date().toISOString().substring(0, 10))
      }); // Current date
    }

    const reOrder = () => {
      // Reorder by date (move up/down): see "childBlocks.sort()"
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').moveBlockToPosition(clientId, rootClientId, rootClientId, i);
    };

    const updateQuarter = val => {
      // Get quarter from datestring
      setAttributes({
        quarter: Number((0,_functions__WEBPACK_IMPORTED_MODULE_6__.getQuarter)(val))
      });
    };

    const updateDate = val => {
      //console.log( val );
      setAttributes({
        date: val
      }); // Get quarter from datestring

      updateQuarter(val);
      reOrder();
    };

    const updateReference = val => {
      setAttributes({
        reference: val
      });
    };

    const updateEarning = val => {
      setAttributes({
        expense: ''
      }); // Clear value

      setAttributes({
        earning: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };

    const updateExpense = val => {
      setAttributes({
        earning: ''
      }); // Clear value

      setAttributes({
        expense: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };

    const updateTax = val => {
      setAttributes({
        tax: val > 0 ? Number(val) : ''
      });
      updateTotals();
    }; // Markup: Backend


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, !postUUID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DatePicker, {
      currentDate: date,
      onChange: updateDate
    })), postUUID && postLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference: %s', 'billy'), postType ? postType.charAt(0).toUpperCase() + postType.substring(1) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'billy'))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, postTitle ? postTitle : postLink)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date"
    }, date && new Date(date).toISOString().substring(0, 10), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description",
      style: {
        minWidth: '200px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference', 'billy'),
      placeholder: "",
      value: reference,
      onChange: updateReference
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earning', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: earning,
      onChange: updateEarning
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expense', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: expense,
      onChange: updateExpense
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: tax,
      onChange: updateTax
    }))))));
  }),
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        date,
        quarter,
        earning,
        expense,
        tax,
        reference,
        postLink
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(earning, locale)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(expense, locale)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax > 0 ? tax : null
    }, tax && tax > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(tax, locale)));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/_header/header/index.js":
/*!*************************************!*\
  !*** ./src/_header/header/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/header', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'billy'),
  icon: 'editor-table',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: globalDataBilly.wpAdmin + 'edit.php?post_type=billy-header'
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit the %s layout', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'billy'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/header"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_header/theme-mod/index.js":
/*!****************************************!*\
  !*** ./src/_header/theme-mod/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/theme-mod', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Theme Mod', 'billy'),
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
  edit: props => {
    const {
      className,
      attributes: {
        themeMod
      },
      setAttributes
    } = props;

    const updateThemeMod = val => {
      setAttributes({
        themeMod: val
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Theme Mod', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Setting', 'billy'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Modify the value in the Theme Customizer.', 'billy'),
      options: globalDataBilly.themeModOptions,
      value: themeMod,
      onChange: updateThemeMod
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/theme-mod",
      attributes: props.attributes
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/actions/index.js":
/*!***************************************!*\
  !*** ./src/_invoice/actions/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-actions', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props; // Markup: Backend

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: props => {
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/date/index.js":
/*!************************************!*\
  !*** ./src/_invoice/date/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-date', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice is-warning"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Due to legal requirements in some countries, autogenerated data like %s can\'t be modified anymore after an invoice has been created in the system!', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-date"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/duedate/index.js":
/*!***************************************!*\
  !*** ./src/_invoice/duedate/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-duedate', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Due Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Payment due days', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-duedate"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/invoice-number/index.js":
/*!**********************************************!*\
  !*** ./src/_invoice/invoice-number/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-number', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'billy')),
  icon: 'editor-ol',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice number: Prefix', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice is-warning"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Due to legal requirements in some countries, autogenerated data like %s can\'t be modified anymore after an invoice has been created in the system!', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice number', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-number"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/meta/index.js":
/*!************************************!*\
  !*** ./src/_invoice/meta/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-meta', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'billy')),
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
  edit: props => {
    const {
      className,
      attributes: {
        label,
        text
      },
      setAttributes
    } = props;

    const updateLabel = val => {
      setAttributes({
        label: val
      });
    };

    const updateInput = val => {
      setAttributes({
        text: val
      });
    }; // Markup: Backend


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  save: props => {
    const {
      className,
      attributes: {
        label,
        text
      }
    } = props;
    return text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy')));
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
    save: props => {
      const {
        className,
        attributes: {
          label,
          text
        }
      } = props;
      return text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('<p>' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/_invoice/paymentinformation/index.js":
/*!**************************************************!*\
  !*** ./src/_invoice/paymentinformation/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-paymentinformation', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Payment Information', 'billy')),
  icon: 'info',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Payment Information', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-paymentinformation"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_invoice/table/deprecatedInner.js":
/*!***********************************************!*\
  !*** ./src/_invoice/table/deprecatedInner.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Invoice Table (Inner): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const deprecatedInvoiceInner = [// < v1.2.0 (202008)
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
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        description,
        taxRate,
        amount
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, description)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.percentToDecimal)(taxRate) * amount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_2__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedInvoiceInner);

/***/ }),

/***/ "./src/_invoice/table/deprecatedOuter.js":
/*!***********************************************!*\
  !*** ./src/_invoice/table/deprecatedOuter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Invoice Table (Outer): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const deprecatedInvoiceOuter = [// < v1.3.0 (202102)
{
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
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_3__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotal, locale)))))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedInvoiceOuter);

/***/ }),

/***/ "./src/_invoice/table/index.js":
/*!*************************************!*\
  !*** ./src/_invoice/table/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/_invoice/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedInner */ "./src/_invoice/table/deprecatedInner.js");


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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-table', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref) => {
    let {
      clientId
    } = _ref;
    const {
      getBlocksByClientId
    } = select('core/block-editor');
    globalDataBilly.clientId = clientId; // Get child blocks.

    const childBlocks = null !== getBlocksByClientId(globalDataBilly.clientId)[0] ? getBlocksByClientId(globalDataBilly.clientId)[0].innerBlocks : null;
    return {
      childBlocks: childBlocks
    };
  })(props => {
    const {
      className,
      childBlocks,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      },
      setAttributes
    } = props; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Onload "once": Calculate values and update attributes

    const updateTotals = () => {
      var amountSubtotalSum = 0,
          amountTotalSum = 0,
          taxRatesTotalSum = 0,
          taxRatesHolderOutput = [],
          taxRatesMergedOutput = []; // Create values-array of child block attributes

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map((childBlock, i) => {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount); // 2. Sum of Totals

          amountTotalSum += Number(childBlock.attributes.amount) + (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount); // 3. Sum of Taxrates

          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'invoicetable-block' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/invoice-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/invoice-tablerow']
    }), amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxRates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotal, locale)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals,
      style: {
        display: amountSubtotal > 0 ? 'block' : 'none'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')));
  }),
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotal, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-tablerow', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table Row', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref2) => {
    let {
      clientId
    } = _ref2;
    const {
      getBlockRootClientId,
      getBlockIndex
    } = select('core/block-editor');
    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(props => {
    const {
      className,
      i,
      attributes: {
        index,
        currency,
        locale,
        description,
        // < v1.2.0
        taxRate,
        amount,
        amountIncl,
        quantity,
        quantityRate
      },
      setAttributes
    } = props;
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

    const updateAmountIncl = val => {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      }); // Recalculate totals on edit

      setTimeout(() => {
        document.getElementById("updatetotals").click();
      }, 1);
    };

    const updateTaxRate = val => {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(val));
    };

    const updateAmount = val => {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate));
    };

    const updateQuantity = val => {
      setAttributes({
        quantity: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(val) * Number(quantityRate));
    };

    const updateQuantityRate = val => {
      setAttributes({
        quantityRate: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(quantity) * Number(val));
    }; // Markup: Backend


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity/Rate Calculator', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity', 'billy'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rate', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy'), currency),
      className: "amount",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      className: "taxrate",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy'), '%'),
      value: taxRate,
      options: 0 !== globalDataBilly.taxOptions.length ? globalDataBilly.taxOptions : '0%' !== taxRate && 0 === globalDataBilly.taxOptions.length ? [{
        label: taxRate,
        value: taxRate
      }, {
        label: '0%',
        value: '0%'
      }] : '',
      onChange: updateTaxRate
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      disabled: "disabled",
      label: currency,
      className: "amount-tax",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amountIncl
    }))))));
  }),
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        taxRate,
        amount
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate) * amount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/_quote/actions/index.js":
/*!*************************************!*\
  !*** ./src/_quote/actions/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-actions', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')),
  icon: 'menu-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props; // Markup: Backend

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: props => {
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/date/index.js":
/*!**********************************!*\
  !*** ./src/_quote/date/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-date', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
      block: "billy-blocks/quote-date"
    });
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/information/index.js":
/*!*****************************************!*\
  !*** ./src/_quote/information/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-information', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Information', 'billy')),
  icon: 'info',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote Information', 'billy')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/quote-information"
    }));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/_quote/meta/index.js":
/*!**********************************!*\
  !*** ./src/_quote/meta/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-meta', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta', 'billy')),
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
  edit: props => {
    const {
      className,
      attributes: {
        label,
        text
      },
      setAttributes
    } = props;

    const updateLabel = val => {
      setAttributes({
        label: val
      });
    };

    const updateInput = val => {
      setAttributes({
        text: val
      });
    }; // Markup: Backend


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  save: props => {
    const {
      className,
      attributes: {
        label,
        text
      }
    } = props;
    return text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy')));
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
    save: props => {
      const {
        className,
        attributes: {
          label,
          text
        }
      } = props;
      return text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('<p>' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/_quote/table/deprecatedInner.js":
/*!*********************************************!*\
  !*** ./src/_quote/table/deprecatedInner.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Quote Table (Inner): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const deprecatedQuoteInner = [// < v1.2.0 (20200824)
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
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        description,
        taxRate,
        amount
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, description)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.percentToDecimal)(taxRate) * amount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_2__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_2__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedQuoteInner);

/***/ }),

/***/ "./src/_quote/table/deprecatedOuter.js":
/*!*********************************************!*\
  !*** ./src/_quote/table/deprecatedOuter.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/blockEditor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");


/**
 * Quote Table (Outer): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const deprecatedQuoteOuter = [// < v1.3.0 (202102)
{
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
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_3__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotal, locale)))))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedQuoteOuter);

/***/ }),

/***/ "./src/_quote/table/index.js":
/*!***********************************!*\
  !*** ./src/_quote/table/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/_quote/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedInner */ "./src/_quote/table/deprecatedInner.js");


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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-table', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref) => {
    let {
      clientId
    } = _ref;
    const {
      getBlocksByClientId
    } = select('core/block-editor');
    globalDataBilly.clientId = clientId; // Get child blocks.

    const childBlocks = null !== getBlocksByClientId(globalDataBilly.clientId)[0] ? getBlocksByClientId(globalDataBilly.clientId)[0].innerBlocks : null;
    return {
      childBlocks: childBlocks
    };
  })(props => {
    const {
      className,
      childBlocks,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      },
      setAttributes
    } = props; //console.log(childBlocks);

    setAttributes({
      currency: globalDataBilly.currency
    });
    setAttributes({
      locale: globalDataBilly.locale
    }); // Onload "once": Calculate values and update attributes

    const updateTotals = () => {
      var amountSubtotalSum = 0,
          amountTotalSum = 0,
          taxRatesTotalSum = 0,
          taxRatesHolderOutput = [],
          taxRatesMergedOutput = []; // Create values-array of child block attributes

      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map((childBlock, i) => {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount); // 2. Sum of Totals

          amountTotalSum += Number(childBlock.attributes.amount) + (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount); // 3. Sum of Taxrates

          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'quotetable-block' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/quote-tablerow', {//placeholder: 'Enter content…',
      }]],
      allowedBlocks: ['billy-blocks/quote-tablerow']
    }), amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxRates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotal, locale)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals,
      style: {
        display: amountSubtotal > 0 ? 'block' : 'none'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')));
  }),
  save: props => {
    const {
      className,
      attributes: {
        currency,
        locale,
        amountSubtotal,
        amountTotal,
        taxRates,
        taxRatesTotal
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amountTotal, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-tablerow', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Table Row', 'billy')),
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

  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, _ref2) => {
    let {
      clientId
    } = _ref2;
    const {
      getBlockRootClientId,
      getBlockIndex
    } = select('core/block-editor');
    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(props => {
    const {
      className,
      i,
      attributes: {
        index,
        currency,
        locale,
        description,
        // < v1.2.0
        taxRate,
        amount,
        amountIncl,
        quantity,
        quantityRate
      },
      setAttributes
    } = props;
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

    const updateAmountIncl = val => {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      }); // Recalculate totals on edit

      setTimeout(() => {
        document.getElementById("updatetotals").click();
      }, 1);
    };

    const updateTaxRate = val => {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(val));
    };

    const updateAmount = val => {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate));
    };

    const updateQuantity = val => {
      setAttributes({
        quantity: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(val) * Number(quantityRate));
    };

    const updateQuantityRate = val => {
      setAttributes({
        quantityRate: val > 0 ? Number(val) : ''
      });
      updateAmount(Number(quantity) * Number(val));
    }; // Markup: Backend


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity/Rate Calculator', 'billy')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity', 'billy'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rate', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add content', 'billy'),
        content: description ? description : '' // < v1.2.0

      }]],
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy'), currency),
      className: "amount",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      className: "taxrate",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy'), '%'),
      value: taxRate,
      options: 0 !== globalDataBilly.taxOptions.length ? globalDataBilly.taxOptions : '0%' !== taxRate && 0 === globalDataBilly.taxOptions.length ? [{
        label: taxRate,
        value: taxRate
      }, {
        label: '0%',
        value: '0%'
      }] : '',
      onChange: updateTaxRate
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      disabled: "disabled",
      label: currency,
      className: "amount-tax",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amountIncl
    }))))));
  }),
  save: props => {
    const {
      className,
      attributes: {
        index,
        locale,
        taxRate,
        amount
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate) * amount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_6__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_6__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/_quote/validuntildate/index.js":
/*!********************************************!*\
  !*** ./src/_quote/validuntildate/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-validuntildate', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Valid Until', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: props => {
    // Markup: Backend
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
      block: "billy-blocks/quote-validuntildate"
    });
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrency": function() { return /* binding */ getCurrency; },
/* harmony export */   "formatNumber": function() { return /* binding */ formatNumber; },
/* harmony export */   "percentToDecimal": function() { return /* binding */ percentToDecimal; },
/* harmony export */   "getQuarter": function() { return /* binding */ getQuarter; }
/* harmony export */ });
const getCurrency = () => {
  return globalDataBilly.currency;
};
const formatNumber = function (val) {
  let l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return val.toLocaleString(l, {
    'minimumFractionDigits': 2,
    'maximumFractionDigits': 2
  });
};
const percentToDecimal = val => {
  return parseFloat(val) / 100;
};
const getQuarter = d => {
  d = new Date(d) || new Date();
  var q = [1, 2, 3, 4];
  return q[Math.floor(d.getMonth() / 3)];
};

/***/ }),

/***/ "@wordpress/blockEditor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

















}();
/******/ })()
;
//# sourceMappingURL=index.js.map