import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("answer_doctors")
export class AnswerDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionDoctorId: number;

  @Column()
  doctorId: number;

  @Column("text")
  content: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
