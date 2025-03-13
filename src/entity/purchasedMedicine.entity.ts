import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('purchased_medicines')
export class PurchasedMedicine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    medicinePurchaseOrderId: number;

    @Column({ type: 'int' })
    medicineId: number;

    @Column({ type: 'varchar', length: 255 })
    nameEn: string;

    @Column({ type: 'varchar', length: 255 })
    nameAr: string;

    @Column({ type: 'varchar', length: 255 })
    nameTr: string;

    @Column({ type: 'varchar', length: 255 })
    img: string;

    @Column({ type: 'int' })
    count: number;

    @Column({ type: 'int' })
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
