import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('reward_points')
export class RewardPoints {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', default: 0 })
    bookAppointment: number;

    @Column({ type: 'int', default: 0 })
    bookOnlineAppointment: number;

    @Column({ type: 'int', default: 0 })
    offerReview: number;

    @Column({ type: 'int', default: 0 })
    bookOffer: number;

    @Column({ type: 'int', default: 0 })
    updateProfile: number;

    @Column({ type: 'int', default: 0 })
    bookLabTest: number;

    @Column({ type: 'int', default: 0 })
    blogComment: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
