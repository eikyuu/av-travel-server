import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Tours } from './tours.entity';

@Entity('destination')
export class Destination {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    title!: string;

    @Column({type: 'text'})
    description!: string;

    @Column({type: 'varchar', length : 255})
    pays!: string;

    @Column({type: 'varchar', length : 255})
    ville!: string;

    @Column({type: 'text'})
    image!: string;

    @ManyToMany(type => Tours, tours => tours.destinations)
    tours?: Tours[];
}
