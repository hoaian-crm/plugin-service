import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePermissionForPuginApi1700983556030
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into permissions(id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt")
      values (DEFAULT, 'Create plugin', 'Allow create new plugin', 'plugin:create', '/plugins', 'Plugin', 'POST', DEFAULT, DEFAULT)
    `);
    await queryRunner.query(`
      insert into permissions(id, name, description, policy, resource, upstream, method, "createdAt", "updatedAt")
      values (DEFAULT, 'Get plugin', 'Allow user get all plugin', 'plugin:get_all', '/plugins', 'Plugin', 'GET', DEFAULT, DEFAULT)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      delete from permissions
      where policy in ('plugin:create', 'plugin:get_all')
    `);
  }
}
