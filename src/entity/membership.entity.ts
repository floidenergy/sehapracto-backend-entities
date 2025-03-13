import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('memberships')
export class Membership {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    countryId: number;

    @Column({ type: 'varchar', length: 255 })
    nameEn: string;

    @Column({ type: 'varchar', length: 255 })
    nameAr: string;

    @Column({ type: 'varchar', length: 255 })
    nameTr: string;

    @Column({ type: 'int' })
    price: number;

    @Column({ type: 'int' })
    priceDiscount: number;

    @Column({ type: 'text' })
    servicesEn: string;

    @Column({ type: 'text' })
    servicesAr: string;

    @Column({ type: 'text' })
    servicesTr: string;

    @Column({ type: 'text' })
    termsEn: string;

    @Column({ type: 'text' })
    termsAr: string;

    @Column({ type: 'text' })
    termsTr: string;

    @Column({ type: 'int', default: 365 })
    duration: number;

    @Column({ type: 'boolean', default: false })
    isShow: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
