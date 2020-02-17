"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection(url, port) {
        this._isConnected = true;
        this._url = url;
        this._port = port;
    }
    DatabaseConnection.getInstance = function () {
        if (!DatabaseConnection.instance) {
            this.instance = new DatabaseConnection('db://0.0.0.0', 220);
        }
        return DatabaseConnection.instance;
    };
    return DatabaseConnection;
}());
exports.DatabaseConnection = DatabaseConnection;
