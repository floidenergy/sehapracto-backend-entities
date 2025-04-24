import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Pharmacy } from "./pharmacy.entity";
import { Country } from "./country.entity";

@Entity("pharmacy_business")
export class PharmacyBusiness extends BaseEntity {
  @Column()
  ownerId: number;

  @Column()
  name: string;

  @Column()
  countryId: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: "boolean", default: false })
  verified: boolean;

  @Column({ type: "timestamp", nullable: true })
  verifiedAt: Date;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
