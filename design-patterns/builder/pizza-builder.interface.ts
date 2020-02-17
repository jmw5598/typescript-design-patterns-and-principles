import { Topping, Crust, Sauce } from './pizza-ingredients.enum';
import { Pizza } from './pizza.model';

export interface IPizzaBuilder {
  withCrust(crust: Crust): IPizzaBuilder;
  withSauce(sauce: Sauce): IPizzaBuilder;
  withTopping(topping: Topping): IPizzaBuilder;
  build(): Pizza;
}