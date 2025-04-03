import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./user.entity";

@Entity("patients")
export class Patient {
  @PrimaryGeneratedColumn()
  patient_id!: number;

  @CreateDateColumn({ type: "timestamp" })
  readonly patient_createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly patient_updatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  patient_deletedAt!: Date;

  @Column({ default: 0, unsigned: true })
  balance: number;

  @Column()
  password: string;

  @Column()
  blood_group: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
