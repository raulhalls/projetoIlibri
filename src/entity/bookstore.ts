import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { book } from "./book"

@Entity()

export class bookstore{

    @PrimaryGeneratedColumn()
    bookstoreId: number

    @Column()
    bookstoreName: string

    @Column()
    bookName: string
    

}