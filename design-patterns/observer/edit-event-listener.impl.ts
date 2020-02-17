import { IEventListener } from './event-listener.interface';

export class EditEventListener implements IEventListener {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public next(data: any): void {
    console.log("Editing " + this._name + " doc with...");
    console.log(data);
  }
}