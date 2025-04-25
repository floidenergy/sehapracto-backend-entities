import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  unique_id: string;

  @Column({ unique: true })
  refferal_code: string;

  @Column({ unique: true })
  refferar_code: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({ unique: true })
  phone: string;

  @Column({ type: 'timestamp', nullable: true })
  phone_verified_at: Date;

  @Column({ default: 0 })
  balance: number;

  @Column()
  password: string;

  @Column({ nullable: true, default: 'avatar.png' })
  profile_img: string;

  @Column({ nullable: true })
  blood_group: string;

  @Column('text', { nullable: true })
  medical_history: string;

  @Column({ default: false })
  is_diabetic: boolean;

  @Column({ default: false })
  is_hypertensive: boolean;

  @Column({ default: false })
  is_smoker: boolean;

  @Column({ default: false })
  is_alcoholic: boolean;

  @Column({ nullable: true })
  id_number: string;

  @Column({ default: 0 })
  height: number;

  @Column({ default: 0 })
  weight: number;

  @Column()
  country_id: string;

  @Column({ nullable: true })
  city_id: string;

  @Column({ nullable: true })
  insurance_company_id: number;

  @Column('text', { nullable: true })
  address: string;

  @Column({ nullable: true })
  provider: string;

  @Column({ nullable: true })
  provider_id: string;

  @Column({ default: 'free' })
  membership_type: string;

  @Column({ nullable: true })
  membership_id: string;

  @Column({ nullable: true })
  membership_number: string;

  @Column({ default: 0 })
  membership_points: number;

  @Column({ type: 'timestamp', nullable: true })
  membership_start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  membership_end_date: Date;

  @Column({ default: 0 })
  offers_saved_amount: number;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: true })
  can_start_trial: boolean;

  @Column({ default: false })
  is_trial: boolean;

  @Column({ nullable: true })
  fcm_token: string;

  @Column({ default: false, nullable: true })
  is_to_delete: boolean;

  @Column({ type: 'timestamp', nullable: true })
  delete_date: Date;

  @Column({ default: false })
  is_deleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
