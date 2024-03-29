
import "reflect-metadata"
import * as express from 'express';
import * as bodyParser from "body-parser";
import { AppDataSource } from "./ormConfig";

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

    const app: express.Application = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false  }));
    
    //app.use('/welcome', WelcomeController);
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Listening at http://localhost: ${port} /`);
    });

