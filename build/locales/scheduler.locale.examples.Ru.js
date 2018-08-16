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
		define("examples.Ru", [], factory);
	else if(typeof exports === 'object')
		exports["examples.Ru"] = factory();
	else
		root["bryntum"] = root["bryntum"] || {}, root["bryntum"]["locales"] = root["bryntum"]["locales"] || {}, root["bryntum"]["locales"]["examples.Ru"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Ru = __webpack_require__(4);

var _Ru2 = _interopRequireDefault(_Ru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extends locale from grid
//const locale = Object.assign(gridLocale, {
var locale = {

    Dependencies: {
        from: 'От',
        to: 'К',
        valid: 'Верная',
        invalid: 'Неверная'
    },

    EventEdit: {
        nameText: 'Название',
        resourceText: 'Ресурс',
        startText: 'Начало',
        endText: 'Конец',
        saveText: 'Сохранить',
        deleteText: 'Удалить',
        cancelText: 'Отмена',
        editEvent: 'Изменить событие'
    },

    Scheduler: {
        deleteEvent: 'Удалить событие'
    },

    HeaderContextMenu: {
        pickZoomLevel: 'Выберите масштаб',
        activeDateRange: 'Диапазон дат',
        startText: 'Начало',
        endText: 'Конец',
        todayText: 'Сегодня'
    },

    EventFilter: {
        filterEvents: 'Фильтровать задачи',
        byName: 'По имени'
    },

    TimeRanges: {
        showCurrentTimeLine: 'Показать текущую шкалу времени'
    },

    PresetManager: {
        minuteAndHour: {
            topDateFormat: 'ddd DD/MM, HH:mm'
        },
        hourAndDay: {
            topDateFormat: 'ddd DD/MM'
        },
        weekAndDay: {
            displayDateFormat: 'HH:mm'
        }
    }

};

// cannot use Object.assign above in IE11. also dont want to have polyfill in locale
for (var i in _Ru2.default) {
    locale[i] = _Ru2.default[i];
}

exports.default = locale;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(5);

var locale = {

    localeName: 'Ru',
    localeDesc: 'Russian',
    momentLocale: 'ru',

    //region Columns

    TemplateColumn: {
        noTemplate: 'TemplateColumn необходим шаблон',
        noFunction: 'TemplateColumn.template должен быть функцией'
    },

    ColumnStore: {
        columnTypeNotFound: function columnTypeNotFound(data) {
            return '\u0422\u0438\u043F \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \'' + data.type + '\' \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D';
        }
    },

    //endregion

    //region Mixins

    InstancePlugin: {
        fnMissing: function fnMissing(data) {
            return '\u041F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u0441\u0432\u044F\u0437\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 ' + data.plugIntoName + '#' + data.fnName + ', \u043D\u043E \u0432 \u043F\u043B\u0430\u0433\u0438\u043D\u0435 \u043D\u0435 \u0431\u044B\u043B \u043D\u0430\u0439\u0434\u0435\u043D \u043C\u0435\u0442\u043E\u0434 ' + data.pluginName + '#' + data.fnName;
        },
        overrideFnMissing: function overrideFnMissing(data) {
            return '\u041F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u0435\u0442\u043E\u0434 ' + data.plugIntoName + '#' + data.fnName + ', \u043D\u043E \u0432 \u043F\u043B\u0430\u0433\u0438\u043D\u0435 \u043D\u0435 \u0431\u044B\u043B \u043D\u0430\u0439\u0434\u0435\u043D \u043C\u0435\u0442\u043E\u0434 ' + data.pluginName + '#' + data.fnName;
        }
    },

    //endregion

    //region Features

    CellEdit: {},

    ColumnPicker: {
        columnsMenu: 'Колонки',
        hideColumn: 'Спрятать колонку',
        hideColumnShort: 'Спрятать'
    },

    Filter: {
        applyFilter: 'Применить фильтр',
        filter: 'Фильтр',
        editFilter: 'Изменить фильтр',
        on: 'В этот день',
        before: 'До',
        after: 'После',
        equals: 'Равно',
        lessThan: 'Меньше, чем',
        moreThan: 'Больше, чем',
        removeFilter: 'Убрать фильтр'
    },

    FilterBar: {
        enableFilterBar: 'Показать панель фильтров',
        disableFilterBar: 'Спрятать панель фильтров'
    },

    Group: {
        groupAscending: 'Группа по возрастанию',
        groupDescending: 'Группа по убыванию',
        groupAscendingShort: 'Возрастание',
        groupDescendingShort: 'Убывание',
        stopGrouping: 'Убрать группу',
        stopGroupingShort: 'Убрать'
    },

    Search: {
        searchForValue: 'Найти значение'
    },

    Sort: {
        'sortAscending': 'Сортировать по возрастанию',
        'sortDescending': 'Сортировать по убыванию',
        'multiSort': 'Сложная сортировка',
        'removeSorter': 'Убрать сортировку',
        'addSortAscending': 'Добавить сортировку по возрастанию',
        'addSortDescending': 'Добавить сортировку по убыванию',
        'toggleSortAscending': 'Сортировать по возрастанию',
        'toggleSortDescending': 'Сортировать по убыванию',
        'sortAscendingShort': 'Возрастание',
        'sortDescendingShort': 'Убывание',
        'removeSorterShort': 'Убрать',
        'addSortAscendingShort': '+ Возраст...',
        'addSortDescendingShort': '+ Убыв...'

    },

    Tree: {
        noTreeColumn: 'Чтобы использовать дерево необходимо чтобы одна колонка имела настройку tree: true'
    },

    //endregion

    //region Grid

    Grid: {
        featureNotFound: function featureNotFound(data) {
            return '\u041E\u043F\u0446\u0438\u044F \'' + data + '\' \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C \u0447\u0442\u043E \u043E\u043D\u0430 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430';
        },
        removeRow: 'Удалить строку',
        removeRows: 'Удалить строки',
        loadMask: 'Загрузка...',
        loadFailedMessage: 'Не удалось загрузить',
        moveColumnLeft: 'Передвинуть в левую секцию',
        moveColumnRight: 'Передвинуть в правую секцию'
    },

    //endregion

    //region Widgets

    Field: {
        invalidValue: 'Invalid field value',
        minimumValueViolation: 'Minimum value violation',
        maximumValueViolation: 'Maximum value violation'
    },

    DateField: {
        datePickerFormat: 'd/m/Y',
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        'hh': 'час_часа_часов',
        'dd': 'день_дня_дней',
        'MM': 'месяц_месяца_месяцев',
        'yy': 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    } else {
        return number + ' ' + plural(format[key], +number);
    }
}
var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
window.bryntum.locales.moment_ru = {
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,

    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function nextWeek(now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: function lastWeek(now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function isPM(input) {
        return (/^(дня|вечера)$/.test(input)
        );
    },
    meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        } else if (hour < 12) {
            return 'утра';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function ordinal(number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-й';
            case 'D':
                return number + '-го';
            case 'w':
            case 'W':
                return number + '-я';
            default:
                return number;
        }
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(3);

var examplesLocale = {
    extends: 'Ru',

    Column: {
        'Name': 'Имя',
        'Staff': 'Персонал',
        'Machines': 'Машины',
        'Type': 'Тип',
        'Task color': 'Цвет задачи',
        'Employment type': 'Тип занятости',
        'Capacity': 'Вместительность',
        'Production line': 'Производственная линия',
        'Company': 'Компания',
        'Start': 'Начало',
        'End': 'Конец',
        'Role': 'Роль',
        'Id': '№',
        'First name': 'Имя',
        'Surname': 'Фамилия',
        'Score': 'Счет',
        'Rating': 'Рейтинг',
        'Nbr tasks': 'Кол-во задач',
        'Unassigned tasks': 'Неназначенные задачи',
        'Duration': 'Продолжительность'
    },

    Shared: {
        'Locale changed': 'Язык изменен'
    }
};

exports.default = examplesLocale;

/***/ })
/******/ ])["default"];
});