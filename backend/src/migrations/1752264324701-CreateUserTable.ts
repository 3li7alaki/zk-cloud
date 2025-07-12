import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1752264324701 implements MigrationInterface {
    name = 'CreateUserTable1752264324701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL,
                "pin" character varying NOT NULL,
                "name" character varying NOT NULL,
                "password" character varying,
                "role" integer NOT NULL,
                "card_number" character varying,
                CONSTRAINT "UQ_798cfeabae6730aaf91c3c04632" UNIQUE ("pin"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
