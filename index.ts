import { DatabaseConnection } from './design-patterns/singleton/database.connection';
import { Topping, Crust, Sauce } from './design-patterns/builder/pizza-ingredients.enum';
import { Pizza } from './design-patterns/builder/pizza.model';
import { IPizzaBuilder } from './design-patterns/builder/pizza-builder.interface';
import { PizzaBuilder } from './design-patterns/builder/pizza.builder';
import { CalendarEvent } from './design-patterns/prototype/calendar-event.model';
import { AuthorityAuthorizationRequestHandler } from './design-patterns/chain-of-responsibility/authority-authorization-request.handler';
import { ScopeAuthorizationRequestHandler } from './design-patterns/chain-of-responsibility/scope-authorization-request.handler';
import { RoleAuthorizationRequestHandler } from './design-patterns/chain-of-responsibility/role-authorization-request.handler';
import { AuthenticationRequestHandler } from './design-patterns/chain-of-responsibility/authentication-request.handler';
import { HttpRequest } from './design-patterns/chain-of-responsibility/http-request.model';
import { HttpResponse } from './design-patterns/chain-of-responsibility/http-response.model';
import { SaveEventListener } from './design-patterns/observer/save-event-listener.impl';
import { EventManager } from './design-patterns/observer/event-manager.impl';
import { EventType } from './design-patterns/observer/event-type.enum';
import { EditEventListener } from './design-patterns/observer/edit-event-listener.impl';

console.log('DatbaseConnection (Singleton Pattern)');
console.log('-------------------------------------');

const connection1: DatabaseConnection = DatabaseConnection.getInstance();
const connection2: DatabaseConnection = DatabaseConnection.getInstance();

console.log('Is connection1 the same instance as connection2: ', connection1 === connection2);
console.log('\n');


console.log('Pizza Builder (Builder Pattern)');
console.log('-------------------------------');

const builder: IPizzaBuilder = new PizzaBuilder();
const pizza: Pizza = builder
  .withCrust(Crust.THIN_CRUST)
  .withSauce(Sauce.EXTRA)
  .withTopping(Topping.SAUCE)
  .withTopping(Topping.CHEESE)
  .withTopping(Topping.PEPPERONI)
  .withTopping(Topping.GREEN_PEPPER)
  .withTopping(Topping.OLIVES)
  .build();

console.log(pizza.toString());
console.log('\n');


console.log('CalendarEvent Clone (Prototype Pattern)');

const event1: CalendarEvent = new CalendarEvent({ 
  date: new Date, 
  description: 'testing', 
  isConfirmed: false 
} as CalendarEvent);

const event2: CalendarEvent = event1.clone();
const event3: CalendarEvent = event2;

console.log('Does event1 reference event2 (clone): ' + (event1 === event2));
console.log('Does event2 referrence event3 (non-clone): ' + (event2 === event3));
console.log('\n');

console.log('Request Handler Middleware (Chain of Responsibility)');
console.log('----------------------------------------------------');

const roleAuthorizationRequestHandler = new RoleAuthorizationRequestHandler(null);
const authorityAuthorizationRequestHandler = new AuthorityAuthorizationRequestHandler(roleAuthorizationRequestHandler)
const scopeAuthorizationRequestHandler = new ScopeAuthorizationRequestHandler(authorityAuthorizationRequestHandler)
const authenticationHandler = new AuthenticationRequestHandler(scopeAuthorizationRequestHandler);

const request: HttpRequest = new HttpRequest();
const response: HttpResponse = new HttpResponse();

authenticationHandler.next(request, response);

console.log('\n');

console.log('EventManager/EventListener (Observer Pattern)');
console.log('---------------------------------------------');

const manager = new EventManager();
const save1 = new SaveEventListener('docx');
const save2 = new SaveEventListener('pdf');
const edit1 = new EditEventListener('pdf');
const edit2 = new EditEventListener('docx');

manager.subscribe(EventType.SAVE,save1);
manager.subscribe(EventType.SAVE, save2);
manager.subscribe(EventType.UPDATE, edit1);
manager.subscribe(EventType.UPDATE, edit2);

manager.notify(EventType.SAVE, 'Test saving a document');
manager.notify(EventType.UPDATE, 'Editing a document');
console.log('\n');
