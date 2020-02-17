import { HttpRequest } from './http-request.model';
import { HttpResponse } from './http-response.model';

export interface IRequestHandler {
  next(request: HttpRequest, response: HttpResponse): void;
}