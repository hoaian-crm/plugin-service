import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plugin } from './plugin.entity';
import { DataSource, Repository } from 'typeorm';
import { CreatePluginDto } from './dto/create';
import { PermissionService } from '../permission/permission.serivce';
import { FindPluginDto } from './dto/find';
import { EnablePluginDto } from './dto/enable';

@Injectable()
export class PluginService {
  constructor(
    @InjectRepository(Plugin) private pluginRepository: Repository<Plugin>,
    private permissionService: PermissionService,
    private dataSource: DataSource,
  ) {}

  async create(data: CreatePluginDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const permissions = await this.permissionService.create(data.permissions);

      await queryRunner.manager.save(permissions);
      const plugin = await this.pluginRepository.create({
        ...data,
        permissions,
      });
      await queryRunner.manager.save(plugin);

      await queryRunner.commitTransaction();
      return plugin;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  find(query: FindPluginDto) {
    return this.pluginRepository.findAndCount({
      relations: ['permissions'],
      where: { enable: true },
      skip: query.offset,
      take: query.limit,
    });
  }

  async enable(data: EnablePluginDto) {
    const plugin = await this.pluginRepository.findOne({
      where: {
        name: data.name,
      },
    });
    plugin.config = data.config;
    return await this.pluginRepository.save(plugin);
  }

  patch() {}

  delete() {}
}
