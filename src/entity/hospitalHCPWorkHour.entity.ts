import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_hcp_work_hours')
export class HospitalHcpWorkHour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hospitalHcpId: number;

    @Column()
    hospitalId: number;

    @Column()
    day: string;

    @Column()
    startTime: string;

    @Column()
    dayTime: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
