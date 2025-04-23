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

@Entity("pharmacies")
export class Pharmacy {
  @PrimaryGeneratedColumn()
  pharmacyId!: number;

  @CreateDateColumn({ type: "timestamp" })
  readonly pharmacyCreatedAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly pharmacyUpdatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  readonly pharmacyDeletedAt?: Date;

  @Column()
  password?: string;

  @Column({
    default: true,
  })
  active: boolean;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
