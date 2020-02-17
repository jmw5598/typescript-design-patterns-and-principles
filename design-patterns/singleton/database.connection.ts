export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private _isConnected: boolean;
  private _url: string;
  private _port: number;

  private constructor(url: string, port: number) {
    this._isConnected = true;
    this._url = url;
    this._port = port;
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      this.instance = new DatabaseConnection('db://0.0.0.0', 220);
    }

    return DatabaseConnection.instance;
  }
}