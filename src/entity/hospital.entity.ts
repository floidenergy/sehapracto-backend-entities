import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('hospitals')
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country_id: number;

  @Column()
  city_id: number;

  @Column()
  province_id: number;

  @Column({ unique: true })
  special_code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  name_ar: string;

  @Column({ nullable: true })
  name_en: string;

  @Column({ nullable: true })
  name_tr: string;

  @Column()
  logo: string;

  @Column()
  adress: string;

  @Column({ nullable: true })
  adress_ar: string;

  @Column({ nullable: true })
  adress_en: string;

  @Column({ nullable: true })
  adress_tr: string;

  @Column()
  phone: string;

  @Column({ unique: true, nullable: true })
  phone2: string;

  @Column({ nullable: true, type: 'timestamp' })
  phone_verified_at: Date;

  @Column()
  email: string;

  @Column({ nullable: true })
  facebook_link: string;

  @Column({ nullable: true })
  instagram_link: string;

  @Column({ nullable: true })
  twitter_link: string;

  @Column({ nullable: true })
  linkedin_link: string;

  @Column({ nullable: true })
  youtube_link: string;

  @Column('text')
  bio: string;

  @Column({ type: 'text', nullable: true })
  bio_ar: string;

  @Column({ type: 'text', nullable: true })
  bio_en: string;

  @Column({ type: 'text', nullable: true })
  bio_tr: string;

  @Column({ default: 0 })
  balance: number;

  @Column({ default: 0 })
  rating: number;

  @Column({ default: 0 })
  number_ratings: number;

  @Column({ nullable: true })
  start_time: number;

  @Column({ nullable: true })
  end_time: number;

  @Column({ nullable: true })
  work_days: number;

  @Column({ nullable: true })
  longitude: string;

  @Column({ nullable: true })
  latitude: string;

  @Column({ default: 0 })
  sp_percentage: number;

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: false })
  is_available: boolean;

  @Column({ default: false })
  is_pin: boolean;

  @Column({ default: false })
  is_show_price: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
