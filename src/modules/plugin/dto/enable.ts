import { IsObject, IsString } from 'class-validator';

export class EnablePluginDto {
  @IsString()
  name: string;

  @IsObject()
  config: object;
}
