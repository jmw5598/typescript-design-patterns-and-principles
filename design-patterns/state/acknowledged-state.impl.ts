import { DeliveryContext } from './delivery-context.impl';
import { IPackageState } from './package-state.interface';
import { ShippedState } from './shipped-state.impl';

export class AcknowledgedState implements IPackageState {
  private static instance: AcknowledgedState;

  constructor() {}

  public updateState(context: DeliveryContext): void {
    console.log('Package is acknowledged');
    context.setCurrentState(ShippedState.getInstance());
  }

  public static getInstance(): AcknowledgedState {
    if (!AcknowledgedState.instance) {
      AcknowledgedState.instance = new AcknowledgedState();
    }

    return AcknowledgedState.instance;
  }
}