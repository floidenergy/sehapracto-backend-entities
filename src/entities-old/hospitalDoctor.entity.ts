import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Hospital } from './hospital.entity';
import { HospitalDepartment } from './hospitalDepartment.entity';

@Entity('hospital_doctors')
export class HospitalDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  doctor: Doctor;

  @ManyToOne(() => Hospital, { nullable: false, onDelete: 'CASCADE' })
  hospital: Hospital;

  @ManyToOne(() => HospitalDepartment, { nullable: false, onDelete: 'CASCADE' })
  hospitalDepartment: HospitalDepartment;

  @Column({ default: false })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
