import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Country } from '../entities/country.entity';
import { MedicineSubcategory } from './medicineSubcategory.entity';

@Entity('medicines')
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Country, { nullable: false, onDelete: 'CASCADE' })
  country: Country;

  @ManyToOne(() => MedicineSubcategory, { nullable: false, onDelete: 'CASCADE' })
  medicineSubcategory: MedicineSubcategory;

  @Column({ unique: true })
  nameEn: string;

  @Column({ unique: true })
  nameAr: string;

  @Column({ unique: true })
  nameTr: string;

  @Column()
  scientificName: string;

  @Column()
  routeAdmin: string;

  @Column()
  img: string;

  @Column('text')
  descriptionEn: string;

  @Column('text')
  descriptionAr: string;

  @Column('text')
  descriptionTr: string;

  @Column({ type: 'int', default: 0 })
  price: number;

  @Column({ type: 'boolean', default: false })
  isOtc: boolean;

  @Column({ type: 'boolean', default: false })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
