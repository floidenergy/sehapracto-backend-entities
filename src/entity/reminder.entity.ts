import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reminders')
export class Reminder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    userNumber: string;

    @Column({ nullable: true })
    userFcmToken: string;

    @Column({ type: 'timestamp' })
    originalTime: Date;

    @Column({ type: 'timestamp' })
    reminderTime: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
