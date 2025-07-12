import { DataSource } from "typeorm"

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    username: process.env.POSTGRES_USER || "user",
    password: process.env.POSTGRES_PASSWORD || "password",
    database: process.env.POSTGRES_DB || "zk-cloud",
    entities: [__dirname + "/**/*.entity.{js,ts}"],
    migrations: [__dirname + "/migrations/*.{js,ts}"],
    synchronize: false,
});
    