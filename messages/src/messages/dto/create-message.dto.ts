/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({ message: 'invalid input' })
  content: string;
}
