import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user_points')
export class UserPoints {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'int' })
    points: number;

    @Column({ type: 'varchar' })
    reason: string;

    @Column({ type: 'boolean' })
    isAdd: boolean;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
