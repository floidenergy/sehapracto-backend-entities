import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Pharmacy } from "./pharmacy.entity";
import { Country } from "./country.entity";

@Entity("pharmacy_business")
export class PharmacyBusiness extends BaseEntity {
  @OneToOne(() => Pharmacy, { onDelete: "CASCADE" })
  @JoinColumn({ name: "owner_id" })
  owner: Pharmacy;

  @Column()
  name: string;

  @ManyToOne(() => Country, { nullable: false, onDelete: "NO ACTION" })
  @JoinColumn({ name: "country_id" })
  country: Country;

  @Column()
  phone: string;

  @Column()
  email: string;
}
