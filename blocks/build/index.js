/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_deprecated/header/index.js":
/*!*****************************************!*\
  !*** ./src/_deprecated/header/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Header [Deprecated 2022-09; Block is still needed for backwards compatibility]
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: globalDataBilly.wpAdmin + 'edit.php?post_type=wp_block'
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit the %s layout', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'billy'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Header', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/header"
    })));
  },
  save: props => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/accounting/actions/index.js":
/*!*****************************************!*\
  !*** ./src/accounting/actions/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Accounting Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/accounting-actions', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Accounting', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actions', 'billy')),
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'components-placeholder',
      style: {
        minHeight: 'auto'
      }
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/accounting/table/deprecatedInner.js":
/*!*************************************************!*\
  !*** ./src/accounting/table/deprecatedInner.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");

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


const deprecatedAccountingInner = [
// < v1.7.0 (202312)
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
        earning,
        expense,
        tax,
        reference,
        postLink
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(earning, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(expense, locale)), tax && tax > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax
    }, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(tax, locale)));
  }
},
// < v1.6.0 (202303)
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
        earning,
        expense,
        tax,
        reference,
        postLink
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(earning, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(expense, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax > 0 ? tax : null
    }, tax && tax > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(tax, locale)));
  }
},
// < v1.2.0 (20200824)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Q%s', 'billy'), quarter))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, description && description), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(earning, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(expense, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax > 0 ? tax : null
    }, tax && tax > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(tax, locale)));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedAccountingInner);

/***/ }),

/***/ "./src/accounting/table/deprecatedOuter.js":
/*!*************************************************!*\
  !*** ./src/accounting/table/deprecatedOuter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
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


const deprecatedAccountingOuter = [
// < v1.6.0 (202303)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
},
// < v1.5.1 (202210)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "5",
      className: "alignright"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
},
// < v1.3 (202102)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
},
// < v1.2.4 (202012)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reference', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earning', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expense', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "4",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(amountTaxExpenses, locale)))))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedAccountingOuter);

/***/ }),

