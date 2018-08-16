/* eslint-disable no-new */
// TODO: convert to ES6. Originally wanted to avoid babeling both doing that now anyway so...

import shared from '../shared.js';
import AjaxHelper from '../../../lib/Common/helper/AjaxHelper.js';
import WidgetHelper from '../../../lib/Common/helper/WidgetHelper.js';
import '../../../lib/Grid/view/Grid.js';
import '../../../lib/Grid/column/CheckColumn.js';
import '../../../lib/Common/adapter/widget/BryntumWidgetAdapter.js';

class ExamplesApp {
    constructor() {
        const me = this;

        me.examples = window.examples || [];

        document.body.classList.add(shared.theme);

        shared.on({
            theme() {
                document.body.classList.remove(shared.prevTheme);
                document.body.classList.add(shared.theme);
                if (me.rendered) me.updateThumbs();
            }
        });

        // Do not display documentation button online, paths will be wrong
        if (!location.host.includes('bryntum.com')) {
            WidgetHelper.append([
                {
                    type   : 'button',
                    text   : 'Documentation',
                    icon   : 'fa fa-question',
                    cls    : 'b-blue b-raised',
                    style  : 'margin-right: 1em',
                    onClick: () => document.location = '../docs'
                }
            ], {
                insertFirst: document.getElementById('tools') || document.body,
                cls        : 'b-bright'
            });
        }

        if (location.search.match('prerender')) {
            me.embedDescriptions().then(me.render.bind(me));
        }
        else {
            me.render();
        }
    }

    onCloseClick() {
        document.getElementById('intro').style.maxHeight = '0';
    }

    updateThumbs() {
        // replace thumb from prev theme with thumb from new theme
        Array.from(document.querySelectorAll('.image img')).forEach(img => {
            img.src = img.src.replace(`.${shared.prevTheme}.`, `.${shared.theme}.`.toLowerCase());
        });
    }

    template(data) {
        const theme = shared.theme;

        return `
            ${data.examples.map(example => `
                ${example.firstInGroup ? `
                <h2 class="group-header ${example.group}">${example.group}</h2>
                <section class="examples">
                ` : ''}
                <a class="example" href="${example.folder}" id="${example.folder}">
                    <div class="image">
                        <img src="${example.folder}/meta/thumb.${theme.toLowerCase()}.png" alt="${example.tooltip || ''}">
                        <i class="fa fa-info"></i>
                    </div>
                    <label class="title">${example.title}</label>
                </a>
                ${example.lastInGroup ? '</section>' : ''}
            `).join('')}
        `;
    }

    render() {
        const me                        = this,
            examples                  = me.examples,
            groupOrder                = { 'Basic' : 0, 'Intermediate' : 1, 'Advanced' : 2 },
            examplesThumbsContainerEl = document.getElementById('scroller');

        if (examplesThumbsContainerEl.children.length === 0) {
            examples.sort((a, b) => {
                let first  = groupOrder[a.group] + a.title.trim(),
                    second = groupOrder[b.group] + b.title.trim();

                if (first < second) return -1;
                if (first > second) return 1;

                return 0;
            });

            let group = '', last = null;
            examples.forEach(r => {
                if (r.group !== group) {
                    group          = r.group;
                    r.firstInGroup = true;
                    if (last) last.lastInGroup = true;
                }
                last = r;
            });

            examplesThumbsContainerEl.innerHTML = me.template({ examples });
        }

        // A singleton tooltip which displays example info on hover of (i) icons.
        WidgetHelper.attachTooltip(examplesThumbsContainerEl, {
            forSelector  : 'i.fa-info',
            header       : true,
            scrollAction : 'realign',
            getHtml      : ({ tip }) => {
                const activeTarget = tip.activeTarget;

                if (activeTarget.dataset['tooltip']) {
                    tip.titleElement.innerHTML = activeTarget.dataset['tooltipTitle'];
                    return activeTarget.dataset['tooltip'];
                }

                AjaxHelper.get(`${activeTarget.closest('a').href}/meta/description.html`).then(request => {
                    let response = request.responseText,
                        tooltip = response.match(/<div class="description">[\n\r]*(([\s\S])*)<\/div>/)[1],
                        title   = response.match(/<div class="header">[\n\r]*?(([\s\S])*?)(demo)?[\n\r]*?<\/div>/)[1];

                    activeTarget.dataset['tooltipTitle'] = tip.titleElement.innerHTML = title.replace(/[\n\r]/g, '');
                    activeTarget.dataset['tooltip'] = tip.html = tooltip.replace(/[\n\r]/g, '');
                    tip.realign();

                });
                return false;
            }
        });

        document.getElementById('intro').style.display = 'block';
        document.getElementById('close-button').addEventListener('click', me.onCloseClick.bind(me));

        const demoDiv      = document.getElementById('live-example'),
            widgetConfig = window.introWidget; // taken from `examples/_shared/data/examples.js`

        if (demoDiv && widgetConfig) {
            WidgetHelper.append(widgetConfig, 'live-example');
        }

        me.rendered = true;
    }

    embedDescriptions() {
        return new Promise((resolve) => {
            const me       = this,
                promises = me.examples.map(example => {
                    return AjaxHelper.get(example.folder + '/meta/description.html').then(request => {
                        let response = request.responseText;

                        example.tooltip = response.match(/<div class="description">[\n\r]*(([\s\S])*)<\/div>/)[1];
                    });
                });

            Promise.all(promises).then(resolve);
        });
    }
}

new ExamplesApp();
