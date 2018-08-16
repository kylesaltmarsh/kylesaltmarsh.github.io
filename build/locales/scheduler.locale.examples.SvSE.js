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
		define("examples.SvSE", [], factory);
	else if(typeof exports === 'object')
		exports["examples.SvSE"] = factory();
	else
		root["bryntum"] = root["bryntum"] || {}, root["bryntum"]["locales"] = root["bryntum"]["locales"] || {}, root["bryntum"]["locales"]["examples.SvSE"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SvSE = __webpack_require__(1);

var _SvSE2 = _interopRequireDefault(_SvSE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extends locale from grid
//const locale = Object.assign(gridLocale, {
var locale = {

    Dependencies: {
        from: 'Från',
        to: 'Till',
        valid: 'Giltig',
        invalid: 'Ogiltig'
    },

    EventEdit: {
        nameText: 'Namn',
        resourceText: 'Resurs',
        startText: 'Start',
        endText: 'Slut',
        saveText: 'Spara',
        deleteText: 'Ta bort',
        cancelText: 'Avbryt',
        editEvent: 'Redigera bokning'
    },

    Scheduler: {
        deleteEvent: 'Ta bort bokning'
    },

    HeaderContextMenu: {
        pickZoomLevel: 'Välj zoomnivå',
        activeDateRange: 'Aktivt datumintervall',
        startText: 'Start datum',
        endText: 'Slut datum',
        todayText: 'I dag'
    },

    EventFilter: {
        filterEvents: 'Filtrera händelser',
        byName: 'Med namn'
    },

    TimeRanges: {
        showCurrentTimeLine: 'Visa aktuell tidslinje'
    },

    PresetManager: {
        minuteAndHour: {
            topDateFormat: 'ddd, hh/DD'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (var i in _SvSE2.default) {
    locale[i] = _SvSE2.default[i];
}

exports.default = locale;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var locale = {

    localeName: 'SvSE',
    localeDesc: 'Svenska',
    momentLocale: 'sv',

    //region Columns

    TemplateColumn: {
        noTemplate: 'TemplateColumn kräver en template',
        noFunction: 'TemplateColumn.template måste vara en funktion'
    },

    ColumnStore: {
        columnTypeNotFound: function columnTypeNotFound(data) {
            return 'Kolumntypen \'' + data.type + '\' \xE4r inte registrerad';
        }
    },

    //endregion

    //region Mixins

    InstancePlugin: {
        fnMissing: function fnMissing(data) {
            return 'F\xF6rs\xF6ker att l\xE4nka fn ' + data.plugIntoName + '#' + data.fnName + ', men plugin fn ' + data.pluginName + '#' + data.fnName + ' finns inte';
        },
        overrideFnMissing: function overrideFnMissing(data) {
            return 'F\xF6rs\xF6ker att skriva \xF6ver fn ' + data.plugIntoName + '#' + data.fnName + ', men plugin fn ' + data.pluginName + '#' + data.fnName + ' finns inte';
        }
    },

    //endregion

    //region Features

    CellEdit: {
        editCell: 'Redigera cell'
    },

    ColumnPicker: {
        columnsMenu: 'Kolumner',
        hideColumn: 'Dölj kolumn',
        hideColumnShort: 'Dölj',
        Column: 'Kolumn'
    },

    Filter: {
        applyFilter: 'Använd filter',
        editFilter: 'Redigera filter',
        filter: 'Filter',
        on: 'På',
        before: 'Före',
        after: 'Efter',
        equals: 'Lika med',
        lessThan: 'Mindre än',
        moreThan: 'Större än',
        removeFilter: 'Ta bort filter'
    },

    FilterBar: {
        enableFilterBar: 'Visa filterrad',
        disableFilterBar: 'Dölj filterrad'
    },

    Group: {
        groupAscending: 'Gruppera stigande',
        groupDescending: 'Gruppera fallande',
        groupAscendingShort: 'Stigande',
        groupDescendingShort: 'Fallande',
        stopGrouping: 'Sluta gruppera',
        stopGroupingShort: 'Sluta',
        Group: 'Gruppera'
    },

    Search: {
        searchForValue: 'Sök efter värde'
    },

    Sort: {
        sortAscending: 'Sortera stigande',
        sortDescending: 'Sortera fallande',
        multiSort: 'Multisortering',
        addSortAscending: 'Lägg till stigande',
        addSortDescending: 'Lägg till fallande',
        toggleSortAscending: 'Ändra till stigande',
        toggleSortDescending: 'Ändra till fallande',
        removeSorter: 'Ta bort sorterare',
        sortAscendingShort: 'Stigande',
        sortDescendingShort: 'Fallande',
        removeSorterShort: 'Ta bort',
        addSortAscendingShort: '+ Stigande',
        addSortDescendingShort: '+ Fallande',
        Sort: 'Sortera',
        Multisort: 'Multisortera'
    },

    Tree: {
        noTreeColumn: 'För att använda featuren tree måste en kolumn vara konfigurerad med tree: true'
    },

    //endregion

    //region Grid

    Grid: {
        featureNotFound: function featureNotFound(data) {
            return 'Featuren \'' + data + '\' \xE4r inte tillg\xE4nglig, kontrollera att den \xE4r importerad';
        },
        removeRow: 'Ta bort rad',
        removeRows: 'Ta bort rader',
        loadMask: 'Laddar...',
        loadFailedMessage: 'Ett fel har uppstått, vänligen försök igen.',
        moveColumnLeft: 'Flytta till vänstra sektionen',
        moveColumnRight: 'Flytta till högra sektionen'
    },

    //endregion

    //region Widgets

    Field: {
        invalidValue: 'Ogiltigt värde',
        minimumValueViolation: 'För lågt värde',
        maximumValueViolation: 'För högt värde'
    },

    DateField: {
        datePickerFormat: 'Y-m-d',
        invalidDate: 'Ogiltigt datum',
        minimumValueViolation: 'För tidigt datum',
        maximumValueViolation: 'För sent datum'
    },

    TimeField: {
        timePickerFormat: 'H:i',
        timePicker24Hour: false,
        invalidTime: 'Ogiltig tid'
    },

    Tooltip: {
        'Loading...': 'Laddar...'
    },

    //endregion

    //region Others

    DateHelper: {
        shortWeek: 'V',
        shortQuarter: 'q',
        week: 'Vecka'

        //endregion
    } };

exports.default = locale;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(0);

var examplesLocale = {
    extends: 'SvSE',

    Column: {
        'Name': 'Namn',
        'Staff': 'Personal',
        'Machines': 'Maskiner',
        'Type': 'Typ',
        'Task color': 'Uppgiftsfärg',
        'Employment type': 'Anställning',
        'Capacity': 'Kapacitet',
        'Production line': 'Produktionslinje',
        'Company': 'Företag',
        'Start': 'Start',
        'End': 'Slut',
        'Nbr tasks': 'Antal aktiviteter',
        'Unassigned tasks': 'Otilldelade aktiviteter',
        'Duration': 'Längd'
    },

    Shared: {
        'Locale changed': 'Språk ändrat'
    }
};

exports.default = examplesLocale;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.bryntum.locales.moment_sv = {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function ordinal(number) {
        var b = number % 10,
            output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
        return number + output;
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/***/ })

/******/ })["default"];
});