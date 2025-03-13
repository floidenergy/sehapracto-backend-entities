import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from './country.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'CASCADE' })
  country: Country;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  name_ar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}