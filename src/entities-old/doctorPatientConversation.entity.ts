import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { User } from './client.entity';
import { DoctorPatientMessage } from './doctorPatientMessage.entity';

@Entity('doctor_patient_conversations')
export class DoctorPatientConversation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => DoctorPatientMessage, (message) => message.doctorPatientConversation)
  messages: DoctorPatientMessage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
