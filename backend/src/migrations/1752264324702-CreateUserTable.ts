import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1752264324702 implements MigrationInterface {
    name = 'CreateUserTable1752264324702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL,
                "pin" character varying NOT NULL,
                "name" character varying NOT NULL,
                "password" character varying,
                "role" integer NOT NULL,
                "card_number" character varying,
                CONSTRAINT "UQ_user_pin" UNIQUE ("pin"),
                CONSTRAINT "PK_user_id" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
