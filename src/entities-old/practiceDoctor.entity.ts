import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Practice } from './practice.entity';
import { Doctor } from './doctor.entity';

@Entity('practice_doctors')
export class PracticeDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Practice, (practice) => practice.id, { onDelete: 'CASCADE' })
  practice: Practice;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
