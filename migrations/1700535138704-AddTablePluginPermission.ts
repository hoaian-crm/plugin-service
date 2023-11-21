import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTablePluginPermission1700535138704
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists plugin_permission (
            plugin_id int references plugins (id) on update cascade on delete cascade,
            permission_id int references permissions (id) on update cascade on delete cascade,
            constraint plugin_permission_pkey primary key (plugin_id, permission_id)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        drop table plugin_permission
    `);
  }
}
