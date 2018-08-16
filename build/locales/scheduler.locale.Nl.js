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
		define("Nl", [], factory);
	else if(typeof exports === 'object')
		exports["Nl"] = factory();
	else
		root["bryntum"] = root["bryntum"] || {}, root["bryntum"]["locales"] = root["bryntum"]["locales"] || {}, root["bryntum"]["locales"]["Nl"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

window.bryntum.locales.moment_nl = {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function monthsShort(m, format) {
        if (!m) {
            return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
        return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Nl = __webpack_require__(9);

var _Nl2 = _interopRequireDefault(_Nl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extends locale from grid
//const locale = Object.assign(gridLocale, {
var locale = {

    Dependencies: {
        from: 'Van',
        to: 'Naar',
        valid: 'Geldig',
        invalid: 'Ongeldig'
    },

    EventEdit: {
        nameText: 'Naam',
        resourceText: 'Resource',
        startText: 'Start',
        endText: 'Eind',
        saveText: 'Bewaar',
        deleteText: 'Verwijder',
        cancelText: 'Annuleer',
        editEvent: 'Wijzig item'
    },

    Scheduler: {
        deleteEvent: 'Verwijder item'
    },

    HeaderContextMenu: {
        pickZoomLevel: 'Zoom in',
        activeDateRange: 'Datum bereik',
        startText: 'Start datum',
        endText: 'Eind datum',
        todayText: 'Vandaag'
    },

    EventFilter: {
        filterEvents: 'Filter items',
        byName: 'Op naam'
    },

    TimeRanges: {
        showCurrentTimeLine: 'Maak huidige tijdlijn zichtbaar'
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (var i in _Nl2.default) {
    locale[i] = _Nl2.default[i];
}

exports.default = locale;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(10);

var locale = {

    localeName: 'Nl',
    localeDesc: 'Nederlands',
    momentLocale: 'nl',

    //region Columns

    TemplateColumn: {
        noTemplate: 'TemplateColumn heeft een template nodig',
        noFunction: 'TemplateColumn.template moet een functie zijn'
    },

    ColumnStore: {
        columnTypeNotFound: function columnTypeNotFound(data) {
            return 'Kolom type \'' + data.type + '\' is niet geregistreerd';
        }
    },

    //endregion

    //region Mixins

    InstancePlugin: {
        fnMissing: function fnMissing(data) {
            return 'Het lukt niet fn ' + data.plugIntoName + '#' + data.fnName + ' te schakelen, de plugin fn ' + data.pluginName + '#' + data.fnName + ' bestaat niet';
        },
        overrideFnMissing: function overrideFnMissing(data) {
            return 'Het lukt niet fn te overerven ' + data.plugIntoName + '#' + data.fnName + ', de plugin fn ' + data.pluginName + '#' + data.fnName + ' bestaat niet';
        }
    },

    //endregion

    //region Features

    CellEdit: {},

    ColumnPicker: {
        columnsMenu: 'Kolommen',
        hideColumn: 'Verberg Kolom',
        hideColumnShort: 'Verberg'
    },

    Filter: {
        applyFilter: 'Pas filter toe',
        filter: 'Filter',
        editFilter: 'Wijzig filter',
        on: 'Aan',
        before: 'Voor',
        after: 'Na',
        equals: 'Is gelijk',
        lessThan: 'Minder dan',
        moreThan: 'Meer dan',
        removeFilter: 'Verwijder filter'
    },

    FilterBar: {
        enableFilterBar: 'Maak filterbalk zichtbaar',
        disableFilterBar: 'Verberg filterbalk'
    },

    Group: {
        groupAscending: 'Groepeer oplopend',
        groupDescending: 'Groepeer aflopend',
        groupAscendingShort: 'Oplopend',
        groupDescendingShort: 'Aflopend',
        stopGrouping: 'Maak groepering ongedaan',
        stopGroupingShort: 'Maak ongedaan'
    },

    Search: {
        searchForValue: 'Zoek op term'
    },

    Sort: {
        'sortAscending': 'Sorteer oplopend',
        'sortDescending': 'Sorteer aflopend',
        'multiSort': 'Meerdere sorteringen',
        'removeSorter': 'Verwijder sortering',
        'addSortAscending': 'Voeg oplopende sortering toe',
        'addSortDescending': 'Voeg aflopende sortering toe',
        'toggleSortAscending': 'Sorteer oplopend',
        'toggleSortDescending': 'Sorteer aflopend',
        'sortAscendingShort': 'Oplopend',
        'sortDescendingShort': 'Aflopend',
        'removeSorterShort': 'Verwijder',
        'addSortAscendingShort': '+ Oplopend',
        'addSortDescendingShort': '+ Aflopend'
    },

    Tree: {
        noTreeColumn: 'Om de boomstructuur (tree) eigenschap te kunnen gebruiken zet, tree: true'
    },

    //endregion

    //region Grid

    Grid: {
        featureNotFound: function featureNotFound(data) {
            return 'Eigenschap \'' + data + '\' is niet beschikbaar, controleer of u de optie geimporteerd heeft';
        },
        removeRow: 'Verwijder rij',
        removeRows: 'Verwijder rijen',
        loadMask: 'Laden...',
        loadFailedMessage: 'Laden mislukt.',
        moveColumnLeft: 'Plaats naar het linker kader',
        moveColumnRight: 'Plaats naar het rechter kader'
    },

    //endregion

    //region Widgets

    Field: {
        invalidValue: 'Invalid field value',
        minimumValueViolation: 'Minimum value violation',
        maximumValueViolation: 'Maximum value violation'
    },

    DateField: {
        datePickerFormat: 'd-m-Y',
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
        shortWeek: 'w',
        shortQuarter: 'kw',
        week: 'Week'

        //endregion
    } };

exports.default = locale;

/***/ })

/******/ })["default"];
});