import { RouteDto } from './dto/trainRoute.dto';
import { TrainRouteService } from './traineRoute.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('trainroutes')
export class TrainRouteController {
  constructor(private trainRouteService: TrainRouteService) {}

  @Get('')
  getRoutes() {
    return this.trainRouteService.getRoutes();
  }

  @Post('')
  createRoute(@Body() dto: RouteDto) {
    return this.trainRouteService.addRoute(dto);
  }

  @Put(':id')
  editRoute(@Param('id') id: string, @Body() dto: RouteDto) {
    return this.trainRouteService.editRoute(id, dto);
  }

  @Delete(':id')
  deleteRoute(@Param('id') id: string) {
    return this.trainRouteService.deleteRoute(id);
  }
}
