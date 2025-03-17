import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("offerings")
export class Offering {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  countryId: number;

  @Column({ type: "int", nullable: true })
  cityId: number;

  @Column({ type: "int", nullable: true })
  hospitalId: number;

  @Column({ type: "int", nullable: true })
  serviceProviderId: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar", nullable: true })
  titleEn: string;

  @Column({ type: "varchar", nullable: true })
  titleAr: string;

  @Column({ type: "varchar", nullable: true })
  titleTr: string;

  @Column({ type: "text" })
  details: string;

  @Column({ type: "text", nullable: true })
  detailsEn: string;

  @Column({ type: "text", nullable: true })
  detailsAr: string;

  @Column({ type: "text", nullable: true })
  detailsTr: string;

  @Column({ type: "text" })
  instructions: string;

  @Column({ type: "text", nullable: true })
  instructionsEn: string;

  @Column({ type: "text", nullable: true })
  instructionsAr: string;

  @Column({ type: "text", nullable: true })
  instructionsTr: string;

  @Column({
    type: "varchar",
    default: "https://www.sehapracto.com/pics/logo.png",
  })
  coverImg: string;

  @Column({ type: "varchar" })
  whatsapp: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar", nullable: true })
  website: string;

  @Column({ type: "varchar", nullable: true })
  facebookLink: string;

  @Column({ type: "varchar", nullable: true })
  instagramLink: string;

  @Column({ type: "varchar", nullable: true })
  twitterLink: string;

  @Column({ type: "varchar", nullable: true })
  youtubeLink: string;

  @Column({ type: "boolean", default: false })
  isPremium: boolean;

  @Column({ type: "boolean", default: false })
  isApproved: boolean;

  @Column({ type: "double", nullable: true })
  longitude: number;

  @Column({ type: "double", nullable: true })
  latitude: number;

  @Column({ type: "timestamp", nullable: true })
  startDate: Date;

  @Column({ type: "timestamp", nullable: true })
  endDate: Date;

  @Column({ type: "int", default: 0 })
  rating: number;

  @Column({ type: "int", default: 0 })
  ratingNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
