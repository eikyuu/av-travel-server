import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Destination } from './destination.entity';

@Entity('tours')
export class Tours {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    title!: string;

    @Column({type: 'text'})
    description!: string;

    @Column({type: 'integer'})
    numberDays!: number;

    @Column({type: 'integer'})
    price!: number;

    @Column({type: 'text'})
    image!: string;

    @ManyToMany(type => Destination)
    @JoinTable()
    Destinations!: Destination[];

}
