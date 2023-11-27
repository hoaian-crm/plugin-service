import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class FindPluginDto {

  limit: number;
  offset: number;
}