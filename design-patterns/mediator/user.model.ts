import { IChatRoom } from "./chat-room.interface";

export abstract class User {
  protected _chatroom: IChatRoom;
  public id: string;
  public name: string

  constructor(chatroom: IChatRoom, id: string, name: string) {
    this._chatroom = chatroom;
    this.id = id;
    this.name = name;
  }

  public abstract send(message: string, userId: string): void;
  public abstract receive(message: string): void;
}