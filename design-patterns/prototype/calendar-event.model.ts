import { Cloneable } from './cloneable.interface';

export class CalendarEvent implements Cloneable<CalendarEvent> {
  public date: Date;
  public description: string;
  public isConfirmed: boolean;
  
  constructor(event: CalendarEvent) {
    this.date = new Date(event.date.getTime());
    this.description = event.description;
    this.isConfirmed = event.isConfirmed;
  }

  public clone(): CalendarEvent {
    return new CalendarEvent(this);
  }
}