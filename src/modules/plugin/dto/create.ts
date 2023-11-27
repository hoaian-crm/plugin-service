import { IsArray, IsOptional, IsString } from 'class-validator';
import { Permission } from 'src/modules/permission/permission.entity';

export class CreatePluginDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  permissions: Permission[];
}
