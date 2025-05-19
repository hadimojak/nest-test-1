/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
import { ItemMap } from './types/Messages.type';
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string): Promise<{ message: string; id: number }> {
    return await this.messagesRepo.findOne(id);
  }

  async findAll(): Promise<ItemMap> {
    return await this.messagesRepo.findAll();
  }

  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
