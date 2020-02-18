import { User } from './user.model';

export interface IChatRoom {
  sendMessage(message: string, userId: string): void;
  addUser(user: User): void;
}
