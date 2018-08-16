/*

Bryntum Vanilla Scheduler 1.0.0-beta2
Copyright(c) 2018 Bryntum AB
https://bryntum.com/contact
https://bryntum.com/license

*/
/*

Bryntum Vanilla Scheduler 1.0.0-beta2
Copyright(c) 2018 Bryntum AB
https://bryntum.com/contact
https://bryntum.com/license

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("En", [], factory);
	else if(typeof exports === 'object')
		exports["En"] = factory();
	else
		root["bryntum"] = root["bryntum"] || {}, root["bryntum"]["locales"] = root["bryntum"]["locales"] || {}, root["bryntum"]["locales"]["En"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _En = __webpack_require__(7);

var _En2 = _interopRequireDefault(_En);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extends locale from grid
//const locale = Object.assign(gridLocale, {
var locale = {

    Dependencies: {
        from: 'From',
        to: 'To',
        valid: 'Valid',
        invalid: 'Invalid'
    },

    EventEdit: {
        nameText: 'Name',
        resourceText: 'Resource',
        startText: 'Start',
        endText: 'End',
        saveText: 'Save',
        deleteText: 'Delete',
        cancelText: 'Cancel',
        editEvent: 'Edit event'
    },

    Scheduler: {
        deleteEvent: 'Delete event'
    },

    HeaderContextMenu: {
        pickZoomLevel: 'Zoom',
        activeDateRange: 'Date range',
        startText: 'Start date',
        endText: 'End date',
        todayText: 'Today'
    },

    EventFilter: {
        filterEvents: 'Filter tasks',
        byName: 'By name'
    },

    TimeRanges: {
        showCurrentTimeLine: 'Show current timeline'
    },

    PresetManager: {
        minuteAndHour: {
            topDateFormat: 'ddd MM/DD, hA'
        },
        hourAndDay: {
            topDateFormat: 'ddd MM/DD'
        },
        weekAndDay: {
            displayDateFormat: 'hh:mm A'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (var i in _En2.default) {
    locale[i] = _En2.default[i];
}

exports.default = locale;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var locale = {

    localeName: 'En',
    localeDesc: 'English',
    momentLocale: 'en',

    //region Columns

    TemplateColumn: {
        noTemplate: 'TemplateColumn needs a template',
        noFunction: 'TemplateColumn.template must be a function'
    },

    ColumnStore: {
        columnTypeNotFound: function columnTypeNotFound(data) {
            return 'Column type \'' + data.type + '\' not registered';
        }
    },

    //endregion

    //region Mixins

    InstancePlugin: {
        fnMissing: function fnMissing(data) {
            return 'Trying to chain fn ' + data.plugIntoName + '#' + data.fnName + ', but plugin fn ' + data.pluginName + '#' + data.fnName + ' does not exist';
        },
        overrideFnMissing: function overrideFnMissing(data) {
            return 'Trying to override fn ' + data.plugIntoName + '#' + data.fnName + ', but plugin fn ' + data.pluginName + '#' + data.fnName + ' does not exist';
        }
    },

    //endregion

    //region Features

    CellEdit: {},

    ColumnPicker: {
        columnsMenu: 'Columns',
        hideColumn: 'Hide column',
        hideColumnShort: 'Hide'
    },

    Filter: {
        applyFilter: 'Apply filter',
        filter: 'Filter',
        editFilter: 'Edit filter',
        on: 'On',
        before: 'Before',
        after: 'After',
        equals: 'Equals',
        lessThan: 'Less than',
        moreThan: 'More than',
        removeFilter: 'Remove filter'
    },

    FilterBar: {
        enableFilterBar: 'Show filter bar',
        disableFilterBar: 'Hide filter bar'
    },

    Group: {
        groupAscending: 'Group ascending',
        groupDescending: 'Group descending',
        groupAscendingShort: 'Ascending',
        groupDescendingShort: 'Descending',
        stopGrouping: 'Stop grouping',
        stopGroupingShort: 'Stop'
    },

    Search: {
        searchForValue: 'Search for value'
    },

    Sort: {
        'sortAscending': 'Sort ascending',
        'sortDescending': 'Sort descending',
        'multiSort': 'Multi sort',
        'removeSorter': 'Remove sorter',
        'addSortAscending': 'Add ascending sorter',
        'addSortDescending': 'Add descending sorter',
        'toggleSortAscending': 'Change to ascending',
        'toggleSortDescending': 'Change to descending',
        'sortAscendingShort': 'Ascending',
        'sortDescendingShort': 'Descending',
        'removeSorterShort': 'Remove',
        'addSortAscendingShort': '+ Ascending',
        'addSortDescendingShort': '+ Descending'
    },

    Tree: {
        noTreeColumn: 'To use the tree feature one column must be configured with tree: true'
    },

    //endregion

    //region Grid

    Grid: {
        featureNotFound: function featureNotFound(data) {
            return 'Feature \'' + data + '\' not available, make sure you have imported it';
        },
        removeRow: 'Delete row',
        removeRows: 'Delete rows',
        loadMask: 'Loading...',
        loadFailedMessage: 'Data loading failed.',
        moveColumnLeft: 'Move to left section',
        moveColumnRight: 'Move to right section'
    },

    //endregion

    //region Widgets

    Field: {
        invalidValue: 'Invalid field value',
        minimumValueViolation: 'Minimum value violation',
        maximumValueViolation: 'Maximum value violation'
    },

    DateField: {
        datePickerFormat: 'm/d/Y',
        invalidDate: 'Invalid date input'
    },

    TimeField: {
        timePickerFormat: 'h:i',
        timePicker24Hour: false,
        invalidTime: 'Invalid time input'
    },

    //endregion

    //region Others

    DateHelper: {
        shortWeek: 'W',
        shortQuarter: 'q',
        week: 'Week'

        //endregion
    } };

exports.default = locale;

/***/ })

/******/ })["default"];
});