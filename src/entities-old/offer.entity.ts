import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('offers')
export class Offer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    countryId: number;

    @Column({ nullable: true })
    medicalSpecialtyId: number;

    @Column({ nullable: true })
    hospitalId: number;

    @Column({ nullable: true })
    offerCategoryId: number;

    @Column()
    title: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    address: string;

    @Column()
    img: string;

    @Column('text')
    details: string;

    @Column('text')
    ptInstruction: string;

    @Column()
    price: number;

    @Column()
    priceBefore: number;

    @Column()
    discount: number;

    @Column({ default: 0 })
    views: number;

    @Column({ default: 0 })
    clicks: number;

    @Column({ default: 0 })
    ratingTotal: number;

    @Column({ default: 0 })
    ratingNumber: number;

    @Column({ nullable: true })
    facebookLink: string;

    @Column({ nullable: true })
    instagramLink: string;

    @Column({ nullable: true })
    youtubeLink: string;

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    email: string;

    @Column('timestamp')
    endDate: Date;

    @Column({ default: false })
    isOpen: boolean;

    @Column({ default: false })
    isAppear: boolean;

    @Column({ default: false })
    isShowPrice: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
