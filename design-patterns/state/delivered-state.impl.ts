import { DeliveryContext } from './delivery-context.impl';
import { IPackageState } from './package-state.interface';

export class DeliveredState implements IPackageState {
  private static instance: DeliveredState;

  constructor() {}

  public updateState(context: DeliveryContext): void {
    console.log('Package has been delivered');
  }

  public static getInstance(): DeliveredState {
    if (!DeliveredState.instance) {
      DeliveredState.instance = new DeliveredState();
    }

    return DeliveredState.instance;
  }
}