import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MedicineCategory } from './medicineCategory.entity';  // Adjust the import path as necessary

@Entity('medicine_subcategories')
export class MedicineSubcategory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MedicineCategory, (category) => category.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'medicine_category_id' })
    medicineCategory: MedicineCategory;

    @Column({ type: 'varchar', length: 255, unique: true })
    nameEn: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    nameAr: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    nameTr: string;

    @Column({ type: 'varchar', length: 255 })
    img: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
