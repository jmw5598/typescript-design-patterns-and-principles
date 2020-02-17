import { IEventManager } from './event-manager.interface';
import { IEventListener } from './event-listener.interface';
import { EventType } from './event-type.enum';

export class EventManager implements IEventManager {
  private _listeners: { [key: string]: IEventListener[] };

  constructor() {
    this._listeners = {};
  }

  public subscribe(type: EventType, listener: IEventListener): void {
    if (!this._listeners.hasOwnProperty(type)) {
      this._listeners[type] = [];
    }

    this._listeners[type].push(listener);
  }

  public unsubscribe(type: EventType, listener: IEventListener): void {

  }

  public notify(type: EventType, data: any): void {
    if (!this._listeners.hasOwnProperty(type)) {
      this._listeners[type] = [];
    }

    this._listeners[type].forEach((e: IEventListener) => e.next(data));
  }
}