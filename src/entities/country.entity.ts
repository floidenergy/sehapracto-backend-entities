import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseEntity } from "./baseEntity.entity";

@Entity("countries")
export class Country extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  name_ar: string;

  @Column({ unique: true })
  tel_code: string;

  @Column()
  customer_support: string;

  @Column()
  currency: string;

  @Column()
  currency_vs_dollar: string;

  @Column()
  timezone: string;

  @Column()
  flag_icon: string;

  @Column({ default: false })
  is_active: boolean;
}
