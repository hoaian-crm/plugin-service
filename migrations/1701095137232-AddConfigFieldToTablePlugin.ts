import { MigrationInterface, QueryRunner } from "typeorm"

export class AddConfigFieldToTablePlugin1701095137232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table plugins add column config jsonb
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
