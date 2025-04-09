import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Pharmacy } from "./pharmacy.entity";
import { PharmacyBusiness } from "./pharmacyBusiness.entity";
import { Country } from "./country.entity";

@Entity("pharmacy_store")
export class PharmacyStore extends BaseEntity {
  @OneToOne(() => Pharmacy, { onDelete: "SET NULL" })
  @JoinColumn({ name: "manager_id" })
  manager: Pharmacy;
  @ManyToOne(() => PharmacyBusiness, { onDelete: "SET NULL" })
  @JoinColumn({ name: "pharmacy_business_id" })
  pharmacyBusiness: Pharmacy;

  @Column({
    nullable: true,
  })
  profileImg: string;

  @Column({
    nullable: true,
  })
  coverImg: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Country)
  @JoinColumn({ name: "country_id" })
  country: Country;

  @Column()
  phone: string;

  @Column()
  email: string;
}
