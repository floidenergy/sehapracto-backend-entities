import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Hospital } from './hospital.entity';

@Entity('doctor_work_locations')
export class DoctorWorkLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  doctor: Doctor;

  @ManyToOne(() => Hospital, { nullable: true, onDelete: 'SET NULL' })
  hospital: Hospital;

  @Column()
  name: string;

  @Column({ nullable: true })
  nameAr: string;

  @Column({ nullable: true })
  nameEn: string;

  @Column({ nullable: true })
  nameTr: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  addressAr: string;

  @Column({ nullable: true })
  addressEn: string;

  @Column({ nullable: true })
  addressTr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
