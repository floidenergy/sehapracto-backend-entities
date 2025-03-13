import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Offer } from "./offer.entity"; // Assuming Offering is another entity
import { Membership } from "./membership.entity"; // Assuming Membership is another entity
import { DiscountType } from "./discountType.entity"; // Assuming DiscountType is another entity

@Entity("offering_coupons")
export class OfferingCoupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  offeringId: number;

  @ManyToOne(() => Offer, (offer) => offer.id)
  // @JoinColumn({ name: 'offering_id' })
  offering: Offer;

  @Column({ type: "int", nullable: true })
  membershipId: number;

  @ManyToOne(() => Membership, (membership) => membership.id, {
    nullable: true,
  })
  // @JoinColumn({ name: 'membership_id' })
  membership: Membership;

  @Column({ type: "int" })
  discountTypeId: number;

  @ManyToOne(() => DiscountType, (discountType) => discountType.id)
  //   @JoinColumn({ name: "discount_type_id" })
  discountType: DiscountType;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @Column({ type: "text" })
  howToUse: string;

  @Column({ type: "int", default: 0 })
  price: number;

  @Column({ type: "int", default: 1 })
  numberUses: number;

  @Column({ type: "int" })
  useFrequency: number;

  @Column({ type: "int", default: 0 })
  savedAmount: number;

  @Column({ type: "int", default: 0 })
  discountPercentage: number;

  @Column({ type: "boolean", default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