/***/ "./src/accounting/table/index.js":
/*!***************************************!*\
  !*** ./src/accounting/table/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/accounting/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecatedInner */ "./src/accounting/table/deprecatedInner.js");

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
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
    const {
      getBlocksByClientId
    } = select('core/block-editor');

    // Get child blocks
    const getChildBlocks = getBlocksByClientId(clientId)[0].innerBlocks;

    // Sort array based on date attribute
    getChildBlocks.sort((a, b) => {
      return new Date(a.attributes.date) - new Date(b.attributes.date);
    });
    return {
      childBlocks: getChildBlocks
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
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: 'accountingtable-block' + (className ? ' ' + className : '')
    });
    //console.log(childBlocks);

    // Calculate values and update attributes
    updateTotals = () => {
      var amountEarningsSum = 0,
        amountExpensesSum = 0,
        amountTaxEarningsSum = 0,
        amountTaxExpensesSum = 0;
      setAttributes({
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });
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
        amountTotalEarnings: amountEarningsSum,
        amountTotalExpenses: amountExpensesSum,
        amountTaxEarnings: amountTaxEarningsSum,
        amountTaxExpenses: amountTaxExpensesSum
      });
    };
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      updateTotals();
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/accounting-tablerow']],
      allowedBlocks: ['billy-blocks/accounting-tablerow'],
      renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender, null)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountTotalEarnings > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "earnings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalEarnings, locale)))), amountTotalExpenses > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "expenses"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "profit"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        borderTop: '2px solid'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxes-earnings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes (%s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTaxEarnings, locale)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxes-expenses"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes (%s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTaxExpenses, locale))))))));
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
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'alignwide' + (className ? ' ' + className : '')
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "index"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "date"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "reference"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort earnings",
      "data-sort": "earning"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort expenses",
      "data-sort": "expense"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy')), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col",
      className: "sort",
      "data-sort": "tax"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
      className: "list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "4"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s / %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalExpenses, locale)))), (amountTotalEarnings > 0 || amountTotalExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "4"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Profit', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "profit"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotalEarnings - amountTotalExpenses, locale)))), (amountTaxEarnings > 0 || amountTaxExpenses > 0) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "4"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s (%2$s / %3$s)', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earnings', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expenses', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-earnings"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTaxEarnings, locale))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "sum tax-expenses"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTaxExpenses, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/accounting-tablerow', {
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      setAttributes({
        index: i,
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });
      if ('' === date) {
        setAttributes({
          date: new Date().toISOString().substring(0, 10),
          quarter: (0,_functions__WEBPACK_IMPORTED_MODULE_7__.getQuarter)(new Date().toISOString().substring(0, 10))
        }); // Current date
      }
    });
    const reOrder = () => {
      // Reorder by date (move up/down): see "childBlocks.sort()"
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').moveBlockToPosition(clientId, rootClientId, rootClientId, i);
    };
    const updateQuarter = val => {
      // Get quarter from datestring
      setAttributes({
        quarter: Number((0,_functions__WEBPACK_IMPORTED_MODULE_7__.getQuarter)(val))
      });
    };
    const updateDate = val => {
      //console.log( val );
      setAttributes({
        date: val
      });

      // Get quarter from datestring
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
        expense: '',
        earning: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };
    const updateExpense = val => {
      setAttributes({
        earning: '',
        expense: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };
    const updateTax = val => {
      setAttributes({
        tax: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, !postUUID && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.DatePicker, {
      currentDate: date,
      onChange: updateDate
    })), postUUID && postLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference: %s', 'billy'), postType ? postType.charAt(0).toUpperCase() + postType.substring(1) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post', 'billy'))
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, postTitle ? postTitle : postLink)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date"
    }, date && new Date(date).toISOString().substring(0, 10), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description",
      style: {
        minWidth: '200px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        content: description ? description : '' // < v1.2.0
      }]],
      allowedBlocks: ['core/block', 'core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reference', 'billy'),
      placeholder: "",
      value: reference,
      onChange: updateReference
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Earning', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: earning,
      onChange: updateEarning
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expense', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: expense,
      onChange: updateExpense
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: tax,
      onChange: updateTax
    }))))));
  }),
  save: props => {
    const {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      "data-date": date && new Date(date).toISOString().substring(0, 10),
      "data-quarter": quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter),
      "data-reference": reference && reference,
      "data-earning": earning > 0 ? earning : null,
      "data-expense": expense > 0 ? expense : null,
      "data-tax": tax > 0 ? tax : null
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index",
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "date",
      "data-value": date && new Date(date).toISOString().substring(0, 10)
    }, date && new Date(date).toISOString().substring(0, 10), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, quarter && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Q%s', 'billy'), quarter))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "reference"
    }, reference && !postLink && reference, reference && postLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: postLink
    }, reference)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount earning",
      "data-value": earning > 0 ? earning : null
    }, earning && earning > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(earning, locale)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount expense",
      "data-value": expense > 0 ? expense : null
    }, expense && expense > 0 && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(expense, locale)), tax && tax > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "amount tax",
      "data-value": tax
    }, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(tax, locale)));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatNumber: () => (/* binding */ formatNumber),
/* harmony export */   getCurrency: () => (/* binding */ getCurrency),
/* harmony export */   getQuarter: () => (/* binding */ getQuarter),
/* harmony export */   percentToDecimal: () => (/* binding */ percentToDecimal)
/* harmony export */ });
const getCurrency = () => {
  return globalDataBilly.currency;
};
const formatNumber = (val, l = undefined) => {
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

/***/ "./src/invoice/actions/index.js":
/*!**************************************!*\
  !*** ./src/invoice/actions/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Invoice Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-actions', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Invoice', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actions', 'billy')),
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/invoice/date/index.js":
/*!***********************************!*\
  !*** ./src/invoice/date/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice is-warning"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Due to legal requirements in some countries, autogenerated data like %s can't be modified anymore after an invoice has been created in the system!", 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-date"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/invoice/duedate/index.js":
/*!**************************************!*\
  !*** ./src/invoice/duedate/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Payment due days', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-duedate"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/invoice/invoice-number/index.js":
/*!*********************************************!*\
  !*** ./src/invoice/invoice-number/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice number: Prefix', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice is-warning"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Due to legal requirements in some countries, autogenerated data like %s can't be modified anymore after an invoice has been created in the system!", 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice number', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-number"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/invoice/meta/index.js":
/*!***********************************!*\
  !*** ./src/invoice/meta/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Meta Field
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-meta', {
  apiVersion: 2,
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
    html: false,
    className: true
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: className ? ' ' + className : ''
    });
    const updateLabel = val => {
      setAttributes({
        label: val
      });
    };
    const updateInput = val => {
      setAttributes({
        text: val
      });
    };

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  save: props => {
    const {
      className,
      attributes: {
        label,
        text
      }
    } = props;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: className ? ' ' + className : ''
    });
    return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  deprecated: [
  // < v1.7.0 (202312)
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
      return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  },
  // < v1.2.3 (202012)
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
      return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('<p>' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/invoice/paymentinformation/index.js":
/*!*************************************************!*\
  !*** ./src/invoice/paymentinformation/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Payment Information', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/invoice-paymentinformation"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/invoice/table/deprecatedInner.js":
/*!**********************************************!*\
  !*** ./src/invoice/table/deprecatedInner.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");

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


const deprecatedInvoiceInner = [
// < v1.7.0 (202312)
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
        taxRate,
        amount
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
},
// < v1.2.0 (202008)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedInvoiceInner);

/***/ }),

