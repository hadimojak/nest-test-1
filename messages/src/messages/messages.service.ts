/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string): Promise<{ content: string; id: number }> {
    return await this.messagesRepo.findOne(id);
  }

  async findAll(): Promise<{ content: string; id: number }[]> {
    return await this.messagesRepo.findAll();
  }

  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
