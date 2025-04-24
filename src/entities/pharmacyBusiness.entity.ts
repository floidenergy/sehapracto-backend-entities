import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Pharmacy } from "./pharmacy.entity";
import { Country } from "./country.entity";

@Entity("pharmacy_business")
export class PharmacyBusiness extends BaseEntity {
  // @OneToOne(() => Pharmacy, { onDelete: "CASCADE" })
  // @JoinColumn({ name: "owner_id" })
  // owner: Pharmacy;
  @Column({
    type: "int",
    nullable: false,
  })
  owner: number;

  @Column()
  name: string;

  // @ManyToOne(() => Country, { nullable: false, onDelete: "NO ACTION" })
  // @JoinColumn({ name: "country_id" })
  // country: Country;

  @Column({
    type: "int",
    nullable: false,
    unique: true,
  })
  country: number;

  @Column()
  phone: string;

  @Column()
  email: string;
}
