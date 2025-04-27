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
import { BaseEntity } from "./abstracts/baseEntity.entity";
import { Country } from "./country.entity";
import { APP_TYPE } from "../types/userType.enum";
// import { genSalt, hash, compare } from "bcrypt";

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

  @Column()
  countryId: number;

  @Column({ nullable: true, default: "avatar.png" })
  profileImg: string;

  @Column({
    default: true,
  })
  active: boolean;

  // TODO: many to many
  // @Column({ type: "enum", enum: APP_TYPE, default: APP_TYPE.PATIENT })
  // types: APP_TYPE;
}
