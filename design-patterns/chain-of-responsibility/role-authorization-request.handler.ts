import { IRequestHandler } from "./request-handler.interface"
import { HttpRequest } from "./http-request.model";

export class RoleAuthorizationRequestHandler implements IRequestHandler {
  private _handler: IRequestHandler | null;
  
  constructor(handler: IRequestHandler | null) {
    this._handler = handler;
  }

  next(request: HttpRequest, response: HttpRequest) {
    console.log('Role authorization request handler called');
    if (this._handler)
      this._handler.next(request, response);
    else
      console.log('Chain complete!');
  }
}