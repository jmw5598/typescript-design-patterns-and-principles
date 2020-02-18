import { DeliveryContext } from './delivery-context.impl';
import { IPackageState } from "./package-state.interface";
import { OutForDeliveryState } from './out-for-delivery-state.impl';

export class InTransitionState implements IPackageState {
  private static instance: InTransitionState;

  constructor() {}

  public updateState(context: DeliveryContext): void {
    console.log('Package is in-transit');
    context.setCurrentState(OutForDeliveryState.getInstance());
  }

  public static getInstance(): InTransitionState {
    if (!InTransitionState.instance) {
      InTransitionState.instance = new InTransitionState();
    }

    return InTransitionState.instance;
  }
}