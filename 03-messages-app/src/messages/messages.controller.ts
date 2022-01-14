// Created by command[[[[nest generate controller messages/messages --flat]]]]
import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'All';
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {
    return 'single';
  }
}
