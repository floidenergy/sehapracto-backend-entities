import { Entity, Column, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Attachement } from "./attachements.entity";

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

  // TODO: uncomment this when the adding the attachement
  // @OneToOne(() => Attachement)
  // flagIcon: string;

  @Column({ default: true })
  isActive: boolean;
}
