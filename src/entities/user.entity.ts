import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Country } from "./country.entity";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ type: "timestamp", nullable: true })
  birthdate: Date;

  @Column({ unique: true })
  email: string;

  @Column({ type: "timestamp", nullable: true })
  email_verified_at: string;

  @Column({ unique: true })
  phone: string;

  @Column({ type: "timestamp", nullable: true })
  phone_verified_at: string;

  @ManyToOne(() => Country, { nullable: false, onDelete: "SET NULL" })
  @JoinColumn({ name: "country_id" })
  country: Country;

  @Column()
  password: string;

  @Column({ nullable: true, default: "avatar.png" })
  profile_img: string;
}
