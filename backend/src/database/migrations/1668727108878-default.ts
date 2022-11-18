import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668727108878 implements MigrationInterface {
    name = 'default1668727108878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_b2ee401c9d5288def8a87c559a0" UNIQUE ("userName")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_b2ee401c9d5288def8a87c559a0"`);
    }

}
