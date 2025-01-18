"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return options.query === event.id;
        }
        else if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
        return false;
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
function drop(event) {
    enrolledEvents.pop();
}
const searchResults = searchEvents({ query: 'art', eventType: '2' });
enroll(searchResults[0]);
console.log(enrolledEvents);
drop(searchResults[0]);
console.log(enrolledEvents);
