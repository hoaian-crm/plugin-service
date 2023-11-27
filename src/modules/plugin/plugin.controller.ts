import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePluginDto } from './dto/create';
import { FindPluginDto } from './dto/find';
import { PluginService } from './plugin.service';

@Controller('/plugins')
export class PluginController {
  constructor(private pluginService: PluginService) {}

  @Post('/')
  async create(@Body() data: CreatePluginDto) {
    const plugin = await this.pluginService.create(data);
    return {
      messages: [],
      data: {
        result: plugin,
        total: 1,
      },
    };
  }

  @Get('/')
  async find(@Query() query: FindPluginDto) {
    if (!query.limit) query.limit = 10;
    if (!query.offset) query.offset = 0;
    const result = await this.pluginService.find(query);
    return {
      messages: [],
      data: {
        result: result[0],
        total: result[1],
        ...query,
      },
    };
  }
}
