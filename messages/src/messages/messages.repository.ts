/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';
import { Item, ItemMap } from './types/Messages.type';

@Injectable()
export class MessagesRepository {
  constructor() {}

  async findOne(id: string): Promise<{ message: string; id: number }> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages: ItemMap = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<ItemMap> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents) as ItemMap;

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id: id, message } as Item;

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
