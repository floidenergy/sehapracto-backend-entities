import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from './country.entity';
import { Doctor } from './doctor.entity';

@Entity('practices')
export class Practice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'CASCADE' })
  country: Country;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  img: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
