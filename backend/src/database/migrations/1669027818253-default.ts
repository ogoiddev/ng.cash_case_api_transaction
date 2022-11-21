import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669027818253 implements MigrationInterface {
    name = 'default1669027818253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_94eb64fbfa21830e2803ecc1772"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_b2ee401c9d5288def8a87c559a0"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "userName"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "user_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_325d151f1b865975f2d6e31e7f9" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "role" character varying NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_8a20153ccef6c449fa8000f319e"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "debited_account_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "credited_account_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(4) with time zone`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD "balance" integer NOT NULL DEFAULT '10000'`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "UQ_6d8a4bb2d4cff6db77e1a231269"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7"`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "password" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_50ce06438be9837658db7bbfe9a"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_8d8ce03c89dafd9495be1956bb7" UNIQUE ("account_id")`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_8a20153ccef6c449fa8000f319e" FOREIGN KEY ("debited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0" FOREIGN KEY ("credited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7" FOREIGN KEY ("account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_8a20153ccef6c449fa8000f319e"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_8d8ce03c89dafd9495be1956bb7"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_50ce06438be9837658db7bbfe9a" UNIQUE ("password")`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "password" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_8d8ce03c89dafd9495be1956bb7" FOREIGN KEY ("account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "UQ_6d8a4bb2d4cff6db77e1a231269" UNIQUE ("number")`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD "balance" numeric NOT NULL DEFAULT '100'`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "value" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "credited_account_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "debited_account_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_4dc9d31e78c23c591e71a3935e0" FOREIGN KEY ("credited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_8a20153ccef6c449fa8000f319e" FOREIGN KEY ("debited_account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_325d151f1b865975f2d6e31e7f9"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "userName" text`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_b2ee401c9d5288def8a87c559a0" UNIQUE ("userName")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_94eb64fbfa21830e2803ecc1772" UNIQUE ("userName", "password")`);
    }

}
