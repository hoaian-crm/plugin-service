import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePluginTable1700473822354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exits plugins (
            id serial
            name text not null
            description text
            enable boolean default true
            deployment text not null
            service text not null
            upstream text not null
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`plugins`);
  }
}
