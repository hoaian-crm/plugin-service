import { Body, Controller, Get, Post } from '@nestjs/common';
import { PluginService } from './plugin.service';
import { CreatePluginDto } from './dto/create';

@Controller('/plugins')
export class PluginController {
  constructor(private pluginService: PluginService) {}

  @Post('/')
  async create(@Body() data: CreatePluginDto) {
    return this.pluginService.create(data);
  }

  @Get('/')
  async find() {
    return this.pluginService.find();
  }
}
