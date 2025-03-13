import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Offer } from "./offer.entity"; 

@Entity("offer_slide_imgs")
export class OfferSlideImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  offerId: number;

  @Column("varchar")
  imgPath: string;

  @ManyToOne(() => Offer, (offer) => offer.id)
  @JoinColumn({ name: "offer_id" })
  offer: Offer;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
