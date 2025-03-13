import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hcp_work_locations')
export class HcpWorkLocation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hcpId: number;

    @Column({ nullable: true })
    hospitalId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    nameAr: string;

    @Column({ nullable: true })
    nameEn: string;

    @Column({ nullable: true })
    nameTr: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column({ nullable: true })
    addressAr: string;

    @Column({ nullable: true })
    addressEn: string;

    @Column({ nullable: true })
    addressTr: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
