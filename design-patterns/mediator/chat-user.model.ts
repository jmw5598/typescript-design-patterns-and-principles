import { IChatRoom } from './chat-room.interface';
import { User } from './user.model';

export class ChatUser extends User {
  constructor(chatroom: IChatRoom, id: string, name: string) {
    super(chatroom, id, name);
  }

  public send(message: string, userId: string): void {
    this._chatroom.sendMessage(message, userId);
  }

  public receive(message: string) {
    console.log(`${this.name} received message... ${message}`);
  }
}