import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('discount_types')
export class DiscountType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true })
    name: string;

    @Column({ type: 'varchar', unique: true })
    nameEn: string;

    @Column({ type: 'varchar', unique: true })
    nameAr: string;

    @Column({ type: 'varchar', unique: true })
    nameTr: string;

    @Column({ type: 'varchar' })
    color: string;

    @Column({ type: 'varchar' })
    img: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
