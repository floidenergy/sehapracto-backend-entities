import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { MedicalSpecialty } from "./medicalSpecialty.entity";

@Entity("doctor_department_services")
export class DoctorDepartmentService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalSpecialty, { nullable: false, onDelete: "CASCADE" })
  medicalSpecialty: MedicalSpecialty;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  nameAr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
