import { DeliveryContext } from './delivery-context.impl';
import { IPackageState } from './package-state.interface';
import { InTransitionState } from './in-transition-state.impl';

export class ShippedState implements IPackageState {
  private static instance: ShippedState;

  constructor() {}

  public updateState(context: DeliveryContext): void {
    console.log('Package is shipped');
    context.setCurrentState(InTransitionState.getInstance());
  }

  public static getInstance(): ShippedState {
    if (!ShippedState.instance) {
      ShippedState.instance = new ShippedState();
    }

    return ShippedState.instance;
  }
}