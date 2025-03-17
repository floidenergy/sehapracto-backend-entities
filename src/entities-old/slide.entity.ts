import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from '../entities/country.entity'; // Assuming Country entity exists

@Entity('slides')
export class Slide {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'CASCADE' })
  country: Country;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  name_ar: string;

  @Column({ type: 'text', nullable: true })
  name_en: string;

  @Column({ type: 'text', nullable: true })
  name_tr: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  description_ar: string;

  @Column({ type: 'text', nullable: true })
  description_en: string;

  @Column({ type: 'text', nullable: true })
  description_tr: string;

  @Column({ type: 'varchar', length: 255 })
  contact: string;

  @Column({ type: 'varchar', length: 255 })
  img: string;

  @Column({ type: 'varchar', length: 255 })
  link: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fb_link: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ig_link: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  twitter_link: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  whatsapp_link: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  video_link: string;

  @Column({ type: 'varchar', length: 255 })
  client_name: string;

  @Column({ type: 'varchar', length: 255 })
  client_adress: string;

  @Column({ type: 'varchar', length: 255 })
  duration: string;

  @Column({ type: 'int', default: 0 })
  clicks: number;

  @Column({ type: 'int', default: 0 })
  views: number;

  @Column({ type: 'boolean', default: false })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
