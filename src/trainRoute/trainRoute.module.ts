import { TrainRouteController } from './trainRoute.controller';
import { Module } from '@nestjs/common';
import { TrainRouteService } from './traineRoute.service';

@Module({
  controllers: [TrainRouteController],
  providers: [TrainRouteService],
})
export class TrainRoute {}
