import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('offer_categories')
export class OfferCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true, nullable: true })
    nameAr: string;

    @Column({ unique: true, nullable: true })
    nameEn: string;

    @Column({ unique: true, nullable: true })
    nameTr: string;

    @Column()
    img: string;

    @Column({ default: false })
    isAppear: boolean;

    @Column({ default: false })
    isLargeImg: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
