import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';  // Assuming User is another entity
import { Hospital } from './hospital.entity';  // Assuming Hospital is another entity

@Entity('hospital_ratings')
export class HospitalRating {
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
    hospitalId: number;

    @ManyToOne(() => Hospital)
    @JoinColumn({ name: 'hospital_id' })
    hospital: Hospital;

    @Column({ type: 'text' })
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
