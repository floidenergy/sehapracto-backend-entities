import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('booked_offers')
export class BookedOffer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    offerId: number;

    @Column('int')
    userId: number;

    @Column('int')
    price: number;

    @Column('varchar')
    currency: string;

    @Column('varchar')
    paymentType: string;

    @Column('boolean')
    isPaid: boolean;

    @Column('int', { default: 0 })
    status: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
