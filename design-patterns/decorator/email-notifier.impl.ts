import { AbstractNotifierDecorator } from './notifier.decorator';
import { INotifier } from './notifier.interface';

export class EmailNotifier extends AbstractNotifierDecorator {
  constructor(notifier: INotifier | null) {
    super(notifier);
  }

  public send(message: string) {
    console.log('Sending email message with ...', message);
    if (this._notifier) this._notifier.send(message);
  }
}