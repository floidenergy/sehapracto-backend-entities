import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_doctor_work_hours')
export class HospitalDoctorWorkHour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hospitalDoctorId: number;

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
