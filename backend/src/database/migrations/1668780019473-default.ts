import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668780019473 implements MigrationInterface {
    name = 'default1668780019473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "debited_account_id" uuid, "credited_account_id" uuid, CONSTRAINT "PK_7761bf9766670b894ff2fdb3700" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_name" text NOT NULL, "password" text NOT NULL, "account_id" uuid, CONSTRAINT "UQ_325d151f1b865975f2d6e31e7f9" UNIQUE ("user_name"), CONSTRAINT "UQ_d95befcea439149f6d404f01a0a" UNIQUE ("user_name", "password"), CONSTRAINT "REL_8d8ce03c89dafd9495be1956bb" UNIQUE ("account_id"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "balance" numeric NOT NULL DEFAULT '100', "agency" text NOT NULL DEFAULT '001', "number" text NOT NULL, CONSTRAINT "UQ_6d8a4bb2d4cff6db77e1a231269" UNIQUE ("number"), CONSTRAINT "PK_215996d902f717c5a3a0b54194e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_8a20153ccef6c449fa8000f319e" FOREIGN KEY ("debited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0" FOREIGN KEY ("credited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7" FOREIGN KEY ("account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_8a20153ccef6c449fa8000f319e"`);
        await queryRunner.query(`DROP TABLE "Accounts"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Transactions"`);
    }

}
