import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeviceTable1752087635804 implements MigrationInterface {
    name = 'CreateDeviceTable1752087635804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "device" (
                "id" uuid NOT NULL,
                "serial_number" character varying NOT NULL,
                "name" character varying,
                "push_version" character varying,
                "fingerprint_version" integer DEFAULT '10',
                "online" boolean NOT NULL DEFAULT false,
                "last_heartbeat" TIMESTAMP,
                "heartbeat" integer NOT NULL DEFAULT '10',
                "time_zone" integer NOT NULL DEFAULT '3',
                "ip_address" character varying,
                "language" integer NOT NULL DEFAULT '69',
                "user_count" integer NOT NULL DEFAULT '0',
                "fingerprint_count" integer NOT NULL DEFAULT '0',
                "transaction_count" integer NOT NULL DEFAULT '0',
                CONSTRAINT "UQ_c7f756679d925ed3d51af6cb8f2" UNIQUE ("serial_number"),
                CONSTRAINT "PK_2dc10972aa4e27c01378dad2c72" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "device"
        `);
    }

}
