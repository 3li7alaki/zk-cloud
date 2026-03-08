import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommandTable1752336820063 implements MigrationInterface {
    name = 'CreateCommandTable1752336820063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "command" (
                "id" SERIAL NOT NULL,
                "command" character varying NOT NULL,
                "response" character varying,
                "return" integer,
                "executed" boolean NOT NULL DEFAULT false,
                "successful" boolean NOT NULL DEFAULT false,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "transferred_at" TIMESTAMP,
                "executed_at" TIMESTAMP,
                "device_id" uuid NOT NULL,
                CONSTRAINT "PK_command_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "command"
            ADD CONSTRAINT "FK_command_device_id" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "command" DROP CONSTRAINT "FK_command_device_id"
        `);
        await queryRunner.query(`
            DROP TABLE "command"
        `);
    }

}
