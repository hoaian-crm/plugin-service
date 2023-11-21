import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePluginTable1700473822354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists plugins (
            id serial,
            name text not null,
            description text,
            enable boolean default true,
            infrastructure text not null,
            upstream text not null,
            "createdAt" timestamp not null default NOW(),
            "updatedAt" timestamp not null default NOW(),
            "deletedAt" timestamp,
            primary key (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`plugins`);
  }
}
