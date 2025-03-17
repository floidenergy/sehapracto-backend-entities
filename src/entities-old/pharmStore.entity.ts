import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pharm_stores')
export class PharmStore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryId: number;

    @Column()
    pharmacyId: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: 'timestamp', nullable: true })
    emailVerifiedAt: Date | null;

    @Column({ unique: true })
    phone: string;

    @Column({ type: 'timestamp', nullable: true })
    phoneVerifiedAt: Date | null;

    @Column()
    password: string;

    @Column({ default: false })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
