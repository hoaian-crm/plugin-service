import { MigrationInterface, QueryRunner } from "typeorm"

export class DropColumnInTablePlugin1701094105442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('plugins', 'upstream')
        await queryRunner.dropColumn('plugins', 'infrastructure')
        await queryRunner.dropColumn('plugins', 'config')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
