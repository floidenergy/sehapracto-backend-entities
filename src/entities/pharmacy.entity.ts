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

@Entity("pharmacies")
export class Pharmacy extends Profile {
  @PrimaryGeneratedColumn()
  readonly pharmacyId!: number;

  @CreateDateColumn({ type: "timestamp" })
  readonly pharmacyCreatedAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  readonly pharmacyUpdatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  readonly pharmacyDeletedAt?: Date;
}