/***/ "./src/invoice/table/deprecatedOuter.js":
/*!**********************************************!*\
  !*** ./src/invoice/table/deprecatedOuter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");

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


const deprecatedInvoiceOuter = [
// < v1.5.1 (202210)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    },
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountTotal, locale)))))));
  }
},
// < v1.3.0 (202102)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null,
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountTotal, locale)))))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedInvoiceOuter);

/***/ }),

/***/ "./src/invoice/table/index.js":
/*!************************************!*\
  !*** ./src/invoice/table/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/invoice/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecatedInner */ "./src/invoice/table/deprecatedInner.js");

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




var updateTotals;

/**
 * 1. Outer Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-table', {
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
    const {
      getBlocksByClientId
    } = select('core/block-editor');

    // Get child blocks
    return {
      childBlocks: getBlocksByClientId(clientId)[0].innerBlocks
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
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: 'invoicetable-block' + (className ? ' ' + className : '')
    });
    //console.log(childBlocks);

    // Onload "once": Calculate values and update attributes
    updateTotals = () => {
      var amountSubtotalSum = 0,
        amountTotalSum = 0,
        taxRatesTotalSum = 0,
        taxRatesHolderOutput = [],
        taxRatesMergedOutput = [];
      setAttributes({
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });

      // Create values-array of child block attributes
      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map((childBlock, i) => {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount);

          // 2. Sum of Totals
          amountTotalSum += Number(childBlock.attributes.amount) + (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount);

          // 3. Sum of Taxrates
          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
          });
        });
        if (taxRatesHolderOutput.length > 0) {
          // Sum up Tax amount
          taxRatesTotalSum = taxRatesHolderOutput.reduce(function (res, value) {
            return res + value.amount;
          }, 0);
          taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2));

          // Merge amounts having the same Taxrate
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
          taxRatesTotal: taxRatesTotalSum,
          taxRates: JSON.stringify(taxRatesMergedOutput),
          amountSubtotal: amountSubtotalSum,
          amountTotal: amountTotalSum
        });
      }
    };
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      updateTotals();
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/invoice-tablerow']],
      allowedBlocks: ['billy-blocks/invoice-tablerow'],
      renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender, null)
    }), amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxRates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null,
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotal, locale)))))));
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
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'invoicetable-block alignwide' + (className ? ' ' + className : '')
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    },
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotal, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/invoice-tablerow', {
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
    const {
      getBlockRootClientId,
      getBlockIndex
    } = select('core/block-editor');
    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(props => {
    const {
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      setAttributes({
        index: i,
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });
      if ('' === taxRate) {
        setAttributes({
          taxRate: 0 === globalDataBilly.taxOptions.length ? '0%' : globalDataBilly.taxOptions[0].value
        });
      }
    });
    const updateAmountIncl = val => {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };
    const updateTaxRate = val => {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(val));
    };
    const updateAmount = val => {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate));
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
    };

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity/Rate Calculator', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity', 'billy'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rate', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        content: description ? description : '' // < v1.2.0
      }]],
      allowedBlocks: ['core/block', 'core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy'), currency),
      className: "amount",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
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
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
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
      attributes: {
        index,
        locale,
        taxRate,
        amount
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./src/quote/actions/index.js":
/*!************************************!*\
  !*** ./src/quote/actions/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Quote Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-actions', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Actions', 'billy')),
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
    return {
      postModifiedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(props => {
    const {
      postModifiedDate
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "components-placeholder",
      style: {
        minHeight: 'auto'
      }
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last modified', 'billy'), new Date(postModifiedDate).toLocaleString())));
  }),
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/quote/date/index.js":
/*!*********************************!*\
  !*** ./src/quote/date/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Quote Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-date', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Date', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/quote-date"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/quote/information/index.js":
/*!****************************************!*\
  !*** ./src/quote/information/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Info', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-notice__content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The %s values can be modified in the Theme Customizer.', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote Information', 'billy')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/quote-information"
    }));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/quote/meta/index.js":
/*!*********************************!*\
  !*** ./src/quote/meta/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Meta Field
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-meta', {
  apiVersion: 2,
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
    html: false,
    className: true
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: className ? ' ' + className : ''
    });
    const updateLabel = val => {
      setAttributes({
        label: val
      });
    };
    const updateInput = val => {
      setAttributes({
        text: val
      });
    };

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "label",
      value: label,
      onChange: updateLabel
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "text",
      className: "text",
      value: text,
      onChange: updateInput
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  save: props => {
    const {
      className,
      attributes: {
        label,
        text
      }
    } = props;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: className ? ' ' + className : ''
    });
    return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
  },
  deprecated: [
  // < v1.7.0 (202312)
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
        attributes: {
          label,
          text
        }
      } = props;
      return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<div class="label">%1$s</div> <div class="text">%2$s</div>', 'billy'), label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  },
  // < v1.2.3 (202012)
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
        attributes: {
          label,
          text
        }
      } = props;
      return text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)('<p>' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<strong>%1$s</strong> <span>%2$s</span>', 'billy') + '</p>', label ? label : '', text ? text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('N/A', 'billy'))));
    }
  }]
});

/***/ }),

