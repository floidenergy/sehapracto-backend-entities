import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Hospital } from "./hospital.entity";

@Entity("hospital_admins")
export class HospitalAdmin {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hospital, { nullable: true, onDelete: "SET NULL" })
  hospital: Hospital;

  @Column()
  countryId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: "timestamp", nullable: true })
  emailVerifiedAt: Date | null;

  @Column({ unique: true })
  phone: string;

  @Column({ type: "timestamp", nullable: true })
  phoneVerifiedAt: Date | null;

  @Column()
  password: string;

  @Column({
    default:
      "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg",
  })
  profileImg: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isOwner: boolean;

  @Column({ nullable: true })
  rememberToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
