/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  constructor() {}

  async findOne(id: string): Promise<{ content: string; id: number }> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<{ content: string; id: number }[]> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id: id, message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
