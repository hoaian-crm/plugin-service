import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';
import { Permission } from 'src/modules/permission/permission.entity';

export class CreatePluginDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  infrastructure: string;

  @IsString()
  upstream: string;

  @IsArray()
  permissions: Permission[];

  @IsObject()
  config: object;
}
