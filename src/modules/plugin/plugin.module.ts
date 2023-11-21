import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plugin } from './plugin.entity';
import { PluginService } from './plugin.service';
import { PluginController } from './plugin.controller';
import { PermissionModule } from '../permission/permission.module';

@Module({
  imports: [TypeOrmModule.forFeature([Plugin]), PermissionModule],
  providers: [PluginService],
  exports: [PluginService],
  controllers: [PluginController],
})
export class PluginModule {}
