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
import { User } from "./user.entity";

@Entity("patients")
export class Patient {
  @PrimaryGeneratedColumn()
  patientId!: number;

  @CreateDateColumn({ type: "timestamp" })
  readonly patientCreatedAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly patientUpdatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  readonly patientDeletedAt!: Date;

  @Column({ default: 0, unsigned: true })
  balance: number;

  @Column()
  password?: string;

  @Column()
  bloodGroup: string;

  @Column({
    default: true,
  })
  active: boolean;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
