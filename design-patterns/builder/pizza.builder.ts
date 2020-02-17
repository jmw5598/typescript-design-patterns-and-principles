import { IPizzaBuilder } from "./pizza-builder.interface";
import { Crust, Topping, Sauce } from './pizza-ingredients.enum';
import { Pizza } from "./pizza.model";

export class PizzaBuilder implements IPizzaBuilder {
  private _crust: Crust;
  private _sauce: Sauce;
  private _toppings: Topping[];
  
  constructor() {
    this._crust = Crust.DEEP_DISH;
    this._sauce = Sauce.REGULAR;
    this._toppings = [];
  }

  public withCrust(crust: Crust): IPizzaBuilder {
    this._crust = crust;
    return this;
  }

  public withSauce(sauce: Sauce): IPizzaBuilder {
    this._sauce = sauce;
    return this;
  }

  public withTopping(topping: Topping): IPizzaBuilder {
    this._toppings.push(topping);
    return this;
  }

  public build(): Pizza {
    return new Pizza(this._crust, this._sauce, this._toppings);
  }
}