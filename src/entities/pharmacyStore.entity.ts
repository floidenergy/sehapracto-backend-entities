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
  pharmacy_business: Pharmacy;

  @Column({
    nullable: true,
  })
  profile_img: string;

  @Column({
    nullable: true,
  })
  cover_img: string;

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
