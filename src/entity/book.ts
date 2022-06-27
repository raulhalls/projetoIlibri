import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn,} from "typeorm";

@Entity ()
export class book{

    //criar chave primaria com auto_increment ela é rapassada para o ID
    @PrimaryGeneratedColumn()
    id: number 
    
    //a partir daqui criasse os campos da table
    //sempre usar @Column()
    @Column()
    name: string

    @Column()
    actor: string

    @Column()
    publishDate: Date

    @Column()
    updateDate: Date

    @Column()
    createDate: Date

    
}
