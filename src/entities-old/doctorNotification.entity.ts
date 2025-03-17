import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity('doctor_notifications')
export class DoctorNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  doctor: Doctor;

  @Column()
  title: string;

  @Column()
  titleAr: string;

  @Column()
  context: string;

  @Column()
  contextAr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
