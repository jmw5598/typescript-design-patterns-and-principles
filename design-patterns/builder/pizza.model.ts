import { Topping, Crust, Sauce } from './pizza-ingredients.enum';

export class Pizza {
  public crust: Crust;
  public sauce: Sauce;
  public toppings: Topping[];

  constructor(crust: Crust, sauce: Sauce, toppings: Topping[]) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }

  toString(): string {
    let str: string = `Pizza has...\n${this.crust}, ${this.sauce}`;
    this.toppings.forEach(t => str += `,${t}`);
    return str;
  }
}