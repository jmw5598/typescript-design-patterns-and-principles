"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoleAuthorizationRequestHandler = /** @class */ (function () {
    function RoleAuthorizationRequestHandler(handler) {
        this._handler = handler;
    }
    RoleAuthorizationRequestHandler.prototype.next = function (request, response) {
        console.log('Role authorization request handler called');
        if (this._handler)
            this._handler.next(request, response);
        else
            console.log('Chain complete!');
    };
    return RoleAuthorizationRequestHandler;
}());
exports.RoleAuthorizationRequestHandler = RoleAuthorizationRequestHandler;
