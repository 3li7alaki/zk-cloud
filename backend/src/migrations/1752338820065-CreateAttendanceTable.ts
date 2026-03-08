import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAttendanceTable1752338820065 implements MigrationInterface {
    name = 'CreateAttendanceTable1752338820065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "attendance" (
                "id" uuid NOT NULL,
                "user_pin" character varying NOT NULL,
                "time" TIMESTAMP NOT NULL,
                "device_id" uuid NOT NULL,
                CONSTRAINT "PK_attendance_id" PRIMARY KEY ("id"),
                CONSTRAINT "FK_attendance_user_pin" FOREIGN KEY ("user_pin") REFERENCES "user"("pin") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_attendance_device_id" FOREIGN KEY ("device_id") REFERENCES "device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);

        await queryRunner.query(`
            CREATE INDEX "IDX_attendance_user_pin" ON "attendance" ("user_pin")
        `);

        await queryRunner.query(`
            CREATE INDEX "IDX_attendance_device_id" ON "attendance" ("device_id")
        `);

        await queryRunner.query(`
            CREATE INDEX "IDX_attendance_time" ON "attendance" ("time")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "IDX_attendance_time"
        `);

        await queryRunner.query(`
            DROP INDEX "IDX_attendance_device_id"
        `);

        await queryRunner.query(`
            DROP INDEX "IDX_attendance_user_pin"
        `);

        await queryRunner.query(`
            DROP TABLE "attendance"
        `);
    }
}