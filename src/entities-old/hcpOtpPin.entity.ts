import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Doctor } from "./doctor.entity";

@Entity("doctor_otp_pins")
export class DoctorOtpPin {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: "CASCADE" })
  doctor: Doctor;

  @Column({ type: "varchar", length: 10 })
  pin: string;

  @Column({ type: "timestamp" })
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
