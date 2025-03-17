import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './client.entity';  // Assuming User is another entity
import { HCP } from './hcp.entity';  // Assuming Hcp is another entity

@Entity('hcp_ratings')
export class HcpRating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'int' })
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'int' })
    hcpId: number;

    @ManyToOne(() => HCP)
    @JoinColumn({ name: 'h_c_p_id' })
    hcp: HCP;

    @Column({ type: 'text' })
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
