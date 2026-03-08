import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBiodataTable1753532929083 implements MigrationInterface {
    name = 'CreateBiodataTable1753532929083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "biodata" (
                "user_pin" character varying NOT NULL,
                "type" integer NOT NULL,
                "number" integer NOT NULL,
                "template" text NOT NULL,
                "size" integer NOT NULL,
                "major_version" integer NOT NULL,
                "minor_version" integer NOT NULL,
                "device_id" uuid,
                CONSTRAINT "PK_d633506f275aad59266dc9915b9" PRIMARY KEY ("user_pin", "type", "number")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "biodata"
            ADD CONSTRAINT "FK_e9ebb98b2adc51f324c7e863362" FOREIGN KEY ("user_pin") REFERENCES "user"("pin") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "biodata"
            ADD CONSTRAINT "FK_f80c4099ffd9bd4e42bd7d8f9e4" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "biodata" DROP CONSTRAINT "FK_f80c4099ffd9bd4e42bd7d8f9e4"
        `);
        await queryRunner.query(`
            ALTER TABLE "biodata" DROP CONSTRAINT "FK_e9ebb98b2adc51f324c7e863362"
        `);
        await queryRunner.query(`
            DROP TABLE "biodata"
        `);
    }

}
