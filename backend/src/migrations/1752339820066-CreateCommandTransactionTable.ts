import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommandTransactionTable1752339820066 implements MigrationInterface {
    name = 'CreateCommandTransactionTable1752339820066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "command_transaction" (
                "id" uuid NOT NULL,
                "user_pin" character varying NOT NULL,
                "time" TIMESTAMP NOT NULL,
                "command_id" integer NOT NULL,
                CONSTRAINT "PK_command_transaction_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_command_transaction_command_id" ON "command_transaction" ("command_id")
        `);
        await queryRunner.query(`
            ALTER TABLE "command_transaction"
            ADD CONSTRAINT "FK_command_transaction_command_id" FOREIGN KEY ("command_id") REFERENCES "command"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "command_transaction" DROP CONSTRAINT "FK_command_transaction_command_id"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_command_transaction_command_id"
        `);
        await queryRunner.query(`
            DROP TABLE "command_transaction"
        `);
    }
}