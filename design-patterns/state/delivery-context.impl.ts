import { IPackageState } from './package-state.interface';
export class DeliveryContext {
  private _currentState: IPackageState;
  private _packageId: string

  constructor(currentState: IPackageState, packageId: string) {
    this._currentState = currentState;
    this._packageId = packageId;
  }

  public setCurrentState(state: IPackageState): void {
    this._currentState = state;
  }

  public update(): void {
    this._currentState.updateState(this);
  }
}