/***/ "./src/quote/table/deprecatedInner.js":
/*!********************************************!*\
  !*** ./src/quote/table/deprecatedInner.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");

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


const deprecatedQuoteInner = [
// < v1.7.0 (202312)
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
        taxRate,
        amount
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
},
// < v1.2.0 (20200824)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedQuoteInner);

/***/ }),

/***/ "./src/quote/table/deprecatedOuter.js":
/*!********************************************!*\
  !*** ./src/quote/table/deprecatedOuter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");

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


const deprecatedQuoteOuter = [
// < v1.5.1 (202210)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    },
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      className: "align-right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountTotal, locale)))))));
  }
},
// < v1.3.0 (202102)
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null,
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_4__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: "2",
      align: "right"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_4__.formatNumber)(amountTotal, locale)))))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedQuoteOuter);

/***/ }),

/***/ "./src/quote/table/index.js":
/*!**********************************!*\
  !*** ./src/quote/table/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions */ "./src/functions.js");
/* harmony import */ var _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecatedOuter */ "./src/quote/table/deprecatedOuter.js");
/* harmony import */ var _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecatedInner */ "./src/quote/table/deprecatedInner.js");

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




var updateTotals;

/**
 * 1. Outer Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-table', {
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
    const {
      getBlocksByClientId
    } = select('core/block-editor');

    // Get child blocks
    return {
      childBlocks: getBlocksByClientId(clientId)[0].innerBlocks
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
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: 'quotetable-block' + (className ? ' ' + className : '')
    });
    //console.log(childBlocks);

    // Onload "once": Calculate values and update attributes
    updateTotals = () => {
      var amountSubtotalSum = 0,
        amountTotalSum = 0,
        taxRatesTotalSum = 0,
        taxRatesHolderOutput = [],
        taxRatesMergedOutput = [];
      setAttributes({
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });

      // Create values-array of child block attributes
      if (childBlocks && childBlocks.length > 0) {
        childBlocks.map((childBlock, i) => {
          // 1. Sum of Subtotals
          amountSubtotalSum += Number(childBlock.attributes.amount);

          // 2. Sum of Totals
          amountTotalSum += Number(childBlock.attributes.amount) + (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount);

          // 3. Sum of Taxrates
          taxRatesHolderOutput.push({
            taxRate: childBlock.attributes.taxRate,
            amount: (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(childBlock.attributes.taxRate) * Number(childBlock.attributes.amount)
          });
        });
        if (taxRatesHolderOutput.length > 0) {
          // Sum up Tax amount
          taxRatesTotalSum = taxRatesHolderOutput.reduce(function (res, value) {
            return res + value.amount;
          }, 0);
          taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2));

          // Merge amounts having the same Taxrate
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
          taxRatesTotal: taxRatesTotalSum,
          taxRates: JSON.stringify(taxRatesMergedOutput),
          amountSubtotal: amountSubtotalSum,
          amountTotal: amountTotalSum
        });
      }
    };
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      updateTotals();
    });

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      id: "updatetotals",
      className: "components-button is-secondary is-button",
      onClick: updateTotals
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update Totals', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      templateLock: false,
      template: [['billy-blocks/quote-tablerow']],
      allowedBlocks: ['billy-blocks/quote-tablerow'],
      renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender, null)
    }), amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "totals"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxRates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null,
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      style: {
        width: '50%'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotal, locale)))))));
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
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: 'quotetable-block alignwide' + (className ? ' ' + className : '')
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table wp-block-table"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('#', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy')), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "col"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, amountSubtotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "subtotal"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, amountTotal > amountSubtotal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Subtotal', 'billy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountSubtotal, locale)))), taxRates && taxRatesTotal > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "taxrates"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    },
    // Sort by Taxrate
    JSON.parse(taxRates).sort((a, b) => (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(a.taxRate) - (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(b.taxRate)).map((total, i) => {
      if (total.amount > 0) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, {
          key: i
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s %3$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(total.amount, locale), '<small>(' + total.taxRate + ')</small>' + '<br>'));
      }
    }))), amountTotal > amountSubtotal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      className: "total"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      colSpan: "2"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Total', 'billy')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      colSpan: taxRates && taxRatesTotal > 0 ? '2' : null
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), currency, (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amountTotal, locale)))))));
  },
  deprecated: _deprecatedOuter__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/**
 * 2. Inner Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-tablerow', {
  apiVersion: 2,
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
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, {
    clientId
  }) => {
    const {
      getBlockRootClientId,
      getBlockIndex
    } = select('core/block-editor');
    return {
      i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1
    };
  })(props => {
    const {
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      setAttributes({
        index: i,
        currency: globalDataBilly.currency,
        locale: globalDataBilly.locale
      });
      if ('' === taxRate) {
        setAttributes({
          taxRate: 0 === globalDataBilly.taxOptions.length ? '0%' : globalDataBilly.taxOptions[0].value
        });
      }
    });
    const updateAmountIncl = val => {
      setAttributes({
        amountIncl: val > 0 ? Number(val) : ''
      });
      updateTotals();
    };
    const updateTaxRate = val => {
      setAttributes({
        taxRate: val
      });
      updateAmountIncl(Number(amount) + Number(amount) * (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(val));
    };
    const updateAmount = val => {
      setAttributes({
        amount: val > 0 ? Number(val) : ''
      });
      updateAmountIncl(Number(val) + Number(val) * (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate));
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
    };

    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity/Rate Calculator', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quantity', 'billy'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantity,
      onChange: updateQuantity
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rate', 'billy'), currency),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: quantityRate,
      onChange: updateQuantityRate
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "index"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      style: {
        width: '30vw',
        minWidth: '200px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['core/paragraph', {
        content: description ? description : '' // < v1.2.0
      }]],
      allowedBlocks: ['core/block', 'core/heading', 'core/paragraph', 'core/list', 'core/html']
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      type: "number",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s in %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Amount', 'billy'), currency),
      className: "amount",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0', 'billy'),
      value: amount,
      onChange: updateAmount
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
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
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
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
      attributes: {
        index,
        locale,
        taxRate,
        amount
      }
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      scope: "row"
    }, index && index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, amount && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(amount, locale)), taxRate && (0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate) * amount > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s %2$s', 'billy'), (0,_functions__WEBPACK_IMPORTED_MODULE_7__.formatNumber)((0,_functions__WEBPACK_IMPORTED_MODULE_7__.percentToDecimal)(taxRate) * amount, locale), '<small>(' + taxRate + ')</small>'))));
  },
  deprecated: _deprecatedInner__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./src/quote/validuntildate/index.js":
/*!*******************************************!*\
  !*** ./src/quote/validuntildate/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Quote Valid Until Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('billy-blocks/quote-validuntildate', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%1$s: %2$s', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Quote', 'billy'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Valid Until', 'billy')),
  icon: 'calendar-alt',
  // https://developer.wordpress.org/resource/dashicons
  category: 'billy-blocks',
  // Custom category: see index.php
  supports: {
    inserter: false,
    reusable: false,
    html: false
  },
  edit: () => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    // Markup: Backend
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/quote-validuntildate"
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/settings/panel/index.js":
/*!*************************************!*\
  !*** ./src/settings/panel/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);

// https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-post/src/components/sidebar/plugin-document-setting-panel/index.js#L88





const BillySetup = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
  name: "billy-setup",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Billy Setup', 'billy'),
  className: "my-document-setting-plugin"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
  href: globalDataBilly.wpAdmin + 'customize.php?autofocus[panel]=billy_setup_panel'
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings (Theme Customizer)', 'billy'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
  className: "ul code"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invoice number', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/invoice-number"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote number', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/quote-number"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/theme-mod",
  attributes: {
    themeMod: 'name'
  }
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Address', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/theme-mod",
  attributes: {
    themeMod: 'address'
  }
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('VAT', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/theme-mod",
  attributes: {
    themeMod: 'vat'
  }
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Currency', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/theme-mod",
  attributes: {
    themeMod: 'currency'
  }
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taxes', 'billy')
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
  block: "billy-blocks/theme-mod",
  attributes: {
    themeMod: 'taxrates'
  }
}))));
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('billy-setup', {
  render: BillySetup
});

/***/ }),

