//import { AppDataSource } from "../data-source";
//import { book } from "../entity/book";


//const name = new book()
     // name.actor = "andressa symons"
     // name.name = "O caso do assasino"
    

//await AppDataSource.manager.save(name)

//console.log('chegooo');

import "reflect-metadata"
import { DataSource } from "typeorm"
import { adress } from "./entity/adress"
import { book } from "./entity/book"
import { reader } from "./entity/reader"
import express from "express"
import cors from "cors"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [book , reader , adress],
    synchronize: true,
    logging: false,
})


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

    const PORT = process.env.PORT ||  8000
    const HOSTNAME = process.env.HOSTNAME ||"http://localhost/"
    const app = express()
    app.get("/", (req, res) => {
        res.send('Bem-vindo!')
    })
    app.use(cors({
        origin: ["http://localhost:3000/"]
    }))
    app.use((req, res) => {
        res.status(404)
    })
    app.listen(PORT, () => {
        console.log("Servidor rodando com sucesso ${HOSTNAME}:${PORT}")
    })