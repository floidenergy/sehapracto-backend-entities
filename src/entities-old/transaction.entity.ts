import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    type: string;

    @Column('varchar')
    typeId: string;

    @Column('varchar')
    userType: string;

    @Column('varchar')
    userId: string;

    @Column('varchar', { nullable: true })
    orderId: string;

    @Column('varchar')
    transactionType: string;

    @Column('int')
    value: number;

    @Column('varchar')
    currency: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
