import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hospital_otp_pins')
export class HospitalOtpPin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hospitalId: number;

    @Column()
    pin: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
