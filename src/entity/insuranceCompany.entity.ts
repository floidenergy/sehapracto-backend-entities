import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from './country.entity';

@Entity('insurance_companies')
export class InsuranceCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, (country) => country.id, { onDelete: 'CASCADE' })
  country: Country;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name_ar: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name_tr: string;

  @Column({ type: 'varchar', length: 255 })
  logo: string;

  @Column({ type: 'text', nullable: true })
  about_en: string;

  @Column({ type: 'text', nullable: true })
  about_ar: string;

  @Column({ type: 'text', nullable: true })
  about_tr: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  video_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
