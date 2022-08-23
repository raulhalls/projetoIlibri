
import "reflect-metadata"
import { DataSource } from "typeorm"
import { adress } from "./entity/adress"
import { book } from "./entity/book"
import { reader } from "./entity/reader"
import * as express from 'express';
import * as bodyParser from "body-parser";
import { author } from "./entity/author"


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [book , reader , adress , author],
    synchronize: true,
    logging: false,
})


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

    const app: express.Application = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    //app.use('/welcome', WelcomeController);
    
    const port = process.env.PORT || 3000;
    
    app.listen(port, () => {
        console.log(`Listening at http://localhost: ${port} /`);
    });

