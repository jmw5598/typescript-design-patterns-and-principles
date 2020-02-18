import { DeliveryContext } from './delivery-context.impl';

export interface IPackageState {
  updateState(context: DeliveryContext): void;
}