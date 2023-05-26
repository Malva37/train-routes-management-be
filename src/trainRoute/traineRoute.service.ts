import { RouteDto } from './dto/trainRoute.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class TrainRouteService {
  constructor(private prisma: PrismaService) {}

  async getRoutes() {
    const routes = await this.prisma.trainRoute.findMany();
    return routes;
  }

  async addRoute(dto: RouteDto) {
    const route = await this.prisma.trainRoute.create({
      data: {
        numberOfTrain: dto.numberOfTrain,
        fromCity: dto.fromCity,
        toCity: dto.toCity,
        dayOfDispatch: dto.dayOfDispatch,
        startTime: dto.startTime,
        durationInRoute: dto.durationInRoute,
        active: dto.active,
      },
    });
    return route;
  }

  async editRoute(id, dto: RouteDto) {
    return await this.prisma.trainRoute.update({
      where: { id },
      data: dto,
    });
  }

  async deleteRoute(id: string) {
    return await this.prisma.trainRoute.delete({
      where: { id },
    });
  }
}
