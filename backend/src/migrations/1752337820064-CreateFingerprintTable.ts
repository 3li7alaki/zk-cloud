import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFingerprintTable1752337820064 implements MigrationInterface {
    name = 'CreateFingerprintTable1752337820064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "fingerprint" (
                "user_pin" character varying NOT NULL,
                "finger" integer NOT NULL,
                "template" character varying NOT NULL,
                "size" integer NOT NULL,
                "device_id" uuid,
                CONSTRAINT "PK_fingerprint" PRIMARY KEY ("user_pin", "finger"),
                CONSTRAINT "FK_fingerprint_user_pin" FOREIGN KEY ("user_pin") REFERENCES "user"("pin") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_fingerprint_device_id" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "fingerprint"
        `);
    }
}