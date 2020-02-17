"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthenticationRequestHandler = /** @class */ (function () {
    function AuthenticationRequestHandler(handler) {
        this._handler = handler;
    }
    AuthenticationRequestHandler.prototype.next = function (request, response) {
        console.log('Authentication request handler called');
        if (this._handler)
            this._handler.next(request, response);
        else
            console.log('Chain complete!');
    };
    return AuthenticationRequestHandler;
}());
exports.AuthenticationRequestHandler = AuthenticationRequestHandler;
