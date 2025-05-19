/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MessagesModule } from '../src/messages/messages.module';

describe('MessagesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/messages (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/messages')
      .send({ content: 'hello world' }) // Adjust to match CreateMessageDto
      .expect(201);
  });

  it('/messages (GET)', async () => {
    return await request(app.getHttpServer()).get('/messages').expect(200);
  });

  it('/messages/:id (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/messages/570')
      .expect(200);

    expect(res.body).toEqual({
      id: 570,
      message: 'hello world',
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
