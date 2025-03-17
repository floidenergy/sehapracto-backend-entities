import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_hcp_appointments')
export class HospitalHcpAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    hospitalId: number;

    @Column()
    hospitalHcpDepartmentId: number;

    @Column({ nullable: true })
    hospitalHcpId: number;

    @Column({ nullable: true })
    time: string;

    @Column({ nullable: true })
    date: string;

    @Column({ default: 0 })
    status: number;

    @Column({ default: false })
    isRated: boolean;

    @Column({ default: 0 })
    rating: number;

    @Column({ type: 'text', nullable: true })
    ratingComment: string;

    @Column({ default: 0 })
    price: number;

    @Column({ default: 'Not specified' })
    bookedBy: string;

    @Column({ type: 'timestamp', nullable: true })
    dateTimeStamp: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
