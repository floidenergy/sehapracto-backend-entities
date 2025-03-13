import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { MedicalSpecialty } from "./medicalSpecialty.entity";

@Entity("medical_subspecialties")
export class MedicalSubspecialty {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalSpecialty, (specialty) => specialty.id, {
    onDelete: "CASCADE",
  })
  medicalSpecialty: MedicalSpecialty;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  name_ar: string;

  @Column({ unique: true })
  name_tr: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
