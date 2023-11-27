import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PluginService } from './plugin.service';
import { CreatePluginDto } from './dto/create';
import { FindPluginDto } from './dto/find';

@Controller('/plugins')
export class PluginController {
  constructor(private pluginService: PluginService) {}

  @Post('/')
  async create(@Body() data: CreatePluginDto) {
    return this.pluginService.create(data);
  }

  @Get('/')
  async find(@Query() query: FindPluginDto) {
    const result = await this.pluginService.find(query);
    return {
      messages: [],
      data: {
        result: result[0],
        total: result[1],
        ...query
      }
    }
  }
}
