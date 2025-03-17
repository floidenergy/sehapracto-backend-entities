import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { DoctorPatientConversation } from "./doctorPatientConversation.entity";

@Entity("doctor_patient_messages")
export class DoctorPatientMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => DoctorPatientConversation,
    (conversation) => conversation.messages,
    {
      onDelete: "CASCADE",
    }
  )
  doctorPatientConversation: DoctorPatientConversation;

  @Column()
  sender: string;

  @Column("text")
  message: string;

  @Column({ default: "txt" })
  msgType: string;

  @Column({ nullable: true })
  fileLink: string;

  @Column({ default: false })
  isSeen: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
