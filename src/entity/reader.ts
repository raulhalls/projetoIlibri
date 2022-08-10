import { Entity, PrimaryGeneratedColumn, Column, ManyToOne , JoinColumn} from "typeorm";
import { adress } from "./adress";


@Entity()
export class reader{

@PrimaryGeneratedColumn()
id: number

@Column()
name: string

@Column()
mail: string

@Column()
password: number

@Column()
numberPhone: number

@ManyToOne(() => adress, (Adress) => Adress.id)
Adress: adress[];

}