import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Country } from "./country.entity";
import { Department } from "./department.entity";

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Department, (department) => department.id, { onDelete: 'CASCADE', })
  @Column({ type: "integer" })
  department_id: Department;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    default:
      "https://s3.us-east-2.amazonaws.com/sehapracto-images/user_profile_images/Pc7bLYpjW2c56Jnb8ovCq3ZrA3rO8vPEL0j4ZsXH.jpg",
  })
  profile_img: string;

  @Column()
  phone: string;

  @Column({ type: "integer" })
  country_id: Country;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: false })
  can_read_slide: boolean;

  @Column({ default: false })
  can_add_slide: boolean;

  @Column({ default: false })
  can_view_country: boolean;

  @Column({ default: false })
  can_add_countries: boolean;

  @Column({ default: false })
  can_view_doctor: boolean;

  @Column({ default: false })
  can_edit_doctor: boolean;

  @Column({ default: false })
  can_view_hcp: boolean;

  @Column({ default: false })
  can_edit_hcp: boolean;

  @Column({ default: false })
  can_view_hospital: boolean;

  @Column({ default: false })
  can_edit_hospital: boolean;

  @Column({ default: false })
  can_view_patient: boolean;

  @Column({ default: false })
  can_view_offer: boolean;

  @Column({ default: false })
  can_edit_offer: boolean;

  @Column({ default: false })
  can_view_notification: boolean;

  @Column({ default: false })
  can_edit_translation: boolean;

  @Column({ default: false })
  is_translator: boolean;

  @Column({ default: false })
  can_view_blog: boolean;

  @Column({ default: false })
  can_edit_blog: boolean;

  @Column({ default: false })
  can_view_lab_page: boolean;

  @Column({ default: false })
  can_view_lab_test: boolean;

  @Column({ default: false })
  can_view_lab_request: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
