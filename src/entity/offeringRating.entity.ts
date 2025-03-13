import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';  // Assuming User is another entity
import { Offer } from './offer.entity';  // Assuming Offering is another entity

@Entity('offering_ratings')
export class OfferingRating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'int' })
    userId: number;

    @ManyToOne(() => User, (user) => user.id)
    // @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'int' })
    offeringId: number;

    @ManyToOne(() => Offer, (offer) => offer.id)
    // @JoinColumn({ name: 'offering_id' })
    offering: Offer;

    @Column({ type: 'text' })
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
