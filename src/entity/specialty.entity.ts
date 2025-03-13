import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('specialties')
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar', unique: true })
  name_ar: string;

  @Column({ type: 'varchar' })
  img: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  meta_desc_en: string;

  @Column({ type: 'text', nullable: true })
  meta_desc_ar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
