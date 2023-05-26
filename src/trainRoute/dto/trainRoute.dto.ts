import { IsNotEmpty, IsString } from 'class-validator';

export class RouteDto {
  @IsString()
  @IsNotEmpty()
  numberOfTrain: string;

  @IsNotEmpty()
  @IsString()
  fromCity: string;

  @IsNotEmpty()
  @IsString()
  toCity: string;

  @IsNotEmpty()
  dayOfDispatch: string[];

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  durationInRoute: string;

  @IsNotEmpty()
  active: boolean;

  @IsString()
  addInfo?: string;
}
