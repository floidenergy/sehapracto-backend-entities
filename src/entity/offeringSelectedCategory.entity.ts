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
import { OfferCategory } from "./offerCategory.entity"; // Assuming OfferCategory is another entity

@Entity("offering_selected_categories")
export class OfferingSelectedCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  offeringId: number;

  @ManyToOne(() => Offer, (offer) => offer.id)
  // @JoinColumn({ name: 'offering_id' })
  offering: Offer;

  @Column({ type: "int" })
  offerCategoryId: number;

  @ManyToOne(() => OfferCategory, (category) => category.id)
  //   @JoinColumn({ name: "offer_category_id" })
  offerCategory: OfferCategory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
