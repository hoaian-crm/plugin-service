import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plugin } from './plugin.entity';
import { DataSource, Repository } from 'typeorm';
import { CreatePluginDto } from './dto/create';
import { PermissionService } from '../permission/permission.serivce';

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

  find() {
    return this.pluginRepository.find({
      relations: ['permissions'],
      where: { enable: true },
    });
  }

  patch() {}

  delete() {}
}
