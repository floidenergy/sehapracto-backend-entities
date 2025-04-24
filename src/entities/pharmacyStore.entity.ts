import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { PharmacyBusiness } from "./pharmacyBusiness.entity";

@Entity("pharmacy_store")
export class PharmacyStore extends BaseEntity {
  @Column()
  managerId: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  countryId: number;

  @Column()
  cityId: number;

  @Column({
    default: true,
    select: false,
  })
  active?: boolean;

  @ManyToOne(() => PharmacyBusiness, { onDelete: "SET NULL" })
  @JoinColumn({ name: "businessId" })
  business: PharmacyBusiness;

  @Column({
    nullable: true,
  })
  profileImgId?: number;

  @Column({
    nullable: true,
  })
  coverImgId: number;
}
