import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class FindPluginDto {

  @Optional()
  @Transform(() => Number)
  limit: number;

  @Optional()
  @Transform(() => Number)
  offset: number;
}