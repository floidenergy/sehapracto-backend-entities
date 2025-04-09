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
  nameAr: string;

  @Column({ unique: true })
  telCode: string;

  @Column()
  customerSupport: string;

  @Column()
  currency: string;

  @Column()
  currencyVsDollar: string;

  @Column()
  timezone: string;

  @Column()
  flagIcon: string;

  @Column({ default: false })
  isActive: boolean;
}
