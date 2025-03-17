import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity('medical_degrees')
export class MedicalDegree {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  img: string;

  @Column({ type: 'varchar' })
  degree_date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
