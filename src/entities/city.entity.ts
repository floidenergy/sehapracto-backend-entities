import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Country } from "./country.entity";
import { BaseEntity } from "./abstracts/baseEntity.entity";

@Entity("cities")
export class City extends BaseEntity {
  @ManyToOne(() => Country, (country) => country.id, { onDelete: "CASCADE" })
  @JoinColumn({ name: "country_id" })
  country: Country;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  nameAr: string;
}
