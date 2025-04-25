import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from '../entities/country.entity';
import { City } from './city.entity';

@Entity('pharmacies')
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, { nullable: false, onDelete: 'CASCADE' })
  country: Country;

  @ManyToOne(() => City, { nullable: true, onDelete: 'SET NULL' })
  city: City;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
