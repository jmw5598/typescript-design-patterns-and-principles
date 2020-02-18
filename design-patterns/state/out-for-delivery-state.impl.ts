import { DeliveryContext } from './delivery-context.impl';
import { IPackageState } from "./package-state.interface";
import { DeliveredState } from './delivered-state.impl';

export class OutForDeliveryState implements IPackageState {
  private static instance: OutForDeliveryState;

  constructor() {}

  public updateState(context: DeliveryContext): void {
    console.log('Package is shipped');
    context.setCurrentState(DeliveredState.getInstance());
  }

  public static getInstance(): OutForDeliveryState {
    if (!OutForDeliveryState.instance) {
      OutForDeliveryState.instance = new OutForDeliveryState();
    }

    return OutForDeliveryState.instance;
  }
}