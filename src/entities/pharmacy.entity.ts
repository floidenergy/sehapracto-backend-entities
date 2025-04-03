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

@Entity("pharmacies")
export class Pharmacy {
  @PrimaryGeneratedColumn()
  pharmacy_id!: number;

  @CreateDateColumn({ type: "timestamp" })
  readonly pharmacy_createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly pharmacy_updatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  pharmacy_deletedAt!: Date;

  @Column()
  password: string;
  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
