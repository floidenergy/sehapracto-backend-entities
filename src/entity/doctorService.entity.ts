import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Doctor } from "./doctor.entity";
import { DoctorDepartmentService } from "./doctorDepartmentService.entity";

@Entity("doctor_services")
export class DoctorService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: "CASCADE" })
  doctor: Doctor;

  @ManyToOne(() => DoctorDepartmentService, {
    nullable: false,
    onDelete: "CASCADE",
  })
  doctorDepartmentService: DoctorDepartmentService;

  @Column()
  fee: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
