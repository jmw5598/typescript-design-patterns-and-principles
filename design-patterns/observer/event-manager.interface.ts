import { IEventListener } from './event-listener.interface';
import { EventType } from './event-type.enum';

export interface IEventManager {
  subscribe(type: EventType, listener: IEventListener): void;
  unsubscribe(type: EventType, listener: IEventListener): void;
  notify(type: EventType, data: any): void;
}