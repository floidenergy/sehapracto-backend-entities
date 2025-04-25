import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Language } from "./language.entity";
import { Doctor } from "./doctor.entity";

@Entity("doctor_languages")
export class DoctorLanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Language, (language) => language.id, { onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => Doctor, (doctor) => doctor.id, { onDelete: "CASCADE" })
  doctor: Doctor;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
