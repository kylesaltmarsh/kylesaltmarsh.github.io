'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-new */
// TODO: convert to ES6. Originally wanted to avoid babeling both doing that now anyway so...


var ExamplesApp = function () {
    function ExamplesApp() {
        _classCallCheck(this, ExamplesApp);

        var me = this;

        me.examples = window.examples || [];

        document.body.classList.add(shared.theme);

        shared.on({
            theme: function theme() {
                document.body.classList.remove(shared.prevTheme);
                document.body.classList.add(shared.theme);
                if (me.rendered) me.updateThumbs();
            }
        });

        // Do not display documentation button online, paths will be wrong
        if (!location.host.includes('bryntum.com')) {
            bryntum.scheduler.WidgetHelper.append([{
                type: 'button',
                text: 'Documentation',
                icon: 'fa fa-question',
                cls: 'b-blue b-raised',
                style: 'margin-right: 1em',
                onClick: function onClick() {
                    return document.location = '../docs';
                }
            }], {
                insertFirst: document.getElementById('tools') || document.body,
                cls: 'b-bright'
            });
        }

        if (location.search.match('prerender')) {
            me.embedDescriptions().then(me.render.bind(me));
        } else {
            me.render();
        }
    }

    _createClass(ExamplesApp, [{
        key: 'onCloseClick',
        value: function onCloseClick() {
            document.getElementById('intro').style.maxHeight = '0';
        }
    }, {
        key: 'updateThumbs',
        value: function updateThumbs() {
            // replace thumb from prev theme with thumb from new theme
            Array.from(document.querySelectorAll('.image img')).forEach(function (img) {
                img.src = img.src.replace('.' + shared.prevTheme + '.', ('.' + shared.theme + '.').toLowerCase());
            });
        }
    }, {
        key: 'template',
        value: function template(data) {
            var theme = shared.theme;

            return '\n            ' + data.examples.map(function (example) {
                return '\n                ' + (example.firstInGroup ? '\n                <h2 class="group-header ' + example.group + '">' + example.group + '</h2>\n                <section class="examples">\n                ' : '') + '\n                <a class="example" href="' + example.folder + '" id="' + example.folder + '">\n                    <div class="image">\n                        <img src="' + example.folder + '/meta/thumb.' + theme.toLowerCase() + '.png" alt="' + (example.tooltip || '') + '">\n                        <i class="fa fa-info"></i>\n                    </div>\n                    <label class="title">' + example.title + '</label>\n                </a>\n                ' + (example.lastInGroup ? '</section>' : '') + '\n            ';
            }).join('') + '\n        ';
        }
    }, {
        key: 'render',
        value: function render() {
            var me = this,
                examples = me.examples,
                groupOrder = { 'Basic': 0, 'Intermediate': 1, 'Advanced': 2 },
                examplesThumbsContainerEl = document.getElementById('scroller');

            if (examplesThumbsContainerEl.children.length === 0) {
                examples.sort(function (a, b) {
                    var first = groupOrder[a.group] + a.title.trim(),
                        second = groupOrder[b.group] + b.title.trim();

                    if (first < second) return -1;
                    if (first > second) return 1;

                    return 0;
                });

                var group = '',
                    last = null;
                examples.forEach(function (r) {
                    if (r.group !== group) {
                        group = r.group;
                        r.firstInGroup = true;
                        if (last) last.lastInGroup = true;
                    }
                    last = r;
                });

                examplesThumbsContainerEl.innerHTML = me.template({ examples: examples });
            }

            // A singleton tooltip which displays example info on hover of (i) icons.
            bryntum.scheduler.WidgetHelper.attachTooltip(examplesThumbsContainerEl, {
                forSelector: 'i.fa-info',
                header: true,
                scrollAction: 'realign',
                getHtml: function getHtml(_ref) {
                    var tip = _ref.tip;

                    var activeTarget = tip.activeTarget;

                    if (activeTarget.dataset['tooltip']) {
                        tip.titleElement.innerHTML = activeTarget.dataset['tooltipTitle'];
                        return activeTarget.dataset['tooltip'];
                    }

                    bryntum.scheduler.AjaxHelper.get(activeTarget.closest('a').href + '/meta/description.html').then(function (request) {
                        var response = request.responseText,
                            tooltip = response.match(/<div class="description">[\n\r]*(([\s\S])*)<\/div>/)[1],
                            title = response.match(/<div class="header">[\n\r]*?(([\s\S])*?)(demo)?[\n\r]*?<\/div>/)[1];

                        activeTarget.dataset['tooltipTitle'] = tip.titleElement.innerHTML = title.replace(/[\n\r]/g, '');
                        activeTarget.dataset['tooltip'] = tip.html = tooltip.replace(/[\n\r]/g, '');
                        tip.realign();
                    });
                    return false;
                }
            });

            document.getElementById('intro').style.display = 'block';
            document.getElementById('close-button').addEventListener('click', me.onCloseClick.bind(me));

            var demoDiv = document.getElementById('live-example'),
                widgetConfig = window.introWidget; // taken from `examples/_shared/data/examples.js`

            if (demoDiv && widgetConfig) {
                bryntum.scheduler.WidgetHelper.append(widgetConfig, 'live-example');
            }

            me.rendered = true;
        }
    }, {
        key: 'embedDescriptions',
        value: function embedDescriptions() {
            var _this = this;

            return new Promise(function (resolve) {
                var me = _this,
                    promises = me.examples.map(function (example) {
                    return bryntum.scheduler.AjaxHelper.get(example.folder + '/meta/description.html').then(function (request) {
                        var response = request.responseText;

                        example.tooltip = response.match(/<div class="description">[\n\r]*(([\s\S])*)<\/div>/)[1];
                    });
                });

                Promise.all(promises).then(resolve);
            });
        }
    }]);

    return ExamplesApp;
}();

new ExamplesApp();