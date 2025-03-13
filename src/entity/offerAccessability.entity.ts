import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("offer_accessabilities")
export class OfferAccessibility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  name: string;

  @Column("varchar")
  nameEn: string;

  @Column("varchar")
  nameAr: string;

  @Column("varchar")
  nameTr: string;

  @Column("varchar")
  icon: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
