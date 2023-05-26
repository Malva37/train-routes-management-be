import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://malva37:admin@cluster0.jg3x90t.mongodb.net/trains',
        },
      },
    });
  }
}
