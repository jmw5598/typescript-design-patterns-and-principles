"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarEvent = /** @class */ (function () {
    function CalendarEvent(event) {
        this.date = new Date(event.date.getTime());
        this.description = event.description;
        this.isConfirmed = event.isConfirmed;
    }
    CalendarEvent.prototype.clone = function () {
        return new CalendarEvent(this);
    };
    return CalendarEvent;
}());
exports.CalendarEvent = CalendarEvent;
