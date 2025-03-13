import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  name_ar: string;

  @Column({ unique: true })
  tel_code: string;

  @Column({ unique: true })
  customer_support: string;

  @Column({ unique: true })
  currency: string;

  @Column({ unique: true })
  currency_vs_dollar: string;

  @Column({ unique: true })
  timezone: string;

  @Column()
  flag_icon: string;

  @Column({ default: false })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
