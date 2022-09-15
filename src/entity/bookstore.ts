import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { adress } from "./adress";
import { book } from "./book"

@Entity()

export class bookstore{

    @PrimaryGeneratedColumn()
    bookstoreId: number

    @Column()
    bookstoreName: string

    @Column()
    bookName: string

    @Column()
    cep: number

    @OneToMany(() => book, (book) => book.name)
    Book: book[];

    @OneToMany(() => adress, (adress) => adress.CEP)
    adress: adress[];


}