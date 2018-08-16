// eslint-disable-next-line no-unused-vars
window.examples = [
    { folder : 'angular', group : 'Integration', title : 'Integrate with Angular' },
    { folder : 'animations', group : 'Basic', title : 'Animations' },
    { folder : 'basic', group : 'Basic', title : 'Basic' },
    { folder : '3d-bars', group : 'Intermediate', title : '3D bars (styling)' },
    { folder : 'bigdataset', group : 'Intermediate', title : 'Big data set' },
    { folder : 'configuration', group : 'Basic', title : 'Configuration' },
    { folder : 'customeventstyling', group : 'Basic', title : 'Custom event styling' },
    { folder : 'crudmanager', group : 'Integration', title : 'Backend in PHP + CrudManager' },
    { folder : 'csp', group : 'Integration', title : 'Content-Security-Policy (CSP)' },
    { folder : 'extjsmodern', group : 'Integration', title : 'Integrate with ExtJS Modern' },
    /* <remove-on-trial> */
    { folder : 'esmodule', group : 'Integration', title : 'Include using EcmaScript module' },
    /* </remove-on-trial> */
    { folder : 'eventeditor', group : 'Intermediate', title : 'Event editor' },
    { folder : 'eventstyles', group : 'Basic', title : 'Event styles' },
    { folder : 'fillticks', group : 'Basic', title : 'Fill ticks' },
    { folder : 'filtering', group : 'Basic', title : 'Filtering' },
    { folder : 'dependencies', group : 'Advanced', title : 'Dependencies' },
    { folder : 'dragfromgrid', group : 'Advanced', title : 'Drag drop from a grid' },
    { folder : 'grouping', group : 'Intermediate', title : 'Grouping' },
    { folder : 'groupsummary', group : 'Advanced', title : 'Group summary' },
    { folder : 'histogramsummary', group : 'Advanced', title : 'Summary with histogram' },
    { folder : 'icons', group : 'Intermediate', title : 'Icons' },
    { folder : 'labels', group : 'Intermediate', title : 'Labels' },
    { folder : 'layouts', group : 'Intermediate', title : 'Event layouts' },
    { folder : 'localization', group : 'Intermediate', title : 'Localization' },
    { folder : 'multisummary', group : 'Advanced', title : 'Multi summary' },
    { folder : 'php', group : 'Integration', title : 'Backend in PHP' },
    { folder : 'react', group : 'Integration', title : 'Integrate with React' },
    { folder : 'requirejs', group : 'Integration', title : 'Include using RequireJS' },
    { folder : 'responsive', group : 'Intermediate', title : 'Responsive' },
    { folder : 'rowheight', group : 'Basic', title : 'Row height' },
    { folder : 'scripttag', group : 'Integration', title : 'Include using script tag' },
    { folder : 'scrollto', group : 'Basic', title : 'Scrolling' },
    { folder : 'summary', group : 'Intermediate', title : 'Summary' },
    { folder : 'tasks', group : 'Advanced', title : 'Tasks application demo' },
    { folder : 'theme', group : 'Advanced', title : 'Custom theme' },
    { folder : 'timeresolution', group : 'Basic', title : 'Time resolution' },
    { folder : 'timeranges', group : 'Basic', title : 'Time ranges' },
    { folder : 'tree', group : 'Intermediate', title : 'Tree' },
    { folder : 'undoredo', group : 'Advanced', title : 'Undo/Redo' },
    { folder : 'vue', group : 'Integration', title : 'Integrate with Vue' }
];

/* <remove-on-trial> */
if (window.customElements) {
    window.examples.push({ folder : 'webcomponents', group : 'Integration', title : 'Use as web component (WebKit only)' });
}
/* </remove-on-trial> */

// eslint-disable-next-line no-unused-vars
window.introWidget = {
    type       : 'scheduler',
    minHeight  : 250,
    readOnly   : true,
    startDate  : new Date(2018, 4, 13),
    endDate    : new Date(2018, 4, 27),
    viewPreset : 'weekAndDayLetter',
    rowHeight  : 50,
    columns    : [
        {
            type     : 'template',
            text     : 'Name',
            field    : 'name',
            cellCls  : 'name',
            template : data => `<img src="_shared/images/users/${data.record.name.toLowerCase()}.jpg" /><dl><dt>${data.record.name}</dt><dd>${data.record.events.length} task(s)</dd></dl>`,
            width    : 200
        }
    ],

    resources : [
        { id : 1, name : 'Henrik' },
        { id : 2, name : 'Linda' }
    ],
    events : [
        { resourceId : 1, startDate : new Date(2018, 4, 14), endDate : new Date(2018, 4, 20), name : 'Make coffee' },
        { resourceId : 2, startDate : new Date(2018, 4, 14), endDate : new Date(2018, 4, 17), name : 'Meeting' },
        { resourceId : 2, startDate : new Date(2018, 4, 20), endDate : new Date(2018, 4, 20) }
    ]
};
