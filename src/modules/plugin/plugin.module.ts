import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plugin } from './plugin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plugin])],
})
export class PluginModule {}
