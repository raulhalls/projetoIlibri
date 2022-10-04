
import "reflect-metadata"
import { DataSource } from "typeorm"
//import "dotenv"
//require('dotenv');
//require('dotenv').config();
//import env from './env';
import dotenv from 'dotenv'
dotenv.config()



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: process.env.,
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],


})



  