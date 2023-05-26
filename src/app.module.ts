import { Module } from '@nestjs/common';
import { TrainRoute } from './trainRoute/trainRoute.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TrainRoute, PrismaModule],
})
export class AppModule {}
