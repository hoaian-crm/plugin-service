import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnConfigToPlugin1700531709988
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        alter table plugins
        add column config jsonb
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        alter table plugins
        drop column config
    `);
  }
}