/***/ "./src/settings/theme-mod/index.js":
/*!*****************************************!*\
  !*** ./src/settings/theme-mod/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
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
  apiVersion: 2,
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
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Theme Mod', 'billy')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Setting', 'billy'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Modify the value in the Theme Customizer.', 'billy'),
      options: globalDataBilly.themeModOptions,
      value: themeMod,
      onChange: updateThemeMod
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "billy-blocks/theme-mod",
      attributes: props.attributes
    })));
  },
  save: () => {
    // Handled by PHP.
    return null;
  }
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecated_header_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deprecated/header/index */ "./src/_deprecated/header/index.js");
/* harmony import */ var _invoice_actions_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/actions/index */ "./src/invoice/actions/index.js");
/* harmony import */ var _invoice_meta_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice/meta/index */ "./src/invoice/meta/index.js");
/* harmony import */ var _invoice_date_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice/date/index */ "./src/invoice/date/index.js");
/* harmony import */ var _invoice_duedate_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/duedate/index */ "./src/invoice/duedate/index.js");
/* harmony import */ var _invoice_invoice_number_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice-number/index */ "./src/invoice/invoice-number/index.js");
/* harmony import */ var _invoice_paymentinformation_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice/paymentinformation/index */ "./src/invoice/paymentinformation/index.js");
/* harmony import */ var _invoice_table_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice/table/index */ "./src/invoice/table/index.js");
/* harmony import */ var _quote_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote/actions/index */ "./src/quote/actions/index.js");
/* harmony import */ var _quote_meta_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote/meta/index */ "./src/quote/meta/index.js");
/* harmony import */ var _quote_date_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quote/date/index */ "./src/quote/date/index.js");
/* harmony import */ var _quote_information_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quote/information/index */ "./src/quote/information/index.js");
/* harmony import */ var _quote_table_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quote/table/index */ "./src/quote/table/index.js");
/* harmony import */ var _quote_validuntildate_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quote/validuntildate/index */ "./src/quote/validuntildate/index.js");
/* harmony import */ var _accounting_table_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accounting/table/index */ "./src/accounting/table/index.js");
/* harmony import */ var _accounting_actions_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./accounting/actions/index */ "./src/accounting/actions/index.js");
/* harmony import */ var _settings_panel_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/panel/index */ "./src/settings/panel/index.js");
/* harmony import */ var _settings_theme_mod_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/theme-mod/index */ "./src/settings/theme-mod/index.js");
/**
 * Import blocks
 */



















})();

/******/ })()
;
//# sourceMappingURL=index.js.map