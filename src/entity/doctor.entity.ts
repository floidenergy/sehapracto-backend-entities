import { 
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn 
  } from 'typeorm';
  import { Country } from './country.entity';
  import { City } from './city.entity';
  
  @Entity('doctors')
  export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    unique_id: string;
  
    @Column({ default: "Dr." })
    title: string;
  
    @Column()
    first_name: string;
  
    @Column({ nullable: true })
    first_name_ar: string;
  
    @Column({ nullable: true })
    first_name_en: string;
  
    @Column({ nullable: true })
    first_name_tr: string;
  
    @Column()
    last_name: string;
  
    @Column({ nullable: true })
    last_name_ar: string;
  
    @Column({ nullable: true })
    last_name_en: string;
  
    @Column({ nullable: true })
    last_name_tr: string;
  
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
  
    @Column({ nullable: true })
    examination_fee: string;
  
    @Column({ nullable: true })
    home_examination_fee: string;
  
    @Column({ nullable: true })
    online_examination_fee: string;
  
    @Column({ nullable: true })
    license_no: string;
  
    @Column({ nullable: true })
    waiting_time: string;
  
    @Column({ default: 0 })
    balance: number;
  
    @Column()
    password: string;
  
    @Column({ nullable: true, default: 'https://sehapracto-images.s3.us-east-2.amazonaws.com/newavatar.png' })
    profile_img: string;
  
    @Column({ nullable: true })
    address: string;
  
    @Column({ nullable: true })
    address_ar: string;
  
    @Column({ nullable: true })
    address_en: string;
  
    @Column({ nullable: true })
    address_tr: string;
  
    @Column({ type: 'double precision', nullable: true })
    longitude: number;
  
    @Column({ type: 'double precision', nullable: true })
    latitude: number;
  
    @Column({ nullable: true })
    meta_title: string;
  
    @Column({ type: 'text', nullable: true })
    meta_desc: string;
  
    @Column({ type: 'text', nullable: true })
    bio: string;
  
    @Column({ type: 'text', nullable: true })
    bio_ar: string;
  
    @Column({ type: 'text', nullable: true })
    bio_en: string;
  
    @Column({ type: 'text', nullable: true })
    bio_tr: string;
  
    @Column({ type: 'text', nullable: true })
    pt_instruction: string;
  
    @Column({ nullable: true })
    medicalSpecialty_id: number;
  
    @Column({ nullable: true })
    medical_subspecialty_id: number;
  
    @ManyToOne(() => Country, (country) => country.id, { onDelete: 'CASCADE' })
    country: Country;
  
    @ManyToOne(() => City, (city) => city.id, { nullable: true, onDelete: 'SET NULL' })
    city: City;
  
    @Column({ nullable: true })
    provider: string;
  
    @Column({ nullable: true })
    provider_id: string;
  
    @Column({ default: 0 })
    rating: number;
  
    @Column({ default: 0 })
    number_ratings: number;
  
    @Column({ default: false })
    is_active: boolean;
  
    @Column({ default: false })
    is_available: boolean;
  
    @Column({ default: false })
    is_available_online: boolean;
  
    @Column({ default: false })
    is_en: boolean;
  
    @Column({ default: false })
    is_ar: boolean;
  
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
  