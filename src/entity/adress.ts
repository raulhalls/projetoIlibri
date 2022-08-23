import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { reader } from "./reader";
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

}