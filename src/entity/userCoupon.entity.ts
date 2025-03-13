import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';  // Assuming User is another entity
import { OfferingCoupon } from './offeringCoupon.entity';  // Assuming OfferingCoupon is another entity
import { Offer } from './offer.entity';  // Assuming Offering is another entity
import { ServiceProvider } from './serviceProvider.entity';  // Assuming ServiceProvider is another entity

@Entity('user_coupons')
export class UserCoupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'int' })
    offeringCouponId: number;

    @ManyToOne(() => OfferingCoupon)
    @JoinColumn({ name: 'offering_coupon_id' })
    offeringCoupon: OfferingCoupon;

    @Column({ type: 'int' })
    offeringId: number;

    @ManyToOne(() => Offer, offer => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    offering: Offer;

    @Column({ type: 'int' })
    serviceProviderId: number;

    @ManyToOne(() => ServiceProvider)
    @JoinColumn({ name: 'service_provider_id' })
    serviceProvider: ServiceProvider;

    @Column({ type: 'int' })
    maxAllowedUses: number;

    @Column({ type: 'int', default: 0 })
    numberUsed: number;

    @Column({ type: 'int', default: 0 })
    status: number;

    @Column({ type: 'int' })
    frequency: number;

    @Column({ type: 'varchar', length: 255 })
    uniqueCode: string;

    @Column({ type: 'timestamp', nullable: true })
    lastUsed: Date | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
