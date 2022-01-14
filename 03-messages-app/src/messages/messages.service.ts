import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating Its own dependency
    // DON'T DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
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
