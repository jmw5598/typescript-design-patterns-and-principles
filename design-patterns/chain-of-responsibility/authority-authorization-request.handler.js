"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorityAuthorizationRequestHandler = /** @class */ (function () {
    function AuthorityAuthorizationRequestHandler(handler) {
        this._handler = handler;
    }
    AuthorityAuthorizationRequestHandler.prototype.next = function (request, response) {
        console.log('Authority authorization request handler called');
        if (this._handler)
            this._handler.next(request, response);
        else
            console.log('Chain complete!');
    };
    return AuthorityAuthorizationRequestHandler;
}());
exports.AuthorityAuthorizationRequestHandler = AuthorityAuthorizationRequestHandler;
