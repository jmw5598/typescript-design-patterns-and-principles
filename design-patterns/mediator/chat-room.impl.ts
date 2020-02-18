import { User } from './user.model';
import { IChatRoom } from './chat-room.interface';

export class ChatRoom implements IChatRoom {
  private _users: User[];

  constructor() {
    this._users = [];
  }

  public sendMessage(message: string, userId: string): void {
    const foundUser: User | undefined = this._users.find(e => e.id === userId);
    if (foundUser) {
      foundUser.receive(message);
    } else {
      console.log(`User with id ${userId} was not found`);
    }
  }

  public addUser(user: User): void {
    const foundUser: User | undefined = this._users.find(e => e.id === user.id);
    if (!foundUser) {
      this._users.push(user);
    } else {
      console.log('User already exists');
    }
  }
}