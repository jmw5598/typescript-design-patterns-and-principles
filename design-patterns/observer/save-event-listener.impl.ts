import { IEventListener } from './event-listener.interface';

export class SaveEventListener implements IEventListener {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public next(data: any): void {
    console.log("Saving " + this._name + " doc with...");
    console.log(data);
  }
}