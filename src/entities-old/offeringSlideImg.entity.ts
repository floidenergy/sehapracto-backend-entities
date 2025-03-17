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

@Entity("offering_slide_imgs")
export class OfferingSlideImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  offeringId: number;

  @ManyToOne(() => Offer, (offer) => offer.id)
  // @JoinColumn({ name: 'offering_id' })
  offering: Offer;

  @Column({ type: "varchar" })
  imgPath: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
