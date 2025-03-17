import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_insurances')
export class HospitalInsurance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    insuranceCompanyId: number;

    @Column()
    hospitalId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
