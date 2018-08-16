'use strict';

// eslint-disable-next-line no-unused-vars
var scheduler = new bryntum.scheduler.Scheduler({

    appendTo: 'container',
    minHeight: '20em',

    features: {
        eventDragCreate: false,
        eventResize: false,
        eventTooltip: false,
        eventDrag: {
            constrainDragToResource: true
        }
    },

    columns: [{
        type: 'resourceInfo',
        imagePath: 'Examples/_shared/images/users/',
        text: 'Staff',
        field: 'name',
        width: '13em',
        showEventCount: false,
        showRole: true
    }],

    rowHeight: 65,
    startDate: new Date(2017, 5, 1),
    endDate: new Date(2017, 5, 11),
    viewPreset: 'dayAndWeek',
    eventLayout: 'none',
    managedEventSizing: false,

    crudManager: {
        autoLoad: true,
        transport: {
            load: {
                url: 'data/data.json'
            }
        }
    },

    eventRenderer: function eventRenderer(_ref) {
        var eventRecord = _ref.eventRecord,
            resourceRecord = _ref.resourceRecord,
            tplData = _ref.tplData;

        // Add a custom CSS classes to the template element data by setting a property name
        tplData.cls.milestone = eventRecord.isMilestone;
        tplData.cls.normalEvent = !eventRecord.isMilestone;
        tplData.cls[resourceRecord.id] = 1;

        return eventRecord.title;
    }
});