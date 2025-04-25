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
import { Profile } from "./abstracts/profile.entity";

@Entity("patients")
export class Patient extends Profile {
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
  bloodGroup: string;

  constructor() {
    super();
    this.active = true;
  }
}
