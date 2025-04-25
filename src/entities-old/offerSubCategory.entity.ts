import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { OfferCategory } from "./offerCategory.entity"; // Assuming OfferCategory is defined in another file

@Entity("offer_sub_categories")
export class OfferSubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OfferCategory, (category) => category.id)
  // @JoinColumn({ name: "offer_category_id" })
  offerCategory: OfferCategory;

  @Column("varchar", { unique: true })
  nameEn: string;

  @Column("varchar", { unique: true })
  nameAr: string;

  @Column("varchar", { unique: true })
  nameTr: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
