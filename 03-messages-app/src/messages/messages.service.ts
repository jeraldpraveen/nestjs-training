import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(
    public messagesRepo: MessagesRepository,
    public messagesRepo2: MessagesRepository,
    public messagesRepo3: MessagesRepository,
  ) {
    console.log(messagesRepo === messagesRepo2);
    console.log(messagesRepo2 === messagesRepo3);
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
