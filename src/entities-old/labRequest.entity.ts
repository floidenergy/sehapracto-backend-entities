import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lab_requests')
export class LabRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    countryId: number;

    @Column('int')
    userId: number;

    @Column('varchar')
    paymentType: string;

    @Column('int', { default: 0 })
    price: number;

    @Column('varchar')
    currency: string;

    @Column('boolean', { default: false })
    isPaid: boolean;

    @Column('int', { default: 0 }) // 0: pending, 1: accepted, 2: done, 3: canceled
    status: number;

    @Column('timestamp')
    dateTimeStamp: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
