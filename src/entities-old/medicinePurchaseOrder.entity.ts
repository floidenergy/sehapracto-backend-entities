import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('medicine_purchase_orders')
export class MedicinePurchaseOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'int', nullable: true })
    pharmStoreId: number;

    @Column({ type: 'int', default: 0 })
    total: number;

    @Column({ type: 'int', default: 0 })
    status: number;

    @Column({ type: 'varchar', length: 255 })
    currency: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    prescription: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
