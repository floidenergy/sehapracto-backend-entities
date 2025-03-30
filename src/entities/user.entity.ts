import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Country } from "./country.entity";
import { APP_TYPE } from "../types/userType.enum";
import { genSalt, hash, compare } from "bcrypt";

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

  @ManyToOne(() => Country, { nullable: false, onDelete: "NO ACTION" })
  @JoinColumn({ name: "country_id" })
  country: Country;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: true, default: "avatar.png" })
  profile_img: string;

  // TODO: many to many
  @Column({ type: "enum", enum: APP_TYPE, default: APP_TYPE.CLIENT })
  types: APP_TYPE;

  // Hash password before saving
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!this.password) return;

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }

  // Validate password
  async validatePassword(plainPassword: string): Promise<boolean> {
    return compare(plainPassword, this.password);
  }
}
