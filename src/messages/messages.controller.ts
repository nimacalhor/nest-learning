import {
  Get,
  Post,
  Body,
  Param,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public service: MessagesService) {}

  @Get()
  messageList() {
    return this.service.findAll();
  }

  @Post()
  newMessage(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }

  @Get('/:messageId')
  async messageDetail(@Param('messageId') mId: string) {
    const message = await this.service.findOne(mId);
    if (!message) throw new NotFoundException('message not found');
    return message;
  }
}
