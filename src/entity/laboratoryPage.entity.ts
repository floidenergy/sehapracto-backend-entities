import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('laboratory_pages')
export class LaboratoryPage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    countryId: number;

    @Column('text')
    nameEn: string;

    @Column('text', { nullable: true })
    nameAr: string | null;

    @Column('text', { nullable: true })
    nameTr: string | null;

    @Column('text')
    descriptionEn: string;

    @Column('text', { nullable: true })
    descriptionAr: string | null;

    @Column('text', { nullable: true })
    descriptionTr: string | null;

    @Column()
    contact: string;

    @Column()
    img: string;

    @Column()
    link: string;

    @Column({ nullable: true })
    fbLink: string | null;

    @Column({ nullable: true })
    igLink: string | null;

    @Column({ nullable: true })
    twitterLink: string | null;

    @Column({ nullable: true })
    whatsappLink: string | null;

    @Column({ nullable: true })
    videoLink: string | null;

    @Column({ default: false })
    isCreditCard: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
