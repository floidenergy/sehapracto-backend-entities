import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  JoinTable,
} from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { Country } from "./country.entity";
import { APP_TYPE } from "../types/userType.enum";
import { genSalt, hash, compare } from "bcrypt";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column({ unique: true })
  userName: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ type: "timestamp", nullable: true })
  birthdate: Date;

  @Column({ unique: true })
  email: string;

  @Column({ type: "timestamp", nullable: true })
  emailVerifiedAt: Date;

  @Column({ unique: true })
  phone: string;

  @Column({ type: "timestamp", nullable: true })
  phoneVerifiedAt: Date;

  @ManyToOne(() => Country, { nullable: false, onDelete: "NO ACTION" })
  @JoinTable({ name: "country_id" })
  country: Country;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: true, default: "avatar.png" })
  profileImg: string;

  // TODO: many to many
  // @Column({ type: "enum", enum: APP_TYPE, default: APP_TYPE.PATIENT })
  // types: APP_TYPE;

  // Hash password before saving
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!this.password) return;

    const salt = await genSalt(10);
    this.password = await hash(this.password as string, salt);
  }

  // Validate password
  async validatePassword(plainPassword: string): Promise<boolean> {
    return compare(plainPassword, this.password);
  }
}
