import { Entity, PrimaryGeneratedColumn, Column,} from "typeorm";


@Entity()
export class author {

    @PrimaryGeneratedColumn()
    idAuthor: number 

    @Column()
    name: string

    @Column()
    idTipoLiterario: number
    
    @Column()
    tipoLiterario: string

    @Column()
    document: number

}
