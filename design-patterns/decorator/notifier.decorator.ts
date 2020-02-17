import { INotifier } from './notifier.interface';

export abstract class AbstractNotifierDecorator implements INotifier {
  protected _notifier: INotifier | null;

  constructor(notifier: INotifier | null) {
    this._notifier = notifier;
  }

  abstract send(message: string): void;
}