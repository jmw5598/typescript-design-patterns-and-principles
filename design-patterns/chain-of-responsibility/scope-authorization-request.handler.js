"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeAuthorizationRequestHandler = /** @class */ (function () {
    function ScopeAuthorizationRequestHandler(handler) {
        this._handler = handler;
    }
    ScopeAuthorizationRequestHandler.prototype.next = function (request, response) {
        console.log('Scope authorization request handler called');
        if (this._handler)
            this._handler.next(request, response);
        else
            console.log('Chain complete!');
    };
    return ScopeAuthorizationRequestHandler;
}());
exports.ScopeAuthorizationRequestHandler = ScopeAuthorizationRequestHandler;
