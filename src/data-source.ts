
import "reflect-metadata"
import { DataSource } from "typeorm"
import { book } from "./entity/book"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "raulipad888",
    database: "ilibri",
    synchronize: true,
    logging: false,
    entities: [book],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))