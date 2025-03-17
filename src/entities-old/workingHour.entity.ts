import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity'; // Assuming there's a Doctor entity

@Entity('working_hours')
export class WorkingHour {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @Column({ type: 'varchar' })
  start: string;

  @Column({ type: 'varchar' })
  end: string;

  @Column({ type: 'varchar' })
  day_time: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
