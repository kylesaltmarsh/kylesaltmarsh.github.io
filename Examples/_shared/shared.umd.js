'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (document.location.protocol === 'file:') {
    alert('ERROR: You must run examples on a webserver (not using the file: protocol)');
}

var hintKey = 'preventhints-' + document.location.href,
    productName = 'scheduler',
    //LEAVE AS IS, DEFAULT PRODUCT NAME
defaultTheme = 'Default',
    browserPaths = ['/examples/', // In our source structure
'/grid/', // On bryntum.com...
'/scheduler/', '/gantt/'];

var Shared = function (_bryntum$scheduler$Lo) {
    _inherits(Shared, _bryntum$scheduler$Lo);

    //region Init

    function Shared() {
        _classCallCheck(this, Shared);

        var _this = _possibleConstructorReturn(this, (Shared.__proto__ || Object.getPrototypeOf(Shared)).call(this));

        var me = _this,
            reset = document.location.href.match(/(\?|&)reset/);

        if (reset) {
            bryntum.scheduler.BrowserHelper.removeLocalStorageItem('exampleLanguage');
            bryntum.scheduler.BrowserHelper.removeLocalStorageItem('exampleTheme');
        }

        me.onResize = me.onResize.bind(me);
        me.destroyTooltips = me.destroyTooltips.bind(me);
        //me.onWindowScroll  = me.onWindowScroll.bind(me);

        me.isBrowser = browserPaths.some(function (path) {
            return document.location.pathname.endsWith(path);
        }) || Boolean(document.location.pathname.match(/examples\/index.*html$/));
        // isBundled does actually mean isBabeled...
        me.isBundled = document.location.pathname.endsWith('bundle.html');
        me.developmentMode = document.location.href.match(/(\?|&)develop/);

        //if (!me.isBrowser) {
        var theme = me.qs('theme', bryntum.scheduler.BrowserHelper.getLocalStorageItem('exampleTheme') || defaultTheme);

        // Apply default theme first time when the page is loading
        me.applyTheme(theme, true);

        // Subscribe on locale update to save it into the localStorage
        me.localeManager.on('locale', function (localeConfig) {
            return bryntum.scheduler.BrowserHelper.setLocalStorageItem('exampleLanguage', localeConfig.locale.localeName);
        });

        // Apply default locale first time when the page is loading
        me.localeManager.applyLocale(bryntum.scheduler.BrowserHelper.getLocalStorageItem('exampleLanguage') || bryntum.scheduler.LocaleManager.locale.localeName, false, true);
        //}

        var overrideData = document.location.href.match(/(?:\?|&)data=([^&]*)/);
        if (overrideData) {
            var parts = overrideData[1].split(',');
            if (parts.length === 1) {
                bryntum.scheduler.DataGenerator.overrideData = parseInt(parts[0]);
            } else {
                bryntum.scheduler.DataGenerator.overrideData = parts.map(function (p) {
                    return parseInt(p);
                });
            }
        }

        //<debug>
        // const positionMode    = me.qs('position', 'translate'),
        //     testPerformance = me.qs('testPerformance'),
        //     rowScrollMode   = me.qs('rowScrollMode', 'move');
        //
        // let defaultConfig = Grid.defaultConfig;
        // Object.defineProperty(Grid, 'defaultConfig', {
        //     get : () => {
        //         return Object.assign(defaultConfig, {
        //             testPerformance : testPerformance,
        //             positionMode    : positionMode,
        //             rowScrollMode   : rowScrollMode,
        //             destroyStore    : true
        //         });
        //     }
        // });
        //</debug>

        me.insertHeader();

        window.addEventListener('resize', me.onResize.bind(me));
        me.onResize();

        me.loadDescription();
        // Don't load hints for the example browser (or if viewing with ?develop)
        if (!me.isBrowser && !me.developmentMode) {
            me.loadHints();
        }

        me.initRootCause();
        me.initAnalytics();
        return _this;
    }

    _createClass(Shared, [{
        key: 'onResize',
        value: function onResize() {
            var container = document.getElementById('container');
            if (document.body.matches('.b-size-phone')) {
                var contentHeight = 667 + 60 + 20;

                if (contentHeight > document.body.offsetHeight) {
                    var scale = document.body.offsetHeight / contentHeight;
                    container.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
                }
            } else {
                container.style.transform = '';
            }
        }

        //endregion

        //region Header with tools

    }, {
        key: 'insertHeader',
        value: function insertHeader() {
            bryntum.scheduler.DomHelper.insertFirst(document.getElementById('container'), {
                tag: 'header',
                className: 'demo-header',
                html: '\n            <div id="title-container">\n                <a id="title" href="' + (this.isBrowser ? '#' : '../') + (!this.isBrowser && this.isBundled ? 'index.umd.html' : '') + '">\n                    ' + document.title.replace(' (umd)', '') + '\n                </a>\n            </div>\n            <div id="tools"></div>\n        '
            });

            var tools = document.getElementById('tools') || document.body;

            if (bryntum.scheduler.Fullscreen.enabled) {
                var fullscreenButton = bryntum.scheduler.WidgetHelper.createWidget({
                    type: 'button',
                    id: 'fullscreen-button',
                    icon: 'b-icon b-icon-fullscreen',
                    tooltip: 'bryntum.scheduler.Fullscreen',
                    toggleable: true,
                    cls: 'b-blue b-raised',
                    appendTo: tools,
                    onToggle: function onToggle(_ref) {
                        var pressed = _ref.pressed;

                        if (pressed) {
                            bryntum.scheduler.Fullscreen.request(document.documentElement);
                        } else {
                            bryntum.scheduler.Fullscreen.exit();
                        }
                    }
                });

                bryntum.scheduler.Fullscreen.onFullscreenChange(function () {
                    fullscreenButton.pressed = bryntum.scheduler.Fullscreen.isFullscreen;
                });
            }

            var button = this.infoButton = bryntum.scheduler.WidgetHelper.createWidget({
                type: 'button',
                id: 'info-button',
                icon: 'b-icon b-icon-info',
                cls: 'b-blue b-raised',
                disabled: true,
                toggleable: true,
                tooltip: {
                    html: 'Click to show info and switch theme or locale',
                    align: 't100-b100'
                },
                preventTooltipOnTouch: true,
                appendTo: tools
            });

            var headerTools = document.getElementById('header-tools');
            if (headerTools) {
                Array.from(headerTools.children).forEach(function (child) {
                    tools.insertBefore(child, button);
                });
                headerTools.remove();
            }
        }

        //endregion

        //region Hints

    }, {
        key: 'initHints',
        value: function initHints() {
            var me = this;

            if (!me.hints || !bryntum.scheduler.WidgetHelper.hasAdapter) return;

            me.toolTips = [];

            var delay = me.hints.delay || 0;

            setTimeout(function () {
                return Object.keys(me.hints).forEach(function (key, i) {
                    if (key) {
                        var target = bryntum.scheduler.DomHelper.down(document.body, key);
                        if (!target) return; //throw new Error(`Hint selector ${key} doesnt' match anything`);
                        setTimeout(function () {
                            if (!me.preventHints) {
                                var hint = me.hints[key];
                                me.toolTips.push(new bryntum.scheduler.Tooltip({
                                    forElement: target,
                                    scrollAction: 'hide',
                                    align: hint.align || 't-b',
                                    html: '<div class="header">' + hint.title + '</div><div class="description">' + hint.content + '</div>',
                                    autoShow: true,
                                    cls: 'b-hint'
                                }));
                            }
                        }, (i + 1) * 500);
                    }
                });
            }, delay);

            // Hide all hints on click anywhere, it also handles touch
            document.body.addEventListener('mousedown', this.destroyTooltips, true);

            //window.addEventListener('scroll', this.onWindowScroll, true);
        }

        // NOTE: this was commented out since it has negative effect on scrolling performance
        // onWindowScroll(e) {
        //     if (!e.target.matches('[class^=b-resize-monitor]')) {
        //         this.destroyTooltips();
        //     }
        // }

    }, {
        key: 'destroyTooltips',
        value: function destroyTooltips() {
            var me = this;

            me.toolTips.forEach(function (tip) {
                return tip.destroy();
            });
            me.toolTips.length = 0;
            me.preventHints = true;

            document.body.removeEventListener('mousedown', me.destroyTooltips, true);
            //window.removeEventListener('scroll', me.onWindowScroll, true);
        }
    }, {
        key: 'loadHints',
        value: function loadHints() {
            var _this2 = this;

            bryntum.scheduler.AjaxHelper.get('meta/hints.json').then(function (request) {
                var response = request.responseText;

                _this2.hints = JSON.parse(response);

                if (Object.keys(_this2.hints).length) _this2.hasHints = true;
                if (!localStorage.getItem(hintKey)) _this2.initHints();
            });
        }

        //endregion

        //region Description

    }, {
        key: 'loadDescription',
        value: function loadDescription() {
            var me = this,
                button = me.infoButton,
                url = me.isBrowser ? '_shared/browser/meta/description.html' : 'meta/description.html';

            bryntum.scheduler.AjaxHelper.get(url).then(function (request) {
                button.disabled = false;

                var locales = [];

                Object.keys(me.localeManager.locales).forEach(function (key) {
                    var locale = me.localeManager.locales[key];
                    locales.push({ value: key, text: locale.desc, data: locale });
                });

                var localeValue = me.localeManager.locale.localeName,
                    storedLocaleValue = bryntum.scheduler.BrowserHelper.getLocalStorageItem('exampleLanguage');

                // check that stored locale is actually available among locales for this demo
                if (storedLocaleValue && locales.some(function (l) {
                    return l.key === storedLocaleValue;
                })) localeValue = storedLocaleValue;

                var popup = button.popup = new bryntum.scheduler.Popup({
                    forElement: button.element,
                    anchor: true,
                    align: 't100-b100',
                    cls: 'info-popup',
                    width: '22em',
                    autoShow: false,
                    widgets: [{
                        type: 'widget',
                        html: request.responseText + (me.hints ? '<br>Click to display hints again.' : '')
                    }, {
                        type: 'combo',
                        id: 'theme-combo',
                        placeholder: 'Select theme',
                        editable: false,
                        value: bryntum.scheduler.StringHelper.capitalizeFirstLetter(bryntum.scheduler.BrowserHelper.getLocalStorageItem('exampleTheme') || defaultTheme),
                        hidden: document.querySelector('link#theme-css') === null,
                        items: [['default', 'Default'], ['light', 'Light'], ['dark', 'Dark'], ['material', 'Material']],
                        onAction: function onAction(_ref2) {
                            var value = _ref2.value;

                            me.applyTheme(value);
                            button.popup.hide();
                        }
                    }, {
                        type: 'combo',
                        id: 'locale-combo',
                        placeholder: 'Select locale',
                        editable: false,
                        items: locales,
                        value: localeValue,
                        onAction: function onAction(_ref3) {
                            var value = _ref3.value;

                            me.localeManager.applyLocale(value);
                            bryntum.scheduler.Toast.show(me.L('Locale changed'));
                            button.popup.hide();
                        }
                    }].concat(me.isBrowser ? [] : [{
                        type: 'combo',
                        id: 'size-combo',
                        placeholder: 'Select size',
                        editable: false,
                        hidden: me.isBrowser || productName === 'scheduler',
                        items: [{ text: 'Full size', value: 'b-size-full' }, { text: 'Phone size', value: 'b-size-phone' }],
                        value: 'Full size',
                        onAction: function onAction(_ref4) {
                            var value = _ref4.value;

                            if (me.curSize) document.body.classList.remove(me.curSize);
                            document.body.classList.add(value);
                            document.body.classList.add('b-change-size');
                            setTimeout(function () {
                                return document.body.classList.remove('b-change-size');
                            }, 400);
                            me.curSize = value;
                            button.popup.hide();
                            // TODO: should remove this at some point
                            window.addEventListener('resize', me.onResize);
                            me.onResize();
                        }
                    }, {
                        type: 'button',
                        id: 'hintButton',
                        text: 'Display hints',
                        cls: 'b-blue',
                        onAction: function onAction() {
                            button.popup.hide();
                            me.preventHints = false;
                            me.initHints();
                        }
                    }, {
                        type: 'checkbox',
                        id: 'hintCheck',
                        text: 'Automatically',
                        cls: 'b-blue',
                        tooltip: 'Check to automatically display hints when loading the example',
                        checked: !localStorage.getItem(hintKey),
                        onAction: function onAction(_ref5) {
                            var checked = _ref5.checked;

                            if (checked) {
                                localStorage.removeItem(hintKey);
                            } else {
                                localStorage.setItem(hintKey, true);
                            }
                        }
                    }]),
                    onHide: function onHide() {
                        return button.pressed = false;
                    }
                });

                button.onToggle = function (_ref6) {
                    var pressed = _ref6.pressed;

                    if (pressed) {
                        if (!me.isBrowser) {
                            if (!me.hasHints) {
                                popup.widgetMap.hintButton.hide();
                                popup.widgetMap.hintCheck.hide();
                            } else {
                                popup.widgetMap.hintButton.show();
                                popup.widgetMap.hintCheck.show();
                            }
                        }
                        popup.show();
                    } else {
                        popup.hide();
                    }
                };
            });
        }

        //endregion

        //region QueryString

    }, {
        key: 'qs',
        value: function qs(key) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var regexp = new RegExp('(?:\\?|&)' + key + '=([^&]*)'),
                matches = document.location.href.match(regexp);

            if (!matches) return defaultValue;

            return matches[1];
        }

        //endregion

        //region Theme applying

    }, {
        key: 'applyTheme',
        value: function applyTheme(theme) {
            var _this3 = this;

            var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var me = this,
                current = document.querySelector('link#theme-css'),
                link = document.createElement('link');

            // allows us to disable theme selection for demos by not having id theme-css on any link tag
            if (!current) return;

            me.prevTheme = me.theme;
            me.theme = theme;

            if (current.href.includes(theme)) {
                // display after loading theme to not show initial transition from default theme
                document.body.style.visibility = 'visible';
                // do not reapply same theme
                return;
            }

            link.id = 'theme-css';
            link.rel = 'stylesheet';
            var url = ('../build/' + productName + '.' + theme.toLowerCase() + '.css').toLowerCase();

            if (!me.isBrowser) {
                url = '../' + url;
            }

            link.href = url;

            bryntum.scheduler.BrowserHelper.setLocalStorageItem('exampleTheme', theme);

            current && link.addEventListener('load', function () {
                current.remove();
                // display after loading theme to not show initial transition from default theme
                document.body.style.visibility = 'visible';

                if (initial) {
                    setTimeout(function () {
                        document.body.classList.remove('b-notransition');
                    }, 100);
                }

                document.body.classList.add('b-theme-' + theme);
                document.body.classList.remove('b-theme-' + _this3.prevTheme);

                _this3.trigger('theme', { theme: theme, prev: _this3.prevTheme });
                bryntum.scheduler.GlobalEvents.trigger('theme', { theme: theme, prev: _this3.prevTheme });
            });

            // only want to block transition when doing initial apply of theme
            if (initial) {
                document.body.classList.add('b-notransition');
            }

            document.head.insertBefore(link, document.head.firstElementChild);
        }

        //endregion

    }, {
        key: 'initAnalytics',
        value: function initAnalytics() {
            var framed = window.top !== window,
                isExcluded = location.href.includes('csp'),
                isOnline = location.href.includes('bryntum.com');

            if (isOnline && !isExcluded && !framed) {
                // Analytics
                window._gaq = window._gaq || [];
                window._gaq.push(['_setAccount', 'UA-11046863-1']);
                window._gaq.push(['_setDomainName', 'none']);
                window._gaq.push(['_setAllowLinker', true]);
                window._gaq.push(['_trackPageview']);

                var ga = document.createElement('script'),
                    s = document.getElementsByTagName('script')[0];

                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = (document.location.protocol === 'https:' ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                s.parentNode.insertBefore(ga, s);
                // EOF analytics
            }
        }

        // region RootCause

    }, {
        key: 'initRootCause',
        value: function initRootCause() {
            var isOnline = location.href.includes('bryntum.com'),
                isExcluded = location.href.includes('csp'),
                isRootCauseReplay = function () {
                try {
                    // eslint-disable-next-line no-unused-vars
                    var a = window.top.location.href;
                } catch (e) {
                    return true;
                }
                return false;
            }();

            if ((isOnline || isRootCauseReplay) && !isExcluded) {
                var script = document.createElement('script');

                script.async = true;
                script.crossOrigin = 'anonymous';
                script.src = 'https://app.therootcause.io/rootcause-full.js';
                script.addEventListener('load', this.startRootCause);

                document.head.appendChild(script);
            }
        }
    }, {
        key: 'startRootCause',
        value: function startRootCause() {
            var appIds = {
                grid: '9ea6c8f84f179d4c4b7be11ff217bc29367357f8',
                scheduler: '3dcfabf52d4fa704fb95259a317c72a6ce376313',
                gantt: '9df03cbdc00b455de8bfe58d831e6fd76cc8881e'
            },
                suiteRe = /\/examples\/([a-z]+)-latest\/examples/,
                isOnline = location.href.includes('bryntum.com'),
                // TODO update when we know what the URL will look like online
            product = location.href.match(suiteRe) && location.href.match(suiteRe)[1] || 'grid',
                appId = appIds[product] || 'unknown',
                version = bryntum.scheduler.VersionHelper.getVersion(product),
                recordVideo = location.search.includes('video=1');

            if (!window.RC) {
                console.log('RootCause not initialized');
                return;
            }

            // eslint-disable-next-line no-undef
            window.logger = new RC.Logger({
                captureScreenshot: true,
                recordUserActions: true,
                logAjaxRequests: true,
                applicationId: appId,
                maxNbrLogs: isOnline ? 1 : 0,
                autoStart: isOnline,
                treatFailedAjaxAsError: true,
                // enableArgumentsCapturing        : true,
                treatResourceLoadFailureAsError: true,
                showFeedbackButton: isOnline,
                recordSessionVideo: recordVideo,
                showIconWhileRecording: {
                    tooltip: 'NOTE: This session is being recorded for debugging purposes'
                },
                recorderConfig: {
                    shouldIgnoreDomElementId: function shouldIgnoreDomElementId(id) {
                        return (/^b-/.test(id)
                        );
                    }
                },
                version: version,
                ignoreErrorMessageRe: /Unexpected token var/i,
                ignoreFileRe: /ga\.js/
            });
        }

        // endregion

    }]);

    return Shared;
}(bryntum.scheduler.Localizable(bryntum.scheduler.Events()));

//<debug>
// lazy debugging


setTimeout(function () {
    window.grid = bryntum.query('grid');
    window.scheduler = bryntum.query('scheduler');
    window.gantt = bryntum.query('gantt');
}, 100);
//</debug>

var shared = new Shared();

// ugly, but needed for bundled demo browser to work
window.shared = shared;

//export default shared;