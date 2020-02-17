"use strict";
exports.__esModule = true;
var pizza_ingredients_enum_1 = require("./pizza-ingredients.enum");
var pizza_model_1 = require("./pizza.model");
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this._crust = pizza_ingredients_enum_1.Crust.DEEP_DISH;
        this._sauce = pizza_ingredients_enum_1.Sauce.REGULAR;
        this._toppings = [];
    }
    PizzaBuilder.prototype.withCrust = function (crust) {
        this._crust = crust;
        return this;
    };
    PizzaBuilder.prototype.withSauce = function (sauce) {
        this._sauce = sauce;
        return this;
    };
    PizzaBuilder.prototype.withTopping = function (topping) {
        this._toppings.push(topping);
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        return new pizza_model_1.Pizza(this._crust, this._sauce, this._toppings);
    };
    return PizzaBuilder;
}());
exports.PizzaBuilder = PizzaBuilder;
