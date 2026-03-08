import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeviceTable1752087635801 implements MigrationInterface {
    name = 'CreateDeviceTable1752087635801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "device" (
                "id" uuid NOT NULL,
                "serial_number" character varying NOT NULL,
                "name" character varying NOT NULL,
                "model" character varying,
                "push_version" character varying,
                "fingerprint_version" integer DEFAULT '10',
                "face_version" integer DEFAULT '0',
                "palm_version" integer DEFAULT '0',
                "online" boolean NOT NULL DEFAULT false,
                "last_heartbeat" TIMESTAMP,
                "heartbeat" integer NOT NULL DEFAULT '10',
                "time_zone" integer NOT NULL DEFAULT '3',
                "ip_address" character varying,
                "language" integer NOT NULL DEFAULT '69',
                "user_count" integer NOT NULL DEFAULT '0',
                "fingerprint_count" integer NOT NULL DEFAULT '0',
                "transaction_count" integer NOT NULL DEFAULT '0',
                "stamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "op_stamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT "UQ_device_serial_number" UNIQUE ("serial_number"),
                CONSTRAINT "PK_device_id" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "device"
        `);
    }

}
