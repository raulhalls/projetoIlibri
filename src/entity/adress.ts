import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { reader } from "./reader";
import { bookstore } from "./bookstore";

@Entity()

export class adress{

@PrimaryGeneratedColumn()
id: number

@Column()
CEP: string

@Column()
district: string

@Column()
city: string

@Column()
number: number

@Column()
state: string

@OneToMany(() => reader, (Reader) => Reader.name)
Reader: reader[];

@Column()
reader_id: string 

@OneToMany(() => bookstore, (bookstore) => bookstore.bookstoreId)
bookstore: bookstore[];

@Column()
bookstoreid: number

}