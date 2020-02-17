"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza = /** @class */ (function () {
    function Pizza(crust, sauce, toppings) {
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
    }
    Pizza.prototype.toString = function () {
        var str = "Pizza has...\n" + this.crust + ", " + this.sauce;
        this.toppings.forEach(function (t) { return str += "," + t; });
        return str;
    };
    return Pizza;
}());
exports.Pizza = Pizza;
