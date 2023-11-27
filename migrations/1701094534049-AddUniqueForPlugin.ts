import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUniqueForPlugin1701094534049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table plugins add constraint constraintname unique (name)
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
