import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PatientHcpConversation } from "./patientHCPConversation.entity";

@Entity("patient_hcp_messages")
export class PatientHcpMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PatientHcpConversation, {
    nullable: false,
    onDelete: "CASCADE",
  })
  patientHcpConversation: PatientHcpConversation;

  @Column()
  sender: string;

  @Column("text")
  message: string;

  @Column({ default: "txt" })
  msgType: string;

  @Column({ nullable: true })
  fileLink: string;

  @Column({ type: "boolean", default: false })
  isSeen: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
